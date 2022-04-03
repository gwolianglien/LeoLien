import { Link } from 'react-router-dom';
import { BsGithub, BsLinkedin, BsMedium } from "react-icons/bs";
import { fullGradient, iconContainer } from '../styles/styles';

function Home() {
  return (
    <div className="app container-center container-fluid" style={fullGradient}>
      <div className="row">
        Hi, I'm Leo.
        I'm an engineer.
      </div>
      <br />
      <div className="row">
        <a className="col" href="https://github.com/gwolianglien" target="_blank">
          <BsGithub style={iconContainer} />
        </a>
        <a className="col" href="https://www.linkedin.com/in/leolien/" target="_blank"> 
          <BsLinkedin style={iconContainer}/>
        </a>
        <a className="col" href="https://medium.com/@leolien" target="_blank"> 
          <BsMedium style={iconContainer}/>
        </a>
      </div>
    </div>
  );
}

export default Home;
