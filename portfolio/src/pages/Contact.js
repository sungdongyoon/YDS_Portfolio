import React from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import largeCircle from '../img/largeCircle.png';
import github_img from '../img/github_img.png';
import blog_img from '../img/blog_img.png';
import mail_img from '../img/mail_img.png';

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
  // justify-content: space-evenly;
`;

const ContactTitle = styled.div`
width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  h1 {
    font-size: 170px;
    margin: 0;
    color: #bbd3f8;
  }
`;

const ContactContent = styled.div`
  width: 36%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 200px;
  p {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    line-height: 80px;
    color: #999; 
    width: 550px;
    margin-left: 60px;
  }
  .link_wrap {
    text-align: center;
    width: 550px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-left: 60px;
    img {
      width: 60px;
      heigiht: 60px;
      padding: 20px;
      cursor: pointer;
    }
  }
`;

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100px;
  p {
    text-align: center;
    color: #777;
    font-size: 18px;
  }
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

const Contact = () => {
  return (
    <Container>
      <ContactMain>
        <ContactTitle>
          <h1>Contact</h1>
        </ContactTitle>
        <ContactContent>
          <p>궁금하신 사항이나<br/> 저의 부족한 부분에 대한 피드백이 있으시면 <br/> 언제든 연락주시면 감사하겠습니다.</p>
          <div className='link_wrap'>
            <Link to='https://github.com/sungdongyoon'>
              <img src={github_img}/>
            </Link>
            <Link to="https://dongyoons.tistory.com/">
              <img src={blog_img}/>
            </Link>
            <img src={mail_img}/>
          </div>
        </ContactContent>
      </ContactMain>
      <SmallCircle src={largeCircle}/>
      <LargeCircle src={largeCircle}/>
      <Footer>
        <p>본 페이지는 상업적 목적이 아닌 개인 포트폴리오용으로 제작되었습니다.<br/>© 2023 Yoon DongSung. All Rights Reserved.</p>
      </Footer>
    </Container>
  )
}

export default Contact;
