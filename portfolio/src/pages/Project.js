import React, {useRef, useEffect, useState} from 'react';
import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {titleObserver, subTitleObserver, contentObserver, leftCircleObserver, rightCircleObserver, projectSlide} from '../animation/animation';
import largeCircle from '../img/largeCircle.png';
import umbrella_logo from '../img/umbrella_logo.png';
import whatitisnt_logo from '../img/whatitisnt_logo.png';
import momentum_img from '../img/momentum_img.png';
import netflix_logo from '../img/netflix_logo.png';
import theme from '../style/theme';


const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  @media screen and ${theme.mobile} {
    height: 100%;
  }
`;

const ProjectMain = styled.div`
  width: 90%;
  height: 1000px;
  display: flex;
  justify-content: space-evenly;
  @media screen and ${theme.tablet} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media screen and ${theme.mobile} {
    height: 650px;
  }
`;

const ProjectTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  @media screen and ${theme.tablet} {
    justify-content: flex-start;
    align-items: flex-start;
    width: 80%;
  }
  h1 {
    font-size: 170px;
    margin: 0;
    color: #bbd3f8;
    transition: 1s;
    @media screen and ${theme.laptop} {
      font-size: 100px;
    }
    @media screen and ${theme.tablet} {
      font-size: 80px;
    }
    @media screen and ${theme.mobile} {
      font-size: 50px;
      color: #fff;
    }
  }
  .slide_arrow {
    font-size: 30px;
    color: #999;
    transition: 1s;
    @media screen and ${theme.mobile} {
      display: none;
    }
    span {
      text-align: center;
      display: inline-block;
      width: 80px;
      @media screen and ${theme.laptop} {
        font-size: 26px;
      }
      @media screen and ${theme.tablet} {
        font-size: 16px;
      }
    }
  }
`;

const ProjectContent = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 200px;
  transition: 1s;
  position: relative;
  span {
    color: #ff0000;
    font-size: 18px;
  }
  @media screen and ${theme.tablet} {
    padding-top: 0;
    width: 80%;
    margin-top: 50px;
  }
  @media screen and ${theme.mobile} {
    margin-top: 0px;
    padding: 10px;
    padding-top: 40px;
    height: 300px;
    span {
      font-size: 12px;
    }
  }
`;

const SliderBtn = styled.div`
  display: none;
  position: absolute;
  bottom: -100px;
  left: 0;
  right: 0;
  color: #999;
  .leftBtn {
    font-size: 20px;
    cursor: pointer;
  }
  .rightBtn {
    font-size: 20px;
    cursor: pointer;
  }
  .count {
    font-size: 20px;
  }
  @media screen and ${theme.mobile} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }
`;

const ProjectWrap = styled.div`
  width: 70%;
  height: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and ${theme.laptop} {
    width: 500px;
  }
  @media screen and ${theme.tablet} {
    width: 100%;
    padding: 0;
    padding-top: 20px;
  }
  @media screen and ${theme.mobile} {
    flex-direction: column;
    padding-top: 10px;
    transition: 0.5s;
  }
`;


const ProjectItem = styled.div`
  width: 45%;
  height: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 50px;
  animation: ${projectSlide} ease-in-out 0.7s;
  @media screen and ${theme.laptop} {
    height: 300px;
  }
  @media screen and ${theme.tablet} {
    width: 30%;
  }
  @media screen and ${theme.mobile} {
    width: 100%;
    margin-bottom: 0px;
    margin-right: 20px;
  }
`;

const ProjectImg = styled.div`
  width: 100%;
  height: 100%;
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: #fff;
  box-shadow: 0px 0px 10px #ccc, 10px 10px 8px #ccc;
  border-radius: 20px;
  transition: 0.3s;
  @media screen and ${theme.laptop} {
    background-size: 80%;
  }
  .projectDetail {
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    opacity: 0;
    transition: 0.3s;
    border-radius: 20px;
    h3 {
      margin: 0;
      padding: 20px;
      color: #fff;
      @media screen and ${theme.laptop} {
        font-size: 16px;
      }
    }
    span {
      display: block;
      padding: 20px;
      color: #fff;
    }
    li {
      list-style: circle;
      color: #fff;
      margin-bottom: 10px;
    }
  }
  &:hover .projectDetail {
    opacity: 1;
  }
`;

const ProjectName = styled.div`
  margin-top: 20px;
  font-size: 20px;
  cursor: pointer;
`;



const LeftCircle = styled.div`
  position: absolute;
  bottom: -330px;
  left: -330px;
  width: 30%;
  img {
    width: 100%;
    heigiht: 100%;
    transition: 1s;
  }
`;

const RightCircle = styled.div`
  position: absolute;
  right: -13%;
  z-index: -1;
  @media screen and ${theme.laptop} {
    width: 550px;
    height: 550px;
    right: -20%;
  }
  img {
    width: 100%;
    height: 100%;
    transition: 1s;
  }
