import videoBg from './Assets/Images/displayvideo.mp4'; // Import your video file
import './Assets/CSS/Landingpage.css';
import { Link } from 'react-router-dom';


export function LandingPage() {
    return (
        <>
            <div className="landing-container">
                {/* Background Video */}
                <video className="background-video" autoPlay loop muted>
                    <source src={videoBg} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="overlay">
                    <h1 className="main-heading"> Climate Nexus🌿</h1>
                    <p className="slogan-text">A one-stop platform for climate action—uniting resources, awareness, assistance, technology, activism, and policy support to protect our planet and aid climate refugees.</p>
                    <p className="slogan-text">Climate Nexus isn’t just a project—it’s a movement for change. Let’s take action together</p>
                    {/* Wrapper for span and button */}
                    <div className="cta-wrapper">
                        <span className="climate-span">Want to be a Climate Change Maker?</span>
                        <Link to='/selectoptions'>
                        <button className="cta-button">Click here 🌱</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
