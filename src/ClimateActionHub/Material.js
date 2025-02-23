import React from 'react';
import material from './Assets/Images/material.png';
import './Assets/CSS/material.css'; // Import external CSS file

export function Material() {
    return (
        <div className="material-container">
            <img src={material} alt="Material Sustainability" className="material-image" />

            <div className="material-content">
                <h1>Material Sustainability and Climate Impact</h1>
                <p>
                    Modern material production and consumption contribute significantly to greenhouse gas emissions throughout a product's 
                    life cycle, from extraction and processing to transportation, manufacturing, use, and disposal.
                </p>
                <p>
                    The traditional linear approach to materials leads to excessive energy use and waste, leaving a severe environmental footprint. 
                    To combat this, sustainable solutions focus on redesigning materials, optimizing their use, and promoting circular economy 
                    principles such as reducing, reusing, and recycling.
                </p>
                <p>
                    Innovations in biodegradable materials, sustainable packaging, and efficient resource management help minimize emissions and 
                    energy waste, paving the way for a greener and more climate-friendly future.
                </p>
            </div>

            <div className="material-section">
                <h2>Fairphone: Ethical and Sustainable Smartphones</h2>
                <p>
                    Fairphone, a Netherlands-based company, is revolutionizing the smartphone industry by prioritizing sustainability and ethical production. 
                    By creating "fair" phones, the company is opening up supply chains to ensure responsible sourcing of materials, ethical mining practices, 
                    and fair labor conditions in design and manufacturing.
                </p>
                <p>
                    Their modular phone design extends product life, reducing electronic waste and promoting repairability. By focusing on circular economy principles, 
                    Fairphone is leading the shift towards more sustainable consumer electronics, proving that technology can be both innovative and environmentally responsible 
                    in the fight against climate change.
                </p>
            </div>

            <div className="material-section">
                <h2>Green Credit Card Initiative</h2>
                <p>
                    The Green Credit Card initiative by the Korean Ministry of Environment incentivizes sustainable consumer behavior by rewarding users 
                    for making low-carbon lifestyle choices. With over 15 million cards issued in South Korea, this program encourages individuals to adopt 
                    eco-friendly habits, such as using public transportation, purchasing energy-efficient appliances, and reducing plastic waste.
                </p>
                <p>
                    By integrating environmental responsibility into everyday financial transactions, the Green Credit Card system fosters a culture of sustainability, 
                    demonstrating how financial tools can drive meaningful action in combating climate change.
                </p>
            </div>
        </div>
    );
}
