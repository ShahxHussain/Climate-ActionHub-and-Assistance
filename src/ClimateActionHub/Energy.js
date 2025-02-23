import energy from './Assets/Images/energy.jpeg';
import './Assets/CSS/energy.css';
export function Energy() {
    return (
        <div className="energy-container">
            <img src={energy} alt="Energy Impact" className="energy-image" />
            
            <div className="energy-section">
                <h1>Energy and Climate Impact</h1>
                <p>
                    Electricity generation is the largest contributor to global emissions, accounting for around 40% of all 
                    greenhouse gas emissions released into the atmosphere. Fossil fuels remain dominant, making up 67% of 
                    electricity production, while nuclear energy contributes 11%, and renewable sources—such as wind, solar, 
                    and hydro—account for just over 24% but continue to grow.
                </p>

                <h2>Solutions</h2>
                <p>
                    The rapid advancements in renewable energy technologies have made them increasingly competitive. Improved 
                    efficiency and declining costs of solar, wind, and other clean energy solutions have accelerated their adoption. 
                    Transitioning away from fossil fuels to renewable energy is one of the most effective ways to reduce emissions 
                    and combat climate change.
                </p>
            </div>

            <div className="energy-section">
                <h1>Azuri Technologies</h1>
                <p>
                    Azuri Technologies is a pioneering provider of pay-as-you-go solar home systems, delivering affordable and 
                    reliable energy solutions to off-grid households across sub-Saharan Africa. Since its inception in 2012, 
                    Azuri has impacted over 750,000 lives in 12 countries by installing more than 150,000 solar systems.
                </p>

                <p>
                    Azuri's innovative products, such as the Quad 15W Solar Home System, offer comprehensive household lighting 
                    and mobile phone charging for as little as US$0.50 per day. These systems incorporate HomeSmart technology, 
                    which uses machine learning to adapt to users' energy consumption patterns and ensure light throughout the 
                    night, even during adverse weather conditions.
                </p>

                <p>
                    In partnership with broadcasters like Zuku and DStv, Azuri provides solar-powered televisions bundled with 
                    satellite content, bringing information and entertainment to remote communities. This initiative not only 
                    enhances quality of life but also fosters greater connectivity and access to educational resources.
                </p>

                <p>
                    By combining cutting-edge solar technology with flexible payment plans, Azuri empowers underserved populations, 
                    enabling extended business hours, improved productivity, and enhanced educational opportunities, all while 
                    contributing to environmental sustainability through the reduction of carbon emissions.
                </p>
            </div>

            <div className="energy-section">
                <h1>Stanford's Solar-Powered Pumps</h1>
                <p>
                    In northern Benin, where the dry season can extend up to nine months, smallholder farmers often face 
                    severe food insecurity due to reliance on rain-fed agriculture. To address this, Stanford University's 
                    Center on Food Security and the Environment (FSE) collaborated with the Solar Electric Light Fund (SELF) 
                    to implement solar-powered drip irrigation systems, known as Solar Market Gardens.
                </p>

                <p>
                    These systems utilize solar arrays to power pumps that draw water from deep wells, delivering it directly 
                    to plant roots through perforated hoses. This method conserves water and enhances crop yields, enabling 
                    year-round cultivation.
                </p>

                <p>
                    Studies have shown that households using these systems experience a 17% reduction in food insecurity and 
                    increased daily per capita spending, primarily on food. Additionally, the initiative has led to improved 
                    nutrition and overall well-being in participating communities.
                </p>
            </div>

            <div className="energy-section">
                <h1>SOLshare</h1>
                <p>
                    SOLshare has pioneered the world's first ICT-enabled peer-to-peer electricity trading network in Shariatpur, 
                    Bangladesh, connecting rural households with and without solar home systems. This innovative platform allows 
                    users to buy and sell excess electricity within their communities, enabling those with surplus energy to earn 
                    additional income and those without direct access to obtain affordable, reliable power without relying on a 
                    centralized grid.
                </p>

                <p>
                    By integrating solar home systems with centralized mini-grids, SOLshare enhances energy distribution efficiency, 
                    reduces costs, and promotes renewable energy adoption in off-grid areas.
                </p>
            </div>

            <div className="energy-section">
                <h1>Google's Project Sunroof</h1>
                <p>
                    Google's Project Sunroof is an innovative tool that utilizes high-resolution aerial imagery from Google Earth 
                    to assess a roof's solar energy potential. By analyzing factors such as roof orientation, shading from nearby 
                    structures or trees, and local weather patterns, Project Sunroof provides homeowners across the United States 
                    with personalized evaluations of their property's suitability for solar installations.
                </p>

                <p>
                    Users can enter their address to receive detailed estimates of potential energy savings, installation costs, 
                    and environmental benefits associated with adopting solar energy. This initiative empowers tens of millions 
                    of potential solar customers to make informed decisions about transitioning to renewable energy sources, 
                    promoting both economic savings and environmental sustainability.
                </p>
            </div>
        </div>
    );
}
