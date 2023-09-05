import React from 'react';
import { styled } from 'styled-components';
import { homeTitle, homeSubTitle, homeSubTitle2 } from '../animation/animation';
import { motion } from 'framer-motion';
import responsive from '../style/responsive';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  background-image: url('https://images.unsplash.com/photo-1615840636404-0f2412fd2732?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=706&q=80');
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  z-index: -10;
`;

const HomeTitle = styled(motion.header)`
  margin: 0 auto;
  div {
    display: inline-block;
    margin-right: 50px;
    span {
      display: inline-block;
      font-size: 15rem;
      font-weight: 900;
      color: var(--white);
      -webkit-text-stroke: 5px var(--white);
      text-shadow: 0 0 30px var(--sky-blue);
      letter-spacing: 5px;
      animation: ${homeTitle} 1s linear;
      animation-fill-mode: forwards;
      transition: 1s;
      opacity: 0;
    }
  }
  .yoon {
    opacity: 1;
    span {
      &:nth-child(1) {
        transform: rotate(5deg);
        animation-delay: 0.1s;
      }
      &:nth-child(2) {
        animation-delay: 0.2s;
      }
      &:nth-child(3) {
        animation-delay: 0.3s;
      }
      &:nth-child(4) {
        transform: rotate(-5deg);
        animation-delay: 0.4s;
      } 
    }
  }
  .dong {
    opacity: 1;
    span {
      &:nth-child(1) {
        transform: rotate(5deg);
        animation-delay: 0.5s;
      }
      &:nth-child(2) {
        animation-delay: 0.6s;
      }
      &:nth-child(3) {
        transform: rotate(-5deg);
        animation-delay: 0.7s;
      }
      &:nth-child(4) {
        transform: rotate(5deg);
        animation-delay: 0.8s;
      } 
    }
  }
  .sung {
    margin-right: 0;
    opacity: 1;
    span {
      &:nth-child(1) {
        transform: rotate(-5deg);
        animation-delay: 0.9s;
      }
      &:nth-child(2) {
        animation-delay: 1s;
      }
      &:nth-child(3) {
        transform: rotate(5deg);
        animation-delay: 1.1s;
      }
      &:nth-child(4) {
        transform: rotate(5deg);
        animation-delay: 1.2s;
      } 
    }
  }
  @media screen and ${responsive.laptop} {
    div {
      span {
        font-size: 10rem;
      }
    }
  }
  @media screen and ${responsive.tablet} {
    div {
      span {
        font-size: 8rem;
      }
    }
  }
  @media screen and ${responsive.mobile} {
    div {
      margin-right: 20px;
      span {
        font-size: 4.5rem;
        -webkit-text-stroke: 3px var(--white);
      }
    }
  }
  @media screen and ${responsive.iphone12Pro} {
    div {
      margin-right: 10px;
      span {
        font-size: 3.5rem;
        -webkit-text-stroke: 2px var(--white);
      }
    }
  }
`;

const HomeSubTitle = styled.div`
  opacity: 0;
  animation: ${homeSubTitle} 1.5s;
  animation-delay: 2s;
  animation-fill-mode: forwards;
  transition: 1s;
  span {
    display: inline-block;
    font-size: 5rem;
    font-weight: bold;
    color: var(--white);
    letter-spacing: 3px;
    text-shadow: 0 0 20px var(--sky-blue);
    animation: ${homeSubTitle2} 1.5s infinite;
    &:nth-child(1) {
      animation-delay: 2s;
    }
    &:nth-child(2) {
      animation-delay: 2.1s;
    }
    &:nth-child(3) {
      animation-delay: 2.2s;
    }
    &:nth-child(4) {
      animation-delay: 2.3s;
    }
    &:nth-child(5) {
      animation-delay: 2.4s;
    }
    &:nth-child(6) {
      animation-delay: 2.5s;
    }
    &:nth-child(7) {
      animation-delay: 2.6s;
    }
    &:nth-child(8) {
      animation-delay: 2.7s;
    }
    &:nth-child(9) {
      animation-delay: 2.8s;
    }
  }
  @media screen and ${responsive.tablet} {
    span {
      font-size: 3rem;
    }
  }
  @media screen and ${responsive.mobile} {
    span {
      font-size: 2rem;
    }
  }
  @media screen and ${responsive.iphone12Pro} {
    span {
      font-size: 1.5rem;
    }
  }
`;

const Home = () => {
  return (
    <Container>
      <HomeTitle>
        <div className='yoon'>
          <span>Y</span>
          <span>o</span>
          <span>o</span>
          <span>N</span>
        </div>
        <div className='dong'>
          <span>D</span>
          <span>o</span>
          <span>N</span>
          <span>G</span>
        </div>
        <div className='sung'>
          <span>S</span>
          <span>u</span>
          <span>N</span>
          <span>G</span>
        </div>
      </HomeTitle>
      <HomeSubTitle>
        <span>P</span>
        <span>O</span>
        <span>R</span>
        <span>T</span>
        <span>F</span>
        <span>O</span>
        <span>L</span>
        <span>I</span>
        <span>O</span>
      </HomeSubTitle>
    </Container>
  )
}

export default Home;
