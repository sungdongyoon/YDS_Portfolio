import { keyframes } from "styled-components";

// Scroll Animation

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
      el.target.style.transform = "translateY(0)";
    } else {
      el.target.style.opacity = 0;
      el.target.style.transform = "translateY(10%)";
    }
  })
});

let leftCircleObserver = new IntersectionObserver((e) => {
  e.forEach((el) => {
    if(el.isIntersecting) {
      el.target.style.opacity = 1;
      el.target.style.transform = "translateX(0) translateY(0)";
    } else {
      el.target.style.opacity = 0;
      el.target.style.transform = "translateX(-30%) translateY(20%)";
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

let aboutClick = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export {titleObserver, subTitleObserver, contentObserver, leftCircleObserver, rightCircleObserver, aboutClick};



