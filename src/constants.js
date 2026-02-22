// ============================
// Skills Section Logos
// ============================
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';
import matplotlibLogo from './assets/tech_logo/Matplotlib.png';
import numpyLogo from './assets/tech_logo/Numpy.png';
import pandasLogo from './assets/tech_logo/Pandas.png';

// ============================
// Experience Section Logos
// ============================
import cloudCounselageLogo from './assets/company_logo/cloudcounselage_logo.png';

// ============================
// Education Section Logos
// ============================
import mgvdLogo from './assets/education_logo/Mgvd.png';
import mhsscelogo from './assets/education_logo/Mhssce.png';

// ============================
// Projects Section Logos
// ============================
import stockLogo from './assets/work_logo/Stock_predictor.png';
import skyportLogo from './assets/work_logo/Skyport.png';
import linkedLogo from './assets/work_logo/Linked.png';

// ============================
// Skills Info
// ============================
export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
      { name: 'Matplotlib', logo: matplotlibLogo },
      { name: 'Numpy', logo: numpyLogo },
      { name: 'Pandas', logo: pandasLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

// ============================
// Experiences
// ============================
export const experiences = [
  {
    id: 0,
    img: cloudCounselageLogo,
    role: "Data Analyst",
    company: "Cloud Counselage Pvt. Ltd.",
    date: "Sep 2025 - Present",
    desc: "Data Analyst Intern at Cloud Counselage Pvt. Ltd., focusing on data cleaning, analysis, and visualization to extract insights and support decision-making",
    skills: [
      "Python",
      "Excel",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "SQL",
      "Power BI/Tableau",
    ],
  },
  {
    id: 1,
    img: cloudCounselageLogo,
    role: "FullStack Developer",
    company: "Cloud Counselage Pvt. Ltd.",
    date: "Sep 2025 - Present",
    desc: "Full-Stack Developer Intern at Cloud Counselage Pvt. Ltd, contributing to the design and development of web applications using the MERN stack.",
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "Bootstrap",
      "React.js",
      "Next.js",
      "Tailwind.css",
      "Express.js",
      "MongoDB",
      "MySQL",
      "Git/GitHub",
    ],
  },
];

// ============================
// Education
// ============================
export const education = [
  {
    id: 0,
    img: mhsscelogo,
    school: "B R Harne College of Engineering & Technology",
    date: "Aug 2022 - Expected May 2026",
    grade: "70.0%",
    desc: "Currently pursuing BE in Computer Engineering. Skilled in JavaScript, React, Next.js, Node.js, Python, and exploring AI-powered automation with LangChain. Experienced in SQL, EDA, and data visualization.",
    degree: "Bachelor of Engineering - BE (Computer Engineering)",
  },
  {
    id: 1,
    img: mgvdLogo,
    school: "Mahatma Gandhi Vidyalaya and Junior College Dhasai",
    date: "July 2021 - March 2022",
    grade: "65.0%",
    desc: "Completed class 12 under SSC board, studying Physics, Chemistry, Mathematics and Biology (PCMB).",
    degree: "HSC (XII) - PCMB",
  },
  {
    id: 2,
    img: mgvdLogo,
    school: "Saralgaon Vibhag High School",
    date: "July 2019 - April 2020",
    grade: "78.0%",
    desc: "Completed class 10 under SSC board.",
    degree: "SSC (X)",
  },
];

// ============================
// Projects
// ============================
export const projects = [
  {
    id: 0,
    title: "Real-Time Stock Tracker",
    description:
      "A Python-based web app that fetches and displays live stock prices with auto-refresh, built using Python, HTML, and CSS for real-time market insights.",
    image: stockLogo,
    tags: ["HTML", "CSS", "MongoDB", "Python", "Flask"],
    github: "https://github.com/saishshaikh/Real-Time-Stock-Tracker.git",
  },
  {
    id: 1,
    title: "LinkedIn Clone",
    description:
      "A full-stack web application replicating core functionalities of LinkedIn, including user registration, profile management, post sharing, and social connections. Built using the MERN stack.",
    image: linkedLogo,
    tags: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JavaScript",
      "HTML",
      "CSS",
      "REST API",
      "Axios",
      "JWT Authentication",
    ],
    github: "https://github.com/saishshaikh/LINKDIN_PROJECT.git",
  },
  {
    id: 2,
    title: "SkyPort",
    description:
      "A Java Swing desktop application designed to ensure secure airline workflows, streamline real-time flight reservations, and manage customer data seamlessly with MySQL integration.",
    image: skyportLogo,
    tags: ["Java", "Java Swing", "MySQL", "JDBC"],
    github: "https://github.com/saishshaikh/SKY-PORT.git",
  },
];
