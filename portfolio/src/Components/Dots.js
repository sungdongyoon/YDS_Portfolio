import React from 'react';
import { styled } from 'styled-components';

const DotsWrap = styled.div`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  right: 100px;
`;

const Dot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  height: 400px;
`;

const DotTitle = styled.div`
  font-size: 60px;
  font-weight: bold;
  color: ${(props) => props.num === props.scrollIndex ? "#0079FF" : "#999"};
`;

const Dots = ({scrollIndex}) => {
  return (
    <DotsWrap>
      <Dot>
        <DotTitle className='dot' num={1} scrollIndex={scrollIndex}>HOME</DotTitle>
        <DotTitle className='dot' num={2} scrollIndex={scrollIndex}>ABOUT</DotTitle>
        <DotTitle className='dot' num={3} scrollIndex={scrollIndex}>PROJECT</DotTitle>
        <DotTitle className='dot' num={4} scrollIndex={scrollIndex}>CONTACT</DotTitle>
      </Dot>
    </DotsWrap>
  )
}

export default Dots;
