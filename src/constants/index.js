import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import projectFintech from "../assets/projects/projectFintech.gif";
import projectEcommerce from "../assets/projects/projectEcommerce.png";
import projectMarketAnalysis from "../assets/projects/projectMarketAnalysis.png"


export const HERO_CONTENT = `Passionate Full Stack Developer with diverse experience in designing and implementing end-to-end solutions for web-based applications. Skilled in frontend technologies like React.js and backend technologies such as Node.js and Express.js. Proficient in database management with MongoDB and PostgreSQL. Experienced in cloud deployment on AWS and Azure. Strong collaborator with a proven track record in delivering high-quality, scalable software solutions. Currently seeking Full Stack Developer or Software Development Engineer (SDE) roles.`;
 
export const ABOUT_TEXT = `I am a versatile Software Developer with extensive experience in building full-stack web applications and a solid foundation in both frontend and backend technologies. My skill set includes proficiency in React for front-end development, Spring Boot and Ruby on Rails for backend frameworks, and a wide array of DevOps technologies such as Docker, Kubernetes, and AWS tools (Lambda, EC2, S3, EventBridge). I also have a keen interest and expertise in data science, machine learning, and artificial intelligence.

Throughout my career, I have demonstrated a remarkable ability to adapt quickly to new technologies and deliver results in diverse and challenging environments. I am passionate about continuous learning and leveraging my skills to push the boundaries of technology. Whether it’s developing mobile applications, optimizing web applications, or exploring new frontiers in AI and ML, I am committed to driving innovation and excellence in every project I undertake.`;

export const EXPERIENCES = [

  {
    year: "Jun 2022 - Aug 2024",
    role: "Graduate Research Assistant",
    company: "Oklahoma State University",
    description: `
    • Collaborated with a dynamic team as a Full Stack Developer, gaining hands-on experience in designing and implementing end-to-end solutions for web-based applications using React.js, Node.js, Express.js, and MongoDB.
• Conceptualized and developed a feature-rich web application, leveraging React.js for the frontend and Node.js/Express.js for the backend, aimed at facilitating course management, student registration, and academic progress tracking.
• Designed the architecture, wireframes, and user flows for the application, ensuring a seamless and intuitive user experience, with MongoDB as the database to manage data efficiently.
• Conducted regular code reviews, providing constructive feedback and ensuring code quality and adherence to best practices.
• Implemented unit testing for both frontend (using Jest) and backend (using Mocha/Chai) components, ensuring the reliability and stability of the application.
• Conducted user acceptance testing to gather feedback from faculty and students, making iterative improvements that led to a 25% increase in user satisfaction and engagement.`,
    technologies: ["React.js", "Node.js", "Express.js","MongoDb"],
  },
  
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
    description: `• As a Full Stack Developer, Developed UI components for a robotic cloud laboratory using React .js (using tools such as Storybook, material 
      UI, Styled-components, Redux, Hooks, Routers, Axios), introducing innovative frontend features to enhance user experience.

      • Engineered REST APIs with Ruby on Rails, incorporating advanced backend functionalities that led to a significant 25% enhancement in 
      overall application performance. Collaborated seamlessly with cross-functional teams to ensure optimal results. 

      • Elevated testing processes by crafting comprehensive test cases for both front end using (jest, enzyme, react testing library, cypress) and 
      back end using (rspec, factorybot, minitest) resulting in a substantial 15% augmentation of test case coverage, and ensuring robust software 
      quality and reliability.

      • Attained Expertise in version control, Spring Boot, Hibernate, React.js, and Ruby on Rails, spearheading a range of web applications and 
      containerizing and provisioning them through CI/CD workflows, Docker, Kubernetes, AWS EC2, Terraform and logging and visualization 
      through Elasticsearch, Grafana. `,
    technologies: ["React.js", "Ruby on Rails", "Spring Boot", "Docker", "Kubernetes", "EC2"],
  },
];

export const PROJECTS = [
  {
    title: "Fintech News Aggregator and Stock Tracker",
    image: projectFintech,
    description:
      "Developed a fintech website that scrapes financial news and displays relevant information alongside stock fluctuations for a user's followed companies. Designed a user-friendly interface using React.js for displaying news and stock data. Built the backend with Express.js to handle data processing, user authentication, and API integration. Implemented web scraping using Python libraries like BeautifulSoup and Scrapy to gather financial news. Integrated APIs for real-time stock data and visualized stock trends using chart.js. Used PostgreSQL for managing user data, followed companies, and historical stock data.",
    technologies: ["React.js", "Express.js", "PostgreSQL", "Python", "Web Scraping"],
  },
  {
    title: "GPT-Based Data Science Market Analysis Project",
    image: projectMarketAnalysis,
    description:
      "Conducted an in-depth market analysis utilizing GPT-4 to extract valuable insights and trends in the data science landscape. Employed GPT-4 for Natural Language Processing to analyze market data, extracting trends and key insights. Utilized tools like Matplotlib, Seaborn, and Plotly to create detailed visual reports on market trends. Used Python for data extraction and analysis, integrating with TensorFlow for advanced machine learning models. Produced comprehensive reports and visualizations showcasing market dynamics, emerging technologies, and competitive analysis.",
    technologies: ["GPT-4", "Natural Language Processing (NLP)", "Python", "TensorFlow"],
  },
  {
    title: "E-commerce Website with Personalized Recommendations",
    image: projectEcommerce,
    description:
      "Developed an E-commerce platform with personalized recommendations. The frontend was developed using React.js for a responsive and user-friendly interface. The backend utilized Node.js and Express.js for server-side operations and API development. Implemented MongoDB for flexible data storage of products, users, and transactions. Built a recommendation engine using collaborative filtering and content-based filtering algorithms. Deployed the application on AWS, utilizing services like EC2, S3, and RDS.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Amazon Web Services (AWS)"],
  },
  {
    title: "Food Ordering App - Mobile Application (KMIT Hackathon 2019)",
    image: project1,
    description:
      "Engineered and launched a user-centric Android food ordering application, utilizing Java and Firebase Real time NOSQL Database to streamline menu browsing, order placement, and payments, contributing to a 30% reduction in order processing time and enhancing overall customer satisfaction for the school cafe.d 20% improved user interaction.",
    technologies: ["Android", "Java", "XML", "Firebase"],
  },
    
];

export const CONTACT = {
  address: "2321 Macy Way, Prosper, Texas 75078",
  phoneNo: "(475) 291-1455.",
  email: "neel.gali@okstate.edu",
};
