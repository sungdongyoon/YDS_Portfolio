import React, { useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import {titleObserver, subTitleObserver, contentObserver, leftCircleObserver, rightCircleObserver, aboutClick} from '../animation/animation';
import largeCircle from '../img/largeCircle.png';
import theme from '../style/theme';

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
`;

const AboutMain = styled.div`
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

const AboutTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  @media screen and ${theme.tablet} {
    justify-content: flex-start;
    align-items: flex-start;
    width: 80%;
  }
  @media screen and ${theme.iphone12Pro} {
  }
  h1 {
    font-size: 170px;
    margin: 0;
    color: #bbd3f8;
    transition: 0.5s;
    @media screen and ${theme.laptop} {
      font-size: 100px;
    }
    @media screen and ${theme.tablet} {
      font-size: 80px;
    }
    @media screen and ${theme.iphone12Pro} {
      font-size: 50px;
    }
  }
`;

const Subtitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  transition: 1s;
  @media screen and ${theme.tablet} {
    flex-direction: row;
    width: 100%;
    gap: 50px;
  }
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
    @media screen and ${theme.laptop} {
      font-size: 30px;
    }
    @media screen and ${theme.iphone12Pro} {
      font-size: 20px;
      text-shadow: 5px 5px 10px #fff,
      -5px -5px 10px #fff;
      margin-bottom: 0px;
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
  @media screen and ${theme.laptop} {
    padding-top: 100px;
  }
  @media screen and ${theme.tablet} {
    padding-top: 20px;
    width: 80%;
  }
  @media screen and ${theme.iphone12Pro} {
    padding-top: 0px;
  }
  h1 {
    font-size: 3rem;
    margin-bottom: 50px;
    @media screen and ${theme.laptop} {
      font-size: 30px;
      margin-bottom: 20px;
    }
    @media screen and ${theme.tablet} {
      font-size: 30px;
    }
    @media screen and ${theme.iphone12Pro} {
      font-size: 24px;
      margin-bottom: 0px;
      margin-top: 30px;
    }
  }
  p {
    font-size: 26px;
    line-height: 40px;
    margin-bottom: 50px;
    color: #999; 
    width: 70%;
    @media screen and ${theme.laptop} {
      font-size: 20px;
    }
    @media screen and ${theme.tablet} {
      width: 100%;
    }
    @media screen and ${theme.iphone12Pro} {
      font-size: 16px;
      line-height: 25px;
    }
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
    @media screen and ${theme.iphone12Pro} {
      width: 100%;
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
  @media screen and ${theme.tablet} {
    padding-top: 0;
    width: 80%;
    margin-top: 20px;
  }
  @media screen and ${theme.mobile} {
    margin-top: 0px;
    height: 100%;
  }
  h1 {
    font-size: 2.5rem;
    color: #555;
    @media screen and ${theme.laptop} {
      font-size: 26px;
    }
    @media screen and ${theme.iphone12Pro} {
      font-size: 24px;
    }
  }
  .about_skill_wrap {
    margin-top: 0px;
    display: flex;
    flex-wrap: wrap;
    @media screen and ${theme.mobile} {
      justify-content: space-between;
    }
    .about_skill_item {
      display: flex;
      flex-direction: column;
      color: #999;
      width: 35%;
      margin-right: 30px;
      margin-bottom: 20px;
      @media screen and ${theme.tablet} {
        width: 45%;
      }
      @media screen and ${theme.mobile} {
        width: 45%;
        text-shadow: 5px 5px 10px #fff,
        -5px -5px 10px #fff;
        margin-bottom: 0px;
        margin-right: 0;
      }
      h3 {
        font-size: 1.3rem;
        margin: 0;
        padding-bottom: 10px;
        border-bottom: 1px solid #ccc;
        @media screen and ${theme.laptop} {
          font-size: 18px;
        }
        @media screen and ${theme.mobile} {
          font-size: 16px;
          box-shadow: 0px 5px 5px -5px #fff;
        }
      }
      p {
        font-size: 1.1rem;
        @media screen and ${theme.laptop} {
          font-size: 16px;
        }
        @media screen and ${theme.mobile} {
          font-size: 14px;
          line-height: 20px;
        }
        @media screen and ${theme.iphone12Pro} {
          font-size: 12px;
          line-height: 15px;
        }
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
  @media screen and ${theme.tablet} {
    padding-top: 0;
    width: 80%;
    margin-top: 20px;
  }
  @media screen and ${theme.mobile} {
    margin-top: 0px;
    height: 100%;
  }
  h1 {
    font-size: 2.5rem;
    color: #555;
    @media screen and ${theme.laptop} {
      font-size: 26px;
    }
    @media screen and ${theme.iphone12Pro} {
      font-size: 24px;
    }
  }
  .about_experience_wrap {
    margin-top: 0px;
    display: flex;
    flex-wrap: wrap;
    @media screen and ${theme.mobile} {
      justify-content: space-between;
    }
    .about_experience_item {
      display: flex;
      flex-direction: column;
      color: #999;
      width: 35%;
      margin-right: 30px;
      margin-bottom: 20px;
      @media screen and ${theme.tablet} {
        width: 45%;
      }
      @media screen and ${theme.mobile} {
        width: 45%;
        text-shadow: 5px 5px 10px #fff,
        -5px -5px 10px #fff;
        margin-bottom: 0px;
        margin-right: 0;
      }
      h3 {
        font-size: 1.3rem;
        margin: 0;
        padding-bottom: 10px;
        border-bottom: 1px solid #ccc;
        @media screen and ${theme.laptop} {
          font-size: 18px;
        }
        @media screen and ${theme.mobile} {
          font-size: 16px;
          box-shadow: 0px 5px 5px -5px #fff;
        }
      }
      p {
        font-size: 1.1rem;
        @media screen and ${theme.laptop} {
          font-size: 16px;
        }
        @media screen and ${theme.mobile} {
          font-size: 14px;
          line-height: 20px;
        }
        @media screen and ${theme.iphone12Pro} {
          font-size: 12px;
          line-height: 15px;
        }
      }
    }
  }
`;

const LeftCircle = styled.div`
  position: absolute;
  bottom: -200px;
  left: -200px;
  width: 700px;
  height: 700px;
  z-index: -10;
  @media screen and ${theme.laptop} {
    width: 600px;
    height: 600px;
  }
  @media screen and ${theme.iphone12Pro} {
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
  width: 800px;
  height: 800px;
  right: -300px;
  z-index: -1;
  @media screen and ${theme.laptop} {
    width: 550px;
    height: 550px;
  }
  img {
    width: 100%;
    height: 100%;
    transition: 1s;
  }
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
      <div className='pattern'></div>
      <AboutMain>
        <AboutTitle>
          <h1 ref={titleRef} className='About'>About</h1>
          <Subtitle ref={subTitleRef}>
            <span className='me' onClick={clickMe} style={showMe ? {color: "#bbd3f8", borderBottom: "5px solid #bbd3f8"} : {color: "#ccc"}}>Me</span>
            <span className='skill' onClick={clickSkill} style={showSkill ? {color: "#bbd3f8", borderBottom: "5px solid #bbd3f8"} : {color: "#ccc"}}>Skill</span>
            <span className='experience' onClick={clickExperience} style={showExpereince ? {color: "#bbd3f8", borderBottom: "5px solid #bbd3f8", boxShadow: "0px 5px 5px -5px #fff"} : {color: "#ccc"}}>Experience</span>
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
      <LeftCircle>
        <img src={largeCircle} ref={leftCircleRef}/>
      </LeftCircle>
      <RightCircle>
        <img src={largeCircle} ref={rightCircleRef}/>
      </RightCircle>
    </Container>
  )
}

export default About;
