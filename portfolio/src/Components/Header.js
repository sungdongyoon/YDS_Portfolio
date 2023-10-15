import React from 'react';
import { styled } from 'styled-components';
import { useSelector } from 'react-redux';
import responsive from '../style/responsive';
import logo from '../img/logo.png';

const Container = styled.header`
  height: 80px;
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
    height: 60px;
  }
`;

const Logo = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 100%;
  color: var(--gray);
  cursor: pointer;
  img {
    width: 80px;
  }
  @media screen and ${responsive.mobile} {
    margin-left: 30px;
  }
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
    font-size: 1.2rem;
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
    background-color: ${(props) => props.toggle ? "#fff" : "var(--gray)"};
    transition: 1s;
    transform: ${(props) => props.toggle ? "translateY(10px) rotate(45deg)" : "rotate(0) translateY(0)"};
  }
  .tobbleBtn_m {
    position: absolute;
    top: 50%;
    border-radius: 20px;
    transform: translateY(-50%);
    opacity: ${(props) => props.toggle ? "0" : "1"};
  }
  .tobbleBtn_b {
    position: absolute;
    bottom: 0;
    border-radius: 20px;
    background-color: ${(props) => props.toggle ? "#fff" : "var(--gray)"};
    transition: 1s;
    transform: ${(props) => props.toggle ? "translateY(-8px) rotate(-45deg)" : "rotate(0) translateY(0)"};
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
  transform: ${(props) => props.toggle ? "translateX(0)" : `translateX(${window.innerWidth}px)`};
  .nav_menu_info {
    position: absolute;
    top: 30px;
    left: 30px;
    display: flex;
    flex-direction: column;
    color: var(--white);
    .nav_logo {
      margin-bottom: 30px;
      img {
        width: 130px;
        filter: invert(100%);
      }
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
      font-size: 4rem;
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
        font-size: 3.5rem;
      }
    }
  }
`;

const Header = ({handleToggle, goHome, goAbout, goWork, goContact}) => {
  const isToggle = useSelector((state) => state.isToggle);

  return (
    <Container>
      <Logo onClick={goHome}>
        <img src={logo} alt='logo'/>
      </Logo>
      <HeaderInfo>
        <span className='email'>ehdtjd0906@naver.com</span>
        <span className='phone'>+82 10-6312-5903</span>
      </HeaderInfo>
      <ToggleBtn onClick={handleToggle} toggle={isToggle}>
        <span className='tobbleBtn_t' toggle={isToggle}></span>
        <span className='tobbleBtn_m' toggle={isToggle}></span>
        <span className='tobbleBtn_b' toggle={isToggle}></span>
      </ToggleBtn>
      <MobileNavMenu toggle={isToggle}>
        <div className='nav_menu_info'>
          <span className='nav_logo'>
            <img src={logo} alt={logo}/>
          </span>
          <span>ehdtjd0906@naver.com</span>
          <span>+82 10-6312-5903</span>
        </div>
        <ul>
          <li onClick={goHome}>HOME</li>
          <li onClick={goWork}>WORK</li>
          <li onClick={goAbout}>ABOUT</li>
          <li onClick={goContact}>CONTACT</li>
        </ul>
      </MobileNavMenu>
    </Container>
  )
}

export default Header;
