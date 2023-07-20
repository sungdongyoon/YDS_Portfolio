import React from 'react';
import { styled } from 'styled-components';

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
`;

const HeaderInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 50%;
  height: 100%;
  span {
    // margin-right: 200px;
    font-size: 16px;
    color: #999;
  }
`;

const Header = () => {
  return (
    <Container>
      <Logo>Logo</Logo>
      <HeaderInfo>
        <span className='email'>ehdtjd0906@naver.com</span>
        <span className='phone'>010-6312-5903</span>
      </HeaderInfo>
    </Container>
  )
}

export default Header;
