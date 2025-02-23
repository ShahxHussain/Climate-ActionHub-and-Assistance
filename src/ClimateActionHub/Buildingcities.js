import building from './Assets/Images/buildingcities.png';
import './Assets/CSS/buildingcities.css';

export function Buildingandcities() {
    return (
        <div className="building-container">
            <img src={building} alt="Building and Cities" className="building-image" />
            <br/><br/><br/>
            <div className="building-content">
                <h1>Buildings and Cities: Energy Consumption and Sustainability</h1>
                <p>
                    Dense urban settlements significantly contribute to global energy consumption, particularly for heating and cooling, 
                    accounting for approximately 6% of worldwide greenhouse gas emissions. To mitigate these emissions, it's essential to 
                    address operational inefficiencies in buildings and urban living.
                </p>

                <div className="building-section">
                    <h2>Key Strategies for Sustainable Cities</h2>
                    <ul className="building-list">
                        <li>
                            <strong>Retrofitting Existing Structures:</strong> Upgrading insulation, installing energy-efficient windows, 
                            and modernizing heating and cooling systems can substantially reduce energy consumption.
                        </li>
                        <li>
                            <strong>Green Building Standards:</strong> Adopting certifications like LEED or BREEAM ensures that new constructions 
                            meet high energy efficiency and sustainability criteria.
                        </li>
                        <li>
                            <strong>Compact City Designs:</strong> Encouraging mixed-use developments reduces transportation needs and fosters 
                            walkable communities, lowering emissions.
                        </li>
                        <li>
                            <strong>Green Spaces:</strong> Incorporating parks, green roofs, and urban forests helps mitigate the urban heat 
                            island effect and enhances air quality.
                        </li>
                        <li>
                            <strong>Smart Technologies:</strong> Building automation systems, such as smart thermostats and lighting controls, 
                            optimize energy use based on occupancy and time of day.
                        </li>
                        <li>
                            <strong>Energy Monitoring:</strong> Advanced metering provides real-time data, enabling occupants to adjust behaviors 
                            and reduce waste.
                        </li>
                        <li>
                            <strong>On-site Renewable Energy:</strong> Solar panels and small-scale wind turbines supply clean energy directly to buildings.
                        </li>
                        <li>
                            <strong>District Energy Systems:</strong> Centralized heating and cooling production improves efficiency and integrates 
                            renewable sources.
                        </li>
                    </ul>
                </div>
            </div>

            <div className="building-section">
                <h2>Energy Self-Sufficient Apartment Building</h2>
                <p>
                    In 2016, an innovative multi-family residence was constructed in Brütten, Zurich, Switzerland, acclaimed as the world's first 
                    energy self-sufficient apartment building. Designed for up to nine families, this "house of the future" harnesses and stores 
                    sufficient solar energy to meet all its tenants' needs. The building’s roof and façade are equipped with high-efficiency 
                    solar panels, minimizing both energy consumption and loss. Just one hour of sunlight can power the entire building for 24 hours. 
                    To ensure energy availability during overcast periods, a power-to-gas system converts excess solar energy into hydrogen, which 
                    is later used by a fuel cell to generate electricity, ensuring a consistent and sustainable energy supply.
                </p>
            </div>

            <div className="building-section">
                <h2>ETH Zurich’s Future Cities Laboratory (FCL)</h2>
                <p>
                    ETH Zurich's Future Cities Laboratory (FCL) is committed to pioneering sustainable urban development by integrating scientific 
                    research with practical applications. The lab focuses on creating resilient, environmentally friendly cities by addressing key urban challenges.
                </p>
                <p>
                    One of its major initiatives, <strong>Dense and Green Cities</strong>, explores the development of Sustainable Integrated Districts (SIDs) that balance 
                    high-density living with green infrastructure to enhance livability and sustainability.
                </p>
                <p>
                    Another initiative, <strong>Circular Future Cities</strong>, focuses on resource efficiency by assessing the environmental impact of building materials 
                    and energy use, aiming to transition cities into circular economies.
                </p>
                <p>
                    Additionally, the <strong>Cities Knowledge Graph</strong> project utilizes artificial intelligence and geospatial data to support smarter city planning 
                    and informed decision-making.
                </p>
                <p>
                    Through collaborations with academia, industry, and government agencies, FCL translates its research into actionable strategies, helping shape the cities of the future.
                </p>
            </div>
        </div>
    );
}
