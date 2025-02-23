import React from "react";
import "../Aboutus/Profilecards.css"; // Import the CSS file

const ProfileCard = () => {
  return (
    <div className="card-container">
      {/* First Profile Card */}
      <div className="card">
        <div className="cover-photo">
          <img
            src="https://i.imgur.com/KykRUCV.jpeg"
            alt="profile"
            className="profile"
          />
        </div>
        <h3 className="profile-name">SYED SHAH HUSSAIN BADSHAH</h3>
        <p className="about">
          🎓 Final Year Software Engineering Student at COMSATS <br />
          🚀 MERN Stack Developer | Cybersecurity Enthusiast <br />
          📚 Passionate about learning & innovation
        </p>
        <div className="icons">
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-github"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-twitter"></i>
        </div>
      </div>

      {/* Second Profile Card */}
      <div className="card">
        <div className="cover-photo">
          <img
            src="https://i.imgur.com/KykRUCV.jpeg"
            alt="profile"
            className="profile"
          />
        </div>
        <h3 className="profile-name">SYED ATIF SHAH</h3>
        <p className="about">
          🎓 Final Year Computer Science Student at COMSATS <br />
          🚀 MERN Stack Developer | Flutter Enthusiast <br />
          💻 Building Scalable & Interactive Web Apps <br />
        </p>
        <div className="icons">
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-github"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-twitter"></i>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
