import { Project, Service, Skill } from './types';
import { RiComputerLine } from 'react-icons/ri';
import { FaServer } from 'react-icons/fa';
import { AiOutlineApi, AiOutlineAntDesign } from 'react-icons/ai';
import { MdDeveloperMode } from 'react-icons/md';
import { BsCircleFill } from 'react-icons/bs';

export const services:Service[] = [
    {
        Icon: RiComputerLine,
        title: 'Front-end Development',
        about: 'I can build an elegant, responsive, and scalable SPA using <b>HTML</b>, <b>CSS</b>, and <b>ReactJS</b>.',
    },
    {
        Icon: FaServer,
        title: 'Back-end Development',
        about: 'I can handle databases, servers, and APIs using <b>NodeJS</b>, <b>ExpressJS</b>, and other popular frameworks.',
    },
    {
        Icon: AiOutlineApi,
        title: 'API Development',
        about: 'I can develop robust REST API using <b>django-rest-api</b> & <b>Node API</b>.',
    },
    {
        Icon: MdDeveloperMode,
        title: 'Competitive Coding',
        about: 'A daily user and problem solver of <b>Leet Code</b>.',
    },
    {
        Icon: AiOutlineAntDesign,
        title: 'UI/UX Design',
        about: 'I can build stunning user interfaces using <b>Figma</b> and <b>Framer</b>.',
    },
    {
        Icon: RiComputerLine,
        title: 'Whatever',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat!',
    },
];

export const languages:Skill[] = [
    {
        name: 'JavaScript',
        level: 99,
        Icon: BsCircleFill,
    },
    {
        name: 'ReactJS',
        level: 85,
        Icon: BsCircleFill,
    },
    {
        name: 'NodeJS',
        level: 80,
        Icon: BsCircleFill,
    },
    {
        name: 'NextJS',
        level: 70,
        Icon: BsCircleFill,
    },
    {
        name: 'Bootstrap',
        level: 100,
        Icon: BsCircleFill,
    },
    {
        name: 'Laravel',
        level: 50,
        Icon: BsCircleFill,
    },
];

export const tools:Skill[] = [
    {
        Icon: BsCircleFill,
        name: 'Git',
        level: 90,
    },
    {
        Icon: BsCircleFill,
        name: 'Photoshop',
        level: 50,
    },
    {
        Icon: BsCircleFill,
        name: 'Figma',
        level: 30,
    },
];

export const projects:Project[] = [
    { 
        id: 1,
        name: "COVID Tracker",
        description: "This app shows a statistical view about corona virus over the world",
        image_path: "/images/covid.jpg",
        deployed_url: "https://chinmaypatel.tech",
        github_url: "https://github.com/chinmaycp",
        categories: ["react"],
        key_technologies: ["React", "Chart.js", "Material UI"],
    },
    {
        id: 2,
        name: "Algorithm Visualizer",
        image_path: "/images/algoVisual.png",
        deployed_url: "https://chinmaypatel.tech",
        github_url: "https://github.com/chinmaycp",
        categories: ["react"],
        description: "An web app which shows how an algorithm (path finding or sorting) works with cool animation",
        key_technologies: ["React", "firebase", "Framer Motion"],
    },
    {
        id: 3,
        name: "Dev Talks",
        image_path: "/images/dev.png",
        deployed_url: "https://chinmaypatel.tech",
        github_url: "https://github.com/chinmaycp",
        categories: ["node", "mongo", "react"],
        description: "Social Media app for developers who can share project,create posts,etc...",
        key_technologies: [
            "React",
            "Redux",
            "Node",
            "Express",
            "Mongo",
            "REST API",
            "Bootstrap",
        ],
    },
    {
        id: 4,
        name: "Realtime Chat App",
        image_path: "/images/chatapp.jpg",
        deployed_url: "https://chinmaypatel.tech",
        github_url: "https://github.com/chinmaycp",
        categories: ["node", "react"],
        description: "Basic Realtime Chat App where one can create a room can talk to each other",
        key_technologies: ["React", "Node", "Express", "Socket", "Bootstrap"],
    },
    {
        id: 5,
        name: "Tweeter Clone",
        image_path: "/images/tweetme.jpeg",
        deployed_url: "https://chinmaypatel.tech",
        github_url: "https://github.com/chinmaycp",
        categories: ["django", "react"],
        description: "First Django Project :) | Typical Social Media App where one can post,like ,comment etc",
        key_technologies: ["React", "Django", "Django REST API"],
    },
    {
        id: 6,
        name: "Color Classification using tf.js",
        image_path: "/images/color.jpeg",
        deployed_url: "!#",
        github_url: "https://github.com/chinmaycp",
        categories: ["express"],
        description: "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
        key_technologies: ["Express", "TensorFlow.js", "Vanilla js"],
    },
    {
        id: 7,
        name: "YouTube using YouTube ",
        image_path: "/images/youtubeClone.jpg",
        deployed_url: "https://chinmaypatel.tech",
        github_url: "https://github.com/chinmaycp",
        categories: ["express"],
        description: 'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
        key_technologies: [
            "React",
            "Redux",
            "Firebase Auth",
            "YouTube API",
            "Sass",
            "Bootstrap",
        ],
    },
    {
        id: 8,
        name: "Football App",
        image_path: "/images/football.jpg",
        deployed_url: "https://chinmaypatel.tech",
        github_url: "https://github.com/chinmaycp",
        categories: ["react"],
        description: "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
        key_technologies: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
    },
];