import React, { useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { homeTitle, homeArrow, homeTitleObserver } from '../animation/animation';
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

const HomeTitle = styled.header`
margin: 0 auto;
  div {
    display: inline-block;
    margin-right: 50px;
    transition: 1s;
    span {
      display: inline-block;
      font-size: 15rem;
      font-weight: 900;
      color: var(--white);
      -webkit-text-stroke: 5px var(--white);
      text-shadow: 0 0 30px var(--sky-blue);
      letter-spacing: 5px;
    }
  }
  .yoon {
    span {
      &:nth-child(1) {
        transform: rotate(5deg);
      }
      &:nth-child(4) {
        transform: rotate(-5deg);
      } 
    }
  }
  .dong {
    transition-delay: 0.4s;
    span {
      &:nth-child(1) {
        transform: rotate(5deg);
      }
      &:nth-child(3) {
        transform: rotate(-5deg);
      }
      &:nth-child(4) {
        transform: rotate(5deg);
      } 
    }
  }
  .sung {
    margin-right: 0;
    transition-delay: 0.8s;
    span {
      &:nth-child(1) {
        transform: rotate(-5deg);
      }
      &:nth-child(3) {
        transform: rotate(5deg);
      }
      &:nth-child(4) {
        transform: rotate(5deg);
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
      span {
        font-size: 4rem;
        -webkit-text-stroke: 3px var(--white);
      }
    }
  }
  @media screen and ${responsive.iphone12Pro} {
    div {
      span {
        font-size: 3rem;
        -webkit-text-stroke: 2px var(--white);
      }
    }
  }
`;

const HomeSubTitle = styled.span`
  transition: 1s;
  span {
    display: inline-block;
    font-size: 5rem;
    font-weight: bold;
    color: var(--white);
    letter-spacing: 3px;
    text-shadow: 0 0 20px var(--sky-blue);
    animation: ${homeTitle} 1.5s infinite;
    &:nth-child(1) {
      animation-delay: 1.1s;
    }
    &:nth-child(2) {
      animation-delay: 1.2s;
    }
    &:nth-child(3) {
      animation-delay: 1.3s;
    }
    &:nth-child(4) {
      animation-delay: 1.4s;
    }
    &:nth-child(5) {
      animation-delay: 1.5s;
    }
    &:nth-child(6) {
      animation-delay: 1.6s;
    }
    &:nth-child(7) {
      animation-delay: 1.7s;
    }
    &:nth-child(8) {
      animation-delay: 1.8s;
    }
    &:nth-child(9) {
      animation-delay: 1.9s;
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
  @media screen and ${responsive.mobile} {
    span {
      font-size: 1.5rem;
    }
  }
`;

const HomeArrow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--blue);
  font-size: 5rem;
  position: absolute;
  bottom: 50px;
  animation: ${homeArrow} 2s ease-in-out infinite;
  span {
    font-size: 2.5rem;
  }
  .chevronDownTop {
    display: block;
  }
  .chevronDownBottom {
    display: block;
    transform: translateY(-30px);
  }
  @media screen and ${responsive.laptop} {
    font-size: 4rem;
    span {
      font-size: 2rem;
    }
  }
  @media screen and ${responsive.mobile} {
    font-size: 3rem;
    span {
      font-size: 1.5rem;
    }
    .chevronDownBottom {
      transform: translateY(-20px);
    }
  }
`;


const Home = () => {
  const yoonRef = useRef();
  const dongRef = useRef();
  const sungRef = useRef();
  const subTitleRef = useRef();

  useEffect(() => {
    homeTitleObserver.observe(yoonRef.current);
    homeTitleObserver.observe(dongRef.current);
    homeTitleObserver.observe(sungRef.current);
    homeTitleObserver.observe(subTitleRef.current);
    return () => {
      homeTitleObserver.disconnect(); // 컴포넌트 언마운트 시 관찰 중단
    };
  }, []);
  return (
    <Container>
      <HomeTitle>
        <div ref={yoonRef} className='yoon'>
          <span>Y</span>
          <span>o</span>
          <span>o</span>
          <span>N</span>
        </div>
        <div ref={dongRef} className='dong'>
          <span>D</span>
          <span>o</span>
          <span>N</span>
          <span>G</span>
        </div>
        <div ref={sungRef} className='sung'>
          <span>S</span>
          <span>u</span>
          <span>N</span>
          <span>G</span>
        </div>
      </HomeTitle>
      <HomeSubTitle ref={subTitleRef}>
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
      <HomeArrow>
        <span>Scroll</span>
        <FontAwesomeIcon className='chevronDownTop' icon={faChevronDown}/>
        <FontAwesomeIcon className='chevronDownBottom' icon={faChevronDown}/>
      </HomeArrow>
    </Container>
  )
}

export default Home;
