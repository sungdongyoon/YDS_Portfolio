import './App.css';
import { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Components/Header';
import Dots from './Components/Dots';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';


const Container = styled.div`
  height: 100vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 5px;
  background-color: #ccc;
`;

const DIVIDER_HEIGHT = 5;
const pageHeight = window.innerHeight;

function App() {
  // Scroll Event
  const outerDivRef = useRef();
  const [scrollIndex, setScrollIndex] = useState(1);
  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current;
      const pageHeight = window.innerHeight;

      if(deltaY > 0) {
        if(scrollTop >= 0 && scrollTop < pageHeight) {
          console.log("현재 1페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          console.log("현재 2페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
          console.log("현재 3페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(4);
        } else {
          console.log("현재 4페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 4 + DIVIDER_HEIGHT * 4,
            left: 0,
            behavior: "smooth",
          });
        }
      } else {
        if(scrollTop >= 0 && scrollTop < pageHeight) {
          console.log("현재 1페이지, up");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          console.log("현재 2페이지, up");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
          console.log("현재 3페이지, up");
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        } else {
          console.log("현재 4페이지, up");
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        }
      }
    };
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    }
  }, [])

  const goHome = () => {
    outerDivRef.current.scrollTo({ top: 0, behavior: "smooth" });
    setScrollIndex(1);
  };
  const goAbout = () => {
    outerDivRef.current.scrollTo({ top: (pageHeight) + DIVIDER_HEIGHT, behavior: "smooth" });
    setScrollIndex(2);
  };
  const goProject = () => {
    outerDivRef.current.scrollTo({ top: (pageHeight * 2) + DIVIDER_HEIGHT, behavior: "smooth" });
    setScrollIndex(3);
  };
  const goContact = () => {
    outerDivRef.current.scrollTo({ top: (pageHeight * 3) + DIVIDER_HEIGHT, behavior: "smooth" });
    setScrollIndex(4);
  };


  
  // About show & hide
  const dispatch = useDispatch();
  const showMe = useSelector((state) => state.showMe);
  const showSkill = useSelector((state) => state.showSkill);
  const showExpereince = useSelector((state) => state.showExperience);

  const clickMe = () => {
    dispatch({type: "CLICK_ME"});
  };
  const clickSkill = () => {
    dispatch({type: "CLICK_SKILL"});
  };
  const clickExperience = () => {
    dispatch({type: "CLICK_EXPERIENCE"});
  };

  // project PageNum
  const [pageNum, setPageNum] = useState(1);

  // Scroll Animation

  return (
    <Container ref={outerDivRef}>
      <Dots scrollIndex={scrollIndex} goHome={goHome} goAbout={goAbout} goProject={goProject} goContact={goContact}/>
      <Header/>
      <Home/>
      <Divider/>
      <About clickMe={clickMe} clickSkill={clickSkill} clickExperience={clickExperience} showMe={showMe} showSkill={showSkill} showExpereince={showExpereince}/>
      <Divider/>
      <Project pageNum={pageNum} setPageNum={setPageNum}/>
      <Divider/>
      <Contact/>
    </Container>
  );
}

export default App;
