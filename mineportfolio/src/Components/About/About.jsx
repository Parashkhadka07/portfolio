import React from "react";
import "./About.css";
import image from "../../assets/image2.jpg";

const About = () => {
  return (
    <div id="about" className="About">
      <div className="Title">
        <h1>
          <u>About me</u>
        </h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img
            src={image}
            alt=""
            style={{
              width: "350px",
              height: "400px",
            }}
          />
        </div>
        <div className="about-right">
          <div className="para">
            <p>
              I am a dedicated student with a strong passion for continuous
              learning and skill development. While I currently do not have
              professional experience, I am actively studying HTML, CSS, and the
              MERN stack to build a solid foundation in web development. I am
              committed to enhancing my technical skills and am confident in my
              ability to grow and excel in the field.
            </p>
          </div>
          <div className="skills">
            <div className="skill">
              <p>HTML</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="skill">
              <p>CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="skill">
              <p>React</p>
              <hr style={{ width: "40%" }} />
            </div>
            <div className="skill">
              <p>Nodejs</p>
              <hr style={{ width: "20%" }} />
            </div>
            <div className="skill">
              <p>MongoDB</p>
              <hr style={{ width: "20%" }} />
            </div>
            <div className="skill">
              <p>ExpressJs</p>
              <hr style={{ width: "20%" }} />
            </div>
            <div className="skill">
              <p>Javascript</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
