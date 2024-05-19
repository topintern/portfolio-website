import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Flexible Software Developer with Diverse experience in Full-stack web applications, I have honed my skills in front-end technologies like React, Backend frameworks like springboot, ruby on Rails and DevOps technologies like Docker, Kubernetes, as well as AWS Tools like Lambda, EC2, S3, EventBridge, with additional expertise in data science, ML, AI, and 
more. My strengths are being able to take up pretty much any technology, adapt quickly and perform tasks as needed to push the team forward. I’m 
known to perform in any kind of situation thrown at me with a never give-up attitude.`;
 
export const ABOUT_TEXT = `I am a versatile Software Developer with extensive experience in building full-stack web applications and a solid foundation in both frontend and backend technologies. My skill set includes proficiency in React for front-end development, Spring Boot and Ruby on Rails for backend frameworks, and a wide array of DevOps technologies such as Docker, Kubernetes, and AWS tools (Lambda, EC2, S3, EventBridge). I also have a keen interest and expertise in data science, machine learning, and artificial intelligence.

Throughout my career, I have demonstrated a remarkable ability to adapt quickly to new technologies and deliver results in diverse and challenging environments. I am passionate about continuous learning and leveraging my skills to push the boundaries of technology. Whether it’s developing mobile applications, optimizing web applications, or exploring new frontiers in AI and ML, I am committed to driving innovation and excellence in every project I undertake.`;

export const EXPERIENCES = [
  {
    year: "Jun 2023 - Aug 2023",
    role: "Intern",
    company: "Monarch Tractor",
    description: `• Spearheaded the development of a robust automation workflow for employee onboarding/offboarding reducing manual work by 60-70% and 
    saving at least 10-15 minutes per employee onboard.

    • Engineered streamlined data exchange between API’s, harnessing the power of Python scripts and AWS Lambda functions, resulting in a 
    remarkable 50% reduction in data transfer latency. Collaborated with HRMS systems like UKG, achieving a swift 30% acceleration in user 
    data synchronization.

    • Integrated Single Sign-On (SSO) functionality through JumpCloud API, enhancing user access efficiency by 40%. Leveraged services such 
    as Office365 and Azure Active Directory using Graphql to ensure seamless user provisioning and integration.

    • Initiated vendor engagement, identifying, and addressing a UKG API gap. Proactively proposed the issue as a new product idea within the 
    community, showcasing visionary thinking and collaborative drive.

    • Expertly integrated multiple AWS services, including S3 and EventBridge, augmenting automation capabilities and enhancing reliability, 
    contributing to an exceptional 15% reduction in operational inefficiencies.`,
    technologies: ["Python", "AWS Lambda", "AWS EC2","AWS S3","AWS Cloudwatch", "Azure AD"],
  },
  {
    year: "Nov 2021 - Aug 2022",
    role: "Full Stack Developer",
    company: "Zemoso Technologies",
    description: `• As a Full Stack Developer, Developed UI components for a robotic cloud laboratory using React JS (using tools such as Storybook, material 
      UI, Styled-components, Redux, Hooks, Routers, Axios), introducing innovative frontend features to enhance user experience.

      • Engineered REST APIs with Ruby on Rails, incorporating advanced backend functionalities that led to a significant 25% enhancement in 
      overall application performance. Collaborated seamlessly with cross-functional teams to ensure optimal results. 

      • Elevated testing processes by crafting comprehensive test cases for both front end using (jest, enzyme, react testing library, cypress) and 
      back end using (rspec, factorybot, minitest) resulting in a substantial 15% augmentation of test case coverage, and ensuring robust software 
      quality and reliability. `,
    technologies: ["ReactJs", "Ruby on Rails", "Cypress", "Postgres"],
  },
  {
    year: "Aug 2021 - Nov 2022",
    role: "Intern",
    company: "Zemoso Technologies",
    description: `Attained Expertise in version control, Spring Boot, Hibernate, React JS, and Ruby on Rails, spearheading a range of web applications and 
    containerizing and provisioning them through CI/CD workflows, Docker, Kubernetes, AWS EC2, Terraform and logging and visualization 
    through Elasticsearch, Grafana.`,
    technologies: ["Git", "ReactJs", "Spring Boot", "Docker","Kubernetes","EC2"],
  },
];

export const PROJECTS = [
  {
    title: "Food Ordering App - Mobile Application (KMIT Hackathon 2019)",
    image: project1,
    description:
      "Engineered and launched a user-centric Android food ordering application, utilizing Java and Firebase Real time NOSQL Database to streamline menu browsing, order placement, and payments, contributing to a 30% reduction in order processing time and enhancing overall customer satisfaction for the school cafe.d 20% improved user interaction.",
    technologies: ["Android", "Java", "XML", "Firebase"],
  },
  {
    title: "Virtual Incubation Centre - Web Application",
    image: project2,
    description:
      "Iteratively developed a dynamic virtual business incubator site for developing early stage ideas into viable ventures. Advancing from PHP in undergrad to Spring-based technologies during an internship, culminating in Kubernetes, EC2, Spring Boot optimization for 30% faster loading and 20% improved user interaction. ",
    technologies: ["PHP","Spring Boot","HTML", "CSS","Kubernetes", "EC2"],
  },
  {
    title: "Rails Alpha Blog - Web Application",
    image: project3,
    description:
      "Developed a feature-rich blog application using Ruby on Rails, incorporating token based user authentication, article management using CRUD, and responsive design resulting in a seamless user experience.",
    technologies: ["JavaScript","Ruby on Rails","HTML", "CSS","Bootstrap","RSpec"],
  },
  {
    title: "Jazz Music Improvisation using LSTM",
    image: project4,
    description:
      "This project involves generating musical sequences using Long Short-Term Memory (LSTM) networks, a type of recurrent neural network (RNN). The goal is to create an AI model capable of learning musical patterns and generating new compositions in a specific style, such as jazz or classical music.",
    technologies: ["Python", "LSTM", "Keras", "Music21", "TensorFlow"],
  },
];

export const CONTACT = {
  address: "2321 Macy Way, Prosper, Texas 75078",
  phoneNo: "(475) 291-1455.",
  email: "neel.gali@okstate.edu",
};
