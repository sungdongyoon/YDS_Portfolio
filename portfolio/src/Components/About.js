import React from 'react';
import { styled } from 'styled-components';


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const ContentWrap = styled.div`
  width: 70%;
  height: 600px;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  width: 40%;
  height: 100%;
  text-align: right;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 160px;
    color: #BBD3F8;
    margin: 0;
  }
  span {
    font-size: 80px;
    font-weight: bold;
    color: #BBD3F8;
  }
`;

const Content = styled.div`
  width: 50%;
  h1 {
    font-size: 50px;
    margin-top: 130px;
  }
  p {
    font-size: 26px;
    color: #999;
    margin-bottom: 100px;
  }
`;

const SubContent = styled.div`
  .sub_title {
    display: block;
    font-weight: bold;
    color: #777;
    font-size: 26px;
    margin-bottom: 20px;
  }
  .sub_content {
    font-size: 20px;
    color: #999;
  }
`;

const Menu = styled.div`
  width: 20%;
  display: flex;
  justify-content: flex-end;
  text-align: right;
  ul {
    list-style: none;
    li {
      margin: 20px 0;
      font-size: 40px;
      color: #999;
    }
    .about {
      font-weight: bold;
      color: #0079FF;
    }
  }
`;

const Large = styled.div`
  width: 800px;
  height: 800px;
  border-radius: 50%;
  background-color: #BBD3F8;
  position: absolute;
  bottom: -20%;
  left: -10%;
`;

const Medium = styled.div`
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background-color: #BBD3F8;
  position: absolute;
  right: -10%;
  z-index: -1;
`;



const About = () => {
  return (
    <Container>
      <ContentWrap>
        <Title>
          <h1>About</h1>
          <span>Me</span>
        </Title>
        <Content>
          <h1>프론트엔드 개발자를 꿈꾸는<br/> 윤동성 입니다.</h1>
          <p>여기어때는 여행뿐만 아니라 여가의 모든 순간을 책임질 수 있도록
              숙박, 항공, 액티비티, 렌터카, 맛집, 모바일 티켓 등
              원스톱 여행 플랫폼을 만들고 있어요.
          </p>
          <SubContent>
            <span className='sub_title'>사용 가능한 기술은</span>
            <span className='sub_content'>HTML, CSS, SCSS, JavaScript, TypeScript, React, Redux<br/>Github, Figma, PhotoShop</span>
          </SubContent>
        </Content>
      </ContentWrap>
      <Menu>
        <ul>
          <li className='home'>HOME</li>
          <li className='about'>ABOUT</li>
          <li className='project'>PROJECT</li>
          <li className='contact'>CONTACT</li>
        </ul>
      </Menu>
      <Large></Large>
      <Medium></Medium>
    </Container>
  )
}

export default About;
