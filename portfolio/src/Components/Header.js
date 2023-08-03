import React, { useState } from 'react';
import { styled } from 'styled-components';
import { useSelector } from 'react-redux';
import theme from '../style/theme';

const Container = styled.div`
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
  @media screen and ${theme.laptop} {
    font-size: 18px;
  }
  @media screen and ${theme.iphone12Pro} {
    height: 80px;
  }
`;

const Logo = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 100%;
  font-size: 35px;
  font-weight: bold;
  color: #999;
  @media screen and ${theme.iphone12Pro} {
    width: 30%;
    font-size: 25px;
  }
`;

const HeaderInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 100%;
  @media screen and ${theme.tablet} {
    display: none;
  }
  span {
    margin-right: 50px;
    font-size: 16px;
    color: #999;
    @media screen and ${theme.laptop} {
      margin-right: 30px;
    }
  }
`;

const ToggleBtn = styled.div`
  display: none;
  position: absolute;
  right: 30px;
  color: #999;
  width: 30px;
  height: 20px;
  z-index: 100;
  span {
    display: inline-block;
    width: 30px;
    height: 3px;
    background-color: #999;
    cursor: pointer;
  }
  .tobbleBtn_t {
    position: absolute;
    top: 0;
    transition: 1s;
    border-radius: 20px;
    transform: ${(props) => props.isToggle ? "translateY(10px) rotate(45deg)" : "rotate(0) translateY(0)"};
    background-color: ${(props) => props.isToggle ? "#fff" : "#999"};
  }
  .tobbleBtn_m {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 20px;
    opacity: ${(props) => props.isToggle ? "0" : "1"};
  }
  .tobbleBtn_b {
    position: absolute;
    bottom: 0;
    transition: 1s;
    border-radius: 20px;
    transform: ${(props) => props.isToggle ? "translateY(-8px) rotate(-45deg)" : "rotate(0) translateY(0)"};
    background-color: ${(props) => props.isToggle ? "#fff" : "#999"};
  }
  @media screen and ${theme.tablet} {
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
  background-color: #000;
  color: #fff;
  transition: ${window.innerWidth < 768 ? '1s' : '1.5s'};
  transform: ${(props) => (props.isToggle ? "translateX(0px)" : `translateX(${window.innerWidth}px)`)};
  .nav_menu_info {
    position: absolute;
    top: 30px;
    left: 30px;
    display: flex;
    flex-direction: column;
    color: #999;
    .nav_logo {
      font-size: 30px;
      margin-bottom: 30px;
      color: #fff;
    }
    span {
      margin-bottom: 10px;
      font-size: 10px;
    }
  }
  ul {
    list-style: none;
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    li {
      font-size: 36px;
      font-weight: bold;
      color: #bbd3f8;
      cursor: pointer;
    }
  }
  @media screen and ${theme.tablet} {
    display: block;
  }
`;

const Header = ({scrollIndex, handleToggle, goHome, goAbout, goProject, goContact}) => {
  const isToggle = useSelector((state) => state.isToggle);
  // console.log("스크롤 넘버: ", scrollIndex);
  return (
    <Container>
      <Logo>Logo</Logo>
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
