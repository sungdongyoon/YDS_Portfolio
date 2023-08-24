import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import responsive from '../style/responsive';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
    color: var(--white);
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
    flex-direction: row;
    span {
      text-align: center;
    }
  }
`;

const ProjectModal = ({modalNum, closeModal}) => {


  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      axios.get('/projectDb.json')
        .then((res) => {
          setData(res.data.project);
        })
        .catch(error => {
          console.log(error);
        });
    };
    getData();
  }, []);
  console.log("데이터", data);
  return (
    <Container>
      {data.map((it) => (
        modalNum === it.id && 
        <Modal>
          <CloseBtn onClick={() => closeModal()}>닫기</CloseBtn>
          <div className='modal_wrap'>
            <Title>{it.name}{it.team && <span>team project</span>}</Title>
            <Content>{it.description}</Content>
            <Tag>
              {it.tag.map((tag) => (
                <span className='tag'>{tag}</span>
              ))}
            </Tag>
            <Links>
              <Link target='_blank' to={it.link}>
                <span className='site'>사이트 바로가기</span>
              </Link>
              <Link target='_blank' to={it.github}>
                <span className='github'>GitHub</span>
              </Link>
            </Links>
          </div>
        </Modal>
      ))}
    </Container>
  )
}

export default ProjectModal;
