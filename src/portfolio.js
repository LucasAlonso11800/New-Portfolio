import Hooli from "./assets/img/Hooli.png";
import Upwork from "./assets/img/upwork.png";

import Tennis from "./assets/img/projects/Tennis.png";
import BackgroundGenerator from "./assets/img/projects/MosaicBackground.png";
import ArmaTuEquipo from "./assets/img/projects/Arma-tu-equipo.png";
import Blog from "./assets/img/projects/Blog.png";
import Monalisa from "./assets/img/projects/Monalisa.png";
import Covid from "./assets/img/projects/Covid.png";
import Italki from "./assets/img/projects/Italki.png";

export const greetings = {
  name: "Lucas Alonso",
  title: "Lucas Alonso",
  tagline: "Full Stack Developer | Building scalable web apps with modern frameworks",
  description:
    `With 4+ years of experience building scalable web applications I'm skilled across modern frameworks, cloud platforms, databases, and API design.\n 
    I'm experienced in collaborating with international teams and delivering products that reach thousands of users. I enjoy turning complex problems into clean, efficient solutions while focusing on code quality, collaboration, and continuous learning.`
  ,
  resumeLink: "/lucas-alonso-resume.pdf",
};

export const openSource = {
  githubUserName: "LucasAlonso11800",
};

export const contact = {};

export const socialLinks = {
  github: "https://github.com/LucasAlonso11800",
  linkedin: "https://www.linkedin.com/in/lucas-alonso-47a2ba20a/",
  gmail:
    "https://mail.google.com/mail/?view=cm&fs=1&to=lucasalonso11800@gmail.com&su=Hi, Lucas",
};

export const skillsSection = {
  title: "Core Skills",
  // subTitle: 'Put all my skills to work to create the best projects',
  languages: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "logos:javascript",
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "logos:typescript-icon",
    },
  ],
  frontendSkills: [
    {
      skillName: "React",
      fontAwesomeClassname: "vscode-icons:file-type-reactjs",
    },
    {
      skillName: "NextJS",
      fontAwesomeClassname: "vscode-icons:file-type-next",
    },
    {
      skillName: "Tailwind",
      fontAwesomeClassname: "vscode-icons:file-type-tailwind",
    },
  ],
  backendSkills: [
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "logos:nodejs-icon",
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "logos:mysql",
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "logos:postgresql",
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "vscode-icons:file-type-mongo",
    },
    {
      skillName: "GraphQL",
      fontAwesomeClassname: "vscode-icons:file-type-graphql",
    },
  ],
  cloudSkills: [
    {
      skillName: "Git",
      fontAwesomeClassname: "logos:git",
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "logos:aws",
    },
    {
      skillName: "GCP",
      fontAwesomeClassname: "logos:google-cloud",
    },
    {
      skillName: "Testing (Unit & E2E)”",
      fontAwesomeClassname: "logos:jest",
    },
  ],
};

//EDUCATION

export const experience = [
  {
    company: "Capicua",
    role: "Full Stack Developer",
    date: "Feb 2024 — Present",
    descBullets: [
      "Developed web applications using primarily **Next.js**, **TypeScript** and **Node**.",
      "Designed and optimized **PostgreSQL** databases for client projects.",
      "Refactored legacy components and improved unit test coverage, enhancing code maintainability and reducing regression issues.",
      "Collaborated directly with clients and teammates in **English** to gather requirements, present solutions, and deliver results.",
    ],
  },
  {
    company: "Airata",
    role: "Full Stack Developer",
    date: "May 2021 — Feb 2024",
    descBullets: [
      "Built **fintech** web applications with **React** and **Next.js**, including backoffice dashboards and identity verification tools.",
      "Led a team of **3 developers** on a healthcare integration project, resulting in an app with **100,000+ downloads** on the Play Store.",
      "Built institutional landing pages for the company and its main products **MIA** and **Hooli**, boosting product visibility and customer acquisition.",
      "Developed, maintained and optimized **MySQL** stored procedures and **Node** microservices supporting mission-critical operations.",
      "Returned in May 2024 as a trusted consultant, providing ongoing project support by the hour.",
    ],
  },
  {
    company: "Freelancing",
    role: "Full Stack Developer",
    date: "Feb 2022 — Mar 2023",
    descBullets: [
      "Collaborated with international clients and teammates in **English** across **5+ countries** to deliver several web applications and landing pages.",
    ],
  },
];

// Projects

