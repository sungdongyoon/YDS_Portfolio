import { keyframes } from "styled-components";


// Animation

export let homeTitle = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export let homeSubTitle = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export let homeSubTitle2 = keyframes`
  0% {
    opacity: 0;
    transform: translateY(0);
  }
  20% {
    transform: translateY(-20%);
  }
  40% {
    transform: translateY(0);
  }
  60% {
    transform: translateY(0);
  }
  80% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(0);
  }
`;

export let aboutClick = keyframes`
  0% {
    opacity: 0;
    transform: scaleX(0.9) translateX(-20px);
    transform-origin: 0% 100%;
  }
  100% {
    opacity: 1;
    transform: scaleX(1) translateX(0px);
    transform-origin: 0% 100%;
  }
`;

export let projectSlide = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, -50px, 0) scale(0.8);
  }
  50% {
    opacity: 1;
    transform: translate3d(0, 5px, 0) scale(1.05);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
  }
`;
