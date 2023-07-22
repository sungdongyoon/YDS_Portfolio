import React from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const ProjectMain = styled.div`
  width: 90%;
  height: 1000px;
  display: flex;
  justify-content: space-evenly;
`;

const ProjectTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  h1 {
    font-size: 170px;
    margin: 0;
    color: #bbd3f8;
  }
`;

const ProjectContent = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 200px;
  border: 1px solid red;
`;

const ProjectWrap = styled.div`
  border: 1px solid red;
`;

const Project = () => {
  return (
    <Container>
      <ProjectMain>
        <ProjectTitle>
          <h1>Project</h1>
          <div className='slide_arrow'>🔚 1 / 2 🔜</div>
        </ProjectTitle>
        <ProjectContent>
          <span>* 제목 클릭 시 해당 페이지로 이동합니다.</span>
          <ProjectWrap>
            d
          </ProjectWrap>
        </ProjectContent>
      </ProjectMain>
    </Container>
  )
}

export default Project;
