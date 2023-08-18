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
  background-image: url('https://images.unsplash.com/photo-1657870329074-e5c29e668d2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80');
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  z-index: -10;
`;

const HomeTitle = styled.header`
  span {
    display: inline-block;
    font-size: 15rem;
    font-weight: 900;
    color: var(--white);
    -webkit-text-stroke: 5px var(--white);
    text-shadow: 0 0 30px var(--sky-blue);
    letter-spacing: 5px;
    margin-right: 50px;
  }
  .yoon {
    // animation: ${homeTitle} 1s ease-in-out infinite;
    // animation-delay: 2s;
    transition: 1s;
  }
  .dong {
    // animation: ${homeTitle} 1s ease-in-out infinite;
    // animation-delay: 2.2s;
    transition: 1s;
    transition-delay: 0.3s;
  }
  .sung {
    // animation: ${homeTitle} 1s ease-in-out infinite;
    // animation-delay: 2.4s;
    transition: 1s;
    transition-delay: 0.6s;
  }
  @media screen and ${responsive.laptop} {
    span {
      font-size: 10rem;
    }
  }
  @media screen and ${responsive.tablet} {
    span {
      font-size: 8rem;
    }
  }
  @media screen and ${responsive.mobile} {
    span {
      font-size: 4rem;
      -webkit-text-stroke: 3px var(--white);
    }
  }
  @media screen and ${responsive.iphone12Pro} {
    span {
      font-size: 3rem;
      -webkit-text-stroke: 2px var(--white);
    }
  }
`;

const HomeSubTitle = styled.span`
  font-size: 5rem;
  font-weight: bold;
  color: var(--white);
  letter-spacing: 3px;
  text-shadow: 0 0 20px var(--sky-blue);
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

  useEffect(() => {
    homeTitleObserver.observe(yoonRef.current);
    homeTitleObserver.observe(dongRef.current);
    homeTitleObserver.observe(sungRef.current);
    return () => {
      homeTitleObserver.disconnect(); // 컴포넌트 언마운트 시 관찰 중단
    };
  }, []);
  return (
    <Container>
      <HomeTitle>
        <span ref={yoonRef} className='yoon'>YooN</span>
        <span ref={dongRef} className='dong'>DoNG</span>
        <span ref={sungRef} className='sung'>SuNG</span>
      </HomeTitle>
      <HomeSubTitle>PORTFOLIO</HomeSubTitle>
      <HomeArrow>
        <span>Scroll</span>
        <FontAwesomeIcon className='chevronDownTop' icon={faChevronDown}/>
        <FontAwesomeIcon className='chevronDownBottom' icon={faChevronDown}/>
      </HomeArrow>
    </Container>
  )
}

export default Home;
