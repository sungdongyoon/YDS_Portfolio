import React, { useState } from 'react';
import { styled } from 'styled-components';
import { useSelector } from 'react-redux';
import responsive from '../style/responsive';

const Container = styled.header`
  height: 100px;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  @media screen and ${responsive.laptop} {
    font-size: 1.8rem;
  }
  @media screen and ${responsive.iphone12Pro} {
    height: 80px;
  }
`;

const Logo = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 100%;
  font-size: 3.5rem;
  font-weight: bold;
  color: var(--gray);
  cursor: pointer;
  @media screen and ${responsive.iphone12Pro} {
    width: 30%;
    font-size: 2.5rem;
  }
`;

const HeaderInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 100%;
  @media screen and ${responsive.tablet} {
    display: none;
  }
  span {
    font-size: 1.6rem;
    color: var(--gray);
    margin-right: 50px;
    @media screen and ${responsive.laptop} {
      margin-right: 30px;
    }
  }
`;

const ToggleBtn = styled.div`
  display: none;
  position: absolute;
  right: 30px;
  width: 30px;
  height: 20px;
  color: var(--gray);
  z-index: 100;
  span {
    display: inline-block;
    width: 30px;
    height: 3px;
    background-color: var(--gray);
    cursor: pointer;
  }
  .tobbleBtn_t {
    position: absolute;
    top: 0;
    border-radius: 20px;
    background-color: ${(props) => props.isToggle ? "#fff" : "var(--gray)"};
    transition: 1s;
    transform: ${(props) => props.isToggle ? "translateY(10px) rotate(45deg)" : "rotate(0) translateY(0)"};
  }
  .tobbleBtn_m {
    position: absolute;
    top: 50%;
    border-radius: 20px;
    transform: translateY(-50%);
    opacity: ${(props) => props.isToggle ? "0" : "1"};
  }
  .tobbleBtn_b {
    position: absolute;
    bottom: 0;
    border-radius: 20px;
    background-color: ${(props) => props.isToggle ? "#fff" : "var(--gray)"};
    transition: 1s;
    transform: ${(props) => props.isToggle ? "translateY(-8px) rotate(-45deg)" : "rotate(0) translateY(0)"};
  }
  @media screen and ${responsive.tablet} {
    display: block;
  }
`;

const MobileNavMenu = styled.div`
  display: none;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  background-color: var(--black);
  color: var(--white);
  transition: ${window.innerWidth < 768 ? '1s' : '1.5s'};
  transform: ${(props) => (props.isToggle ? "translateX(0px)" : `translateX(${window.innerWidth}px)`)};
  .nav_menu_info {
    position: absolute;
    top: 30px;
    left: 30px;
    display: flex;
    flex-direction: column;
    color: var(--white);
    .nav_logo {
      font-size: 3rem;
      margin-bottom: 30px;
      color: var(--white);
    }
    span {
      margin-bottom: 10px;
      font-size: 1rem;
    }
  }
  ul {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 70px;
    li {
      font-size: 5rem;
      font-weight: bold;
      text-shadow: 0px 0px 20px var(--blue);
      -webkit-box-reflect: below -1vw -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(0.45, transparent), to(rgba(255, 255, 255, 0.25)));
      cursor: pointer;
    }
  }
  @media screen and ${responsive.tablet} {
    display: block;
  }
  @media screen and ${responsive.iphone12Pro} {
    ul {
      li {
        font-size: 3rem;
      }
    }
  }
`;

const Header = ({scrollIndex, handleToggle, goHome, goAbout, goProject, goContact}) => {
  const isToggle = useSelector((state) => state.isToggle);
  return (
    <Container>
      <Logo onClick={goHome}>Logo</Logo>
      <HeaderInfo>
        <span className='email'>ehdtjd0906@naver.com</span>
        <span className='phone'>+82 10-6312-5903</span>
      </HeaderInfo>
      <ToggleBtn onClick={handleToggle} isToggle={isToggle}>
        <span className='tobbleBtn_t' isToggle={isToggle}></span>
        <span className='tobbleBtn_m' isToggle={isToggle}></span>
        <span className='tobbleBtn_b' isToggle={isToggle}></span>
      </ToggleBtn>
      <MobileNavMenu isToggle={isToggle}>
        <div className='nav_menu_info'>
          <span className='nav_logo'>Logo</span>
          <span>ehdtjd0906@naver.com</span>
          <span>+82 10-6312-5903</span>
        </div>
        <ul>
          <li onClick={goHome} num={1} scrollIndex={scrollIndex}>HOME</li>
          <li onClick={goAbout} num={2} scrollIndex={scrollIndex}>ABOUT</li>
          <li onClick={goProject} num={3} scrollIndex={scrollIndex}>PROJECT</li>
          <li onClick={goContact} num={4} scrollIndex={scrollIndex}>CONTACT</li>
        </ul>
      </MobileNavMenu>
    </Container>
  )
}

export default Header;
