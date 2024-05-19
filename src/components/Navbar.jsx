import { FaGithub,FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  return (
  <nav className="mb-20 flex items-center justify-between py-6">
    <a href="https://drive.google.com/file/d/1A01267oq_JFwpSGpP9WRRuYZNLmZVxtc/view?usp=sharing" target="_blank" rel="noopener noreferrer">
      <h1 style={{ fontSize: '25px', textDecoration: 'underline' }}>Resume</h1>
    </a>
  <div className="flex flex-shrink-0 items-center">


  </div>
  <div className="m-8 flex items-center justify-center gap-4 text-2xl">
    <a href="https://www.linkedin.com/in/neelgali/" target="_blank" rel="noopener noreferrer">
    <FaLinkedin style={{ fontSize: '35px' }}/>
    </a>
    <a href="https://github.com/Neel-Lohit?tab=overview&from=2022-08-01&to=2022-08-31" target="_blank" rel="noopener noreferrer">
    <FaGithub style={{ fontSize: '35px' }}/>
    </a>
    <a href="https://leetcode.com/u/its_over_9000/" target="_blank" rel="noopener noreferrer">
    <SiLeetcode style={{ fontSize: '35px' }}/>
    </a>
  </div>
  </nav>
  );
//    
}

export default Navbar
