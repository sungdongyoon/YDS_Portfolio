import React, {useRef, useEffect, useState} from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { getContactImg } from './util';
import {titleObserver, contentObserver, leftCircleObserver, rightCircleObserver} from '../animation/animation';
import EmailModal from '../Components/EmailModal';
import responsive from '../style/responsive';

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(var(--white), #B0D2F5);
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
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 50px;
  margin-top: 100px;
  position: relative;
  @media screen and ${responsive.tablet} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media screen and ${responsive.iphone12Pro} {
    height: 650px;
  }
`;

const ContactTitle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  @media screen and ${responsive.laptop} {
    top: 35%;
  }
  @media screen and ${responsive.tablet} {
    justify-content: flex-start;
    align-items: flex-start;
    top: 25%;
  }
  @media screen and ${responsive.iphone12Pro} {
    top: 15%;
  }
  h1 {
    font-size: 7rem;
    -webkit-text-stroke: 1px var(--blue);
    font-weight: bold;
    color: var(--blue);
    transition: 1s;
    @media screen and ${responsive.laptop} {
      font-size: 12rem;
    }
    @media screen and ${responsive.tablet} {
      font-size: 10rem;
    }
    @media screen and ${responsive.mobile} {
      font-size: 7rem;
    }
    @media screen and ${responsive.iphone12Pro} {
      font-size: 5rem;
    }
  }
`;

const ContactContent = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  transition: 1.5s;
  @media screen and ${responsive.tablet} {
    width: 80%;
    padding-top: 0;
    margin-top: 100px;
  }
  @media screen and ${responsive.iphone12Pro} {
    margin-top: 0px;
  }
  .contact_wrap {
    width: 85%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    position: relative;
    p {
      font-size: 2.5rem;
      font-weight: bold;
      color: var(--gray); 
      line-height: 70px;
      @media screen and ${responsive.laptop} {
        font-size: 2.4rem;
      }
      @media screen and ${responsive.mobile} {
        width: 100%;
        font-size: 2rem;
        color: var(--gray);
      }
    }
    img {
      border-radius: 30px;
      position: absolute;
      right: 0;
      top: 0;
      transform: scaleX(-1);
    }
  }
  .link_wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    position: relative;
    @media screen and ${responsive.mobile} {
      width: 100%;
    }
    .link_item {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      height: 50px;
      color: var(--black);
      font-size: 2rem;
      padding: 0 20px;
      background-color: var(--white);
      cursor: pointer;
    }
    img {
      width: 30px;
    }
  }
`

const Footer = styled.footer`
  height: 100px;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  @media screen and ${responsive.mobile} {
    height: 80px;
  }
  p {
    font-size: 2rem;
    color: var(--gray);
    text-align: center;
    @media screen and ${responsive.mobile} {
      font-size: 1.2rem;
    }
  }
`;


const Contact = () => {
  const [isModal, setIsModal] = useState(false);
  const showModal = () => {
    setIsModal(!isModal);
  }
  const closeModal = () => {
    setIsModal(false);
  }

  const titleRef = useRef();
  const contentRef = useRef();
  useEffect(() => {
    titleObserver.observe(titleRef.current);
    contentObserver.observe(contentRef.current);
  })
  return (
    <Container>
      <div className='pattern'></div>
      <ContactMain>
        <ContactTitle>
          <h1 ref={titleRef}>Contact Me</h1>
        </ContactTitle>
        <ContactContent ref={contentRef}>
          <div className='contact_wrap'>
            <p>궁금하신 사항이나<br/> 저의 부족한 부분에 대한 피드백이 있으시면 <br/> 언제든 연락주시면 감사하겠습니다.</p>
            <img src={getContactImg(4)}/>
          </div>
          <div className='link_wrap'>
            <Link className='link_item github' to='https://github.com/sungdongyoon'>
              <img src={getContactImg(1)} alt='githubIcon'/>
              GitHub
            </Link>
            <Link className='link_item blog' to="https://dongyoons.tistory.com/">
              <img src={getContactImg(2)} alt='blogIcon'/>
              Blog
            </Link>
            <div className='link_item email' onClick={showModal}>
              <img src={getContactImg(3)} alt='emailIcon'/>
              메일 보내기
            </div>
          </div>
        </ContactContent>
        {isModal && <EmailModal closeModal={closeModal}/>}
      </ContactMain>
      <Footer>
        <p>본 페이지는 상업적 목적이 아닌 개인 포트폴리오용으로 제작되었습니다.<br/>© 2023 Yoon DongSung. All Rights Reserved.</p>
      </Footer>
    </Container>
  )
}

export default Contact;
