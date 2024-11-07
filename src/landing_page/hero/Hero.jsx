import React from "react";
import "./Hero.css";
import profile from "../../assets/Profile/profile.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Resume from '../../assets/Resume/Resume.pdf'
function Hero() {
  return (
    <div id="home" className="hero">
      <img src={profile} alt="profile svg" />
      
      <h1>
        Hello, I'm <br /> <span>VIKASH SATHE,</span> <br />
      
        I build things for the web.
      </h1>
      <p>
        {" "}
       I design and code beautifully simple things and love what i do.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="achore-link" offset={50} href="#contect">
            {" "}
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume"><a href={Resume} download="">My Resume</a></div>
      </div>
    </div>
  );
}

export default Hero;
