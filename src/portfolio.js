import emoji from 'react-easy-emoji';

import Tennis from './assets/img/projects/Tennis.png';
import Covid from './assets/img/projects/Covid.png';
import Taylor from './assets/img/projects/Taylor.png';
import ArmaTuEquipo from './assets/img/projects/Arma-tu-equipo.png';
import BackgroundGenerator from './assets/img/projects/Background-generator.png';
import Trivia from './assets/img/projects/Trivia.png';

export const greetings = {
    "name": "Lucas Alonso",
    "title": "Hi everyone, I'm Lucas",
    "description": "I'm a self-taught Full-Stack Developer who works everyday to become a better programmer and get the job of my dreams. I've been able to learn a lot a different technologies and create personal projects around my things of my interest",
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
            '⚡ Landing page design, Responsive design, Animations'
        ),
    ],

    softwareSkills: [
        {
            skillName: 'html-5',
            fontAwesomeClassname: 'vscode-icons:file-type-html',
        },
        {
            skillName: 'css3',
            fontAwesomeClassname: 'vscode-icons:file-type-css',
        },
        {
            skillName: 'JavaScript',
            fontAwesomeClassname: 'logos:javascript',
        },
        {
            skillName: 'Reactjs',
            fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
        },
        {
            skillName: 'Nodejs',
            fontAwesomeClassname: 'logos:nodejs-icon',
        },
        {
            skillName: 'npm',
            fontAwesomeClassname: 'vscode-icons:file-type-npm',
        },
        {
            skillName: 'MongoDB',
            fontAwesomeClassname: 'vscode-icons:file-type-mongo',
        },
        {
            skillName: 'JSON',
            fontAwesomeClassname: 'vscode-icons:file-type-json',
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
// EXPERIENCE

export const projects = [
    {
        name: "Tennis World",
        desc: "Tennis World is an application where the user can find everything related to this beautiful sport. From rankings to tournaments and the most recent news. I designed this app with React and Styled components, also adding a backend with Node, Express, MongoDB and Mongoose.",
        api: "Featuring Tennis Live Data API and News API",
        img: Tennis,
        link: {
            name: "Live Project",
            url: "https://lucasalonso-tennis-world.netlify.app/"
        },
        git: {
            name: "GitHub Repository",
            url: "https://github.com/LucasAlonso11800/Tennis-App"
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
        desc: "My second MERN Stack and Material-UI application. Here the users must answer 5 personal opinion questions about each album of Taylor Swift's carrer. More than 500 people from all over the world took part of the survey via Reddit",
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
    },
    {
        name: "Background generator",
        desc: "A simple mosaic generator where the user picks the tonality and later can download the result. I built this one with only HTML, CSS and Vanilla JavaScript",
        img: BackgroundGenerator,
        link: {
            name: "Live Project",
            url: "https://mosaic-background-generator.netlify.app"
        },
        git: {
            name: "GitHub Repository",
            url: "https://github.com/LucasAlonso11800/Mosaic-background-generator"
        }
    },
    {
        name: "Trivia",
        desc: "Do you like Q&A games? This is your app then. Try your best and compare yourself with other players. Styled Components and the MERN Stack helped me build this app.",
        api: "Featuring Open TriviaDB API",
        img: Trivia,
        link: {
            name: "Live Project",
            url: "https://lucasalonso-triviaapp.netlify.app/"
        },
        git: {
            name: "GitHub Repository",
            url: "https://github.com/LucasAlonso11800/Trivia"
        }
    },
    
];