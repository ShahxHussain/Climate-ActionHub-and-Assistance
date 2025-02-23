import './Assets/CSS/Movement.css';
import movement from './Assets/Images/movement.jpg';

export function Movements() {
    return (
        <div className="movements-container">
            <img src={movement} alt='not found' className="movements-image" />
            <br /><br />  
            
            {/* Extinction Rebellion Section */}
            <div className="movements-box xr-box">
                <h1 className="movements-title">About Extinction Rebellion (XR)</h1>
                <p>
                    Extinction Rebellion (XR) is an international movement that employs nonviolent civil disobedience to compel government action on the climate and ecological emergency. Founded in 2018, XR has rapidly expanded into a global network advocating for urgent measures to address environmental crises.
                </p>
                <h2 className="movements-subtitle">Our Mission</h2>
                <p>
                    We aim to pressure governments and institutions to take immediate action against climate change through peaceful protests and community-driven activism.
                </p>
                <h2 className="movements-subtitle">Our Demands</h2>
                <ul>
                    <li><strong>Tell the Truth</strong> – Governments must declare a climate and ecological emergency.</li>
                    <li><strong>Act Now</strong> – Take urgent steps to reduce carbon emissions and halt biodiversity loss.</li>
                    <li><strong>Beyond Politics</strong> – Create a Citizens’ Assembly to guide climate policies.</li>
                </ul>
                <a
          href="https://extinctionrebellion.uk/"
          className="learn-more-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
            </div>

            {/* Fridays for Future Section */}
            <div className="movements-box fff-box">
                <h1 className="movements-title">Fridays for Future (FFF)</h1>
                <p>
                    Fridays for Future (FFF) is a global, youth-led climate movement that began in August 2018 when 15-year-old Greta Thunberg started a school strike for climate outside the Swedish Parliament.
                </p>
                <p>
                    The movement emphasizes the urgency of addressing the climate crisis to ensure a sustainable future for coming generations. FFF operates on a decentralized model, empowering local groups to organize autonomously while adhering to shared principles and goals.
                </p>
                <p>
                    Beyond street protests, the movement engages in various initiatives, including educational campaigns, political lobbying, and collaborations with environmental organizations, aiming to hold policymakers accountable and promote systemic change.
                </p>
                <a
          href="https://fridaysforfuture.github.io/fridaysforfuture.org/"
          className="learn-more-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
            </div>
        </div>
    );
}
