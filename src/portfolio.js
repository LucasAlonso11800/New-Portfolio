import emoji from 'react-easy-emoji';

import Hooli from './assets/img/Hooli.png';
import Upwork from './assets/img/upwork.png';

import Tennis from './assets/img/projects/Tennis.png';
import BackgroundGenerator from './assets/img/projects/MosaicBackground.png';
import ArmaTuEquipo from './assets/img/projects/Arma-tu-equipo.png';
import Blog from './assets/img/projects/Blog.png';
import SocialMedia from './assets/img/projects/Social-media.png';
import Monalisa from './assets/img/projects/Monalisa.png';

export const greetings = {
    "name": "Lucas Alonso",
    "title": "Hi everyone, I'm Lucas",
    "description": "I'm a self-taught Full-Stack Developer whose strengths are problem solving, logical thinking and fast learning. I'm experienced on team work and I give my best each day to improve as a software developer and keep growing on my professional career.",
    "resumeLink": "/"
}

export const openSource = {
    githubUserName: 'LucasAlonso11800',
};

export const contact = {

}

export const socialLinks = {
    "github": "https://github.com/LucasAlonso11800",
    "linkedin": "https://www.linkedin.com/in/lucas-alonso-47a2ba20a/",
    "gmail": "https://mail.google.com/mail/?view=cm&fs=1&to=lucasalonso11800@gmail.com&su=Hi, Lucas"
}

export const skillsSection = {
    title: 'What do I do?',
    subTitle: 'Put all my skills to work to create the best projects',
    skills: [
        emoji(
            '⚡ Develop responsive User Interfaces for web applications'
        ),
        emoji('⚡ Power them with third party APIs or with my own backend designs'),
        emoji(
            '⚡ Landing page design, Responsive design, Animations, Database management'
        ),
    ],

    languages: [
        {
            skillName: 'JavaScript',
            fontAwesomeClassname: 'logos:javascript',
        },
        {
            skillName: 'TypeScript',
            fontAwesomeClassname: 'logos:typescript-icon',
        },
    ],
    frontendSkills: [
        {
            skillName: 'CSS3',
            fontAwesomeClassname: 'vscode-icons:file-type-css',
        },
        {
            skillName: 'SASS',
            fontAwesomeClassname: 'logos:sass',
        },
        {
            skillName: 'React',
            fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
        },
        {
            skillName: 'NextJS',
            fontAwesomeClassname: 'vscode-icons:file-type-next',
        },
        // {
        //     skillName: 'Redux',
        //     fontAwesomeClassname: 'logos:redux',
        // },
        {
            skillName: 'Apollo',
            fontAwesomeClassname: 'file-icons:apollo',
        },
    ],
    backendSkills: [
        {
            skillName: 'NodeJS',
            fontAwesomeClassname: 'logos:nodejs-icon',
        },
        {
            skillName: 'Express',
            fontAwesomeClassname: 'simple-icons:express',
        },
        {
            skillName: 'GraphQL',
            fontAwesomeClassname: 'vscode-icons:file-type-graphql'
        },
        {
            skillName: 'REST',
            fontAwesomeClassname: 'vscode-icons:file-type-rest'
        },
        {
            skillName: 'MongoDB',
            fontAwesomeClassname: 'vscode-icons:file-type-mongo',
        },
        {
            skillName: 'MySQL',
            fontAwesomeClassname: 'logos:mysql',
        },
    ],
    versionControlAndTestingSkills: [
        {
            skillName: 'git',
            fontAwesomeClassname: 'logos:git-icon',
        },
        {
            skillName: 'Jest',
            fontAwesomeClassname: 'vscode-icons:file-type-jest'
        },
        {
            skillName: 'Cypress',
            fontAwesomeClassname: 'vscode-icons:file-type-cypress'
        }
    ],
}

//EDUCATION

