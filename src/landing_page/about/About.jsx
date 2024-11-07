import React from "react";
import "./About.css";
import profile from '../../assets/Profile/profile.jpg'

function About() {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me.</h1>
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile} alt="profile_image" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
            Hello my <b>VIKASH SATHE</b>, I’m a Full Stack <b> MERN Developer</b> with expertise in MongoDB, Express, React, Node.js, and Data Structures & Algorithms<b>(DSA)</b> in<b> JAVA</b>, focused on building efficient, scalable, and responsive web applications.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML, CSS & JS </p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
            <p>MERN Stack</p>
            <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
            <p>Java</p>
            <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
            <p>Git & GitHub</p>
            <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1.5+</h1>
          <p>Years of Exprience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>0+</h1>
          <p> Projects Complited </p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>0+</h1>
          <p> Happy Clients</p>
        </div>
      </div>
    </div>
  );
}

export default About;
