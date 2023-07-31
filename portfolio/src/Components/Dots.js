import React from 'react';
import { styled } from 'styled-components';
import theme from '../style/theme';

const DotsWrap = styled.div`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  right: 3%;
  z-index: 10;
  @media screen and ${theme.laptop} {
    right: 50px;
  }
`;

const Dot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  height: 400px;
  @media screen and ${theme.laptop} {
    height: 300px;
  }
`;

const DotTitle = styled.div`
  font-size: 60px;
  font-weight: bold;
  color: ${(props) => props.num === props.scrollIndex ? "#0079FF" : "#fff"};
  cursor: pointer;
  @media screen and ${theme.laptop} {
    font-size: 30px;
  }
  @media screen and ${theme.tablet} {
    display: none;
  }
`;

const Dots = ({scrollIndex, goHome, goAbout, goProject, goContact}) => {
  return (
    <DotsWrap>
      <Dot>
        <DotTitle onClick={goHome} className='dot' num={1} scrollIndex={scrollIndex}>HOME</DotTitle>
        <DotTitle onClick={goAbout} className='dot' num={2} scrollIndex={scrollIndex}>ABOUT</DotTitle>
        <DotTitle onClick={goProject} className='dot' num={3} scrollIndex={scrollIndex}>PROJECT</DotTitle>
        <DotTitle onClick={goContact} className='dot' num={4} scrollIndex={scrollIndex}>CONTACT</DotTitle>
      </Dot>
    </DotsWrap>
  )
}

export default Dots;
