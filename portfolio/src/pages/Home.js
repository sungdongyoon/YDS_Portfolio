import React from 'react';
import { styled } from 'styled-components';
import home_img from '../img/home_img.png';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;
  gap: 50px;
`;

const HomeTitle = styled.header`
  font-size: 100px;
  font-weight: bold;
  text-shadow: 0 0 20px #bbd3f8;
`;

const HomeSubTitle = styled.div`
  font-size: 40px;
  font-weight: bold;
  text-shadow: 0px 0px 10px #bbd3f8;
`;

const Home = () => {
  return (
    <Container>
      <HomeTitle>Yoon DONGSUNG</HomeTitle>
      <HomeSubTitle>PORTFOLIO</HomeSubTitle>
    </Container>
  )
}

export default Home;
