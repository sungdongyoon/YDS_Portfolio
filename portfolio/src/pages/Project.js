import React, {useRef, useEffect, useState} from 'react';
import { getProjectImg } from './util';
import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import {titleObserver, subTitleObserver, contentObserver, leftCircleObserver, rightCircleObserver, projectSlide} from '../animation/animation';
import { motion } from 'framer-motion';
import ProjectModal from '../Components/ProjectModal';
import largeCircle from '../img/largeCircle.png';
import responsive from '../style/responsive';
import axios from 'axios';
import logo from '../img/logo.png';


const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  .pattern {
    width: 500px;
    height: 290px;
    position: absolute;
    left: 0px;
    top: 0px;
    background-image: url('https://kijepark.com/assets/img/root/plus-light-pattern.png');
    background-size: cover;
    background-repeat: no-repeat;
  }
  @media screen and ${responsive.tablet} {
    padding-right: 0;
  }
`;

const ProjectMain = styled.main`
  width: 80%;
  height: 1000px;
  display: flex;
  justify-content: space-between;
  @media screen and ${responsive.tablet} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media screen and ${responsive.mobile} {
    height: 650px;
  }
`;

const ProjectTitle = styled.section`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 30px;
  h1 {
    font-size: var(--page-title);
    font-weight: bold;
    color: var(--sky-blue);
    transition: 0.5s;
  }
  .slide_arrow {
    font-size: 3rem;
    color: var(--gray);
    transition: 1s;
    .slide_left {
      margin-right: 20px;
    }
    .slide_right {
      margin-left: 20px;
    }
    .slide_right,
    .slide_left {
      cursor: pointer;
    }
    span {
      width: 150px;
      display: inline-block;
      font-size: 3rem;
      text-align: center;
    }
  }
  @media screen and ${responsive.laptop} {
    h1 {
      font-size: 10rem;
    }
    .slide_arrow {
      .slide_right,
      .slide_left {
        font-size: 2.6rem;
      }
      span {
        font-size: 2.6rem;
      }
    }
  }
  @media screen and ${responsive.tablet} {
    width: 80%;
    justify-content: flex-start;
    align-items: flex-start;
    h1 {
      font-size: 8rem;
    }
    .slide_arrow {
      .slide_right,
      .slide_left {
        font-size: 2rem;
      }
      span {
        font-size: 2rem;
      }
    }
  }
  @media screen and ${responsive.mobile} {
    h1 {
      font-size: 6rem;
    }
    .slide_arrow {
      display: none;
    }
  }
`;

const ProjectContent = styled.section`
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 200px;
  position: relative;
  transition: 1s;
  .notice {
    color: var(--red);
    font-size: 1.8rem;
    margin-bottom: 20px;
  }
  @media screen and ${responsive.laptop} {
    width: 50%;
    margin-top: 200px;
    margin-right: 150px;
  }
  @media screen and ${responsive.tablet} {
    width: 80%;
    margin-top: 50px;
    margin-right: 0;
  }
  @media screen and ${responsive.mobile} {
    height: 400px;
    margin-top: 0px;
    padding: 0;
    padding-top: 40px;
    margin-bottom: 50px;
    .notice {
      font-size: 1.3rem;
    }
  }
  @media screen and ${responsive.mobile} {
    .notice {
      font-size: 1rem;
    }
  }
`;

const SliderBtn = styled.div`
  display: none;
  position: absolute;
  bottom: -100px;
  left: 0;
  right: 0;
  color: var(--gray);
  .leftBtn,
  .rightBtn {
    font-size: 2rem;
    font-weight: bold;
    cursor: pointer;
  }
  .count {
    font-size: 2rem;
  }
  @media screen and ${responsive.mobile} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }
`;

const ProjectWrap = styled.div`
  width: 70%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, auto);
  @media screen and ${responsive.laptop} {
    width: 500px;
  }
  @media screen and ${responsive.tablet} {
    width: 100%;
    padding: 0;
    padding-top: 20px;
  }
  @media screen and ${responsive.mobile} {
    display: flex;
    gap: 30px;
    padding-top: 0;
    transition: 0.5s;
  }
  @media screen and ${responsive.iphone12Pro} {
  }
`;


const ProjectItem = styled.div`
  width: 80%;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  animation: ${projectSlide} ease-in-out 0.7s;
  @media screen and ${responsive.laptop} {
    height: 300px;
    min-width: 250px;
  }
  @media screen and ${responsive.tablet} {
    width: 90%;
    height: 300px;
  }
  @media screen and ${responsive.mobile} {
    height: 100%;
    min-width: 100%;
    padding: 0;
  }
`;

const ProjectImg = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 10px var(--light-gray), 10px 10px 8px var(--light-gray);
  background-color: var(--white);
  border-radius: 20px;
  transition: 0.3s;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  img {
    width: 80%;
    position: absolute;
  }
  .projectDetail {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.7);
    opacity: 0;
    transition: 0.3s;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    span {
      padding: 20px;
      color: var(--white);
      font-size: 2rem;
    }
  }
  &:hover .projectDetail {
    opacity: 1;
  }
`;

const ProjectName = styled.div`
  font-size: 2rem;
  margin-top: 20px;
  text-align: center;
  @media screen and ${responsive.laptop} {
    font-size: 1.8rem;
  }
  @media screen and ${responsive.tablet} {
    font-size: 1.6rem;
  }
  @media screen and ${responsive.mobile} {
    font-size: 1.4rem;
  }
  @media screen and ${responsive.mobile} {
    font-size: 1.6rem;
  }
`;

