import { BsGithub, BsLinkedin, BsMedium } from "react-icons/bs";
import { iconContainer } from '../styles/styles';

function Home() {
  return (
    <div className="flex-col-container center">
      <div className="flex-row">
        Hi, I'm Leo.
        I write code and I’m passionate about food, music, and people.
      </div>
      <br />
      <div className="flex-row">
        <a className="flex-col icon-spacing" href="https://github.com/gwolianglien" target="_blank" rel="noreferrer" aria-describedby="Github">
          <BsGithub style={iconContainer} />
        </a>
        <a className="flex-col icon-spacing" href="https://www.linkedin.com/in/leolien/" target="_blank" rel="noreferrer" aria-describedby="LinkedIn"> 
          <BsLinkedin style={iconContainer}/>
        </a>
        <a className="flex-col icon-spacing" href="https://medium.com/@leolien" target="_blank" rel="noreferrer" aria-describedby="Medium"> 
          <BsMedium style={iconContainer}/>
        </a>
      </div>
    </div>
  );
}

export default Home;