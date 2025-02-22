import Card from 'react-bootstrap/Card';
import './Assets/CSS/CardsPage.css'; // Import the CSS file
import chatbot from './Assets/Images/chattbot.png';
import climateRef from './Assets/Images/climaterefugee.png';
import dashboard from './Assets/Images/dashboard.png';
export function CardsPage() {
    return (
        <div className="cards-page-container">
            <h1>Who We Are.....</h1>
            <div className="cards-container">
                <Card border="success" className="custom-card">
                    <Card.Header>Climate Refugee</Card.Header>
                    <br/>
                        <img src={dashboard} style={{width:'100%'}}></img>
                        <br/>
                        <Card.Text>
                        Connect, share experiences, and access support in a community built for those impacted by climate change.
                        </Card.Text>
                        <br/>
                    
                </Card>

                <Card border="danger" className="custom-card">
                    <Card.Header>Training Peers Mentors</Card.Header>
                    <br/>
                    <img src={climateRef} style={{width:'100%'}}></img>
                    <br/>
                        <Card.Text>
                        Guide, support, and empower others through mentorship, sharing knowledge, and building a stronger community.
                        </Card.Text>
                        <br/>
                </Card>
        
    
                <Card border="warning" className="custom-card">
                    <Card.Header>Chat With Bot</Card.Header>
                    <br/>
                    <img src={chatbot} style={{width:'100%'}}></img>
                    <br/>
                        <Card.Text>
                        Get instant answers, explore topics, and engage in real-time conversations for quick insights and support.
                        </Card.Text>
                        <br/>
                </Card>
        
            </div>
        </div>
    );
}
