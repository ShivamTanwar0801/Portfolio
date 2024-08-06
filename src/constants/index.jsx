import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.png";
import projectImage2 from "../assets/project2.png";
import projectImage3 from "../assets/project3.png";
import projectImage4 from "../assets/project4.png";
import projectImage5 from "../assets/project5.png";
import projectImage6 from "../assets/project6.png";

import { RiReactjsLine } from "react-icons/ri";

import { DiCss3, DiHtml5, DiJavascript, DiPython } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "SHIVAM TANWAR",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate frontend developer with a knack for creating beautiful and functional user interfaces. I like transforming ideas into engaging web experiences.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Brainwave AI",
    description:
      "An open AI chat app made using React.js and Tailwind CSS with beautiful animations and colorful gradients.",
    image: projectImage1,
    link: "https://brainwave-5fecf.web.app/",
  },
  {
    id: 2,
    name: "HooBank",
    description:
      "Modern bank application consisting of a stunning hero section, high-quality assets and gradients, business stats, reusable feature sections with call-to-action buttons, testimonials, and more!",
    image: projectImage2,
    link: "https://modernbankapplication.web.app/",
  },
  {
    id: 3,
    name: "Food Order App",
    description:
      "A Food ordering app consisting of Meals stored on firebase database with add to Cart functionality. A Cart menu with a form for delivery address information. Order menu with recent orders fetched from backend database",
    image: projectImage3,
    link: "https://food-order-app-dd681.web.app/",
  },
  {
    id: 4,
    name: "Investment Calculator",
    description:
      "A calculator made using React.js to calculate returns on your investment.",
    image: projectImage4,
    link: "https://investmentcalculatorapp.web.app/",
  },
  {
    id: 5,
    name: "Expense Tracker",
    description: "React App to track all your expenses.",
    image: projectImage5,
    link: "https://expensetracker-31265.web.app/",
  },
  {
    id: 6,
    name: "Amazon Clone",
    description:
      "This is a Clone app of Amazon made using Javascript, Js modules, HTML, CSS",
    image: projectImage6,
    link: "https://custom-hooks-cabeb.web.app/amazon.html",
  },
];

export const BIO = [
  "I'm very ambitious front-end developer looking for a role in established IT company with the opportunity to work with the latest technologies on challenging and diverse projects.",
  "I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.",
  "If I need to define myself in one sentence that would be a family person, a sports fanatic, movie enthusiast, and tech-obsessed!",
];

export const SKILLS = [
  {
    icon: <DiJavascript className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Javascript",
    experience: "2+ years",
  },
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "1+ years",
  },
  {
    icon: <DiHtml5 className="text-4xl text-red-600 lg:text-5xl" />,
    name: "HTML",
    experience: "2+ years",
  },
  {
    icon: <DiCss3 className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "CSS",
    experience: "2+ years",
  },
  {
    icon: <DiPython className="text-4xl text-white lg:text-5xl" />,
    name: "Python",
    experience: "1+ year",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "1+ year",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://github.com/ShivamTanwar0801",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/shivamtanwar0141/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
];
