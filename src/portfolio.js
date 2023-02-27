import Hooli from './assets/img/Hooli.png';
import Upwork from './assets/img/upwork.png';
import Wally from './assets/img/wally.png';

import Tennis from './assets/img/projects/Tennis.png';
import BackgroundGenerator from './assets/img/projects/MosaicBackground.png';
import ArmaTuEquipo from './assets/img/projects/Arma-tu-equipo.png';
import Blog from './assets/img/projects/Blog.png';
import SocialMedia from './assets/img/projects/Social-media.png';
import Monalisa from './assets/img/projects/Monalisa.png';
import Covid from './assets/img/projects/Covid.png';

export const greetings = {
    "name": "Lucas Alonso",
    "title": "Hi everyone, I'm Lucas",
    "description": "I'm a self-taught Full-Stack Developer whose main strengths are React, NodeJS and MySQL. I've been programming for almost 3 years and I keep working everyday to find the best solutions to the problems I encounter, to improve as a software developer and to keep growing on my professional career.",
    "resumeLink": "/lucas-alonso-resume.pdf"
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
    title: 'My main skills',
    // subTitle: 'Put all my skills to work to create the best projects',
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
            skillName: 'React',
            fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
        },
        {
            skillName: 'NextJS',
            fontAwesomeClassname: 'vscode-icons:file-type-next',
        },
        {
            skillName: 'Vue',
            fontAwesomeClassname: 'vscode-icons:file-type-vue',
        },
        {
            skillName: 'Nuxt',
            fontAwesomeClassname: 'vscode-icons:file-type-nuxt',
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
            skillName: 'MongoDB',
            fontAwesomeClassname: 'vscode-icons:file-type-mongo',
        },
        {
            skillName: 'MySQL',
            fontAwesomeClassname: 'logos:mysql',
        },
    ]
}

//EDUCATION

export const experience = [
    {
        company: 'Airata',
        img: Hooli,
        role: 'Full Stack Developer',
        date: 'June 2021 - Current',
        descBullets: ['Build web applications with React for different company areas like staff time control and accounting.', 
        'Build microservices with Node.',
        'Write and maintain MySQL stored procedures.',
        'Build user interfaces for internal backoffice management with React.',
        'Work alongside designers to translate Adobe XD projects into responsive websites with React and Next JS.']
    },
    {
        company: 'Freelancing',
        img: Upwork,
        role: 'Full stack Developer',
        date: 'February 2022 - Current',
        descBullets: [
            "Work as a freelancer in several projects of different sizes for clients around the world, primarily with React, Next JS and TypeScript, but also with Vue and NuxtJS.", 
            "Create pixel perfect, responsive web apps from Figma, Adobe XD, Adobe InDesign or Zeplin designs.", 
            "Work on dashboards and landing pages.",
            "Build REST endpoints with Node JS and the Nest framework, using MongoDB as the database."
        ]
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
            url: "https://monalisa-hotel.vercel.app/"
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
            url: "https://new-york-blog.vercel.app/"
        },
        git: {
            name: "GitHub Repository",
            url: "https://github.com/LucasAlonso11800/new-york-blog"
        }
    },
    {
        name: "Tennis World",
        desc: "Tennis World is an application where the user can find everything related to this beautiful sport. From rankings to tournaments and the most recent news.",
        desc2: "I had originally built this app with React and a backend of Node, Express and MongoDB but later on I decided to migrate it to Typescript and NextJS. Tested with Cypress",
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
        name: "Covid Tracker",
        desc: "When I first started to learn React I built an app to follow statistics of the pandemic, later on I decided to rebuild it with Typescript and a new design.",
        desc2: "Built with React, Typescript, SASS and Redux Toolkit. Tested with Jest and React Testing Library",
        img: Covid,
        link: {
            name: "Live Project",
            url: "https://lucas-alonso-covid-tracker.netlify.app/"
        },
        git: {
            name: "GitHub Repository",
            url: "https://github.com/LucasAlonso11800/new-covid-tracker"
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