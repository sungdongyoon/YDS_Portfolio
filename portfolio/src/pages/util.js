import momentumImg from "../img/momentum_img.png";
import umbrellaImg from "../img/umbrella_logo.png";
import whatitisntImg from "../img/whatitisnt_logo.png";
import netflixImg from "../img/netflix_logo.png";
import blogImg from "../img/blog_img.png";
import githubImg from "../img/github_img.png";
import mailImg from "../img/mail_img.png";

export const getProjectImg = (projectId) => {
  const targetProjectImg = String(projectId);
  switch(targetProjectImg) {
    case "1":
      return momentumImg;
    case "2":
      return umbrellaImg;
    case "3":
      return whatitisntImg;
    case "5":
      return netflixImg;
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
    default:
      return null;
  }
}