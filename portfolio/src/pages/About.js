import React from 'react';
import { styled } from 'styled-components';
import { aboutClick } from '../animation/animation';
import { Image } from '../Components/util';
import responsive from '../style/responsive';

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

const AboutMain = styled.main`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translateX(-50%);
  @media screen and ${responsive.laptop} {
    width: 100%;
    top: 30%;
  }
  @media screen and ${responsive.mobile} {
    height: 650px;
  }
`;

const AboutContent = styled.section`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  animation: ${aboutClick} ease-in-out 1s;
  transition: 1s;
  .aboutMe {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 100px;
    .aboutMe_title {
      font-size: 3.5rem;
      font-weight: bold;
      color: var(--black);
      margin-bottom: 50px;
      letter-spacing: 3px;
    }
    .aboutMe_desc {
      font-size: 1.5rem;
      line-height: 35px;
    }
  }
  @media screen and ${responsive.laptop} {
    .aboutMe {
      .aboutMe_title {
        font-size: 3rem;
      }
    }
  }
  @media screen and ${responsive.tablet} {
    width: 100%;
    .aboutMe {
      margin-bottom: 50px;
      .aboutMe_title {
        font-size: 2rem;
      }
      .aboutMe_desc {
        font-size: 1.2rem;
      }
    }
  }
  @media screen and ${responsive.iphone12Pro} {
    .aboutMe {
      .aboutMe_title {
        font-size: 2rem;
        padding: 0 50px;
      }
      .aboutMe_desc {
        font-size: 1.4rem;
      }
    }
  }
`;

const AboutSkillExperience = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${aboutClick} ease-in-out 1s;
  transition: 1s;
  .about_skill_wrap {
    margin-bottom: 50px;
    img {
      margin-right: 10px;
    }
  }
  .about_experience {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    .experience_title {
      font-size: 1.6rem;
    }
    .experience_sub {
      font-size: 1.2rem;
    }
  }
  @media screen and ${responsive.tablet} {
    width: 80%;
    .about_skill_wrap {
      width: 70%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 10px;
      img {
        margin: 0;
      }
    }
    .about_experience {
      .experience_title {
        font-size: 1.4rem;
      }
    }
  }
  @media screen and ${responsive.iphone12Pro} {
    .about_skill_wrap {
      width: 100%;
    }
    .about_experience {
      .experience_title {
        font-size: 1.6rem;
        padding: 0 30px;
        text-align: center;
      }
      .experience_sub {
        font-size: 1.4rem;
      }
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
  transition: 1s;
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


const About = () => {
  return (
    <Container>
      <div className='pattern'></div>
      <AboutMain>
        <AboutContent>
          <div className='aboutMe'>
            <h1 className='aboutMe_title'>프론트엔드 개발자를 희망하는 윤동성 입니다!</h1>
            <span className='aboutMe_desc'>항상 사용자들의 입장에서 UI/UX를 생각하고<br/>회사와 함께 발전하기 위해 열정과 호기심을 바탕으로<br/>한걸음 한걸음 성장해나가는 개발자가 되겠습니다!</span>
          </div>
          <AboutSkillExperience>
            <div className='about_skill_wrap'>
              <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"/>
              <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"/>
              <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"/>
              <img src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jQuery&logoColor=white"/>
              <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"/>
              <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"/>
            </div>
            <div className='about_experience'>
              <span className='experience_title'>💻 웹퍼블리셔&리액트 활용 프론트엔드 웹SW 개발자 과정 수료</span>
              <span className='experience_sub'>그린컴퓨터아트학원(2023.02 ~ 2023.08)</span>
            </div>
          </AboutSkillExperience>
        </AboutContent>
      </AboutMain>
      <LeftCircle>
        <img className='circle' src={Image(1)}/>
      </LeftCircle>
      <RightCircle>
        <img src={Image(1)}/>
      </RightCircle>
    </Container>
  )
}

export default About;
