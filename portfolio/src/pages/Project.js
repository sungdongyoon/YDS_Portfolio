import React, {useRef, useEffect, useState} from 'react';
import { getProjectImg } from '../Components/util';
import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { projectSlide } from '../animation/animation';
import { Link, useNavigate } from 'react-router-dom';
import { Image } from '../Components/util';
import responsive from '../style/responsive';
import axios from 'axios';


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
    background-image: url(${Image(2)});
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const ProjectMain = styled.main`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  @media screen and ${responsive.iphone12Pro} {
    height: 80%;
    top: 16%;
  }
`;

const ProjectTitle = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  h1 {
    font-size: 4rem;
    font-weight: bold;
    color: var(--sky-blue);
    transition: 0.5s;
    mix-blend-mode: difference;
  }
  .slide_arrow {
    font-size: 2rem;
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
      font-size: 2rem;
      text-align: center;
    }
  }
  @media screen and ${responsive.laptop} {
    h1 {
      font-size: 3.5rem;
    }
    .slide_arrow {
      .slide_right,
      .slide_left {
        font-size: 1.6rem;
      }
      span {
        font-size: 1.6rem;
      }
    }
  }
  @media screen and ${responsive.tablet} {
    h1 {
      font-size: 2.5rem;
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
      font-size: 2.5rem;
    }
    .slide_arrow {
      display: none;
    }
  }
  @media screen and ${responsive.iphone12Pro} {
    h1 {
      font-size: 3rem;
    }
  }
`;

const ProjectContent = styled.section`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  transition: 1s;
  .notice {
    color: var(--red);
    font-size: 1.3rem;
    margin-bottom: 20px;
  }
  @media screen and ${responsive.laptop} {
    width: 70%;
    height: 80%;
  }
  @media screen and ${responsive.tablet} {
    width: 90%;
  }
  @media screen and ${responsive.mobile} {
    width: 60%;
    height: 70%;
    margin-bottom: 50px;
    .notice {
      font-size: 1rem;
    }
  }
  @media screen and ${responsive.iphone12Pro} {
    width: 70%;
  }
`;

const SliderBtn = styled.div`
  display: none;
  position: absolute;
  bottom: -50px;
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
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media screen and ${responsive.tablet} {
    padding-top: 20px;
  }
  @media screen and ${responsive.mobile} {
    display: flex;
    gap: 30px;
    padding-top: 0;
    transition: 0.5s;
  }
`;


const ProjectItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 30px;
  animation: ${projectSlide} ease-in-out 0.7s;
  @media screen and ${responsive.tablet} {
    width: 100%;
  }
  @media screen and ${responsive.mobile} {
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
      font-size: 1.6rem;
    }
  }
  &:hover .projectDetail {
    opacity: 1;
  }
`;

const ProjectName = styled.div`
  text-align: center;
  margin-top: 20px;
  .link {
    font-size: 1.4rem;
  }
  @media screen and ${responsive.laptop} {
    .link {
      font-size: 1.3rem;
    }
  }
  @media screen and ${responsive.tablet} {
    .link {
      font-size: 1.2rem;
    }
  }
  @media screen and ${responsive.mobile} {
    .link {
      font-size: 1.1rem;
    }
  }
  @media screen and ${responsive.iphone12Pro} {
    .link {
      font-size: 1rem;
    }
  }
`;

const LeftCircle = styled.div`
  width: 20%;
  position: absolute;
  bottom: 100px;
  left: 100px;
  border-radius: 50%;
  z-index: -10;
  @media screen and ${responsive.laptop} {
    width: 250px;
  }
  @media screen and ${responsive.mobile} {
    width: 200px;
    height: 200px;
    bottom: 50px;
    left: 50px;
  }
  @media screen and ${responsive.iphone12Pro} {
    bottom: 80px;
    left: -50px;
  }
  img {
    width: 100%;
    height: 100%;
    transition: 1s;
    filter: opacity(0.3) drop-shadow(0 0 0 var(--blue));
  }
`;


