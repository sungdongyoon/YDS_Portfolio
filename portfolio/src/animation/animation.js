import { keyframes } from "styled-components";

// Scroll Animation

let options = {
  root: 100,
  threshold: 0.5,
}

let homeTitleObserver = new IntersectionObserver((e) => {
  e.forEach((el) => {
    if(el.isIntersecting) {
      el.target.style.opacity = 1;
      el.target.style.transform = "translateY(0)";
    } else {
      el.target.style.opacity = 0;
      el.target.style.transform = "translateY(-100px)";
    }
  })
});

let titleObserver = new IntersectionObserver((e) => {
  e.forEach((el) => {
    if(el.isIntersecting) {
      el.target.style.opacity = 1;
      el.target.style.transform = "translateX(0)";
    } else {
      el.target.style.opacity = 0;
      el.target.style.transform = "translateX(-20%)";
    }
  })
});

let subTitleObserver = new IntersectionObserver((e) => {
  e.forEach((el) => {
    if(el.isIntersecting) {
      el.target.style.opacity = 1;
      el.target.style.transform = "translateX(0)";
    } else {
      el.target.style.opacity = 0;
      el.target.style.transform = "translateX(-20%)";
    }
  })
});

let contentObserver = new IntersectionObserver((e) => {
  e.forEach((el) => {
    if(el.isIntersecting) {
      el.target.style.opacity = 1;
      // el.target.style.transform = "translateY(0)";
      el.target.style.transform = "scale(1)";
    } else {
      el.target.style.opacity = 0;
      // el.target.style.transform = "translateY(5%)";
      el.target.style.transform = "scale(0.9)";
    }
  })
});

let leftCircleObserver = new IntersectionObserver((e) => {
  e.forEach((el) => {
    console.log("옵저버", el);
    if(el.isIntersecting) {
      el.target.style.opacity = 1;
      el.target.style.transform = "translateX(0) translateY(0)";
    }
    else {
      el.target.style.opacity = 0;
      el.target.style.transform = "translateX(-50%) translateY(-50%)";
    }
  })
})

let rightCircleObserver = new IntersectionObserver((e) => {
  e.forEach((el) => {
    if(el.isIntersecting) {
      el.target.style.opacity = 1;
      el.target.style.transform = "translateX(0)";
    } else {
      el.target.style.opacity = 0;
      el.target.style.transform = "translateX(30%)";
    }
  })
})


// Animation

let homeTitle = keyframes`
  0% {
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

let homeArrow = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

let aboutClick = keyframes`
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

let projectSlide = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, -50px, 0) scale(0.8);
  }
  50% {
    opacity: 1;
    transform: translate3d(0, 5px, 0) scale(1.01);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
  }
`;

export {homeTitleObserver, titleObserver, subTitleObserver, contentObserver, leftCircleObserver, rightCircleObserver, homeTitle, homeArrow, aboutClick, projectSlide};