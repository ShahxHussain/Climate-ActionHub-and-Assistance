import React from "react";
import "../Aboutus/Profilecards.css"; // Import the CSS file
import atif from "../Aboutus/atif.jpg";
import shah from "../Aboutus/shah.png";

const ProfileCard = () => {
  return (
    <>
      <div className="about-container">
        <h2 className="about-heading">Climate Nexus Innovator 🌍🚀</h2>
        <p className="about-text">
          At <strong>Climate Nexus</strong>, we drive impactful climate action 
          through technology, innovation, and community-driven solutions. 🌱✨
        </p>

        <div className="card-container">
          {/* First Profile Card */}
          <div className="profcard">
            <div className="cover-photo">
              <img src={shah} alt="profile" className="profile" />
            </div>
            <h3 className="profile-name">
              SYED SHAH HUSSAIN BADSHAH <i className="fa-solid fa-flag pakistan-flag"></i>
            </h3>
            <p className="about">
              Final Year Software Engineering Student at COMSATS University, Abbottabad Campus <br />
            </p>
            <div className="icons">
              <a href="https://www.linkedin.com/in/shahxhussain/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/ShahxHussain" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>

          {/* Second Profile Card */}
          <div className="profcard">
            <div className="cover-photo">
              <img src={atif} alt="profile" className="profile" />
            </div>
            <h3 className="profile-name">
              SYED ATIF SHAH <i className="fa-solid fa-flag pakistan-flag"></i>
            </h3>
            <p className="about">
              Final Year Computer Science Student at COMSATS University, Abbottabad Campus <br />
            </p>
            <div className="icons">
              <a href="https://www.linkedin.com/in/aatif-shah-648bb7230/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/ATIFSHAH159" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
