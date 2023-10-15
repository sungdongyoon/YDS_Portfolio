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
import whatitisntMac from "../img/whatitisntmac.png";
import umbrellaMac from "../img/umbrellamac.png";
import netflixMac from "../img/netflixmac.png";
import mbtiCatMac from "../img/mbtiCatmac.png";
import umbrellaGif from "../gif/우산있어 메인.gif";
import umbrellaGif2 from "../gif/우산있어 이용권 구매.gif";
import umbrellaGif3 from "../gif/우산있어 대여소.gif";
import umbrella2Gif from "../gif/우산있어react 로그인.gif";
import umbrella2Gif2 from "../gif/우산있어react 이용권 구매.gif";
import umbrella2Gif3 from "../gif/우산있어react 대여소.gif";
import whatitisntGif from "../gif/와릿이즌 메인페이지.gif";
import whatitisntGif2 from "../gif/와릿이즌 베스트 아이템.gif";
import whatitisntGif3 from "../gif/와릿이즌 아이템 상세.gif";
import netflixGif from "../gif/넷플릭스 메인 페이지.gif";
import netflixGif2 from "../gif/넷플릭스 영화 정보.gif";
import netflixGif3 from "../gif/넷플릭스 movies 페이지.gif";
import mbtiCatImg from "../img/예비집사 판별기 메인 페이지.png";
import mbtiCatGif from "../gif/예비집사 판별기 question 페이지.gif";
import mbtiCatGif2 from "../gif/예비집사 판별기 결과.gif";



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

// export const getProjectDetailImg = (projectId) => {
//   const targetProjectDetailImg = String(projectId);
//   switch(targetProjectDetailImg) {
//     case "1":
//       return umbrellaMac;
//     case "2":
//       return umbrellaMac;
//     case "3":
//       return whatitisntMac;
//     case "4":
//       return netflixMac;
//     case "5":
//       return mbtiCatMac;
//     default:
//       return null;
//   }
// }

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
      return umbrella2Gif;
    case "5":
      return umbrella2Gif2;
    case "6":
      return umbrella2Gif3;
    case "7":
      return whatitisntGif;
    case "8":
      return whatitisntGif2;
    case "9":
      return whatitisntGif3;
    case "10":
      return netflixGif;
    case "11":
      return netflixGif2;
    case "12":
      return netflixGif3;
    case "13":
      return mbtiCatImg;
    case "14":
      return mbtiCatGif;
    case "15":
      return mbtiCatGif2;
    default:
      return null;
  }
}