export const METADATA = {
  author: "Md.Sujan",
  title: "Portfolio | Md. Sujan",
  description:
    "Sujan is a passionate Frontend Engineer, dedicated to crafting aesthetic and modern apps that captivate and engage users.",
  siteUrl: "https://www.shubhporwal.me/",
  twitterHandle: "@Md_Sujan_Mridha",
  keywords: [
    "Md Sujan",
    "Frontend Engineer",
    "React Native Developer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
    "MERN stack developer",
    "Web developer",
    "React Developer",
    
  ].join(", "),
  image:
    "https://res.cloudinary.com/dywdhyojt/image/upload/v1721378510/social-preview.png",
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A pragmatic MERN Stack Developer",
  "I build things for the web",
  "I create aesthetic and modern apps",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto:md.sujan0105@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/mdsujan/",
  },
  {
    name: "github",
    url: "https://github.com/mdsujan-mridha",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/md_sujon_mridha/",
  },
  {
    name: "twitter",
    url: "https://x.com/Md_Sujan_Mridha",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "sass",
    "nodejs",
    "vite",
    "firebase",
    "figma",
    "c",
    "python-5"
    
  ],
  librariesAndFrameworks: [
    "react",
    "redux",
    "nextjs",
    "tailwindcss",
    "styledcomponents",
    "antdesign",
    "chakra-ui",
  ],
  databases: ["mysql", "mongodb"],
  other: ["git", "sanity-io"],
};

export const PROJECTS = [
  {
    name: "Farming Help",
    image: "/projects/farming-help.png",
    blurImage: "/projects/blur/farming-blur.png",
    description: "This web application allows users to add products, buy products, give reviews, and provide ratings. 🛏️",
    gradient: ["#F14658", "#DC2537"],
    url: "https://github.com/mdsujan-mridha/Agriculture-client.git",
    tech: ["react", "mongodb", "tailwindcss", "nodejs","redux"],
  },
  {
    name: "Book Sharing",
    image: "/projects/book-shop.png",
    blurImage: "/projects/blur/book-blur.png",
    description: "Book Share is a web application built using the MERN stack (MongoDB, Express, React, Node.js)  ✍🏻",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://github.com/mdsujan-mridha/book-sote-client?tab=readme-ov-file",
    tech: ["javascript", "react", "redux", "tailwindcss", "mongodb","nodejs"],
  },
  {
    name: "Rental Property search Mobile Application",
    image: "/projects/property.png",
    blurImage: "/projects/blur/property-blur.png",
    description:
      "This Rental Property Mobile Application is a comprehensive platform built using React Native for users to list, search, and manage rental properties. 🎙",
    gradient: ["#000066", "#6699FF"],
    url: "https://github.com/mdsujan-mridha/Native-apps",
    tech: ["javascript", "react", "redux", "tailwindcss", "mongodb","nodejs"],
  },
  {
    name: "Car Rental Front-End",
    image: "/projects/home.png",
    blurImage: "/projects/blur/car-blur.png",
    description: "This Car Rental Front-End Web Application is built using React.js with a focus on providing an intuitive and responsive user interface for car rental services.  🏎️",
    gradient: ["#142D46", "#2E4964"],
    url: "https://github.com/mdsujan-mridha/Car-Rental-Front-End",
    tech: ["react","styledcomponents"],
  },
  {
    name: "Aviculture",
    image: "/projects/aviculture.png",
    blurImage: "/projects/blur/aviculture-blur.png",
    description: "Aviculture is a full-stack web application dedicated to the care, breeding, and study of birds.🏎️",
    gradient: ["#36d1dc", "#5b86e5"],
    url: "https://github.com/mdsujan-mridha/avi-culture-cilent",
    tech: ["react","styledcomponents","javascript","redux", "tailwindcss", "mongodb","nodejs"],
  },
];



export const WORK_CONTENTS = {
  DUKAAN: [
    {
      title: "KM AI TECH",
      description:
        "KM AI TECH is a platform that enables businesses to launch their online stores at ease.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Revolutionizing commerce, one click at a time
        </div>
      ),
    },
    
    {
      title: "Evolution",
      description:
        "As a MERN stack developer at KM AI TECH, a leading seller of computer components, I spearheaded the redesign and optimization of the company's e-commerce platform. By transitioning to a MERN stack architecture, I successfully improved the website's loading speed by 40%, enhanced its scalability, and streamlined the user interface. This strategic overhaul led to a 25% increase in user retention and a 35% boost in sales, significantly elevating the company's digital presence and customer satisfaction.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          MERN Stack Developer
        </div>
      ),
    },
    {
      title: "Optimization",
      description:
        "Leveraging user feedback and analytics, I improved the seller web dashboard design, reducing bounce rates. Simultaneously, I overhauled the build process, slashing bundle size and boosting overall performance.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Developer
        </div>
      ),
    },
  ],
  AVIATE: [
    {
      title: "Astronomy Pathshala",
      description:
        "Astronomy Pathshala is the very first education technology platform for astronomy learning in 🇧🇩",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Find Your best Astronomical course with Astronomy Pathshala
        </div>
      ),
    },
    {
      title: "Innovation",
      description:
        "Designed and implemented responsive user interfaces with React, and Redux, leading to a 15% improvement in user satisfaction scores",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          MERN Stack Developer Intern
        </div>
      ),
    },
  ],
 
};

export const GTAG = "G-5HCTL2TJ5W";
