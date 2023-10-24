import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { getProjectDetailGif } from '../Components/util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import responsive from '../style/responsive';
import axios from 'axios';

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, var(--white), rgba(0, 255, 255, 0.1));
  overflow: hidden;
  .backBtn {
    font-size: 3.5rem;
    color: var(--semi-gray);
    position: fixed;
    top: 15%;
    left: 5%;
    cursor: pointer;
  }
`;

const Wrap = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 100px;
  margin-bottom: 5%;
  padding: 50px;
  background-color: var(--sky-blue);
  border-radius: 10px;
  @media screen and ${responsive.tablet} {
    width: 80%;
  }
  @media screen and ${responsive.mobile} {
    width: 85%;
    padding: 30px;
  }
  @media screen and ${responsive.iphone12Pro} {
    margin-top: 70px;
  }
`;

const ProjectTitle = styled.div`
  text-align: center;
  margin-bottom: 20px;
  h1 {
    font-size: 4rem;
    font-weight: bold;
    color: var(--white);
    margin-bottom: 15px;
  }
  span {
    font-size: 1.5rem;
    color: var(--gray);
  }
  @media screen and ${responsive.mobile} {
    h1 {
      font-size: 2.5rem;
    }
    span {
      font-size: 1rem;
    }
  }
`;

const ProjectGif = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex: 1;
  padding: 10px;
  border: 5px solid var(--white);
  border-radius: 10px;
  img {
    width: 100%;
    border-radius: 10px;
  }
`;

const ProjectInfo = styled.div`
  width: 100%;
  display: flex;
  gap: 50px;
  flex: 1;
  @media screen and ${responsive.laptop} {
    gap: 20px;
  }
  @media screen and ${responsive.tablet} {
    flex-direction: column;
  }
`;

const InfoBox = styled.div`
  background-color: var(--white);
  width: 100%;
  padding: 20px;
  border-radius: 10px;
`;

const Outline = styled.div`
  height: 100%;
  ul {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 30px;
    li {
      display: flex;
      align-items: center;
      h3 {
        width: 100px;
        font-size: 2rem;
        font-weight: bold;
      }
      span {
        font-size: 1.5rem;
      }
      .links {
        display: flex;
        gap: 30px;
        .link {
          font-weight: bold;
          font-size: 1.5rem;
          color: var(--blue);
        }
      }
    }
  }
  @media screen and ${responsive.iphone12Pro} {
    ul {
      li {
        h3 {
          font-size: 1.5rem;
        }
        span {
          font-size: 1.2rem;
        }
        .links {
          .link {
            font-size: 1.2rem;
          }
        }
      }
    }
  }
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  h1 {
    font-size: 2rem;
    font-weight: bold;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 0px 20px;
    li {
      font-size: 1.5rem;
      line-height: 15px;
      list-style: "✅";
      padding-left: 10px;
    }
  }
  @media screen and ${responsive.iphone12Pro} {
    h1 {
      font-size: 1.5rem;
    }
    ul {
      li {
        font-size: 1.2rem;
      }
    }
  }
`;


const ProjectDetail = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      axios.get('/projectDb.json')
        .then((res) => {
          setData(res.data.project);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getData();
  }, []);

  const navigate = useNavigate();
  const goWork = () => {
    navigate('/work');
  }

  return (
    <Container>
      <FontAwesomeIcon onClick={goWork} className='backBtn' icon={faChevronLeft}/>
      {data.map((it) => (
        it.id == id &&
        <Wrap>
          <ProjectTitle>
            <h1>{it.title}</h1>
            <span>{it.subTitle}</span>
          </ProjectTitle>
          <ProjectGif>
            <img src={getProjectDetailGif(1)} alt='프로젝트 gif'/>
          </ProjectGif>
          <ProjectInfo>
            <InfoBox>
              <Outline>
                <ul>
                  <li>
                    <h3>Period</h3>
                    <span>{it.period}</span>
                  </li>
                  <li>
                    <h3>Role</h3>
                    <span>
                      {it.team ? "Front-end 4인 구성" : "개인 프로젝트"}
                    </span>
                  </li>
                  <li>
                    <h3>Skill</h3>
                    <span>{it.skill}</span>
                  </li>
                  <li>
                    <h3>Link</h3>
                    <div className='links'>
                      <Link className='link' target="_blank" to={it.github}>깃허브</Link>
                      <Link className='link' target="_blank" to={it.link}>웹 사이트</Link>
                    </div>
                  </li>
                </ul>
              </Outline>
            </InfoBox>
            <InfoBox>
              <Detail>
                <h1>상세설명</h1>
                <ul>
                  {it.description.map((desc) => (
                    <li>{desc}</li>
                  ))}
                </ul>
              </Detail>
            </InfoBox>
          </ProjectInfo>
        </Wrap>
      ))}
    </Container>
  )
}

export default ProjectDetail;