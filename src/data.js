//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiMail,
  FiMapPin,
  FiLinkedin,
  FiFacebook,
} from "react-icons/fi";

// projects images
import Project1 from "./assets/img/projects/instagram.png";
import Project2 from "./assets/img/projects/ecommerce.jpg";
import Project3 from "./assets/img/projects/imgur.png";
import Project4 from "./assets/img/projects/chromeextension.jpg";
import Project5 from "./assets/img/projects/blackjack.jpg";
import Project6 from "./assets/img/projects/tictactoe.jpg";
import Project7 from "./assets/img/projects/rocpaperscissors.png";
import Project8 from "./assets/img/projects/reversecountdown.jpg";
import Project9 from "./assets/img/projects/sudoku.jpg";

// skills images
import SkillImg1 from "./assets/img/skills/html5.png";
import SkillImg2 from "./assets/img/skills/css3.png";
import SkillImg3 from "./assets/img/skills/js.png";
import SkillImg4 from "./assets/img/skills/bootstrap.png";
import SkillImg5 from "./assets/img/skills/handlebarsjs.png";
import SkillImg6 from "./assets/img/skills/nodejs.png";
import SkillImg7 from "./assets/img/skills/express.png";
import SkillImg8 from "./assets/img/skills/mongodb.png";
import SkillImg9 from "./assets/img/skills/mysql.png";
import SkillImg10 from "./assets/img/skills/postgress.png";
import SkillImg11 from "./assets/img/skills/docker.png";
import SkillImg12 from "./assets/img/skills/git.png";
import SkillImg13 from "./assets/img/skills/postman.png";
import SkillImg14 from "./assets/img/skills/reactjs.png";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "portfolio",
    href: "portfolio",
  },

  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <FiYoutube />,
    href: "https://www.youtube.com/channel/UCan4KVSLebEAVRYqEEq68vA",
  },
  {
    icon: <FiInstagram />,
    href: "https://www.instagram.com/vaish27_1/",
  },
  {
    icon: <FiFacebook />,
    href: "https://www.facebook.com/vaishnavi.phirkoj.1/",
  },
  {
    icon: <FiGithub />,
    href: "https://github.com/vaishphirkoj",
  },
  {
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com/in/vaishnavi-phirkoj-2701/",
  },
];

// projects
export const projectsData = [
  {
    id: 1,
    image: Project1,
    name: "Instagram Stories",
    category: "Backend Development",
  },
  {
    id: 2,
    image: Project2,
    name: "Ecommerce",
    category: "Backend Development",
  },
  {
    id: 3,
    image: Project3,
    name: "Imgur",
    category: "Backend Development",
  },
  {
    id: 4,
    image: Project4,
    name: "Chrome Extensiom",
    category: "Frontend Development",
  },
  {
    id: 5,
    image: Project5,
    name: "Black-Jack Card Game",
    category: "Frontend Development",
  },
  {
    id: 6,
    image: Project6,
    name: "Tic-Tac-Toe",
    category: "Frontend Development",
  },
  {
    id: 7,
    image: Project7,
    name: "Rock-Paper-Scissors",
    category: "Frontend Development",
  },
  {
    id: 8,
    image: Project8,
    name: "Reverse Countdown",
    category: "Frontend Development",
  },
  {
    id: 9,
    image: Project9,
    name: "Sudoku",
    category: "Frontend Development",
  },
];

// projects
export const projectsNav = [
  {
    categoryName: "all",
  },
  {
    categoryName: "Backend Development",
  },
  {
    categoryName: "Frontend Development",
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
  {
    image: SkillImg9,
  },
  {
    image: SkillImg10,
  },
  {
    image: SkillImg11,
  },
  {
    image: SkillImg12,
  },
  {
    image: SkillImg13,
  },
  {
    image: SkillImg14,
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "Want to hire me?",
    subtitle: "Email me at :",
    description: "vaishnaviphirkoj27@gmail.com",
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "",
    description: "Ahmednagar, Maharashtra",
  },
];
