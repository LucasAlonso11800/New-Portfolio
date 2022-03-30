import emoji from 'react-easy-emoji';

import Hooli from './assets/img/Hooli.png';
import Upwork from './assets/img/upwork.png';

import Tennis from './assets/img/projects/Tennis.png';
import Covid from './assets/img/projects/Covid.png';
import Taylor from './assets/img/projects/Taylor.png';
import ArmaTuEquipo from './assets/img/projects/Arma-tu-equipo.png';
import Blog from './assets/img/projects/Blog.png';
import SocialMedia from './assets/img/projects/Social-media.png';

export const greetings = {
    "name": "Lucas Alonso",
    "title": "Hi everyone, I'm Lucas",
    "description": "I'm a self-taught Full-Stack Developer whose strengths are problem solving, logical thinking and fast learning. I'm experienced on team work and I give my best each day to slowly but surely improve as a developer and keep growing in my professional career.",
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
            skillName: 'HTML5',
            fontAwesomeClassname: 'vscode-icons:file-type-html',
        },
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
        // {
        //     skillName: 'Vue',
        //     fontAwesomeClassname: 'logos:vue',
        // },
        // {
        //     skillName: 'Nuxt',
        //     fontAwesomeClassname: 'logos:nuxt',
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
        desc: "As a freelancer I've worked in several projects of different sizes for clients around the world, primarily with React in the frontend, focusing on getting pixel perfect, responsive web apps from Figma, Adobe or Zeplin designs."
    }
];

export const projects = [
    {
        name: "New York City Blog",
        desc: "One of my life dreams is to visit New York City, moved by that dream I created this app. This CMS allows writers to create articles about the Big Apple and admins to control which articles are published and to control the general aspects of the page, managing images and texts for different sections of the layout and the categories in which articles fall into. Readers can search articles by title, by category and also leave comments. I created this app with Typescript, NextJS, GrahQL, Apollo, MySQL and CSS Modules.",
        api: "Its design and content belong entirely to Tracy Kaler's blog",
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
        desc: "Tennis World is an application where the user can find everything related to this beautiful sport. From rankings to tournaments and the most recent news. I had originally built this app with React and a backend of Node, Express and MongoDB but later on I decided to migrate it to Typescript and NextJS.",
        api: "Featuring Tennis Live Data API and News API",
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
        desc: "My first big application using Typescript, GraphQL and MySQL. Based freely on Twitter, the users can create accounts, post what they're thinking, comment on posts, like each others posts and comments and upload their profile names and images. Tested with Cypress",
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
        name: "Covid Tracker",
        desc: "This React application displays charts with the most recent info about the pandemic. The design was made with Material-UI and the charts with the library Charts.js.",
        api: "Featuring Narrativa's COVID-19 API",
        img: Covid,
        link: {
            name: "Live Project",
            url: "https://lucasalonso-covid-tracker.netlify.app"
        },
        git: {
            name: "GitHub Repository",
            url: "https://github.com/LucasAlonso11800/Covid-tracker"
        }
    },
    {
        name: "Taylor Swift Survey",
        desc: "A MERN Stack and Material-UI application. Here the users must answer 5 personal opinion questions about each album of Taylor Swift's carrer. More than 500 people from all over the world took part of the survey via Reddit",
        img: Taylor,
        link: {
            name: "Live Project",
            url: "https://taylor-survey.netlify.app/"
        },
        git: {
            name: "GitHub Repository",
            url: "https://github.com/LucasAlonso11800/Taylor-survey"
        }
    },
    {
        name: "Arma tu equipo",
        desc: "This React application lets the user play to be a football coach and share his/her ideal formation of the Argentinian National Team, River Plate and Boca Jrs.",
        img: ArmaTuEquipo,
        link: {
            name: "Live Project",
            url: "https://lucasalonso-arma-tu-equipo.netlify.app"
        },
        git: {
            name: "GitHub Repository",
            url: "https://github.com/LucasAlonso11800/Arma-tu-equipo"
        }
    }
];