import React, { useRef } from 'react';
import { styled } from 'styled-components';
import emailjs from "@emailjs/browser";
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

const Modal = styled.form`
  width: 1200px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  background-color: #18191F;
  position: relative;
  .modal_wrap {
    width: 80%;
    height: 60%;
    display: flex;
    justify-content: space-between;
  }
  @media screen and ${responsive.laptop} {
    width: 900px;
  }
  @media screen and ${responsive.tablet} {
    width: 700px;
  }
  @media screen and ${responsive.mobile} {
    width: 400px;
    .modal_wrap {
      flex-direction: column;
      height: 70%;
    }
  }
  @media screen and ${responsive.iphone12Pro} {
    width: 380px;
  }
`;

const CloseBtn = styled.div`
  font-size: 2rem;
  position: absolute;
  top: 30px;
  right: 30px;
  cursor: pointer;
  @media screen and ${responsive.tablet} {
    font-size: 1.8rem;
  }
  @media screen and ${responsive.mobile} {
    font-size: 1.5rem;
  }
`;

const ModalInputs = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and ${responsive.mobile} {
    width: 100%;
    height: 20%;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
  }
`;

const ModalInput = styled.div`
  display: flex;
  flex-direction: column;
  label {
    color: var(--semi-gray);
    font-size: 2rem;
    margin-bottom: 10px;
  }
  input {
    height: 50px;
    font-size: 1.5rem;
    color: var(--white);
    font-family: 'Pretendard';
    padding: 10px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid var(--white);
    outline: none;
    &::placeholder {
      color: var(--white);
    }
  }
  @media screen and ${responsive.tablet} {
    label {
      font-size: 1.5rem;
      margin-bottom: 7px;
    }
    input {
      height: 40px;
      font-size: 1.2rem;
    }
  }
  @media screen and ${responsive.mobile} {
    width: 45%;
    &:last-child {
      width: 100%;
    }
    label {
      font-size: 1.3rem;
      margin-bottom: 0;
    }
    input {
      font-size: 1.1rem;
    }
  }
  @media screen and ${responsive.iphone12Pro} {
    label {
      font-size: 1.1rem;
    }
    input {
      font-size: 1rem;
      padding-bottom: 0px;
    }
  }
`;

const ModalTextarea = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  span {
    color: var(--semi-gray);
    font-size: 2rem;
    margin-bottom: 10px;
  }
  textarea {
    width: 100%;
    height: 100%;
    color: var(--white);
    font-size: 1.7rem;
    font-family: 'Pretendard';
    padding: 30px;
    background-color: transparent;
    border: 1px solid var(--white);
    border-radius: 10px;
    outline: none;
    resize: none;
    overflow-y: scroll;
    &::placeholder {
      color: var(--white);
    }
  }
  button {
    width: 300px;
    height: 50px;
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--white);
    font-family: 'Pretendard';
    border: none;
    border: 1px solid var(--white);
    background-color: transparent;
    position: absolute;
    bottom: -80px;
    right: 0;
  }
  @media screen and ${responsive.laptop} {
    button {
      width: 250px;
      font-size: 1.4rem;
    }
  }
  @media screen and ${responsive.tablet} {
    span {
      font-size: 1.5rem;
    }
    textarea {
      font-size: 1.5rem;
    }
    button {
      width: 200px;
      height: 40px;
      font-size: 1.2rem;
    }
  }
  @media screen and ${responsive.mobile} {
    width: 100%;
    height: 60%;
    span {
      font-size: 1.3rem;
    }
    textarea {
      font-size: 1.5rem;
      padding: 25px;
    }
    button {
      width: 200px;
      height: 40px;
      font-size: 1.2rem;
      bottom: -60px;
    }
  }
  @media screen and ${responsive.iphone12Pro} {
    span {
      font-size: 1.1rem;
    }
    textarea {
      font-size: 1.2rem;
      padding: 20px;
    }
    button {
      width: 180px;
    }
  }
`;


const EmailModal = ({closeModal}) => {
  const serviceId = 'dongsung yoon';
  const templateId = 'template_dg5g2e1';
  const publicKey = 't-xy3uDTe_r331AA8';
  const formRef = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then((result) => {
        alert("전송이 완료되었습니다. 소중한 의견 감사합니다");
      }, (error) => {
        alert("메세지를 전송하지 못했습니다.");
      });
    await closeModal();
  };

  return (
    <Container>
      <Modal ref={formRef}>
        <CloseBtn onClick={closeModal}>닫기</CloseBtn>
        <div className='modal_wrap'>
          <ModalInputs>
            <ModalInput>
              <label>Name</label>
              <input type='text' name='name' placeholder='이름을 입력해주세요' required/>
            </ModalInput>
            <ModalInput>
              <label>Phone</label>
              <input type='text' name='phone' placeholder='연락처를 입력해주세요' required/>
            </ModalInput>
            <ModalInput>
              <label>E-mail</label>
              <input type='text' name='email' placeholder='이메일을 입력해주세요' required/>
            </ModalInput>
          </ModalInputs>
          <ModalTextarea>
            <span>Message</span>
            <textarea name='message' placeholder='메세지를 입력해주세요' required/>
            <button type='form' onClick={sendEmail}>SEND MESSAGE</button>
          </ModalTextarea>
        </div>
      </Modal>
    </Container>
  )
}

export default EmailModal;
