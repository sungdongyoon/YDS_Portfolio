import momentumImg from "../img/momentum_img.png";
import umbrellaImg from "../img/umbrella_logo.png";
import whatitisntImg from "../img/whatitisnt_logo.png";
import netflixImg from "../img/netflix_logo.png";
import blogImg from "../img/blog_img.png";
import githubImg from "../img/github_img.png";
import mailImg from "../img/mail_img.png";
import me from "../img/me.jpg";
import logoImg from "../img/logo.png";
import catImg from "../img/catImg.png";
import mydiaryImg from "../img/mydiary_img.png";
import brushCircle from "../img/brushCircle.png";
import pattern from "../img/pattern.png";
import whatitisntMac from "../img/whatitisntmac.png";
import portfolioMac from "../img/portfoliomac.png";
import mydiaryMac from "../img/mydiarymac.png";
import umbrellaMac from "../img/umbrellamac.png";
import momentumMac from "../img/momentummac.png";
import netflixMac from "../img/netflixmac.png";


export const getProjectImg = (projectId) => {
  const targetProjectImg = String(projectId);
  switch(targetProjectImg) {
    case "1":
      return logoImg;
    case "2":
      return whatitisntImg;
    case "3":
      return netflixImg;
    case "4":
      return umbrellaImg;
    case "5":
      return mydiaryImg;
    case "6":
      return momentumImg;
    default:
      return null;
  }
}

export const getProjectDetailImg = (projectId) => {
  const targetProjectDetailImg = String(projectId);
  switch(targetProjectDetailImg) {
    case "1":
      return portfolioMac;
    case "2":
      return whatitisntMac;
    case "3":
      return netflixMac;
    case "4":
      return umbrellaMac;
    case "5":
      return mydiaryMac;
    case "6":
      return momentumMac;
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