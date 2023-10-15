import React, {useState} from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { getContactImg } from '../Components/util';
import { Image } from '../Components/util';
import EmailModal from '../Components/EmailModal';
import responsive from '../style/responsive';

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(var(--white), #B0D2F5);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  .pattern {
    width: 500px;
    height: 290px;
    position: absolute;
    left: 0px;
    top: 0px;
    background-image: url(${Image(2)});
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const ContactMain = styled.main`
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 50px;
  margin-top: 100px;
  position: relative;
  @media screen and ${responsive.laptop} {
    width: 700px;
  }
  @media screen and ${responsive.tablet} {
    align-items: center;
    margin-top: 50px;
  }
  @media screen and ${responsive.iphone12Pro} {
    height: 650px;
    gap: 20px;
    margin-top: 0px;
  }
`;

const ContactTitle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  h1 {
    font-size: 5rem;
    -webkit-text-stroke: 1px var(--blue);
    font-weight: bold;
    color: var(--blue);
    transition: 1s;
  }
  @media screen and ${responsive.laptop} {
    h1 {
      font-size: 4rem;
    }
  }
  @media screen and ${responsive.tablet} {
    h1 {
      font-size: 4rem;
    }
  }
  @media screen and ${responsive.mobile} {
    h1 {
      font-size: 3rem;
    }
  }
  @media screen and ${responsive.iphone12Pro} {
    h1 {
      font-size: 4rem;
    }
  }
`;

const ContactContent = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  transition: 1.5s;
  .contact_wrap {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    position: relative;
    p {
      font-size: 2rem;
      font-weight: bold;
      color: var(--gray); 
      line-height: 50px;
    }
    img {
      width: 300px;
      border-radius: 10px;
      position: absolute;
      right: 0px;
      top: -80px;
    }
  }
  .link_wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    position: relative;
    .link_item {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      padding: 7px 20px;
      background-color: var(--white);
      cursor: pointer;
      span {
        color: var(--black);
        font-size: 1.5rem;
      }
      img {
        width: 20px;
      }
    }
  }
  @media screen and ${responsive.laptop} {
    .contact_wrap {
      width: 100%;
      p {
        font-size: 1.6rem;
      }
      img {
        width: 250px;
        top: -50px;
      }
    }
    .link_wrap {
      .link_item {
        height: 40px;
        span {
          font-size: 1.3rem;
        }
        img {
          width: 25px;
        }
      }
    }
  }
  @media screen and ${responsive.tablet} {
    width: 80%;
    align-items: center;
    padding-top: 0;
    .contact_wrap {
      justify-content: center;
      text-align: center;
      p {
        font-size: 2rem;
      }
      img {
        display: none;
      }
    }
  }
  @media screen and ${responsive.mobile} {
    .contact_wrap {
      p {
        width: 100%;
        font-size: 1.5rem;
        color: var(--gray);
      }
    }
    .link_wrap {
      .link_item {
        height: 30px;
        padding: 0 15px;
        span {
          font-size: 1rem;
        }
        img {
          width: 20px;
        }
      }
    }
  }
  @media screen and ${responsive.iphone12Pro} {
    margin-top: 0px;
    .contact_wrap {
      margin-bottom: 50px;
      p {
        font-size: 1.6rem;
      }
    }
    .link_wrap {
      flex-wrap: wrap;
      .link_item {
        width: 80%;
        span {
          width: 50px;
        }
      }
    }
  }
`

const Footer = styled.footer`
  height: 50px;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  p {
    font-size: 1.2rem;
    color: var(--gray);
    text-align: center;
  }
  @media screen and ${responsive.mobile} {
    p {
      font-size: 1rem;
    }
  }
  @media screen and ${responsive.iphone12Pro} {
    p {
      font-size: 0.8rem;
    }
  }
`;


const Contact = () => {
  const [isModal, setIsModal] = useState(false);
  const showModal = () => {
    setIsModal(!isModal);
  }
  const closeModal = () => {
    setIsModal(false);
  }
  return (
    <Container>
      <div className='pattern'></div>
      <ContactMain>
        <ContactTitle>
          <h1>Contact Me</h1>
        </ContactTitle>
        <ContactContent>
          <div className='contact_wrap'>
            <p>궁금하신 사항이나<br/> 저의 부족한 부분에 대한 피드백이 있으시면 <br/> 언제든 연락주시면 감사하겠습니다.</p>
            <img className='me' src={getContactImg(4)}/>
          </div>
          <div className='link_wrap'>
            <Link target='_blank' className='link_item github' to='https://github.com/sungdongyoon'>
              <img src={getContactImg(1)} alt='githubIcon'/>
              <span>GitHub</span>
            </Link>
            <Link target='_blank' className='link_item blog' to="https://dongyoons.tistory.com/">
              <img src={getContactImg(2)} alt='blogIcon'/>
              <span>Blog</span>
            </Link>
            <div className='link_item email' onClick={showModal}>
              <img src={getContactImg(3)} alt='emailIcon'/>
              <span>메일 보내기</span>
            </div>
          </div>
        </ContactContent>
        {isModal && <EmailModal closeModal={closeModal}/>}
      </ContactMain>
      <Footer>
        <p>본 페이지는 상업적 목적이 아닌 개인 포트폴리오용으로 제작되었습니다.<br/>© 2023 Yoon DongSung. All Rights Reserved.</p>
      </Footer>
    </Container>
  )
}

export default Contact;
