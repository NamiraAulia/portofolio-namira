import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const CONTACT = {
  address: "Jakarta, Indonesia",
  phoneNo: "+62 857 1748 7188",
  email: "its.namiraaulia@gmail.com",
};

export const HERO_CONTENT = `Highly motivated fresh graduate with a Bachelor's degree in Informatics Engineering from the Sumatera Institute of Technology (ITERA), specializing in web development and information systems. Experienced in analyzing functional requirements, testing features, and resolving system issues. Comfortable working in both team and individual settings, with strong communication skills and a passion for growing in dynamic professional environments and contributing to innovative projects.`;

export const ABOUT_TEXT = `I am a dedicated and adaptable informatics engineering graduate with a focus on web and system development. Throughout my academic journey, I participated in several internships and projects that strengthened both my technical and interpersonal skills. I enjoy solving problems, working collaboratively, and exploring new technologies to build effective and user-oriented digital solutions.`;

export const EXPERIENCES = [
  {
    year: "August 2024 – October 2024",
    role: "Full Stack Developer Intern",
    company: "PT. Zoomin Jakarta",
    description: `Developed a Service & Booking System to streamline reservation processes and improve operational efficiency. Designed UI/UX using Figma focused on user convenience. Built a full-stack application using Laravel, JavaScript, HTML, and CSS. Integrated real-time notifications and dynamic booking management for efficient business operations.`,
    technologies: ["Laravel", "JavaScript", "HTML", "CSS", "Figma"],
  },
  {
    year: "July 2023 – August 2023",
    role: "Full Stack Developer Intern",
    company: "PERKINDO West Java",
    description: `Designed and developed a Forum Group Discussion Website to support professional communication among members. Implemented authentication, role management, and discussion features. Built a secure backend using PHP and MySQL, and applied Role-Based Access Control (RBAC) to distinguish access rights for admins, moderators, and users.`,
    technologies: ["PHP", "MySQL", "HTML", "CSS", "Figma"],
  },
];

export const PROJECTS = [
  {
    title: "Rental Application",
    image: project1,
    description:
      "Rentalin is a community-based rental platform that connects users who need items temporarily—like calculators, exam boards, or rulers—with others willing to lend them. It helps reduce unnecessary purchases and encourages shared usage among students.",
    technologies: ["Figma", "Canva", "Whimsical"],
    features: [
      "Item Listing",
      "Search & Filter",
      "User Authentication",
      "Transaction Approval",
      "Real-Time Notifications",  
      "Profile Management",
      "Ratings & Reviews",
      "Transaction History",
      "Image Gallery",
    ],  
    
    github: "https://github.com/yourname/portfolio",
    figma: "https://www.figma.com/file/yourfigmalink",
  },
  {
    title: "Thenia Shop",
    image: project2,
    description:
      "A mobile application for buying and selling second-hand items like clothes and shoes. UI was designed in Figma and developed using React Native and Expo.",
    technologies: ["Figma", "React Native", "Expo", "Canva", "Whimsical", "Draw.io"],
  },
  {
    title: "Forum Group Discussion Website",
    image: project3,
    description:
      "A structured discussion platform with user authentication, role management, and profile features. Designed in Figma and developed with PHP and MySQL.",
    technologies: ["PHP", "MySQL", "Figma"],
  },
  {
    title: "Travel Report Information System",
    image: project4,
    description:
      "A digital reporting system for technician travel activities at PT PGAS Telekomunikasi Nusantara RO Lampung. UI/UX designed in Figma with dashboards, forms, and approval pages.",
    technologies: ["Figma"],
  },
  {
    title: "Service & Booking System",
    image: project1,
    description:
      "An automated service and booking system to enhance business efficiency and customer experience. Developed with Laravel and Bootstrap, and integrated with email notifications and SEO tools.",
    technologies: ["Laravel", "Blade", "Bootstrap", "Figma"],
  },
];
