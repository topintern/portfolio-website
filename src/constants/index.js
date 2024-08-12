import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import projectFintech from "../assets/projects/projectFintech.gif";
import projectEcommerce from "../assets/projects/projectEcommerce.png";
import projectMarketAnalysis from "../assets/projects/projectMarketAnalysis.png"


export const HERO_CONTENT = `Passionate Full Stack Developer with experience in designing and implementing end-to-end solutions for web-based applications. Skilled in React.js, spring boot and Ruby on Rails. Proficient in scripting with python, database management with MySQL, MongoDB. Experienced in cloud deployment on AWS and Azure. Strong collaborator with a proven track record in delivering high-quality, scalable software solutions. Currently seeking Full Stack Developer or Software Development Engineer (SDE) roles.`;
 
export const ABOUT_TEXT = `I am a versatile Software Developer with experience in building full-stack web applications and a solid foundation in both frontend and backend technologies. My skill set includes proficiency in React, Spring Boot and Ruby on Rails, DevOps technologies such as Docker, Kubernetes, and Cloud Technologies like AWS(Lambda, EC2, S3, EventBridge), Azure AD.

Additionally, I have a keen interest and expertise in data science, machine learning, and artificial intelligence. I am passionate about continuous learning and leveraging my skills to push the boundaries of technology.

In my personal time, I enjoy video games, video editing, traveling, and watching movies. These hobbies not only provide a great balance to my professional life but also inspire creativity and innovation in my work.`;

export const EXPERIENCES = [

  {
    year: "Aug 2023 - May 2024",
    role: "Graduate Teaching Assistant",
    company: "Oklahoma State University",
    description: `
    ●Served as a Graduate Teaching Assitant at CS department for two subjects—Discrete Mathematics and Mobile Applications Development (MAD), helping students grasp complex concepts and practical skills
    ●Assisted students in the MAD course with the development of various iOS apps using Swift, offering hands-on support and technical advice throughout the development process
    ●Offered one-on-one tutoring sessions, group discussions, and guidance to help students succeed in both theoretical and practical aspects of the courses
    ●Evaluated student assignments, projects, and exams, providing constructive feedback to help improve their understanding and performance in the subjects
    `,
    technologies: ["Swift", "IOS" , "Mobile Applications","Discrete Math"],
  },
  
  {
    year: "Jun 2023 - Aug 2023",
    role: "Intern",
    company: "Monarch Tractor",
    description: `
    ●Implemented an automated employee management system for an Ag Tech startup, decreasing HR manual tasks by 40\% and saving roughly 150 hours per month as an independent intern
●Utilized Microsoft Office tools to handle and analyze large employee data across different platforms
●Streamlined data exchange across APIs for user management, device provisioning, user group administration, licensing, cron job execution using Python scripts and serverless AWS services`,
    technologies: ["Python", "AWS Lambda", "AWS S3","AWS Cloudwatch", "Azure AD"],
  },
  {
    year: "Nov 2021 - Aug 2022",
    role: "Full Stack Developer",
    company: "Zemoso Technologies",
    description: `
     ●Created 30+ UI components, refactored microservices, and crafted test cases for a scientific experiment tracking platform in a service-based startup, working with cross functional teams in React and Ruby on Rails
 ●Improved user interface elements, driving a 10\% improvement in design consistency by integrating new UI components into the custom library and replacing subsequent legacy implementations
●Developed and integrated new features for user roles and permissions management
 ●Resolved issues with non-persisting data in edit forms, reducing error reports by 5\% by ensuring backend updates, maintaining UI consistency, and adding tests
●Conducted unit tests to validate individual components and integration tests to verify the interoperability of different system modules
 `,
    technologies: ["React.js", "Ruby on Rails", "Spring Boot", "Docker", "Kubernetes", "Redis"],
  },
];

export const PROJECTS = [
  {
    title: "Virtual Incubation Centre",
    image: projectFintech,
    description:
      `Designed a platform for entrepreneurs, mentors, and investors, enabling project registration, mentorship requests, and investment opportunities using Spring Boot, Spring MVC, and Spring Data JPA
Built personalized user dashboards for managing project progress, mentorship feedback, and investment interactions for seamless user experience and efficient admin managements`,
    technologies: ["Spring Boot", "Spring MVC", "Spring JPA", "HTML", "CSS"],
  },
  {
    title: "Food Ordering App - Mobile Application (KMIT Hackathon 2019)",
    image: project1,
    description:
      "Implemented a user-friendly food ordering app for my university cafe—utilizing Java and Firebase to streamline menu browsing, order placement, and payments.",
    technologies: ["Android", "Java", "XML", "Firebase"],
  },
    
];

export const EDUCATION = [

  {
    year: "Aug 2022 - May 2024",
    role: "Oklahoma State University",
    company: "Stillwater,OK",
    technologies: ["Master of Science in Computer Science"],

  },
  {
    year: "Aug 2017 - Jul 2021",
    role: "Jawaharlal Nehru Technological University",
    company: "Hyderabad,India",
    technologies: ["Bachelor of Technology in Computer Science"],

  },

]

export const CONTACT = {
  address: "Stillwater, Oklahoma",
  phoneNo: "(475) 291-1455.",
  email: "neel.gali@okstate.edu",
};
