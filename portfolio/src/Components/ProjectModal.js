import React from 'react';
import { styled } from 'styled-components';
import responsive from '../style/responsive';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
`;

const Modal = styled.div`
  width: 1200px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #18191F;
  position: relative;
  color: var(--white);
  .modal_wrap {
    width: 80%;
    height: 70%;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  @media screen and ${responsive.laptop} {
    width: 1000px;
  }
  @media screen and ${responsive.tablet} {
    width: 800px;
    height: 500px;
  }
  @media screen and ${responsive.mobile} {
    width: 450px;
    height: 600px;
  }
  @media screen and ${responsive.iphone12Pro} {
    width: 300px;
    height: 600px;
    .modal_wrap {
      height: 80%;
    }
  }
`;

const CloseBtn = styled.div`
  font-size: 2rem;
  position: absolute;
  top: 30px;
  right: 30px;
  cursor: pointer;
  @media screen and ${responsive.mobile} {
    font-size: 1.5rem;
  }
`;

const Title = styled.header`
  font-weight: bold;
  font-size: 5.5rem;
  display: flex;
  align-items: center;
  span {
    font-size: 2rem;
    color: var(--blue);
    margin-left: 30px;
    padding: 5px 10px;
    background-color: var(--white);
    border-radius: 30px;
  }
  @media screen and ${responsive.laptop} {
    font-size: 5rem;
  }
  @media screen and ${responsive.tablet} {
    font-size: 4rem;
    span {
      font-size: 1.5rem;
    }
  }
  @media screen and ${responsive.mobile} {
    font-size: 2.5rem;
    span {
      font-size: 1rem;
      margin-left: 10px;
    }
  }
`;

const Content = styled.span`
  height: 300px;
  font-size: 2rem;
  line-height: 50px;
  @media screen and ${responsive.laptop} {
    font-size: 1.7rem;
    line-height: 40px;
  }
  @media screen and ${responsive.tablet} {
    font-size: 1.5rem;
    line-height: 30px;
  }
  @media screen and ${responsive.mobile} {
    font-size: 1rem;
  }
  @media screen and ${responsive.iphone12Pro} {
    font-size: 1.2rem;
  }
`;

const Tag = styled.div`
  display: flex;
  gap: 30px;
  .tag {
    display: inline-block;
    height: 40px;
    font-size: 1.8rem;
    background-color: var(--gray);
    border-radius: 30px;
    padding: 0px 25px;
    line-height: 40px;
  }
  @media screen and ${responsive.laptop} {
    gap: 20px;
    .tag {
      height: 35px;
      font-size: 1.6rem;
      line-height: 35px;
    }
  }
  @media screen and ${responsive.tablet} {
    gap: 10px;
    .tag {
      height: 30px;
      font-size: 1.4rem;
      line-height: 30px;
    }
  }
  @media screen and ${responsive.mobile} {
    flex-wrap: wrap;
    .tag {
      height: 25px;
      font-size: 1.2rem;
      line-height: 25px;
    }
  }
`;

const Links = styled.div`
  display: flex;
  gap: 30px;
  span {
    display: inline-block;
    height: 40px;
    font-size: 2rem;
    padding: 0px 40px;
    line-height: 40px;
    cursor: pointer;
  }
  .site {
    background-color: var(--blue);
  }
  .github {
    background-color: var(--white);
    color: var(--black);
  }
  @media screen and ${responsive.laptop} {
    span {
      height: 35px;
      font-size: 1.6rem;
      line-height: 35px;
    }
  }
  @media screen and ${responsive.tablet} {
    span {
      height: 30px;
      font-size: 1.4rem;
      line-height: 30px;
    }
  }
  @media screen and ${responsive.mobile} {
    span {
      height: 25px;
      font-size: 1.2rem;
      line-height: 25px;
    }
  }
  @media screen and ${responsive.mobile} {
    flex-direction: column;
    span {
      text-align: center;
    }
  }
`;

const ProjectModal = ({modalNum, closeModal}) => {
  return (
    <Container>
      {modalNum === 1 && 
      <Modal>
        <CloseBtn onClick={() => closeModal()}>닫기</CloseBtn>
        <div className='modal_wrap'>
          <Title>Momentum</Title>
          <Content>
            자바스크립트를 공부하면서 배운 것들을 활용하여 만든
            Momentum 페이지입니다.<br/>
            랜덤 배경화면, 시계와 날짜, 랜덤 명언, TodoList, 날씨 정보가 포함되어있습니다.<br/>
            날씨 데이터는 OpenWeatherMap 사이트의 Weather API 데이터를 사용했습니다.
          </Content>
          <Tag>
            <span className='tag'>#HTML</span>
            <span className='tag'>#CSS</span>
            <span className='tag'>#JavaScript</span>
            <span className='tag'>#API</span>
          </Tag>
          <Links>
            <span className='site'>사이트 바로가기</span>
            <span className='github'>GitHub</span>
          </Links>
        </div>
      </Modal>
      }
      {modalNum === 2 && 
      <Modal>
        <div className='modal_wrap'>
          <CloseBtn onClick={() => closeModal()}>닫기</CloseBtn>
          <Title>우산있어?<span>team project</span></Title>
          <Content>
            갑작스런 비와 강렬한 햇살 문제를 해결하기 위한 우산&양산 대여 서비스입니다.<br/>
            HTML, CSS, JavaScript로 제작하였습니다.<br/>
          </Content>
          <Tag>
          <span className='tag'>#HTML</span>
            <span className='tag'>#CSS</span>
            <span className='tag'>#JavaScript</span>
            <span className='tag'>#JQuery</span>
            <span className='tag'>#API</span>
            <span className='tag'>#반응형</span>
          </Tag>
          <Links>
            <span className='site'>사이트 바로가기</span>
            <span className='github'>GitHub</span>
          </Links>
        </div>
      </Modal>
      }
      {modalNum === 3 && 
      <Modal>
        <div className='modal_wrap'>
          <CloseBtn onClick={() => closeModal()}>닫기</CloseBtn>
          <Title>WhatItIsnt</Title>
          <Content>
            리액트로 만든 와릿이즌 페이지입니다.<br/>
            메인 페이지와 인기 아이템 목록, 인기 아이템 상세목록 페이지, 로그인 기능을 구현했습니다.<br/>
            JSON데이터를 불러와 아이템 목록을 생성했으며 반응형으로 제작했습니다.
          </Content>
          <Tag>
            <span className='tag'>#react</span>
            <span className='tag'>#redux</span>
            <span className='tag'>#JSON</span>
            <span className='tag'>#반응형</span>
          </Tag>
          <Links>
            <span className='site'>사이트 바로가기</span>
            <span className='github'>GitHub</span>
          </Links>
        </div>
      </Modal>
      }
      {modalNum === 4 && 
      <Modal>
        <div className='modal_wrap'>
          <CloseBtn onClick={() => closeModal()}>닫기</CloseBtn>
          <Title>My Diary Book</Title>
          <Content>
            리액트로 만든 와릿이즌 페이지입니다.<br/>
            메인 페이지와 인기 아이템 목록, 인기 아이템 상세목록 페이지, 로그인 기능을 구현했습니다.<br/>
            JSON데이터를 불러와 아이템 목록을 생성했으며 반응형으로 제작했습니다.
          </Content>
          <Tag>
            <span className='tag'>#react</span>
            <span className='tag'>#redux</span>
            <span className='tag'>#JSON</span>
            <span className='tag'>#반응형</span>
          </Tag>
          <Links>
            <span className='site'>사이트 바로가기</span>
            <span className='github'>GitHub</span>
          </Links>
        </div>
      </Modal>
      }
      {modalNum === 5 && 
      <Modal>
        <div className='modal_wrap'>
          <CloseBtn onClick={() => closeModal()}>닫기</CloseBtn>
          <Title>Netflix</Title>
          <Content>
            리액트로 만든 와릿이즌 페이지입니다.<br/>
            메인 페이지와 인기 아이템 목록, 인기 아이템 상세목록 페이지, 로그인 기능을 구현했습니다.<br/>
            JSON데이터를 불러와 아이템 목록을 생성했으며 반응형으로 제작했습니다.
          </Content>
          <Tag>
            <span className='tag'>#react</span>
            <span className='tag'>#redux</span>
            <span className='tag'>#JSON</span>
            <span className='tag'>#반응형</span>
          </Tag>
          <Links>
            <span className='site'>사이트 바로가기</span>
            <span className='github'>GitHub</span>
          </Links>
        </div>
      </Modal>
      }
      {modalNum === 6 && 
      <Modal>
        <div className='modal_wrap'>
          <CloseBtn onClick={() => closeModal()}>닫기</CloseBtn>
          <Title>고양이 MBTI</Title>
          <Content>
            리액트로 만든 와릿이즌 페이지입니다.<br/>
            메인 페이지와 인기 아이템 목록, 인기 아이템 상세목록 페이지, 로그인 기능을 구현했습니다.<br/>
            JSON데이터를 불러와 아이템 목록을 생성했으며 반응형으로 제작했습니다.
          </Content>
          <Tag>
            <span className='tag'>#react</span>
            <span className='tag'>#redux</span>
            <span className='tag'>#JSON</span>
            <span className='tag'>#반응형</span>
          </Tag>
          <Links>
            <span className='site'>사이트 바로가기</span>
            <span className='github'>GitHub</span>
          </Links>
        </div>
      </Modal>
      }
      {modalNum === 7 && 
      <Modal>
        <div className='modal_wrap'>
          <CloseBtn onClick={() => closeModal()}>닫기</CloseBtn>
          <Title>YDS 포트폴리오</Title>
          <Content>
            리액트로 만든 와릿이즌 페이지입니다.<br/>
            메인 페이지와 인기 아이템 목록, 인기 아이템 상세목록 페이지, 로그인 기능을 구현했습니다.<br/>
            JSON데이터를 불러와 아이템 목록을 생성했으며 반응형으로 제작했습니다.
          </Content>
          <Tag>
            <span className='tag'>#react</span>
            <span className='tag'>#redux</span>
            <span className='tag'>#JSON</span>
            <span className='tag'>#반응형</span>
          </Tag>
          <Links>
            <span className='site'>사이트 바로가기</span>
            <span className='github'>GitHub</span>
          </Links>
        </div>
      </Modal>
      }
      {modalNum === 8 && 
      <Modal>
        <div className='modal_wrap'>
          <CloseBtn onClick={() => closeModal()}>닫기</CloseBtn>
          <Title>프로젝트</Title>
          <Content>
            리액트로 만든 와릿이즌 페이지입니다.<br/>
            메인 페이지와 인기 아이템 목록, 인기 아이템 상세목록 페이지, 로그인 기능을 구현했습니다.<br/>
            JSON데이터를 불러와 아이템 목록을 생성했으며 반응형으로 제작했습니다.
          </Content>
          <Tag>
            <span className='tag'>#react</span>
            <span className='tag'>#redux</span>
            <span className='tag'>#JSON</span>
            <span className='tag'>#반응형</span>
          </Tag>
          <Links>
            <span className='site'>사이트 바로가기</span>
            <span className='github'>GitHub</span>
          </Links>
        </div>
      </Modal>
      }
    </Container>
  )
}

export default ProjectModal;
