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
                    <h1 className="main-heading">🌍 Climate Action Hub & Climate Assistant 🌿</h1>
                    <p className="slogan-text">One-stop platform for climate change awareness, resources, and donations</p>
                    
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
