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
  margin-top: 7%;
  margin-bottom: 5%;
  padding: 50px;
  background-color: var(--sky-blue);
  border-radius: 10px;
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
    font-size: 1.2rem;
    color: var(--gray);
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
`;

const InfoBox = styled.div`
  background-color: var(--white);
  width: 100%;
  height: 50vh;
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
`;

// const ProjectInfo = styled.div`
//   width: 70%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   .project_wrap {
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//     gap: 50px;
//     .project_content {
//       width: 100%;
//       display: flex;
//       flex-direction: column;
//       flex: 6;
//       gap: 50px;
//       margin-bottom: 50px;
//       .project_title {
//         display: flex;
//         align-items: center;
//         font-size: 3.5rem;
//         font-weight: 700;
//         padding-bottom: 10px;
//         .project_team {
//           background-color: var(--blue);
//           border-radius: 50px;
//           color: var(--white);
//           font-size: 1rem;
//           padding: 0px 10px;
//           margin-left: 20px;
//         }
//       }
//       span {
//         font-size: 1.5rem;
//         line-height: 20px;
//       }
//       .project_info {
//         width: 100%;
//       }
//     }
//     .project_links {
//       width: 100%;
//       display: flex;
//       align-items: center;
//       gap: 20px;
//       flex: 1;
//       span {
//         background-color: var(--black);
//         color: var(--white);
//         font-size: 1.3rem;
//         padding: 10px 20px;
//         cursor: pointer;
//       }
//     }
//     .project_tags {
//       display: flex;
//       align-items: center;
//       flex-wrap: wrap;
//       gap: 10px;
//       flex: 1;
//       span {
//         background-color: var(--sky-blue);
//         color: var(--black);
//         font-size: 1.3rem;
//         margin-right: 20px;
//         padding: 10px 20px;
//       }
//     }
//   }
//   @media screen and ${responsive.laptop} {
//     .project_wrap {
//       .project_content {
//         .project_title {
//           font-size: 3rem;
//         }
//         span {
//           font-size: 1.4rem;
//         }
//       }
//       .project_links {
//         span {
//           font-size: 1.2rem;
//         }
//       }
//       .project_tags {
//         gap: 0px;
//         span {
//           font-size: 1.2rem;
//         }
//       }
//     }
//   }
//   @media screen and ${responsive.tablet} {
//     .project_wrap {
//       .project_content {
//         .project_title {
//           font-size: 2.5rem;
//           .project_team {
//             font-size: 1.2rem;
//           }
//         }
//       }
//     } 
//   }
//   @media screen and ${responsive.mobile} {
//     .project_wrap {
//       gap: 30px;
//       .project_links {
//         span {
//           font-size: 1rem;
//           padding: 7px 15px;
//         }
//       }
//       .project_tags {
//         span {
//           font-size: 1rem;
//           padding: 7px 15px;
//         }
//       }
//     }
//   }
//   @media screen and ${responsive.iphone12Pro} {
//     .project_wrap {
//       .project_content {
//         span {
//           font-size: 1.2rem;
//         }
//       }
//       .project_tags {
//         span {
//           font-size: 1rem;
//           padding: 7px 15px;
//           &:last-child {
//             margin-top: 10px;
//           }
//         }
//       }
//     }
//   }
// `;

// const ProjectGif = styled.div`
//   width: 70%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 50px;
//   border-top: 3px solid var(--light-gray);
//   padding-top: 50px;
//   margin-bottom: 50px;
//   span {
//     font-size: 1.4rem;
//   }
//   img {
//     width: 100%;
//     border: 2px solid var(--light-gray);
//   }
//   @media screen and ${responsive.tablet} {
//     height: 50%;
//   }
//   @media screen and ${responsive.iphone12Pro} {
//     span {
//       font-size: 1.2rem;
//     }
//   }
// `;

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

  const arr = [0, 1, 2];
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
                      <Link className='link'>깃허브</Link>
                      <Link className='link'>웹 사이트</Link>
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










          {/* <ProjectInfo>
            <div className='project_wrap'>
              <div className='project_content'>
                <h1 className='project_title'>
                  {it.name}
                  {it.team && <span className='project_team'>team project</span>}
                </h1>
                <span className='project_info'>
                  {it.description}
                </span>
              </div>
              <div className='project_links'>
                <Link target='_blank' to={it.link}>
                  <span>VIEW WEBSITE</span>
                </Link>
                <Link target='_blank' to={it.github}>
                  <span>GitHub</span>
                </Link>
              </div>
              <div className='project_tags'>
                {it.tag.map((tag) => (
                  <span>{tag}</span>
                ))}
              </div>
            </div>
          </ProjectInfo>
          {arr.map((el) => (
            <ProjectGif>
              <span>{it.subDesc[el]}</span>
              <img src={getProjectDetailGif(it.gifNum[el])}/>
            </ProjectGif>
          ))} */}