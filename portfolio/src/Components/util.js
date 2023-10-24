import umbrellaImg from "../img/umbrella_logo.png";
import umbrella2Img from "../img/umbrella_react_logo.png";
import whatitisntImg from "../img/whatitisnt_logo.png";
import netflixImg from "../img/netflix_logo.png";
import blogImg from "../img/blog_img.png";
import githubImg from "../img/github_img.png";
import mailImg from "../img/mail_img.png";
import me from "../img/me.jpg";
import catImg from "../img/catImg.png";
import brushCircle from "../img/brushCircle.png";
import pattern from "../img/pattern.png";
import umbrellaGif from "../gif/우산있어 메인.gif";
import umbrella2Gif from "../gif/우산있어react 로그인.gif";
import whatitisntGif from "../gif/와릿이즌 메인페이지.gif";



export const getProjectImg = (projectId) => {
  const targetProjectImg = String(projectId);
  switch(targetProjectImg) {
    case "1":
      return umbrellaImg;
    case "2":
      return umbrella2Img;
    case "3":
      return whatitisntImg;
    case "4":
      return netflixImg;
    case "5":
      return catImg;
    default:
      return null;
  }
}

export const getContactImg = (contactId) => {
  const targetContactImg = String(contactId);
  switch(targetContactImg) {
    case "1":
      return githubImg;
    case "2":
      return blogImg;
    case "3":
      return mailImg;
    case "4":
      return me;
    default:
      return null;
  }
}

export const Image = (imageId) => {
  const targetImage = String(imageId);
  switch(targetImage) {
    case "1":
      return brushCircle;
    case "2":
      return pattern;
    default:
      return null;
  }
}

export const getProjectDetailGif = (gifId) => {
  const targetProjectDetailGif = String(gifId);
  switch(targetProjectDetailGif) {
    case "1":
      return umbrellaGif;
    case "2":
      return umbrella2Gif;
    case "3":
      return whatitisntGif;
    default:
      return null;
  }
}