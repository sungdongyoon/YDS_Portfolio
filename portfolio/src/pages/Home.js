import React from 'react';
import { styled } from 'styled-components';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { homeArrow } from '../animation/animation';

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
`;

const HomeSubTitle = styled.div`
  font-size: 4rem;
  font-weight: bold;
  color: var(--white);
  text-shadow: 0 0 20px var(--blue);
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
  border: 1px solid red;
  span {
    font-size: 2.5rem;
  }
  .chevronDownTop {
    display: block;
    transform: translateY(30px);
  }
  .chevronDownBottom {
    display: block;
  }
`;

const Bubble = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: 50%;
  background-color: var(--sky-blue);
  position: absolute;
  left: ${(props) => props.left}%;
  right: ${(props) => props.right}%;
  top: ${(props) => props.top}%;
  z-index: -1;
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
      {/* <Bubble width={800} height={800} left={50} top={50} color={'blue'}/> */}
    </Container>
  )
}

export default Home;
