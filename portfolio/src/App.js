import './App.css';
import { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import { useDispatch } from 'react-redux';
import GlobalStyle from './style/GlobalStyle';
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
  background-color: #eee;
`;

const DIVIDER_HEIGHT = 5;
const pageHeight = window.innerHeight;
const pageWidth = window.innerWidth;

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })
  
  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    console.log("윈도우 사이즈", windowSize)
  }

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
          // console.log("현재 1페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          // console.log("현재 2페이지, down");
          outerDivRef.current.scrollTo({
            top: (pageHeight * 2) + (DIVIDER_HEIGHT * 2),
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
          // console.log("현재 3페이지, down");
          outerDivRef.current.scrollTo({
            top: (pageHeight * 3) + (DIVIDER_HEIGHT * 3),
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(4);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 4) {
          // console.log("현재 4페이지, down");
          outerDivRef.current.scrollTo({
            top: (pageHeight * 3) + (DIVIDER_HEIGHT * 3),
            left: 0,
            behavior: "smooth",
          });
        }
      } else {
        if(scrollTop >= 0 && scrollTop < pageHeight) {
          // console.log("현재 1페이지, up");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
       } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          // console.log("현재 2페이지, up");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
          // console.log("현재 3페이지, up");
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        } else {
          // console.log("현재 4페이지, up");
          outerDivRef.current.scrollTo({
            top: (pageHeight * 2) + (DIVIDER_HEIGHT * 2),
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        }
      }
    };
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    window.addEventListener("resize", handleResize);
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
      window.removeEventListener("resize", handleResize);
    }
  }, [windowSize])

  // Navigation Event
  const goHome = () => {
    outerDivRef.current.scrollTo({ top: 0, behavior: "smooth" });
    setScrollIndex(1);
    dispatch({type: "FALSE_TOGGLE"});
  };
  const goAbout = () => {
    outerDivRef.current.scrollTo({ top: pageHeight + DIVIDER_HEIGHT, behavior: "smooth" });
    setScrollIndex(2);
    dispatch({type: "FALSE_TOGGLE"});
  };
  const goProject = () => {
    outerDivRef.current.scrollTo({ top: (pageHeight * 2) + (DIVIDER_HEIGHT * 2), behavior: "smooth" });
    setScrollIndex(3);
    dispatch({type: "FALSE_TOGGLE"});
  };
  const goContact = () => {
    outerDivRef.current.scrollTo({ top: (pageHeight * 3) + (DIVIDER_HEIGHT * 3), behavior: "smooth" });
    setScrollIndex(4);
    dispatch({type: "FALSE_TOGGLE"});
  };
  
  // About show & hide
  const dispatch = useDispatch();
  const clickSkill = () => {
    dispatch({type: "CLICK_SKILL"});
  };
  const clickExperience = () => {
    dispatch({type: "CLICK_EXPERIENCE"});
  };

  const handleToggle = () => {
    dispatch({type: "TOGGLE"});
  };

  // project PageNum
  const [pjNum, setPjNum] = useState(1);
  const [mobilePjNum, setMobilePjNum] = useState(0);

  // Props
  const goProps = {
    goHome,
    goAbout,
    goProject,
    goContact,
  }
  const clickProps = {
    clickSkill,
    clickExperience,
  }
  const pjNumProps = {
    pjNum,
    setPjNum,
    mobilePjNum,
    setMobilePjNum,
  }
  return (
    <>
    <GlobalStyle/>
    <Container ref={outerDivRef}>
      {scrollIndex != 1 &&
        <Dots scrollIndex={scrollIndex} {...goProps}/>
      }
      <Header scrollIndex={scrollIndex} handleToggle={handleToggle} {...goProps}/>
      <Home/>
      <Divider/>
      <About {...clickProps}/>
      <Divider/>
      <Project {...pjNumProps}/>
      <Divider/>
      <Contact/>
    </Container>
    </>
  );
}

export default App;
