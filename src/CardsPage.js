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

        {/* Climate Action Hub Center Card */}
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <Card border="danger" className="custom-card" style={{ height: "58vh", width: "17rem" }}>
            <Card.Header>Climate Change Action Hub - Resources Center</Card.Header>
            <Card.Body>
              <img src={climateactionhub} alt="Climate Action Hub" className="card-img" />
              <Card.Text className="card-text">
              Empowering communities with knowledge, activism, and tools to drive real climate action.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>

        {/* Climate Refugee Card */}
        <Link to="/climaterefuge" style={{ textDecoration: "none" }}>
          <Card border="warning" className="custom-card" style={{ height: "58vh", width: "17rem" }}>
            <Card.Header>Tracking & Aiding Climate Refugees</Card.Header>
            <Card.Body>
              <img src={climateRef} alt="Climate Refugee" className="card-img" />
              <Card.Text className="card-text">
              Bridging technology and humanity to connect displaced individuals with resources, education, and aid.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>

        {/* Coral Reef Protection Card */}
        <Link to="/coralreedandaquabodies" style={{ textDecoration: "none" }}>
          <Card border="warning" className="custom-card" style={{ height: "58vh", width: "17rem" }}>
            <Card.Header>Deep-Sea Plastic Detection & AquaLIfe Protection</Card.Header>
            <Card.Body>
              <img src={coralref} alt="Coral Reef Protection" className="card-img" style={{ height: "18vh" }} />
              <Card.Text className="card-text">
                Safeguarding marine ecosystems through conservation, restoration, and sustainable practices to protect biodiversity and fight climate change.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>

        {/* Climate Assistant Card */}
        <Link to="/climateassistant" style={{ textDecoration: "none" }}>
          <Card border="warning" className="custom-card" style={{ height: "58vh", width: "17rem" }}>
            <Card.Header>Climate Assistant - AI Powered chatBot</Card.Header>
            <Card.Body>
              <img src={chatbot} alt="Climate Assistant" className="card-img" />
              <Card.Text className="card-text">
              Harnessing AI to provide guidance, explanation about actionable solutions real-time climate insights,and predictions for a sustainable future.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>

        {/* Landing Page Card */}
        <Link to="/aboutus" style={{ textDecoration: "none" }}>
          <Card border="success" className="custom-card" style={{ height: "58vh" , width: "17rem"}}>
            <Card.Header>About Us</Card.Header>
            <Card.Body>
              <img src={landingpage} alt="Landing Page" className="card-img" />
              <Card.Text className="card-text">
              AI-driven ocean monitoring to track plastic pollution, protect coral reefs, and safeguard marine life.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </div>
    </div>
  );
}
