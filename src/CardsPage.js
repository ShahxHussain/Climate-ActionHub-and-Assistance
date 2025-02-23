import { Link} from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./Assets/CSS/CardsPage.css"; // Import the CSS file
import chatbot from "./Assets/Images/chattbot.png";
import climateRef from "./Assets/Images/climaterefugee.png";
import landingpage from "./Assets/Images/landingpage.png";
import climateactionhub from "./Assets/Images/climateactionhub.png";
import coralref from "./Assets/Images/coralreef.png";

export function CardsPage() {
  

  return (
    <div className="cards-page-container">
      {/* Back Button */}
      <Link to="/" className="back-button1">← Back</Link>


      <h1>Who Are You.....?</h1>
      <div className="cards-container">
        {/* Landing Page Card */}
        <Link to="/aboutus" style={{ textDecoration: "none" }}>
          <Card border="success" className="custom-card" style={{ height: "53vh",width:'17rem' }}>
            <Card.Header>About Us</Card.Header>
            <Card.Body>
              <img src={landingpage} alt="Landing Page" className="card-img" />
              <Card.Text className="card-text">
                Join the movement for a sustainable future. Explore solutions, connect, and take action for our planet. 🌍💚
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>

        {/* Climate Action Hub Center Card */}
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <Card border="danger" className="custom-card" style={{ height: "53vh" }}>
            <Card.Header>Climate Action Hub Center</Card.Header>
            <Card.Body>
              <img src={climateactionhub} alt="Climate Action Hub" className="card-img" />
              <Card.Text className="card-text">
                A collaborative space to connect, share knowledge, and take action for a sustainable future. 🌍
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>

        {/* Climate Refugee Card */}
        <Link to="/climaterefuge" style={{ textDecoration: "none" }}>
          <Card border="warning" className="custom-card" style={{ height: "53vh" }}>
            <Card.Header>Climate Refugee</Card.Header>
            <Card.Body>
              <img src={climateRef} alt="Climate Refugee" className="card-img" />
              <Card.Text className="card-text">
                🌍 Connect, 🤝 share experiences, and 💡 access support in a community built for those impacted by climate change. 💚🔥
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>

        {/* Coral Reef Protection Card */}
        <Link to="/coralreedandaquabodies" style={{ textDecoration: "none" }}>
          <Card border="warning" className="custom-card" style={{ height: "53vh" }}>
            <Card.Header>Coral Reef And Aqua Bodies Protection</Card.Header>
            <Card.Body>
              <img src={coralref} alt="Coral Reef Protection" className="card-img" style={{ height: "25vh" }} />
              <Card.Text className="card-text">
                Safeguarding marine ecosystems through conservation, restoration, and sustainable practices to protect biodiversity and fight climate change. 🌊🐠
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>

        {/* Climate Assistant Card */}
        <Link to="/climateassistant" style={{ textDecoration: "none" }}>
          <Card border="warning" className="custom-card" style={{ height: "53vh" }}>
            <Card.Header>Climate Assistant</Card.Header>
            <Card.Body>
              <img src={chatbot} alt="Climate Assistant" className="card-img" />
              <Card.Text className="card-text">
                Get ⚡ instant answers, explore 📚 topics, and engage 💬 in real-time conversations for quick insights and support. 🤝🌍
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </div>
    </div>
  );
}
