import React from "react";
import "../Aboutus/Profilecards.css"; // Import the CSS file
import atif from "../Aboutus/atif.jpg";
const ProfileCard = () => {
  return (
    <>
      <div className="about-container">
        <h2 className="about-heading">About Us 🌍🌱 </h2>
        <p className="about-text">
          At <strong>Climate Change Maker</strong>, we are committed to driving
          meaningful climate action through cutting-edge technology, data-driven
          solutions, and empowered communities. Our mission is to safeguard
          marine ecosystems, track plastic pollution, and protect biodiversity
          from the escalating threats of climate change. 🌊{" "}<br/>
          <strong>AI-Driven Ocean Monitoring:</strong> We utilize advanced AI
          technology to monitor marine environments, track plastic waste, and
          ensure the preservation of coral reefs and marine life. 🤝{" "}<br/>
          <strong>Community Empowerment:</strong> We believe in the power of
          people to create change. Through education, activism, and innovative
          tools, we equip communities with the knowledge they need to take
          impactful climate action. 🌎{" "}<br/>
          <strong>Bridging Innovation & Sustainability:</strong> Our platform
          serves as a bridge between cutting-edge solutions and real-world
          impact, connecting environmental conservation with technological
          advancements. 🚀<br/> <strong>Humanitarian & Climate Advocacy:</strong>{" "}
          Climate change is not just an environmental crisis—it’s a humanitarian
          challenge. We support displaced individuals by connecting them with
          essential resources, education, and aid to build a sustainable future.
          By combining science, technology, and grassroots movements, **Climate
          Change Maker** envisions a future where nature and humanity thrive
          together. **Join us in creating a sustainable world—because the time
          to act is now.** 🌱✨
        </p>

        <div className="card-container">
          {/* First Profile Card */}
          <div className="profcard">
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
              <a
                href="https://www.linkedin.com/in/shahxhussain/?trk=public-profile-join-page"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/ShahxHussain"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.instagram.com/itz_syed_shah_hussain?igsh=MXh6c3lyNGYxZGVjNw=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Second Profile Card */}
          <div className="profcard">
            <div className="cover-photo">
              <img src={atif} alt="profile" className="profile" />
            </div>
            <h3 className="profile-name">SYED ATIF SHAH</h3>
            <p className="about">
              🎓 Final Year Computer Science Student at COMSATS <br />
              🚀 MERN Stack Developer | Flutter Enthusiast <br />
              💻 Building Scalable & Interactive Web Apps <br />
            </p>{" "}
            <br />
            <div className="icons">
              <a
                href="https://www.linkedin.com/in/aatif-shah-648bb7230/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/ATIFSHAH159"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.instagram.com/atif_shah90?igsh=dGcwbGZobTdjOGZ2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
