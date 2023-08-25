import { keyframes } from "styled-components";

// Scroll Animation

export const opacityVar = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export let homeTitleObserver = new IntersectionObserver((e) => {
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

export let titleObserver = new IntersectionObserver((e) => {
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

export let subTitleObserver = new IntersectionObserver((e) => {
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

export let contentObserver = new IntersectionObserver((e) => {
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

export let leftCircleObserver = new IntersectionObserver((e) => {
  e.forEach((el) => {
    if(el.isIntersecting) {
      el.target.style.opacity = 1;
      // el.target.style.transform = "translateX(0) translateY(0)";
      el.target.style.transform = "scale(1)";
    }
    else {
      el.target.style.opacity = 0;
      el.target.style.transform = "scale(0)";
      // el.target.style.transform = "translateX(-50%) translateY(-50%)";
    }
  })
})

export let rightCircleObserver = new IntersectionObserver((e) => {
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

export let homeTitle = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
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

export let homeArrow = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
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
    transform: translate3d(0, 5px, 0) scale(1.01);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
  }
`;
