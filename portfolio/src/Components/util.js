import umbrellaImg from "../img/umbrella_react_logo.png";
import catmistryImg from "../img/catmistry_logo.png";
import whatitisntImg from "../img/whatitisnt_logo.png";
import blogImg from "../img/blog_img.png";
import githubImg from "../img/github_img.png";
import mailImg from "../img/mail_img.png";
import me from "../img/me.jpg";
import brushCircle from "../img/brushCircle.png";
import pattern from "../img/pattern.png";


export const getProjectImg = (projectId) => {
  const targetProjectImg = String(projectId);
  switch(targetProjectImg) {
    case "1":
      return umbrellaImg;
    case "2":
      return catmistryImg;
    case "3":
      return whatitisntImg;
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

export const getProjectDetailVideo = (videoId) => {
  const targetProjectDetailVideo = String(videoId);
  switch(targetProjectDetailVideo) {
    case "1":
      return "/video/umbrellaReVideo.webm";
    case "2":
      return "/video/catmistryVideo.webm";
    case "3":
      return "/video/whatitisntVideo.webm";
    default:
      return null;
  }
}