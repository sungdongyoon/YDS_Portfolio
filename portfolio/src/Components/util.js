import umbrellaImg from "../img/umbrella_logo.png";
import whatitisntImg from "../img/whatitisnt_logo.png";
import netflixImg from "../img/netflix_logo.png";
import blogImg from "../img/blog_img.png";
import githubImg from "../img/github_img.png";
import mailImg from "../img/mail_img.png";
import me from "../img/me.jpg";
import catImg from "../img/catImg.png";
import brushCircle from "../img/brushCircle.png";
import pattern from "../img/pattern.png";
import whatitisntMac from "../img/whatitisntmac.png";
import umbrellaMac from "../img/umbrellamac.png";
import netflixMac from "../img/netflixmac.png";
import mbtiCatMac from "../img/mbtiCatmac.png";
import umbrellaGif from "../gif/우산있어 메인.gif";
import umbrellaGif2 from "../gif/우산있어 이용권 구매.gif";
import umbrellaGif3 from "../gif/우산있어 대여소.gif";


export const getProjectImg = (projectId) => {
  const targetProjectImg = String(projectId);
  switch(targetProjectImg) {
    case "1":
      return umbrellaImg;
    case "2":
      return umbrellaImg;
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

export const getProjectDetailImg = (projectId) => {
  const targetProjectDetailImg = String(projectId);
  switch(targetProjectDetailImg) {
    case "1":
      return umbrellaMac;
    case "2":
      return umbrellaMac;
    case "3":
      return whatitisntMac;
    case "4":
      return netflixMac;
    case "5":
      return mbtiCatMac;
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
      return umbrellaGif2;
    case "3":
      return umbrellaGif3;
    case "4":
      return umbrellaGif2;
    case "5":
      return umbrellaGif;
    case "6":
      return umbrellaGif2;
    default:
      return null;
  }
}