import React from 'react';
import { styled } from 'styled-components';
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
  @media screen and ${theme.laptop} {
    font-size: 18px;
  }
  @media screen and ${theme.mobile} {
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
  @media screen and ${theme.mobile} {
    width: 30%;
    font-size: 25px;
  }
`;

const HeaderInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 100%;
  @media screen and ${theme.mobile} {
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

const Header = () => {
  return (
    <Container>
      <Logo>Logo</Logo>
      <HeaderInfo>
        <span className='email'>ehdtjd0906@naver.com</span>
        <span className='phone'>+82 10-6312-5903</span>
      </HeaderInfo>
      {window.innerWidth < 1024 &&
        <span>hi</span>
      }
    </Container>
  )
}

export default Header;
