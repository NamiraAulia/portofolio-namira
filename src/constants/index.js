import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-1-2.jpg";
import project3 from "../assets/projects/project-1-3.jpg";
import project4 from "../assets/projects/project-1-4.jpg";
import project5 from "../assets/projects/SplashScreen.png";
import project6 from "../assets/projects/FirstScreen.png";
import project7 from "../assets/projects/MainMenu.png";
import project8 from "../assets/projects/MyCart.png";
import project9 from "../assets/projects/ProductDetail.png";
import project10 from "../assets/projects/MyLocation.png";
import project11 from "../assets/projects/project-3.png";
import project12 from "../assets/projects/project-3-1.png";
import project13 from "../assets/projects/project-3-2.png";
import project14 from "../assets/projects/project-4.png";
import project15 from "../assets/projects/project-4-1.png";
import project16 from "../assets/projects/project-4-2.png";
import project17 from "../assets/projects/project-4-3.png";
import project18 from "../assets/projects/project-5.png";
import project19 from "../assets/projects/project-5-1.png";
import project20 from "../assets/projects/project-5-2.png";
import project21 from "../assets/projects/project-5-3.png";
import project22 from "../assets/projects/project-5-4.png";
import project23 from "../assets/projects/project-6.png";
import project24 from "../assets/projects/project-6-1.png";
import project25 from "../assets/projects/project-6-2.png";
import project26 from "../assets/projects/project-6-3.png";
import project27 from "../assets/projects/project-6-4.png";



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
    images: [project2, project3, project4],
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
    figma: "https://www.figma.com/design/TsvfWqh4KT9TXkISUaDBaq/RentalIn?node-id=1-14&p=f&t=v3nWnkiqXGvk3Dny-0",
  },
  {
    title: "Thenia Shop",
    image: project5,
    images: [project6, project7, project8, project9, project10],
    description:
      "A mobile application for buying and selling second-hand items like clothes and shoes. UI was designed in Figma and developed using React Native and Expo.",
    technologies: ["Figma", "React Native", "Expo", "Canva", "Whimsical", "Draw.io"],
    features: [
      "User Authentication",
      "Product Listings",
      "Image Upload",
      "Search & Filter",
      "Chat System",
      "Favorites / Wishlist",
      "Product Details Page",
      "User Profiles",
      "In-App Notifications",
      "Secure Checkout (optional)",
    ],
    github: "https://github.com/yourname/portfolio",
    figma: "https://www.figma.com/design/eQt74yeS4ggcVGMiXN24QR/Thenia?node-id=1-2&p=f&t=i7pSLNXqLm2Jj7rN-0",
  },
  {
    title: "Forum Group Discussion Website",
    image: project11,
    images: [project11,project12, project13],
    description:
      "A structured discussion platform with user authentication, role management, and profile features. Designed in Figma and developed with PHP and MySQL.",
    technologies: ["PHP", "MySQL", "Figma"],
    features: [
      "User Authentication",
      "Role Management (Admin & User)",
      "Create & Join Forums",
      "Threaded Discussions",
      "Comment & Reply System",
      "User Profiles",
      "Responsive Design",
    ],
    figma: "https://www.figma.com/design/h54M6cDlwzFaxiHUSg93Fr/Forum-Diskusi?node-id=0-1&p=f&t=ZrDReaoF4Cxzi0qq-0",
  },
  {
    title: "Travel Report Information System",
    image: project14,
    images: [project14, project15, project16, project17],
    description:
      "A digital reporting system for technician travel activities at PT PGAS Telekomunikasi Nusantara RO Lampung. UI/UX designed in Figma with dashboards, forms, and approval pages.",
    technologies: ["Figma"],
    features: [
      "Technician Travel Log Forms",
      "Supervisor Approval Pages",
      "Dashboard Visualization",
      "Date Filtering",
      "Responsive Layout",
      "Print & Export Reports",
    ],
    figma: "https://www.figma.com/design/AHdRwNbly7rdR5K5jTPckc/SI-Laporan-Perjalanan?node-id=0-1&p=f&t=cvNyQJFla8CVScSp-0",
  },
  {
    title: "Service & Booking System",
    image: project18,
    images: [project18, project19, project20, project21, project22],
    description:
      "An automated service and booking system to enhance business efficiency and customer experience. Developed with Laravel and Bootstrap, and integrated with email notifications and SEO tools.",
    technologies: ["Laravel", "Blade", "Bootstrap", "Figma"],
    features: [
      "Service Scheduling",
      "Online Booking Form",
      "Email Notifications",
      "Admin Dashboard",
      "Booking Status Management",
      "Customer Profile Management",
      "SEO Optimization",
    ],
    figma: "https://www.figma.com/design/vJds1WRFfius4YOK5n0ahN/Sistem-Informasi-Zoomin?node-id=282-22&p=f&t=pdgRstMik4BlXbdr-0",
  },
  {
    title: "Menu Design - Coffee Shop",
    image: project23,
    images: [project23, project24, project25, project26, project27],
    description:
      "A modern and visually appealing coffee shop menu UI designed in Figma. Focused on enhancing customer experience with clean layout and appealing visuals.",
    technologies: ["Figma"],
    features: [
      "Digital Menu Layout",
      "Category Segmentation (Drinks, Desserts, etc.)",
      "Custom Fonts & Icons",
      "Pricing & Description Sections",
      "Mobile-Friendly Layout",
      "Brand Color Integration",
    ],
    figma: "https://www.figma.com/design/eHEUl9UYhR40Qp4CSqsdMH/Menu-Design-Coffee-Shop?node-id=0-1&p=f&t=sO2Nk18VCS0A8t1R-0",
  },
];
