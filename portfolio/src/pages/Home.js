import React from 'react';
import { styled } from 'styled-components';
import home_img from '../img/home_img.png';

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #E3EEFF;
`;

const HomeContent = styled.div`
  width: 800px;
  h1 {
    font-size: 90px;
  }
  p {
    font-size: 30px;
    color: #999;
  }
  button {
    border: none;
    width: 200px;
    height: 50px;
    // background: linear-gradient(to right, #000 0%, #fff 50%, #000 100%);
    // background-size: 200%;
    background-color: #000;
    color: #fff;
    font-size: 20px;
    transition: 0.5s;
    cursor: pointer;
    &:hover {
      background-position: right center;
    }
  }
`;

const HomeImg = styled.div`
`;

const Home = () => {
  return (
    <Container>
      <HomeContent>
        <h1>Front-End<br/>Development</h1>
        <p>Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Vitae excepturi sequi facitiis
        </p>
        <button>more</button>
      </HomeContent>
      <HomeImg>
        <img src={home_img}/>
      </HomeImg>
    </Container>
  )
}

export default Home;
