import React from "react";
import "./Body1.css";
import profile from "../../assets/image.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume from "../../assets/Resume.pdf";
const Body1 = () => {
  const resumes = () => {
    window.open(resume, "_blank"); // Opens the PDF in a new tab
  };
  return (
    <div id="home" className="Body1">
      <img src={profile} alt="" className="src" />
      <h1>
        <span>I'm Parash khadka</span>, Currently learning Programming
      </h1>
      <p>
        Hi, I'm Parash Khadka — a Bachelor of Computer Science (BCS) student
        specializing in Networking and Cybersecurity at KFA Business School. I’m
        currently learning the MERN stack (MongoDB, Express.js, React, Node.js)
        to expand my technical skills and explore full-stack development. I am
        passionate about solving problems, Programming, understanding secure
        network systems, and continuously learning new technologies. My goal is
        to combine my knowledge to create secure and efficient digital
        solutions. Let’s connect and grow together!
      </p>
      <div className="action">
        <div className="connect">
          {" "}
          <AnchorLink className="anchor-link" offset={50} href="#contactme">
            Connect with me
          </AnchorLink>
        </div>
        <div className="resume" onClick={resumes}>
          My resume
        </div>
      </div>
    </div>
  );
};

export default Body1;
