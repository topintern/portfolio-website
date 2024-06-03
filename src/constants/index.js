import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import projectFintech from "../assets/projects/projectFintech.gif";
import projectEcommerce from "../assets/projects/projectEcommerce.png";
import projectMarketAnalysis from "../assets/projects/projectMarketAnalysis.png"


export const HERO_CONTENT = `Passionate Full Stack Developer with experience in designing and implementing end-to-end solutions for web-based applications. Skilled in frontend technologies like React.js and backend technologies such as Node.js, spring boot and Ruby on Rails. Proficient in database management with MongoDB, MySQL and PostgreSQL. Experienced in cloud deployment on AWS and Azure. Strong collaborator with a proven track record in delivering high-quality, scalable software solutions. Currently seeking Full Stack Developer or Software Development Engineer (SDE) roles.`;
 
export const ABOUT_TEXT = `I am a versatile Software Developer with experience in building full-stack web applications and a solid foundation in both frontend and backend technologies. My skill set includes proficiency in React for front-end development, Spring Boot and Ruby on Rails for backend frameworks, DevOps technologies such as Docker, Kubernetes, and Cloud Technologies like AWS(Lambda, EC2, S3, EventBridge), Azure AD.

Additionally, I have a keen interest and expertise in data science, machine learning, and artificial intelligence. I am passionate about continuous learning and leveraging my skills to push the boundaries of technology.

In my personal time, I enjoy video games, video editing, traveling, and watching movies. These hobbies not only provide a great balance to my professional life but also inspire creativity and innovation in my work.`;

export const EXPERIENCES = [

  {
    year: "Jun 2023 - present",
    role: "Graduate Research Assistant",
    company: "Oklahoma State University",
    description: `
    ●Collaborated as a Full Stack Developer within a 5-member team on the student portal, enhancing performance and the user experience by refactoring APIs and optimizing database queries.

    ●Implemented unit testing—leading to a 15% increase in test coverage, conducted regular code reviews, and provided constructive feedback to ensure code quality.

    ●Initiated user acceptance testing with a team of students and developers to gather feedback, leading to a 25% increase in user satisfaction and engagement.`,
    technologies: ["Springboot", "Hibernate" , "JUnit","PostgreSQL"],
  },
  
  {
    year: "Jun 2023 - Aug 2023",
    role: "Intern",
    company: "Monarch Tractor",
    description: `●Spearheaded the development of a robust automation workflow for employee onboarding and offboarding, reducing manual labor by about 80% and saving at least 30 minutes per employee.
    
    ●Led vendor selection and engagement process: evaluating Workato, Boomi, and AWS for API integration, reducing integration costs by about 25%.
    
    ●Streamlined data exchange between APIs through Python scripts and AWS (Lambda, S3, and Event Bridge), resulting in a 50% reduction in data transfer latency.`,
    technologies: ["Python", "AWS Lambda", "AWS EC2","AWS S3","AWS Cloudwatch", "Azure AD"],
  },
  {
    year: "Nov 2021 - Aug 2022",
    role: "Full Stack Developer",
    company: "Zemoso Technologies",
    description: `
    ●Managed a platform of AI-controlled robotic labs with complex relational databases and 15+ dependent microservices using React and Ruby on Rails, enabling remote operations and comprehensive experiment tracking.
    
    ●Contributed over 10 feature additions, 20 bug fixes, and 200 test cases through a microservices-based architecture—to ensure stability and performance.
    
    ●Improved user interface elements by adding a new component—including modifications to a custom UI component library, testing, and release—enhancing user satisfaction by 20%.
    
    ●Resolved issues with non-persisting data in edit forms: ensuring backend updates, UI consistency, and reducing error reports by 35%.
    
    ●Mentored 5 interns; conducted daily stand-ups and regular code reviews to enhance learning and development.
    
    ●Gained expertise with Docker, Kubernetes, Terraform, CI/CD using GitHub Actions, and cloud technologies.
    
    ●Gained expertise in Git, OOP concepts, React, Spring Boot, and Ruby on Rails.`,
    technologies: ["React.js", "Ruby on Rails", "Spring Boot", "Docker", "Kubernetes", "EC2"],
  },
];

export const PROJECTS = [
  {
    title: "Fintech News Aggregator and Stock Tracker",
    image: projectFintech,
    description:
      "Currently developing a fintech website that scrapes financial news and stock fluctuations using React, Express JS, Chart JS, and MongoDB web scraping in Python (Beautiful Soup, Scrapy)",
    technologies: ["React.js", "Express.js", "PostgreSQL", "Python", "Web Scraping"],
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
  address: "Stillwater, Oklahoma – Looking to Relocate",
  phoneNo: "(475) 291-1455.",
  email: "neel.gali@okstate.edu",
};