const RightCircle = styled.div`
  width: 35%;
  position: absolute;
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
    filter: opacity(0.3) drop-shadow(0 0 0 var(--blue));
  }
`;

const Project = ({pjNum, setPjNum, mobilePjNum, setMobilePjNum}) => {
  /** 윈도우 너비 : window.innerWidth */
  const pageWidth = window.innerWidth;
  
  const itemRef = useRef();
  const itemWidth = itemRef.current?.offsetWidth;
  const itemWidthMargin = itemWidth + 30;
  
  const [itemID, setItemId] = useState(1);
  const [slidePx, setSlidePx] = useState(0);
  
  
  // mobile page project
  const prevCount = () => {
    itemID > 1 && setItemId(itemID - 1);
    pageWidth < 768 && (slidePx < 0 && setSlidePx(slidePx + itemWidthMargin));
  };
  const nextCount = () => {
    itemID < data.length && setItemId(itemID + 1);
    pageWidth < 768 && (slidePx > -(itemWidthMargin * (data.length - 1)) && setSlidePx(slidePx - itemWidthMargin));
  };

  useEffect(() => {
    pageWidth < 768 ? setMobilePjNum(1) : setMobilePjNum(0);
  }, [prevCount, nextCount])

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
  }, []);

  const navigate = useNavigate();
  const goDetail = (projectId) => {
    navigate(`/work/${projectId}`)
  }
  
  return (
    <Container>
      <div className='pattern'></div>
      <ProjectMain>
        <ProjectContent>
          <span className='notice'>* 제목 클릭 시 해당 페이지로 이동합니다.</span>
          <ProjectWrap ref={itemRef} style={pageWidth < 768 ? {transform: `translateX(${slidePx}px)`} : {transform: `translateX(0px)`}}>
            {(pjNum === 1 || mobilePjNum === 1) &&
            <>
              {data.filter((project) => project.id < 4).map((it) => (
                <ProjectItem key={it.id} itemID={it.id}>
                  <ProjectImg onClick={() => goDetail(it.id)}>
                    <img src={getProjectImg(it.id)} alt={it.name}/>
                    <div className='projectDetail'>
                      <span>자세히 보기</span>
                    </div>
                  </ProjectImg>
                  <ProjectName>
                    <Link className='link' target="_blank" to={it.link}>
                      {it.name}
                    </Link>
                  </ProjectName>
                </ProjectItem>
              ))}
            </>
            }
            {(pjNum === 2 || mobilePjNum === 1) &&
            <>
              {data.filter((project) => project.id > 3).map((it) => (
                <ProjectItem key={it.id} itemID={it.id}>
                  <ProjectImg onClick={() => goDetail(it.id)}>
                    <img src={getProjectImg(it.id)} alt={it.name}/>
                    <div className='projectDetail'>
                      <span>자세히 보기</span>
                    </div>
                  </ProjectImg>
                  <ProjectName>
                    <Link className='link' target="_blank" to={it.link}>
                      {it.name}
                    </Link>
                  </ProjectName>
                </ProjectItem>
              ))}
            </>
            }
          </ProjectWrap>
          <SliderBtn>
            <FontAwesomeIcon icon={faAnglesLeft} className='leftBtn' onClick={prevCount}/>
            <div className='count'>{itemID} / {data.length}</div>
            <FontAwesomeIcon icon={faAnglesRight} className='rightBtn' onClick={nextCount}/>
          </SliderBtn>
        </ProjectContent>
        <ProjectTitle>
          <h1>WORK</h1>
          <div className='slide_arrow'>
            <FontAwesomeIcon onClick={() => setPjNum(1)} className='slide_left' icon={faArrowLeft}/>
            <span>{pjNum} / 2</span>
            <FontAwesomeIcon onClick={() => setPjNum(2)} className='slide_right' icon={faArrowRight}/>
          </div>
        </ProjectTitle>
      </ProjectMain>
      <LeftCircle>
        <img src={Image(1)}/>
      </LeftCircle>
      <RightCircle>
        <img src={Image(1)}/>
      </RightCircle>
    </Container>
  )
}

export default Project;
