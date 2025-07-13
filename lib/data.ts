import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import mnsafetysolutions from '@/public/mnsafetysolutions.png'
import eeeblr from '@/public/eeeblr.png'
import skysecure from '@/public/skysecure.png'
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "AGURCHAND MANMULL JAIN COLLEGE",
    location: "Chennai, TN",
    description:
      "Graduated in B.sc. Computer Science.",
    icon: React.createElement(LuGraduationCap),
    date: "2015 - 2018",
  },
  {
    title: "Waterproofing Service (Self Employeed)",
    location: "Chennai, TN",
    description:
      "Did waterproofing service for several construction sites.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2021",
  },
  {
    title: "MERN Stack Developer (Freelancer)", 
    location: "Chennai, TN",
    description:
      "I worked as a Freelancer for 6 months. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 (Feb) - 2022 (Aug)",
  },
  {
    title: "Full-Stack Developer",
    location: "Bengaluru, KA.",
    description:
      "I worked as a full-stack developer in Altsys Technologies Private Limited. My stack includes ReactJS, JavaScript, Tailwind, NodeJS and MySQL.",
    icon: React.createElement(FaReact),
    date: "2022 (Aug) - 2022 (Nov)",
  },
  {
    title: "React Native Developer",
    location: "Bengaluru, KA.",
    description:
      "I worked as a React Native developer in Netsecure Technologies. My stack includes React Native, JavaScript and Redux-saga.",
    icon: React.createElement(FaReact),
    date: "2023 (Jan) - 2023 (Sep)",
  },
    {
    title: "Frontend Developer",
    location: "Chennai, TN.",
    description:
      "I'm working as a Frontend Developer in Coffee. My stack includes ReactJS, Next.js, React Native, Expo, Laravel, TypeScript, Php, and LLMs.",
    icon: React.createElement(FaReact),
    date: "2023 (Dec) - Present",
  },
] as const;

export const projectsData = [
  {
    title: "M.N.safetysolutions",
    description:
      "My first React project for M.N.safety solutions. Purpose of this web app is to showcase the hardware products to clients",
    tags: ["React", "Tailwind", "Figma"],
    imageUrl: mnsafetysolutions,
  },
  {
    title: "Excellent Engineering Enterprises",
    description:
      "Purpose of this web app is to upgrade React to Next app for better SEO visibility, UI & UX.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: eeeblr,
  },
  {
    title: "skysecure",
    description:
      "This web app is to make Security and Compliance Solutions Simplified!",
    tags: ["React", "MYSQL", "Tailwind", "ExpressJS"],
    imageUrl: skysecure,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Node.js",
  "Laravel",
  "PHP",
  "Git",
  "Tailwind",
  "MongoDB",
  "MySQL",
  "Redux",
  "GraphQL",
  "Express",
  "Python",
  "AI/ML",
  "LLMs",
  "Framer Motion",
] as const;
