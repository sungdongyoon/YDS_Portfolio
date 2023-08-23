import momentumImg from "../img/momentum_img.png";
import umbrellaImg from "../img/umbrella_logo.png";
import whatitisntImg from "../img/whatitisnt_logo.png";
import netflixImg from "../img/netflix_logo.png";
import blogImg from "../img/blog_img.png";
import githubImg from "../img/github_img.png";
import mailImg from "../img/mail_img.png";
import personImg from "../img/person.png";
import logoImg from "../img/logo.png";
import catImg from "../img/catImg.png";
import mydiaryImg from "../img/mydiary_img.png";

export const getProjectImg = (projectId) => {
  const targetProjectImg = String(projectId);
  switch(targetProjectImg) {
    case "1":
      return momentumImg;
    case "2":
      return umbrellaImg;
    case "3":
      return whatitisntImg;
    case "4":
      return mydiaryImg;
    case "5":
      return netflixImg;
    case "6":
      return catImg;
    case "7":
      return logoImg;
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
      return personImg;
    default:
      return null;
  }
}