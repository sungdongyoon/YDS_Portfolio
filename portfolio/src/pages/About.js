import React, { useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import {titleObserver, subTitleObserver, contentObserver, leftCircleObserver, rightCircleObserver, aboutClick} from '../animation/animation';
import { useSelector } from 'react-redux';
import largeCircle from '../img/largeCircle.png';
import responsive from '../style/responsive';

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 200px;
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
  @media screen and ${responsive.laptop} {
    border: 3px solid yellow;
  }
  @media screen and ${responsive.tablet} {
    border: 3px solid red;
    padding-right: 0;
  }
  @media screen and ${responsive.mobile} {
    border: 3px solid blue;
  }
`;

const AboutMain = styled.main`
  width: 80%;
  display: flex;
  justify-content: space-between;
  @media screen and ${responsive.tablet} {
    width: 80%;
    height: 80%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media screen and ${responsive.mobile} {
    height: 650px;
  }
`;

const AboutTitle = styled.section`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  h1 {
    font-size: var(--page-title);
    font-weight: bold;
    color: var(--sky-blue);
    transition: 0.5s;
  }
  @media screen and ${responsive.laptop} {
    h1 {
      font-size: 10rem;
    }
  }
  @media screen and ${responsive.tablet} {
    width: 80%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    margin-bottom: 30px;
    h1 {
      font-size: 8rem;
    }
  }
  @media screen and ${responsive.mobile} {
    width: 100%;
    h1 {
      font-size: 6rem;
    }
  }
  @media screen and ${responsive.iphone12Pro} {
    h1 {
      font-size: 5rem;
    }
  }
`;

const Subtitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  transition: 1s;
  span {
    display: block;
    padding: 10px 0;
    border: 5px solid transparent;
    font-size: var(--page-subTitle);
    font-weight: bold;
    transition: 0.5s;
    cursor: pointer;
    &:hover {
      border-bottom: 5px solid var(--sky-blue);
    }
  }
  @media screen and ${responsive.laptop} {
    span {
      font-size: 3rem;
    }
  }
  @media screen and ${responsive.tablet} {
    width: 100%;
    flex-direction: row;
    gap: 30px;
    span {
      font-size: 2.5rem;
    }
  }
  @media screen and ${responsive.mobile} {
    span {
      font-size: 2rem;
    }
  }
  @media screen and ${responsive.iphone12Pro} {
    span {
      font-size: 2rem;
      text-shadow: 5px 5px 10px var(--white),
      -5px -5px 10px var(--white);
      margin-bottom: 0px;
    }
  }
`;

const AboutContent = styled.section`
  width: 65%;
  margin-top: 300px;
  height: 550px;
  .aboutContent_header {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    .aboutMe {
      font-size: 4rem;
      font-weight: bold;
      color: var(--gray);
      letter-spacing: 3px;
      margin-right: 50px;
    }
    .aboutMe_resume {
      width: 150px;
      height: 50px;
      font-size: 2rem;
      color: var(--white);
      text-align: center;
      line-height: 50px;
      background-color: var(--sky-blue);
      border-radius: 5px;
      cursor: pointer;
    }
  }
  @media screen and ${responsive.laptop} {
    .aboutContent_header {
      .aboutMe {
        font-size: 3rem;
      }
      .aboutMe_resume {
        width: 120px;
        height: 40px;
        font-size: 1.5rem;
        line-height: 40px;
      }
    }
  }
  @media screen and ${responsive.tablet} {
    width: 80%;
    margin-top: 0;
  }
  @media screen and ${responsive.mobile} {
    width: 100%;
    margin-top: 0;
    .aboutContent_header {
      .aboutMe {
        font-size: 2.5rem;
        margin-right: 30px;
      }
    }
  }
`;

// const AboutMe = styled.section`
//   width: 65%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   padding-top: 200px;
//   animation: ${aboutClick} ease-in-out 1s;
//   transition: 1s;
//   @media screen and ${responsive.laptop} {
//     padding-top: 100px;
//   }
//   @media screen and ${responsive.tablet} {
//     padding-top: 20px;
//     width: 80%;
//   }
//   @media screen and ${responsive.iphone12Pro} {
//     padding-top: 0px;
//   }
//   h1 {
//     font-size: 4.5rem;
//     font-weight: bold;
//     margin-bottom: 30px;
//     letter-spacing: 3px;
//     @media screen and ${responsive.laptop} {
//       font-size: 3rem;
//       margin-bottom: 20px;
//     }
//     @media screen and ${responsive.iphone12Pro} {
//       font-size: 2.4rem;
//       margin-bottom: 0px;
//       margin-top: 30px;
//     }
//   }
//   p {
//     width: 60%;
//     color: var(--semi-gray); 
//     font-size: 2.6rem;
//     line-height: 40px;
//     margin-bottom: 50px;
//     @media screen and ${responsive.laptop} {
//       font-size: 2rem;
//     }
//     @media screen and ${responsive.tablet} {
//       width: 100%;
//     }
//     @media screen and ${responsive.iphone12Pro} {
//       font-size: 1.6rem;
//       line-height: 25px;
//     }
//   }
//   button {
//     width: 300px;
//     color: var(--white);
//     font-size: 2.6rem;
//     padding: 20px 0;
//     border: none;
//     border-radius: 10px;
//     background: linear-gradient(130deg, #BBD3F8 0%, #0079FF 100%);
//     transition: all 0.5s ease;
//     cursor: pointer;
//     &:hover {
//       background: linear-gradient(130deg, #0079FF 0%, #BBD3F8 100%);
//       transition: all 0.5s ease;
//     }
//     @media screen and ${responsive.mobile} {
//       width: 100%;
//     }
//   }
// `;

const AboutSkill = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: ${aboutClick} ease-in-out 1s;
  transition: 1s;
  .about_skill_wrap {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, auto);
    .about_skill_item {
      width: 80%;
      height: 100%;
      display: flex;
      flex-direction: column;
      color: var(--semi-gray);
      margin-right: 30px;
      margin-bottom: 30px;
      h3 {
        font-size: 2rem;
        font-weight: bold;
        padding-bottom: 15px;
        margin-bottom: 15px;
        border-bottom: 1px solid var(--light-gray);
      }
      p {
        font-size: 1.5rem;
        letter-spacing: 1.5px;
        line-height: 25px;
      }
    }
  }
  @media screen and ${responsive.laptop} {
    .about_skill_wrap {
      .about_skill_item {
        width: 90%;
        h3 {
          font-size: 1.7rem;
        }
        p {
          font-size: 1.4rem;
        }
      }
    }
  }
  @media screen and ${responsive.tablet} {
    .about_skill_wrap {
      .about_skill_item {
        h3 {
          font-size: 1.7rem;
        }
        p {
          font-size: 1.4rem;
        }
      }
    }
  }
  @media screen and ${responsive.mobile} {
    .about_skill_wrap {
      .about_skill_item {
        text-shadow: 5px 5px 10px var(--white),
        -5px -5px 10px var(--white);
        h3 {
          font-size: 1.4rem;
          box-shadow: 0px 5px 5px -5px var(--white);
        }
        p {
          font-size: 1.2rem;
          line-height: 20px;
        }
      }
    }
  }
  @media screen and ${responsive.iphone12Pro} {
    .about_skill_wrap {
      .about_skill_item {
        p {
          font-size: 1.2rem;
          line-height: 15px;
        }
      }
    }
  }
`;

const AboutExperience = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: ${aboutClick} ease-in-out 1s;
  transition: 1s;
  h1 {
    font-size: 4rem;
    font-weight: bold;
    color: var(--gray);
    letter-spacing: 3px;
    margin-bottom: 30px;
  }
  .about_experience_wrap {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, auto);
    .about_experience_item {
      width: 80%;
      height: 100%;
      display: flex;
      flex-direction: column;
      color: var(--semi-gray);
      margin-right: 30px;
      margin-bottom: 30px;
      h3 {
        font-size: 2rem;
        font-weight: bold;
        padding-bottom: 15px;
        margin-bottom: 15px;
        border-bottom: 1px solid var(--light-gray);
      }
      p {
        font-size: 1.5rem;
        letter-spacing: 1.5px;
        line-height: 25px;
      }
    }
  }
  @media screen and ${responsive.laptop} {
    .about_experience_wrap {
      .about_experience_item {
        width: 90%;
        h3 {
          font-size: 1.7rem;
        }
        p {
          font-size: 1.4rem;
        }
      }
    }
  }
  @media screen and ${responsive.tablet} {
    .about_experience_wrap {
      .about_experience_item {
        h3 {
          font-size: 1.7rem;
        }
        p {
          font-size: 1.4rem;
        }
      }
    }
  }
  @media screen and ${responsive.mobile} {
    .about_experience_wrap {
      .about_experience_item {
        text-shadow: 5px 5px 10px var(--white),
        -5px -5px 10px var(--white);
        h3 {
          font-size: 1.4rem;
          box-shadow: 0px 5px 5px -5px var(--white);
        }
        p {
          font-size: 1.2rem;
          line-height: 20px;
        }
      }
    }
  }
  @media screen and ${responsive.iphone12Pro} {
    .about_experience_wrap {
      .about_experience_item {
        p {
          font-size: 1.2rem;
          line-height: 15px;
        }
      }
    }
  }
`;

const LeftCircle = styled.div`
  width: 600px;
  height: 600px;
  background-color: var(--sky-blue);
  border-radius: 50%;
  position: absolute;
  bottom: -200px;
  left: -200px;
  z-index: -10;
  transition: 0.5s;
  @media screen and ${responsive.laptop} {
    width: 500px;
    height: 500px;
  }
  @media screen and ${responsive.mobile} {
    width: 400px;
    height: 400px;
  }
  img {
    width: 0%;
    height: 0%;
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


const About = ({clickMe, clickSkill, clickExperience}) => {

  const showMe = useSelector((state) => state.showMe);
  const showSkill = useSelector((state) => state.showSkill);
  const showExpereince = useSelector((state) => state.showExperience);

  const titleRef = useRef();
  const subTitleRef = useRef();
  const contentRef = useRef();
  const leftCircleRef = useRef();
  const rightCircleRef = useRef();
  useEffect(() => {
    titleObserver.observe(titleRef.current);
    subTitleObserver.observe(subTitleRef.current);
    // contentObserver.observe(contentRef.current);
    leftCircleObserver.observe(leftCircleRef.current);
    rightCircleObserver.observe(rightCircleRef.current);
  })
  return (
    <Container>
      <div className='pattern'></div>
      <AboutMain>
        <AboutTitle>
          <h1 ref={titleRef} className='About'>About</h1>
          <Subtitle ref={subTitleRef}>
            {/* <span className='me' onClick={clickMe} style={showMe ? {color: "#bbd3f8", borderBottom: "5px solid #bbd3f8"} : {color: "#ccc"}}>Me</span> */}
            <span className='skill' onClick={clickSkill} style={showSkill ? {color: "#bbd3f8", borderBottom: "5px solid #bbd3f8"} : {color: "#ccc"}}>Skill</span>
            <span className='experience' onClick={clickExperience} style={showExpereince ? {color: "#bbd3f8", borderBottom: "5px solid #bbd3f8", boxShadow: "0px 5px 5px -5px #fff"} : {color: "#ccc"}}>Experience</span>
          </Subtitle>
        </AboutTitle>
        <AboutContent>
          <div className='aboutContent_header'>
            <h1 className='aboutMe'>프론트엔드 개발자<br/> 윤동성 입니다.</h1>
            <div className='aboutMe_resume'>RESUME</div>
          </div>
          {/* {showMe && 
          <AboutMe ref={contentRef}>
            <h1>프론트엔드 개발자<br/> 윤동성 입니다.</h1>
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
          } */}
          {showSkill && 
          <AboutSkill ref={contentRef}>
            <div className='about_skill_wrap'>
              <div className='about_skill_item'>
                <h3>HTML5</h3>
                <p>
                  웹 접근성이 좋고 유지보수하기 용이한 시멘틱 태그 사용을 지향합니다. 태그에 대한 이해도가 있습니다.
                </p>
              </div>
              <div className='about_skill_item'>
                <h3>CSS3</h3>
                <p>flex와 grid를 활용하여 적절한 레이아웃을 구현할 수 있으며, keyframe을 활용한 애니메이션 제작, 미디어쿼리를 활용한 반응형 페이지를 제작할 수 있습니다.</p>
              </div>
              <div className='about_skill_item'>
                <h3>JavaScript</h3>
                <p>ES6 문법과 함수에 대한 이해, 바닐라 자바스크립트로 화면 제어 및 기능 구현 가능, DOM 활용 가능, 다양한 함수 메서드 활용 가능, 외부 API 데이터를 활용한 작업이 가능합니다.</p>
              </div>
              <div className='about_skill_item'>
                <h3>TypeScript</h3>
                <p>기본적인 타입스크립트 문법에 대한 이해</p>
              </div>
              <div className='about_skill_item'>
                <h3>React</h3>
                <p>리액트를 활용한 SPA 방식 웹 개발 경험이 있고 기본적인 리액트 훅 활용 가능, 공통 컴포넌트 활용 가능, 라우터를 이용한 페이지 분기, 상태 최적화 경험, 비동기 처리 경험이 있습니다.</p>
              </div>
              <div className='about_skill_item'>
                <h3>Styled-components</h3>
                <p>컴포넌트를 기반으로 웹 개발을 할 때 주로 사용하고 있으며
                css-in-Js 방식의 장점을 살려 props를 받아와 연산자와 변수를 활용한 스타일링이 가능합니다.</p>
              </div>
            </div>
          </AboutSkill>
          }
          {showExpereince &&
          <AboutExperience ref={contentRef}>
            <div className='about_experience_wrap'>
              <div className='about_experience_item'>
                <h3>Git</h3>
                <p>
                  Git bash를 활용해 프로젝트 업데이트 및 버전관리를 위해 Git을 사용한 경험이 있습니다.
                </p>
              </div>
              <div className='about_experience_item'>
                <h3>API</h3>
                <p>
                  외부 API 데이터를 활용한 경험이 있습니다.
                </p>
              </div>
              <div className='about_experience_item'>
                <h3>Hosting</h3>
                <p>
                  firbase, netlify를 이용해 완성한 프로젝트의 호스팅과 배포 경험이 있습니다.
                </p>
              </div>
              <div className='about_experience_item'>
                <h3>상태 최적화</h3>
                <p>
                  React의 useMemo, redux를 사용해서 프로젝트 최적화 경험이 있습니다.
                </p>
              </div>
              <div className='about_experience_item'>
                <h3>Node.js</h3>
                <p>
                  익스프레스 라이브러리를 사용하여 웹 서버 구현 경험이 있습니다.
                </p>
              </div>
              <div className='about_experience_item'>
                <h3>MySQL</h3>
                <p>
                  MySQL Workbench와 터미널을 활용하여 간단한 데이터 테이블 생성 경험이 있습니다.
                </p>
              </div>
            </div>
          </AboutExperience>}
        </AboutContent>
      </AboutMain>
      <LeftCircle ref={leftCircleRef}>
        <img src={largeCircle} />
      </LeftCircle>
      <RightCircle>
        <img src={largeCircle} ref={rightCircleRef}/>
      </RightCircle>
    </Container>
  )
}

export default About;
