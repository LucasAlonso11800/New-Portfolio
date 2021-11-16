import emoji from 'react-easy-emoji';

import Hooli from './assets/img/Hooli.png';

import Tennis from './assets/img/projects/Tennis.png';
import Covid from './assets/img/projects/Covid.png';
import Taylor from './assets/img/projects/Taylor.png';
import ArmaTuEquipo from './assets/img/projects/Arma-tu-equipo.png';
import Minesweeper from './assets/img/projects/Minesweeper.png';
import SocialMedia from './assets/img/projects/Social-media.png';

export const greetings = {
    "name": "Lucas Alonso",
    "title": "Hi everyone, I'm Lucas",
    "description": "I'm a self-taught Full-Stack Developer who works everyday to become a better programmer. I've been able to learn a lot a different technologies that have given me jobs and let me create personal projects around my things of my interest",
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
    "gmail": "mailto:lucasalonso11800@gmail.com"
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
            fontAwesomeClassname: 'vscode-icons:file-type-typescript',
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
            skillName: 'React',
            fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
        },
        {
            skillName: 'Redux',
            fontAwesomeClassname: 'logos:redux',
        },
        {
            skillName: 'NextJS',
            fontAwesomeClassname: 'vscode-icons:file-type-next',
        },
    ],
    backendSkills: [
        {
            skillName: 'NodeJS',
            fontAwesomeClassname: 'logos:nodejs-icon',
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
            fontAwesomeClassname: 'vscode-icons:file-type-sql',
        },
    ],
    versionControlSkills: [
        {
            skillName: 'git',
            fontAwesomeClassname: 'logos:git-icon',
        },
    ],

    softwareSkills: [
        {
            skillName: 'HTML5',
            fontAwesomeClassname: 'vscode-icons:file-type-html',
        },
        {
            skillName: 'CSS3',
            fontAwesomeClassname: 'vscode-icons:file-type-css',
        },
        {
            skillName: 'JavaScript',
            fontAwesomeClassname: 'logos:javascript',
        },
        {
            skillName: 'TypeScript',
            fontAwesomeClassname: 'vscode-icons:file-type-typescript',
        },
        {
            skillName: 'React',
            fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
        },
        {
            skillName: 'Redux',
            fontAwesomeClassname: 'logos:redux',
        },
        {
            skillName: 'NextJS',
            fontAwesomeClassname: 'vscode-icons:file-type-next',
        },
        {
            skillName: 'NodeJS',
            fontAwesomeClassname: 'logos:nodejs-icon',
        },
        {
            skillName: 'MongoDB',
            fontAwesomeClassname: 'vscode-icons:file-type-mongo',
        },
        {
            skillName: 'MySQL',
            fontAwesomeClassname: 'vscode-icons:file-type-sql',
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
            skillName: 'npm',
            fontAwesomeClassname: 'vscode-icons:file-type-npm',
        },
        {
            skillName: 'git',
            fontAwesomeClassname: 'logos:git-icon',
        },
        {
            skillName: 'VSCode',
            fontAwesomeClassname: 'vscode-icons:file-type-vscode',
        },
    ],
}

//EDUCATION

export const experience = [
    {
        company: 'Airata',
        img: Hooli,
        role: 'React Developer',
        date: 'Juni 2021 - Current',
        desc: "I build user interfaces that connect and interact with the database for internal management of the Hooli application. I also periodically have tasks with Node and MySQL."
    }
];

export const projects = [
    {
        name: "Social Media",
        desc: "My first big application using Typescript and MySQL. Based freely on Twitter, the users can create accounts, post what they're thinking, comment on posts, like each others posts and comments and upload their profile names and images.",
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
        name: "Tennis World",
        desc: "Tennis World is an application where the user can find everything related to this beautiful sport. From rankings to tournaments and the most recent news. I had originally built this app with React and a backend of Node, Express and MongoDB but later on I decided to migrate it to Typescript and NextJS.",
        api: "Featuring Tennis Live Data API and News API",
        img: Tennis,
        link: {
            name: "Live Project",
            url: "https://tennis-world-nextjs.vercel.app/"
        },
        git: {
            name: "GitHub Repository",
            url: "https://github.com/LucasAlonso11800/Tennis-World-Nextjs"
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
        name: "Minesweeper",
        desc: "The classic Minesweeper game written with Typescript and Redux. Pick a difficulty and try to make it into the fastest players.",
        img: Minesweeper,
        link: {
            name: "Live Project",
            url: "https://lucasalonso-minesweeper.netlify.app/"
        },
        git: {
            name: "GitHub Repository",
            url: "https://github.com/LucasAlonso11800/Redux-Minesweeper"
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