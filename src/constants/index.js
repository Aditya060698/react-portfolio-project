import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a full-stack developer with 5+ years of experience building secure, scalable, and high-performance applications. My strongest work sits at the intersection of Java, Spring Boot, React, microservices, and distributed systems, where I focus on performance, resiliency, and clean system design.`;

export const ABOUT_TEXT = `I enjoy building software that holds up in production, from secure SPAs and backend APIs to scalable architecture for high-traffic systems. Over the last 5+ years, I have worked across Spring Boot, React.js, Node.js, PostgreSQL, Redis, AWS, Docker, and Kubernetes, with a strong focus on performance optimization, secure authentication, and resilient service design. I am especially interested in backend engineering, system design, and solving problems where architecture choices directly impact product reliability and growth.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Software Engineer 2",
    company: "Vantive",
    description: `Developed modular portlets using Spring MVC on Liferay DXP to support customizable enterprise applications, ensuring flexibility and maintainability. Optimized Oracle SQL queries and Java backend logic, achieving a 35% reduction in average response time. Actively contributed to the design of a scalable system architecture capable of handling increased user traffic and data throughput. Additionally, collaborated closely with team members and mentored two junior developers in Spring Boot development, accelerating their onboarding and enhancing overall delivery consistency.`,
    technologies: ["Java", "Spring Boot", "SQL", "Liferay DXP"],
  },
  {
    year: "2023 - 2024",
    role: "Developer",
    company: "Standard Chartered Global Business Solutions",
    description: `As a Full Stack Developer specializing in React.js and Spring Boot, I implemented Drools configuration for centralized rule management. I played a key role in crafting single-page applications (SPAs) using React, TypeScript, HTML, and CSS, integrating JWT authentication and Redux for robust state management. I designed and implemented a microservices architecture, showcasing expertise in Docker for containerization and Kubernetes for orchestration. Additionally, I effectively utilized Azure DevOps (ADO) services for version control, issue tracking, and project management, contributing to enhanced collaboration within the development team.`,
    technologies: ["React.js", "Spring Boot", "postgres SQL", "Microservices"],
  },
  {
    year: "2021 - 2023",
    role: "Senior System Engineer",
    company: "Infosys",
    description: `I developed RESTful web services in Spring Boot to present user details in the application's UI and leveraged Node.js and Express.js for advanced API development, utilizing an event-driven, non-blocking I/O model, and middleware for scalability. I designed and implemented intricate SQL queries to enhance application performance and utilized the Criteria Builder API in Spring Data JPA to create advanced search logic, improving search functionality and enhancing user experience. Additionally, I implemented complex search queries to optimize database performance and minimize response time. I also designed and implemented batch jobs using the Spring Batch Framework and CRON scheduling in Jenkins, processing PGP-encrypted files from AWS S3 buckets to ensure efficient data processing and database updates.`,
    technologies: ["Java", "Spring boot", "HTML", "CSS", "Javascript"],
  }
];

export const PROJECTS = [
  {
    title: "React Essentials",
    image: project1,
    description:
      "A learning-focused React application built to practice core concepts such as component composition, state management, event handling, and reusable UI patterns.",
    technologies: ["HTML", "CSS", "React"],
    link: "https://react-essential-060698.web.app/",
    linkLabel: "Live Demo",
  },
  {
    title: "Distributed API Gateway & Rate Limiter",
    image: project2,
    description:
      "Engineered a distributed rate limiting system using Spring Boot and Redis with Fixed Window, Sliding Window, and Token Bucket strategies. Used Redis Lua scripting to prevent race conditions under concurrent traffic, and built a React dashboard with simulation and side-by-side algorithm comparison for visual analysis.",
    technologies: ["Spring Boot", "Redis", "React", "Docker", "Render"],
    link: "https://rateshield-frontend.onrender.com",
    linkLabel: "Live Demo",
    note: "Architecture-led backend project",
  },
  {
    title: "AI System Design Interviewer",
    image: project3,
    description:
      "Developed an AI-powered system design interviewer that evaluates architecture answers, gives feedback on scalability and trade-offs, and simulates realistic interview scenarios using LLM-based prompt chaining.",
    technologies: ["React", "Node.js", "Spring Boot", "LLM APIs", "Prompt Chaining"],
    linkLabel: "Private Build",
    note: "Resume project with no public demo yet",
  },
  {
    title: "Resilient File Processing Pipeline",
    image: project4,
    description:
      "Designed a backend processing pipeline for encrypted files from AWS S3 using Spring Batch and Jenkins scheduling. Focused on validation, reliability, and high-availability processing for enterprise-style workloads.",
    technologies: ["Spring Boot", "Spring Batch", "AWS S3", "Jenkins", "SQL"],
    linkLabel: "Enterprise Case Study",
    note: "Based on production experience",
  },
];

export const CONTACT = {
  address: "Bangalore,Karnataka,India",
  phoneNo: "+91 9439108489",
  email: "mishraditya06@gmail.com",
};
