import React from 'react';
import { styled } from 'styled-components';
import largeCircle from '../img/largeCircle.png';

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const AboutMain = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
`;

const AboutTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  h1 {
    font-size: 170px;
    margin: 0;
    color: #bbd3f8;
  }
`;

const Subtitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  span {
    border: 5px solid transparent;
    display: block;
    padding: 10px 0;
    font-size: 50px;
    font-weight: bold;
    color: #ccc;
    cursor: pointer;
    &:hover {
      color: #bbd3f8;
      border-bottom: 5px solid #bbd3f8;
    }
  }
`;

const AboutMe = styled.div`
  width: 50%;
  padding-top: 150px;
  h1 {
    font-size: 3rem;
    margin-bottom: 50px;
  }
  p {
    font-size: 26px;
    line-height: 40px;
    margin-bottom: 50px;
    color: #999; 
  }
  button {
    border: none;
    background-color: #0079FF;
    color: #fff;
    font-size: 26px;
    padding: 20px 70px;
    cursor: pointer;
  }
`;

const AboutSkill = styled.div`

`;

const AboutExperience = styled.div`

`;

const SmallCircle = styled.img`
  position: absolute;
  bottom: -330px;
  left: -330px;
`;

const LargeCircle = styled.img`
  position: absolute;
  width: 800px;
  height: 800px;
  right: -300px;
  z-index: -1;
`;

const About = () => {
  return (
    <Container>
      <AboutMain>
         <AboutTitle>
          <h1>About</h1>
          <Subtitle>
            <span>Me</span>
            <span>Skill</span>
            <span>Experience</span>
          </Subtitle>
         </AboutTitle>
         <AboutMe>
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
         <AboutSkill></AboutSkill>
         <AboutExperience></AboutExperience>
      </AboutMain>
      <SmallCircle src={largeCircle}/>
      <LargeCircle src={largeCircle}/>
    </Container>
  )
}

export default About;
