import transport from './Assets/Images/transport.png';
import './Assets/CSS/transport.css';

export function Transport() {
    return (
        <div className="transport-container">
            <img src={transport} alt="Transport" className="transport-image" />
            <h1>Transportation and Sustainability</h1>
            <p>
                Transportation is a significant contributor to global carbon emissions, accounting for approximately 14% of all greenhouse gas emissions. 
                The sector relies heavily on fossil fuels, making it a key area for innovation and transformation in the fight against climate change.
            </p>

            <div className="transport-section">
                <h2>Solutions for Sustainable Transport</h2>
                <p>
                    Solutions for sustainable transport include improving fuel efficiency, transitioning to electric and hydrogen-powered vehicles, expanding 
                    public transportation, and promoting non-motorized transport like cycling and walking.
                </p>
            </div>

            <div className="transport-section">
                <h2>Role of Information and Communication Technologies (ICT)</h2>
                <p>
                    Advances in information and communication technologies (ICT) also play a role in reducing emissions by optimizing traffic flow, enabling 
                    remote work, and supporting shared mobility services.
                </p>
            </div>

            <div className="transport-section">
                <h2>Future of Low-Carbon Transportation</h2>
                <p>
                    By embracing alternative fuels, smart city initiatives, and infrastructure investments that prioritize low-carbon transportation, we can 
                    significantly reduce the environmental impact of mobility while ensuring accessibility and efficiency for future generations.
                </p>
            </div>

            <div className="transport-section">
                <h2>Tesla: Leading the Electric Revolution</h2>
                <p>
                    Tesla is a global leader in sustainable transportation, revolutionizing the automotive industry with its innovative electric vehicles. 
                    By eliminating reliance on fossil fuels, Tesla's cars significantly reduce greenhouse gas emissions, helping to combat climate change. 
                </p>
                <p>
                    With advancements in battery technology, energy efficiency, and charging infrastructure, Tesla has made electric mobility accessible 
                    and practical for consumers worldwide. Beyond vehicles, Tesla also contributes to clean energy solutions through solar power and 
                    energy storage systems, promoting a future powered by renewable energy.
                </p>
                <p>
                    Through its commitment to innovation and sustainability, Tesla is driving the transition toward a low-carbon economy and a cleaner planet.
                </p>
            </div>

            <div className="transport-section">
                <h2>ChargePoint: Powering the EV Charging Revolution</h2>
                <p>
                    ChargePoint operates the world’s largest electric vehicle (EV) charging network, enabling a seamless transition from gasoline-powered 
                    transportation to clean electric mobility. 
                </p>
                <p>
                    With a vast infrastructure of smart, connected charging stations, ChargePoint empowers individuals, businesses, and cities to reduce 
                    carbon emissions and embrace sustainable transportation. Its intelligent energy management solutions optimize charging efficiency, 
                    making EV adoption more accessible and convenient.
                </p>
                <p>
                    By supporting renewable energy integration and reducing dependence on fossil fuels, ChargePoint plays a crucial role in mitigating 
                    climate change and accelerating the shift toward a zero-emission future.
                </p>
            </div>
        </div>
    );
}
