import './App.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';


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
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  })

  // Navigation Event
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
    dispatch({type: "FALSE_TOGGLE"});
  };
  const goWork = () => {
    navigate('/work');
    dispatch({type: "FALSE_TOGGLE"});
  };
  const goAbout = () => {
    navigate('/about');
    dispatch({type: "FALSE_TOGGLE"});
  };
  const goContact = () => {
    navigate('/contact');
    dispatch({type: "FALSE_TOGGLE"});
  };
  
  // About show & hide
  const dispatch = useDispatch();
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
    goWork,
    goContact,
  }
  const pjNumProps = {
    pjNum,
    setPjNum,
    mobilePjNum,
    setMobilePjNum,
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/work" element={<Project {...pjNumProps}/>}/>
        <Route path="/work/:id" element={<ProjectDetail/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Navigation {...goProps}/>
      <Header handleToggle={handleToggle} {...goProps}/>
    </>
  );
}

export default App;
