import React from 'react';
import { styled } from 'styled-components';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { homeArrow } from '../animation/animation';
import responsive from '../style/responsive';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  background-image: linear-gradient(#B0D2F5, #D6E6F5);
  position: relative;
  z-index: -10;
  @media screen and ${responsive.tablet} {
    border: 3px solid red;
  }
  @media screen and ${responsive.mobile} {
    border: 3px solid blue;
  }
`;

const HomeTitle = styled.header`
  h1 {
    font-size: 13rem;
    font-weight: 900;
    color: var(--white);
    -webkit-text-stroke: 5px var(--white);
    text-shadow: 0 0 20px var(--blue);
    letter-spacing: 5px;
  }
  @media screen and ${responsive.laptop} {
    h1 {
      font-size: 10rem;
    }
  }
  @media screen and ${responsive.tablet} {
    h1 {
      font-size: 8rem;
    }
  }
  @media screen and ${responsive.mobile} {
    h1 {
      font-size: 4rem;
      -webkit-text-stroke: 3px var(--white);
    }
  }
  @media screen and ${responsive.iphone12Pro} {
    h1 {
      font-size: 3rem;
      -webkit-text-stroke: 2px var(--white);
    }
  }
`;

const HomeSubTitle = styled.div`
  font-size: 4rem;
  font-weight: bold;
  color: var(--white);
  letter-spacing: 3px;
  text-shadow: 0 0 20px var(--blue);
  @media screen and ${responsive.tablet} {
    font-size: 3rem;
  }
  @media screen and ${responsive.mobile} {
    font-size: 2rem;
  }
  @media screen and ${responsive.mobile} {
    font-size: 1.5rem;
  }
`;

const HomeArrow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--blue);
  font-size: 5rem;
  position: absolute;
  bottom: 100px;
  animation: ${homeArrow} 1s ease-in-out infinite;
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
    bottom: 50px;
    span {
      font-size: 1.5rem;
    }
    .chevronDownBottom {
      transform: translateY(-20px);
    }
  }
`;


const Home = () => {
  return (
    <Container>
      <HomeTitle>
        <h1>
        YOON DONG SUNG
        </h1>
      </HomeTitle>
      <HomeSubTitle>PORTFOLIO</HomeSubTitle>
      <HomeArrow>
        <span>Scroll!</span>
        <FontAwesomeIcon className='chevronDownTop' icon={faChevronDown}/>
        <FontAwesomeIcon className='chevronDownBottom' icon={faChevronDown}/>
      </HomeArrow>
    </Container>
  )
}

export default Home;
