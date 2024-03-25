import { neur, uofa, starr } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    django,
    flask,
    firebase,
    sqlite,
    android_studio,
    flutter,
    axios,
    styled_component,
    mysql,
    postman,
    threejs,
    python,
    c,
    java,
    lisp,
    php,
    ubuntu,
    arch,
    docker,
    email,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: flutter,
        name: "Flutter",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: styled_component,
        name: "Styled Components",
        type: "Frontend",
    },
    {
        imageUrl: threejs,
        name: "Three.js",
        type: "Frontend",
    },
    {
        imageUrl: axios,
        name: "Axios",
        type: "Library",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: firebase,
        name: "Firebase",
        type: "Database",
    },
    {
        imageUrl: sqlite,
        name: "Sqlite",
        type: "Database",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: django,
        name: "Django",
        type: "Backend",
    },
    {
        imageUrl: flask,
        name: "Flask",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: android_studio,
        name: "Android Studio",
        type: "IDE"
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Programming Language",
    },
    {
        imageUrl: postman,
        name: "Postman",
        type: "Tools",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Programming Language",
    },
    {
        imageUrl: c,
        name: "C",
        type: "Programming Language",
    },
    {
        imageUrl: lisp,
        name: "Common Lisp",
        type: "Programming Language",
    },
    {
        imageUrl: php,
        name: "PHP",
        type: "Server Language",
    },
    {
        imageUrl: ubuntu,
        name: "Ubuntu",
        type: "Operating System",
    },
    {
        imageUrl: arch,
        name: "Arch Linux",
        type: "Operating System",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "Container",
    },
];

export const experiences = [
    {
        title: "Web Developer Volunteer",
        company_name: "NeurAlbertaTech",
        icon: neur,
        iconBg: "#202020",
        date: "Jan 2023 - Sep 2023",
        points: [
            "Spearheaded the development of NeurAlbertaTech's Web portal for NetHack, leveraging Next.js and Strapi to implment key features.",
            "Accelerated the production process by 15%, optimizing efficiency and delivery timelines.",
            "Contributed to the implementation of robust test cases, resulting in a notable 20% increase in overall production progress.",
        ],
    },
    {
        title: "Teaching Assistant",
        company_name: "University of Alberta",
        icon: uofa,
        iconBg: "#f9eed8",
        date: "Jan 2023 - Apr 2023",
        points: [
            "Provided personalized tutoring to students on course materials, offering guidance and support to enhance their understanding.",
            "Assessed and graded assignments and exams, ensuring accurate and timely feedback for student development.",
            "Received commendable feedback from both students and professors, reflecting the effectiveness of the tutoring and evaluation process.",
        ],
    },
    {
        title: "Web Developer Volunteer",
        company_name: "UASTARR",
        icon: starr,
        iconBg: "#ffffff",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Revitalised UASTARR official website by remaining the previous version,  utilizing Flask API, HTML, CSS and JavaScript to enhance user experience and functionality.",
            "Pioneered the development of the website's initial version as a template, resulting in a remarkable 100% acceleration of the overall development process. This innovative approach laid a solid foundation for subsequent iterations and streamlined the website creation workflow."
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: email,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Frank-1998',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/ziang-li-696494234',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        // link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        // link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        // link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        // link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        // link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        // link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];