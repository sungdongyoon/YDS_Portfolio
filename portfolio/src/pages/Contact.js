import React, {useRef, useEffect} from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import {titleObserver, contentObserver, leftCircleObserver, rightCircleObserver} from '../animation/animation';
import largeCircle from '../img/largeCircle.png';
import github_img from '../img/github_img.png';
import blog_img from '../img/blog_img.png';
import mail_img from '../img/mail_img.png';
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

const ContactMain = styled.main`
  width: 100%;
  height: 1000px;
  display: flex;
  position: relative;
  @media screen and ${theme.tablet} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media screen and ${theme.iphone12Pro} {
    height: 650px;
  }
`;

const ContactTitle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  top: 30%;
  left: 5%;
  @media screen and ${theme.laptop} {
    top: 35%;
  }
  @media screen and ${theme.tablet} {
    justify-content: flex-start;
    align-items: flex-start;
    top: 25%;
  }
  @media screen and ${theme.iphone12Pro} {
    top: 15%;
  }
  h1 {
    font-size: var(--page-title);
    font-weight: bold;
    color: var(--sky-blue);
    transition: 1s;
    @media screen and ${theme.laptop} {
      font-size: 12rem;
    }
    @media screen and ${theme.tablet} {
      font-size: 10rem;
    }
    @media screen and ${theme.mobile} {
      font-size: 7rem;
    }
    @media screen and ${theme.iphone12Pro} {
      font-size: 5rem;
    }
  }
`;

const ContactContent = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 200px;
  transition: 1.5s;
  @media screen and ${theme.tablet} {
    width: 80%;
    padding-top: 0;
    margin-top: 100px;
  }
  @media screen and ${theme.iphone12Pro} {
    margin-top: 0px;
  }
  p {
    width: 550px;
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
    line-height: 80px;
    color: var(--gray); 
    margin-left: 60px;
    @media screen and ${theme.laptop} {
      font-size: 2.4rem;
    }
    @media screen and ${theme.mobile} {
      width: 100%;
      font-size: 2rem;
      color: var(--gray);
      margin-left: 0px;
    }
  }
  .link_wrap {
    width: 550px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-left: 60px;
    text-align: center;
    @media screen and ${theme.mobile} {
      width: 100%;
      margin-left: 0px;
    }
    img {
      width: 100px;
      height: 100px;
      padding: 20px;
      cursor: pointer;
      @media screen and ${theme.laptop} {
        padding: 0;
        width: 60px;
        height: 60px;
      }
      @media screen and ${theme.mobile} {
        width: 40px;
        height: 40px;
      }
    }
  }
`

const Footer = styled.footer`
  height: 100px;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  @media screen and ${theme.mobile} {
    height: 80px;
  }
  p {
    font-size: 2rem;
    color: var(--gray);
    text-align: center;
    @media screen and ${theme.mobile} {
      font-size: 1.2rem;
    }
  }
`;

const LeftCircle = styled.div`
  position: absolute;
  bottom: -200px;
  left: -200px;
  width: 600px;
  height: 600px;
  z-index: -10;
  @media screen and ${theme.laptop} {
    width: 500px;
    height: 500px;
  }
  @media screen and ${theme.mobile} {
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
  @media screen and ${theme.laptop} {
    width: 550px;
    height: 550px;
  }
  @media screen and ${theme.mobile} {
    width: 400px;
    height: 400px;
  }
  img {
    width: 100%;
    height: 100%;
    transition: 1s;
  }
`;

const Contact = ({goHome}) => {
  const titleRef = useRef();
  const contentRef = useRef();
  const leftCircleRef = useRef();
  const rightCircleRef = useRef();
  useEffect(() => {
    titleObserver.observe(titleRef.current);
    contentObserver.observe(contentRef.current);
    leftCircleObserver.observe(leftCircleRef.current);
    rightCircleObserver.observe(rightCircleRef.current);
  })
  return (
    <Container>
      <div className='pattern'></div>
      <ContactMain>
        <ContactTitle>
          <h1 ref={titleRef}>Contact</h1>
        </ContactTitle>
        <ContactContent ref={contentRef}>
          <p>궁금하신 사항이나<br/> 저의 부족한 부분에 대한 피드백이 있으시면 <br/> 언제든 연락주시면 감사하겠습니다.</p>
          <div className='link_wrap'>
            <Link to='https://github.com/sungdongyoon'>
              <img src={github_img}/>
            </Link>
            <Link to="https://dongyoons.tistory.com/">
              <img src={blog_img}/>
            </Link>
            <img src={mail_img} onClick={goHome}/>
          </div>
        </ContactContent>
      </ContactMain>
      <LeftCircle>
        <img src={largeCircle} ref={leftCircleRef}/>
      </LeftCircle>
      <RightCircle>
        <img src={largeCircle} ref={rightCircleRef}/>
      </RightCircle>
      <Footer>
        <p>본 페이지는 상업적 목적이 아닌 개인 포트폴리오용으로 제작되었습니다.<br/>© 2023 Yoon DongSung. All Rights Reserved.</p>
      </Footer>
    </Container>
  )
}

export default Contact;