export const projects = [
  {
    name: "Italki Clone",
    desc: "I started this project with the intention of learning and using some of AWS core services. I've always been interested in languages, so I felt cloning a page like Italki would be a fun way of doing it.",
    desc2:
      "I built this project with NextJS, Typescript, MySQL and AWS services like Lambda, DynamoDB, API Gateway and Amplify.",
    img: Italki,
    link: {
      name: "Live Project",
      url: "https://master.d1prapwehf9amu.amplifyapp.com/",
    },
    git: {
      name: "Frontend Repository",
      url: "https://github.com/LucasAlonso11800/italki-clone-frontend",
    },
    git2: {
      name: "Backend Repository",
      url: "https://github.com/LucasAlonso11800/italki-clone-backend",
    },
  },
  {
    name: "Monalisa Hotel",
    desc: "Inspired by a design I found online, I built a website for a fake 5-stars luxurious hotel set in Amalfi, Italy. A place I'd like to visit one day. The user can find information about all the different types of rooms, read testimonials about the hotel and finally book a room.",
    desc2:
      "I built this project with NextJS, Typescript, SASS and MySQL. Tested with Jest and Cypress.",
    img: Monalisa,
    link: {
      name: "Live Project",
      url: "https://monalisa-hotel.vercel.app/",
    },
    git: {
      name: "GitHub Repository",
      url: "https://github.com/LucasAlonso11800/Monalisa-Hotel",
    },
  },
  {
    name: "New York City Blog",
    desc: "One of my life dreams is to visit New York City, moved by that dream I created this app. This CMS allows writers to create articles about the Big Apple and admins to control which articles are published and to control the general aspects of the page, managing images and texts for different sections of the layout and the categories in which articles fall into. Readers can search articles by title, by category and also leave comments.",
    desc2:
      "I created this app with Typescript, NextJS, GraphQL, Apollo, MySQL and CSS Modules. Tested with Cypress",
    desc3: "Its design and content belong entirely to Tracy Kaler's blog",
    img: Blog,
    link: {
      name: "Live Project",
      url: "https://new-york-blog.vercel.app/",
    },
    git: {
      name: "GitHub Repository",
      url: "https://github.com/LucasAlonso11800/new-york-blog",
    },
  },
  {
    name: "Tennis World",
    desc: "Tennis World is an application where the user can find everything related to this beautiful sport. From rankings to tournaments and the most recent news.",
    desc2:
      "I had originally built this app with React and a backend of Node, Express and MongoDB but later on I decided to migrate it to Typescript and NextJS. Tested with Cypress",
    desc3: "Featuring Tennis Live Data API and News API",
    img: Tennis,
    link: {
      name: "Live Project",
      url: "https://tennis-world-nextjs-zeta.vercel.app/",
    },
    git: {
      name: "GitHub Repository",
      url: "https://github.com/LucasAlonso11800/Tennis-World-Nextjs",
    },
  },
  {
    name: "Covid Tracker",
    desc: "When I first started to learn React I built an app to follow statistics of the pandemic, later on I decided to rebuild it with Typescript and a new design.",
    desc2:
      "Built with React, Typescript, SASS and Redux Toolkit. Tested with Jest and React Testing Library",
    img: Covid,
    link: {
      name: "Live Project",
      url: "https://lucas-alonso-covid-tracker.netlify.app/",
    },
    git: {
      name: "GitHub Repository",
      url: "https://github.com/LucasAlonso11800/new-covid-tracker",
    },
  },
  {
    name: "Arma tu equipo",
    desc: "This  application lets the user play to be a football coach and share his/her ideal formation of the Argentinian National Team, River Plate and Boca Jrs.",
    desc2: "Built with React and tested with Jest",
    img: ArmaTuEquipo,
    link: {
      name: "Live Project",
      url: "https://lucasalonso-arma-tu-equipo.netlify.app",
    },
    git: {
      name: "GitHub Repository",
      url: "https://github.com/LucasAlonso11800/Arma-tu-equipo",
    },
  },
  {
    name: "Background generator",
    desc: "A simple mosaic generator where the user picks the tonality, sees the result and later can download it.",
    desc2:
      "I built this one with just HTML, CSS and Vanilla JavaScript. Tested with Jest",
    img: BackgroundGenerator,
    link: {
      name: "Live Project",
      url: "https://mosaic-background-generator.netlify.app",
    },
    git: {
      name: "GitHub Repository",
      url: "https://github.com/LucasAlonso11800/Mosaic-background-generator",
    },
  },
];