export const experience = [
    {
        company: 'Airata',
        img: Hooli,
        role: 'Full Stack Developer',
        date: 'June 2021 - Current',
        desc: "I build user interfaces for internal database management with React and also convert different designs into responsive websites with React and NextJS. \n I also work periodically in the backend with Node and write and maintain Stored Procedures with MySQL."
    },
    {
        company: 'Freelancing',
        img: Upwork,
        role: 'Frontend Developer',
        date: 'February 2022 - Current',
        desc: "As a freelancer I've worked in several projects of different sizes for clients around the world, primarily with React and Next in the frontend, focusing on getting pixel perfect, responsive web apps from Figma, Adobe or Zeplin designs."
    }
];

// Projects

export const projects = [
    {
        name: "Monalisa Hotel",
        desc: "Inspired by a design I found online, I built a website for a fake 5-stars luxurious hotel set in Amalfi, Italy. A place I'd like to visit one day. The user can find information about all the different types of rooms, read testimonials about the hotel and finally book a room.",
        desc2: "I built this project with NextJS, Typescript, SASS and MySQL. Tested with Jest and Cypress.",
        img: Monalisa,
        link: {
            name: "Live Project",
            url: "https://lucas-alonso-monalisa-hotel.herokuapp.com/"
        },
        git: {
            name: "GitHub Repository",
            url: "https://github.com/LucasAlonso11800/Monalisa-Hotel"
        }
    },
    {
        name: "New York City Blog",
        desc: "One of my life dreams is to visit New York City, moved by that dream I created this app. This CMS allows writers to create articles about the Big Apple and admins to control which articles are published and to control the general aspects of the page, managing images and texts for different sections of the layout and the categories in which articles fall into. Readers can search articles by title, by category and also leave comments.",
        desc2: "I created this app with Typescript, NextJS, GraphQL, Apollo, MySQL and CSS Modules. Tested with Cypress",
        desc3: "Its design and content belong entirely to Tracy Kaler's blog",
        img: Blog,
        link: {
            name: "Live Project",
            url: "https://nyc-blog.herokuapp.com/"
        },
        git: {
            name: "GitHub Repository",
            url: "https://github.com/LucasAlonso11800/new-york-blog"
        }
    },
    {
        name: "Tennis World",
        desc: "Tennis World is an application where the user can find everything related to this beautiful sport. From rankings to tournaments and the most recent news.",
        desc2: "I had originally built this app with React and a backend of Node, Express and MongoDB but later on I decided to migrate it to Typescript and NextJS.",
        desc3: "Featuring Tennis Live Data API and News API",
        img: Tennis,
        link: {
            name: "Live Project",
            url: "https://tennis-world-nextjs-zeta.vercel.app/"
        },
        git: {
            name: "GitHub Repository",
            url: "https://github.com/LucasAlonso11800/Tennis-World-Nextjs"
        }
    },
    {
        name: "Social Media",
        desc: "Based freely on Twitter, the users can create accounts, post what they're thinking, comment on posts, like each others posts and comments and upload their profile names and images.",
        desc2: "My first application combining React with Typescript, GraphQL and MySQL. Tested with Cypress.",
        img: SocialMedia,
        link: {
            name: "Live Project",
            url: "https://lucas-alonso-social-media-app.netlify.app/"
        },
        git: {
            name: "GitHub Repository",
            url: "https://github.com/LucasAlonso11800/Social-media-app"
        }
    },
    {
        name: "Arma tu equipo",
        desc: "This  application lets the user play to be a football coach and share his/her ideal formation of the Argentinian National Team, River Plate and Boca Jrs.",
        desc2: "Built with React and tested with Jest",
        img: ArmaTuEquipo,
        link: {
            name: "Live Project",
            url: "https://lucasalonso-arma-tu-equipo.netlify.app"
        },
        git: {
            name: "GitHub Repository",
            url: "https://github.com/LucasAlonso11800/Arma-tu-equipo"
        }
    },
    {
        name: "Background generator",
        desc: "A simple mosaic generator where the user picks the tonality, sees the result and later can download it.",
        desc2: "I built this one with just HTML, CSS and Vanilla JavaScript. Tested with Jest",
        img: BackgroundGenerator,
        link: {
            name: "Live Project",
            url: "https://mosaic-background-generator.netlify.app"
        },
        git: {
            name: "GitHub Repository",
            url: "https://github.com/LucasAlonso11800/Mosaic-background-generator"
        }
    }
];