`;

const Project = ({pageNum, setPageNum}) => {
  const [itemId, setItemId] = useState(1);
  const [slidePx, setSlidePx] = useState(0);

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
  })

  const prevCount = () => {
    itemId > 1 && setItemId(itemId - 1);
    slidePx < 0 && setSlidePx(slidePx + 301);
  };
  const nextCount = () => {
    itemId < 8 && setItemId(itemId + 1);
    slidePx > -2107 && setSlidePx(slidePx - 301);
  };
  if(window.innerWidth < 768) {
    setPageNum(3);
  }
  console.log(pageNum)
  return (
    <Container>
      <ProjectMain>
        <ProjectTitle>
          <h1 ref={titleRef}>Project</h1>
          <div className='slide_arrow' ref={subTitleRef}>
            <FontAwesomeIcon onClick={() => setPageNum(1)} style={{marginRight: 20, cursor: "pointer"}} icon={faArrowLeft}/>
            <span>{pageNum} / 2</span>
            <FontAwesomeIcon onClick={() => setPageNum(2)} style={{marginLeft: 20, cursor: "pointer"}} icon={faArrowRight}/>
          </div>
        </ProjectTitle>
        <ProjectContent ref={contentRef}>
          <span>* 제목 클릭 시 해당 페이지로 이동합니다.</span>
          <ProjectWrap style={{transform: `translateX(${slidePx}px)`}}>
            {(pageNum === 1 || pageNum === 3) &&
            <>
              <ProjectItem>
                <ProjectImg style={{backgroundImage: `url(${momentum_img})`}}>
                  <div className='projectDetail'>
                    {/* <h3>HTML, CSS, JavaScript</h3> */}
                    <span>
                      자바스크립트의 기본적인 기능들을 활용하여 제작한 momentum 페이지 입니다.
                    </span>
                    {/* <ul>
                      <li>랜덤 배경화면</li>
                      <li>디지털 시계 & 날짜</li>
                      <li>랜덤 명언</li>
                      <li>Todo List</li>
                      <li>현재 날씨</li>
                    </ul> */}
                  </div>
                </ProjectImg>
                <ProjectName>Momentum</ProjectName>
              </ProjectItem>
              <ProjectItem>
                <ProjectImg style={{backgroundImage: `url(${umbrella_logo})`}}>
                  <div className='projectDetail'>
                    <span>프로젝트 설명</span>
                  </div>
                </ProjectImg>
                <ProjectName>우산있어?</ProjectName>
              </ProjectItem>
              <ProjectItem>
                <ProjectImg style={{backgroundImage: `url(${whatitisnt_logo})`}}>
                  <div className='projectDetail'>
                    {/* <h3>React</h3> */}
                    <span>
                      리액트를 사용하여 만든 와릿이즌 홈페이지입니다.
                    </span>
                    {/* <ul>
                      <li>상단 스토어 버튼, 배너 카테고리 클릭 시 제품 리스트 페이지로 이동</li>
                      <li>메인페이지 베스트아이템 슬라이드 구현</li>
                      <li>로그인 & 로그아웃 구현</li>
                      <li>제품 상세 페이지 수량 및 가격, 상세설명 아코디언 구현</li>
                    </ul> */}
                  </div>
                </ProjectImg>
                <ProjectName>WhatItIsnt</ProjectName>
              </ProjectItem>
              <ProjectItem>
                  <ProjectImg>
                    <div className='projectDetail'>
                      <span>프로젝트 설명</span>
                    </div>
                  </ProjectImg>
                <ProjectName>My Diary Book</ProjectName>
              </ProjectItem>
            </>
            }
            {(pageNum === 2 || pageNum === 3) &&
            <>
              <ProjectItem>
                <ProjectImg style={{backgroundImage: `url(${netflix_logo})`}}>
                  <div className='projectDetail'>
                    <span>프로젝트 설명</span>
                  </div>
                </ProjectImg>
                <ProjectName>Netflix</ProjectName>
              </ProjectItem>
              <ProjectItem>
                <ProjectImg>
                  <div className='projectDetail'>
                    <span>프로젝트 설명</span>
                  </div>
                </ProjectImg>
                <ProjectName>mbti 고양이</ProjectName>
              </ProjectItem>
              <ProjectItem>
                <ProjectImg>
                  <div className='projectDetail'>
                    <span>프로젝트 설명</span>
                  </div>
                </ProjectImg>
                <ProjectName>YDS 포트폴리오</ProjectName>
              </ProjectItem>
            </>
            }
          </ProjectWrap>
          <SliderBtn>
            <div className='leftBtn' onClick={prevCount}>{"<"}</div>
            <div className='count'>{itemId} / 8</div>
            <div className='rightBtn' onClick={nextCount}>{">"}</div>
          </SliderBtn>
        </ProjectContent>
      </ProjectMain>
      <LeftCircle>
        <img src={largeCircle} ref={leftCircleRef}/>
      </LeftCircle>
      <RightCircle>
        <img src={largeCircle} ref={rightCircleRef}/>
      </RightCircle>
    </Container>
  )
}

export default Project;
