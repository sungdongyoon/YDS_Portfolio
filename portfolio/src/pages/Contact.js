import React, {useRef, useEffect} from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import {titleObserver, subTitleObserver, contentObserver, leftCircleObserver, rightCircleObserver} from '../animation/animation';
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
`;

const ContactMain = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
  @media screen and ${theme.tablet} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media screen and ${theme.mobile} {
    height: 650px;
  }
`;

const ContactTitle = styled.div`
  width: 30%;
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
`;

const ContactContent = styled.div`
  width: 36%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 200px;
  transition: 1.5s;
  @media screen and ${theme.tablet} {
    padding-top: 0;
    margin-top: 10px;
    width: 80%;
  }
  p {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    line-height: 80px;
    color: #999; 
    width: 550px;
    margin-left: 60px;
    @media screen and ${theme.laptop} {
      font-size: 24px;
    }
    @media screen and ${theme.mobile} {
      font-size: 18px;
      width: 100%;
      margin-left: 0px;
      color: #555;
    }
  }
  .link_wrap {
    text-align: center;
    width: 550px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-left: 60px;
    @media screen and ${theme.mobile} {
      width: 100%;
      margin-left: 0px;
    }
    img {
      width: 80px;
      height: 80px;
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
`;

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100px;
  @media screen and ${theme.mobile} {
    height: 80px;
  }
  p {
    text-align: center;
    color: #777;
    font-size: 18px;
    @media screen and ${theme.mobile} {
      font-size: 12px;
    }
  }
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
