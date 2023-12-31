import React from 'react';
import { styled } from 'styled-components';
import responsive from '../style/responsive';
import { useParams } from 'react-router-dom';

const NavWrap = styled.nav`
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
`;

const Nav = styled.div`
  display: ${(props) => props.scroll < 100 ? "flex" : "none"};
  justify-content: space-between;
  align-items: flex-end;
  gap: 80px;
  padding: 8px 20px;
  background-color: var(--sky-blue);
  border-radius: 50px;
  @media screen and ${responsive.tablet} {
    gap: 40px;
  }
  @media screen and ${responsive.mobile} {
    gap: 20px;
  }
  @media screen and ${responsive.iphone12Pro} {
    gap: 0px;
    padding: 5px 15px;
  }
`;

const NavTitle = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  color: var(--white);
  background-color: ${(props) => props.location === props.pagepath ? "var(--blue)" : "var(--sky-blue)"};
  border-radius: 50px;
  padding: 10px 20px;
  cursor: pointer;
  transition: 1s;
  @media screen and ${responsive.tablet} {
    font-size: 1.2rem;
  }
  @media screen and ${responsive.mobile} {
    font-size: 1rem;
    padding: 5px 15px;
  }
`;

const Navigation = ({goHome, goAbout, goWork, goContact, scroll}) => {
  const location = window.location.pathname;

  if (location.startsWith("/work/")) {
    return null;
  }
  
  return (
    <NavWrap>
      <Nav scroll={scroll}>
        <NavTitle onClick={goHome} pagepath="/" location={location}>HOME</NavTitle>
        <NavTitle onClick={goWork} pagepath="/work" location={location}>WORK</NavTitle>
        <NavTitle onClick={goAbout} pagepath="/about" location={location}>ABOUT</NavTitle>
        <NavTitle onClick={goContact} pagepath="/contact" location={location}>CONTACT</NavTitle>
      </Nav>
    </NavWrap>
  )
}

export default Navigation;