const LeftCircle = styled(motion.div)`
  position: absolute;
  bottom: -200px;
  left: -200px;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  z-index: -10;
  @media screen and ${responsive.laptop} {
    width: 500px;
    height: 500px;
  }
  @media screen and ${responsive.mobile} {
    width: 400px;
    height: 400px;
  }
  img {
    width: 100%;
    heigiht: 100%;
    transition: 1s;
  }
`;


const RightCircle = styled.div`
  position: absolute;
  width: 700px;
  height: 700px;
  right: -200px;
  z-index: -1;
  @media screen and ${responsive.laptop} {
    width: 500px;
    height: 500px;
  }
  @media screen and ${responsive.mobile} {
    width: 400px;
    height: 400px;
  }
  img {
    width: 100%;
    height: 100%;
    transition: 1s;
  }
`;

const Project = ({pjNum, setPjNum, mobilePjNum, setMobilePjNum}) => {
  /** 윈도우 너비 : window.innerWidth */
  const pageWidth = window.innerWidth;

  const [itemId, setItemId] = useState(1);
  const [slidePx, setSlidePx] = useState(0);

  const itemRef = useRef();
  const itemWidth = itemRef.current?.offsetWidth;

  const titleRef = useRef();
  const subTitleRef = useRef();
  const contentRef = useRef();
  const leftCircleRef = useRef();
  const rightCircleRef = useRef();
  
  useEffect(() => {
    titleObserver.observe(titleRef.current);
    subTitleObserver.observe(subTitleRef.current);
    contentObserver.observe(contentRef.current);
    leftCircleObserver.observe(leftCircleRef.current);
    rightCircleObserver.observe(rightCircleRef.current);
  }, []);

  const prevCount = () => {
    itemId > 1 && setItemId(itemId - 1);
    pageWidth <= 768 && (slidePx < 0 && setSlidePx(slidePx + (itemWidth + 30)));
  };
  const nextCount = () => {
    itemId < 8 && setItemId(itemId + 1);
    pageWidth <= 768 && (slidePx > -(itemWidth * 7) && setSlidePx(slidePx - (itemWidth + 30)));
  };

  // mobile page project
  pageWidth < 768 ? setMobilePjNum(1) : setMobilePjNum(0);

  // project modal
  const [isModal, setIsModal] = useState(false);
  const [modalNum, setModalNum] = useState(0);
  const showModal = (modalNum) => {
    setIsModal(!isModal);
    setModalNum(modalNum);
  }
  const closeModal = () => {
    setIsModal(false);
  }

  // Project Data
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      axios.get('/projectDb.json')
        .then((res) => {
          setData(res.data.project);
        })
        .catch((error) => {
          console.log(error);
        })
    }
    getData();
  }, [])
  
  return (
    <Container isModal={isModal}>
      <div className='pattern'></div>
      <ProjectMain>
        <ProjectTitle>
          <h1 ref={titleRef}>Project</h1>
          <div className='slide_arrow' ref={subTitleRef}>
            <FontAwesomeIcon onClick={() => setPjNum(1)} className='slide_left' icon={faArrowLeft}/>
            <span>{pjNum} / 2</span>
            <FontAwesomeIcon onClick={() => setPjNum(2)} className='slide_right' icon={faArrowRight}/>
          </div>
        </ProjectTitle>
        <ProjectContent ref={contentRef}>
          <span className='notice'>* 제목 클릭 시 해당 페이지로 이동합니다.</span>
          <ProjectWrap style={pageWidth < 768 ? {transform: `translateX(${slidePx}px)`} : {transform: `translateX(0px)`}}>
            {(pjNum === 1 || mobilePjNum === 1) &&
            <>
              {data.filter((project) => project.id < 5).map((it) => (
                <ProjectItem itemId={it.id} ref={itemRef}>
                  <ProjectImg onClick={() => showModal(it.id)}>
                    <img src={getProjectImg(it.img)} alt={it.name}/>
                    <div className='projectDetail'>
                      <span>자세히 보기</span>
                    </div>
                  </ProjectImg>
                  <ProjectName>{it.name}</ProjectName>
                </ProjectItem>
              ))}
            </>
            }
            {(pjNum === 2 || mobilePjNum === 1) &&
            <>
              {data.filter((project) => project.id > 4).map((it) => (
                <ProjectItem itemId={it.id} ref={itemRef}>
                  <ProjectImg onClick={() => showModal(it.id)}>
                    <img src={getProjectImg(it.img)} alt={it.name}/>
                    <div className='projectDetail'>
                      <span>자세히 보기</span>
                    </div>
                  </ProjectImg>
                  <ProjectName>{it.name}</ProjectName>
                </ProjectItem>
              ))}
            </>
            }
          </ProjectWrap>
          <SliderBtn>
            <FontAwesomeIcon icon={faAnglesLeft} className='leftBtn' onClick={prevCount}/>
            <div className='count'>{itemId} / 8</div>
            <FontAwesomeIcon icon={faAnglesRight} className='rightBtn' onClick={nextCount}/>
          </SliderBtn>
        </ProjectContent>
        {isModal && <ProjectModal modalNum={modalNum} closeModal={closeModal}/>}
      </ProjectMain>
      <LeftCircle layoutId='leftCircle'>
        <img src={largeCircle} ref={leftCircleRef}/>
      </LeftCircle>
      <RightCircle>
        <img src={largeCircle} ref={rightCircleRef}/>
      </RightCircle>
    </Container>
  )
}

export default Project;
