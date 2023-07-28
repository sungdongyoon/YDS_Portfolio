import React, { useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import { motion, transform } from 'framer-motion';
import largeCircle from '../img/largeCircle.png';
import {titleObserver, subTitleObserver, contentObserver, leftCircleObserver, rightCircleObserver, aboutClick} from '../animation/animation';


const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const AboutMain = styled.div`
  width: 90%;
  height: 1000px;
  display: flex;
  justify-content: space-evenly;
`;

const AboutTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  h1 {
    font-size: 170px;
    margin: 0;
    color: #bbd3f8;
    transition: 0.5s;
  }
`;

const Subtitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  transition: 1s;
  span {
    border: 5px solid transparent;
    display: block;
    padding: 10px 0;
    font-size: 50px;
    font-weight: bold;
    color: #ccc;
    transition: 0.5s;
    cursor: pointer;
    &:hover {
      color: #bbd3f8;
      border-bottom: 5px solid #bbd3f8;
    }
  }
`;

const AboutMe = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 200px;
  animation: ${aboutClick} ease-in-out 1s;
  transition: 1s;
  h1 {
    font-size: 3rem;
    margin-bottom: 50px;
  }
  p {
    font-size: 26px;
    line-height: 40px;
    margin-bottom: 50px;
    color: #999; 
    width: 80%;
  }
  button {
    width: 30%;
    border: none;
    border-radius: 10px;
    background: linear-gradient(130deg, #BBD3F8 0%, #0079FF 100%);
    color: #fff;
    font-size: 26px;
    padding: 20px 0;
    transition: all 0.5s ease;
    cursor: pointer;
    &:hover {
      background: linear-gradient(130deg, #0079FF 0%, #BBD3F8 100%);
      transition: all 0.5s ease;
    }
  }
`;

const AboutSkill = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 200px;
  animation: ${aboutClick} ease-in-out 1s;
  transition: 1s;
  h1 {
    font-size: 2.5rem;
    color: #555;
  }
  .about_skill_wrap {
    margin-top: 0px;
    display: flex;
    flex-wrap: wrap;
    .about_skill_item {
      display: flex;
      flex-direction: column;
      color: #999;
      width: 35%;
      margin-right: 30px;
      margin-bottom: 20px;
      h3 {
        font-size: 1.3rem;
        margin: 0;
        padding-bottom: 10px;
        border-bottom: 1px solid #ccc;
      }
      p {
        font-size: 1.1rem;
      }
    }
  }
`;

const AboutExperience = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 200px;
  animation: ${aboutClick} ease-in-out 1s;
  transition: 1s;
  h1 {
    font-size: 2.5rem;
    color: #555;
  }
  .about_experience_wrap {
    margin-top: 0px;
    display: flex;
    flex-wrap: wrap;
    .about_experience_item {
      display: flex;
      flex-direction: column;
      color: #999;
      width: 35%;
      margin-right: 30px;
      margin-bottom: 20px;
      h3 {
        font-size: 1.3rem;
        margin: 0;
        padding-bottom: 10px;
        border-bottom: 1px solid #ccc;
      }
      p {
        font-size: 1.1rem;
      }
    }
  }
`;

const SmallCircle = styled.img`
  position: absolute;
  bottom: -330px;
  left: -330px;
  transition: 1s;
`;

const LargeCircle = styled.img`
  position: absolute;
  width: 800px;
  height: 800px;
  right: -300px;
  transition: 1s;
  z-index: -1;
`;




const About = ({clickMe, clickSkill, clickExperience, showMe, showSkill, showExpereince}) => {
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
  return (
    <Container>
      <AboutMain>
        <AboutTitle>
          <h1 ref={titleRef} className='About'>About</h1>
          <Subtitle ref={subTitleRef}>
            <span className='me' onClick={clickMe} style={showMe ? {color: "#bbd3f8", borderBottom: "5px solid #bbd3f8"} : {color: "#ccc"}}>Me</span>
            <span className='skill' onClick={clickSkill} style={showSkill ? {color: "#bbd3f8", borderBottom: "5px solid #bbd3f8"} : {color: "#ccc"}}>Skill</span>
            <span className='experience' onClick={clickExperience} style={showExpereince ? {color: "#bbd3f8", borderBottom: "5px solid #bbd3f8"} : {color: "#ccc"}}>Experience</span>
          </Subtitle>
        </AboutTitle>
        {showMe && 
        <AboutMe ref={contentRef}>
          <h1>프론트엔드 개발자를 꿈꾸는<br/> 윤동성 입니다.</h1>
          <p>
            여기어때는 여행뿐만 아니라 여가의 모든 순간을 책임질 수 있도록
            숙박, 항공, 액티비티, 렌터카, 맛집, 모바일 티켓 등
            원스톱 여행 플랫폼을 만들고 있어요.
            여기어때는 여행뿐만 아니라 여가의 모든 순간을 책임질 수 있도록
            숙박, 항공, 액티비티, 렌터카, 맛집, 모바일 티켓 등
            원스톱 여행 플랫폼을 만들고 있어요.
          </p>
          <button>Resume</button>
        </AboutMe>
        }
        {showSkill && 
        <AboutSkill ref={contentRef}>
          <h1>사용 가능한 기술은</h1>
          <div className='about_skill_wrap'>
            <div className='about_skill_item'>
              <h3>HTML</h3>
              <p>여기어때는 여행뿐만 아니라 여가의 모든 순간을 책임질 수 있도록
            숙박, 항공, 액티비티, 렌터카, 맛집, 모바일 티켓 등
            원스톱 여행 플랫폼을 만들고 있어요.</p>
            </div>
            <div className='about_skill_item'>
              <h3>CSS</h3>
              <p>여기어때는 여행뿐만 아니라 여가의 모든 순간을 책임질 수 있도록
            숙박, 항공, 액티비티, 렌터카, 맛집, 모바일 티켓 등
            원스톱 여행 플랫폼을 만들고 있어요.</p>
            </div>
            <div className='about_skill_item'>
              <h3>SCSS</h3>
              <p>여기어때는 여행뿐만 아니라 여가의 모든 순간을 책임질 수 있도록
            숙박, 항공, 액티비티, 렌터카, 맛집, 모바일 티켓 등
            원스톱 여행 플랫폼을 만들고 있어요.</p>
            </div>
            <div className='about_skill_item'>
              <h3>JavaScript</h3>
              <p>여기어때는 여행뿐만 아니라 여가의 모든 순간을 책임질 수 있도록
            숙박, 항공, 액티비티, 렌터카, 맛집, 모바일 티켓 등
            원스톱 여행 플랫폼을 만들고 있어요.</p>
            </div>
            <div className='about_skill_item'>
              <h3>React</h3>
              <p>여기어때는 여행뿐만 아니라 여가의 모든 순간을 책임질 수 있도록
            숙박, 항공, 액티비티, 렌터카, 맛집, 모바일 티켓 등
            원스톱 여행 플랫폼을 만들고 있어요.</p>
            </div>
            <div className='about_skill_item'>
              <h3>TypeScript</h3>
              <p>여기어때는 여행뿐만 아니라 여가의 모든 순간을 책임질 수 있도록
            숙박, 항공, 액티비티, 렌터카, 맛집, 모바일 티켓 등
            원스톱 여행 플랫폼을 만들고 있어요.</p>
            </div>
          </div>
        </AboutSkill>
        }
        {showExpereince &&
        <AboutExperience ref={contentRef}>
          <h1>이런 경험이 있습니다</h1>
          <div className='about_experience_wrap'>
            <div className='about_experience_item'>
              <h3>Git</h3>
              <p>
              Git bash를 활용해 개인 프로젝트, 팀원들과 협업하는 과정에서 업데이트, 버전관리를 위해 Git을 사용한 경험이 있습니다.
              </p>
            </div>
            <div className='about_experience_item'>
              <h3>API</h3>
              <p>
              여기어때는 여행뿐만 아니라 여가의 모든 순간을 책임질 수 있도록
              숙박, 항공, 액티비티, 렌터카, 맛집, 모바일 티켓 등
              원스톱 여행 플랫폼을 만들고 있어요.
              </p>
            </div>
            <div className='about_experience_item'>
              <h3>Hosting</h3>
              <p>
              여기어때는 여행뿐만 아니라 여가의 모든 순간을 책임질 수 있도록
              숙박, 항공, 액티비티, 렌터카, 맛집, 모바일 티켓 등
              원스톱 여행 플랫폼을 만들고 있어요.
              </p>
            </div>
            <div className='about_experience_item'>
              <h3>상태관리</h3>
              <p>
              여기어때는 여행뿐만 아니라 여가의 모든 순간을 책임질 수 있도록
              숙박, 항공, 액티비티, 렌터카, 맛집, 모바일 티켓 등
              원스톱 여행 플랫폼을 만들고 있어요.
              </p>
            </div>
            <div className='about_experience_item'>
              <h3>상태관리</h3>
              <p>
              여기어때는 여행뿐만 아니라 여가의 모든 순간을 책임질 수 있도록
              숙박, 항공, 액티비티, 렌터카, 맛집, 모바일 티켓 등
              원스톱 여행 플랫폼을 만들고 있어요.
              </p>
            </div>
            <div className='about_experience_item'>
              <h3>상태관리</h3>
              <p>
              여기어때는 여행뿐만 아니라 여가의 모든 순간을 책임질 수 있도록
              숙박, 항공, 액티비티, 렌터카, 맛집, 모바일 티켓 등
              원스톱 여행 플랫폼을 만들고 있어요.
              </p>
            </div>
          </div>
        </AboutExperience>
        }
      </AboutMain>
      <SmallCircle ref={leftCircleRef} src={largeCircle}/>
      <LargeCircle ref={rightCircleRef} src={largeCircle}/>
    </Container>
  )
}

export default About;
