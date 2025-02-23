import React from 'react';
import solution from './Assets/Images/solution.jpg';
import './Assets/CSS/emergingsolutions.css'; // Import the external CSS file

export function Emergingsolutions() {
    return (
        <div className="emerging-container">
            <img src={solution} alt="Emerging Solutions" className="emerging-image" />
            <div className="emerging-content">
                <h1>Emerging Solutions</h1>
                <p>
                    Self-driving cars represent a transformative solution in the fight against climate change, with the potential to revolutionize 
                    transportation efficiency and drastically reduce emissions. These autonomous vehicles optimize driving patterns, minimize congestion, 
                    and improve fuel efficiency by reducing unnecessary acceleration and braking.
                </p>
                <p>
                    When combined with electrification, self-driving technology can accelerate the transition away from fossil fuels, making transportation 
                    smarter and more sustainable. Additionally, shared autonomous fleets could reduce the number of vehicles on the road, further cutting down 
                    on carbon emissions and urban pollution.
                </p>
                <p>
                    While still in development, self-driving cars hold immense promise as a game-changing innovation for a cleaner, more sustainable future.
                </p>
            </div>
        </div>
    );
}
