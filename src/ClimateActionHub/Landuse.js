import landuse from './Assets/Images/landuse.jpg';
import './Assets/CSS/landuse.css';

export function Landuse() {
    return (
        <div className="landuse-container">
            <img src={landuse} alt="Land Use and Climate Change" className="landuse-image" />
            <div className="landuse-content">
                <h1>Land Use and Climate Change</h1>
                <p>
                    Land use plays a critical role in the fight against climate change, as deforestation and ecosystem degradation 
                    contribute significantly to global emissions. Currently, these activities account for approximately 10-15% of 
                    all greenhouse gas emissions.
                </p>
                <p>
                    Protecting and restoring forests, adopting sustainable land management practices, and implementing reforestation 
                    initiatives can help reduce emissions and enhance carbon sequestration.
                </p>
                <p>
                    By prioritizing responsible land use, we can preserve biodiversity, improve soil health, and mitigate the impacts 
                    of climate change while ensuring sustainable livelihoods for local communities.
                </p>
            </div>

            <div className="landuse-section">
                <h2>Foodsharing.de: Fighting Food Waste</h2>
                <p>
                    Foodsharing.de is a free web platform dedicated to combating food waste by facilitating the sharing of surplus food 
                    among individuals and organizations in Germany, Austria, and Switzerland.
                </p>
                <p>
                    The platform connects over 605,000 registered users, including more than 167,000 voluntary "Foodsavers," who collect 
                    and distribute excess food from retailers and producers.
                </p>
            </div>

            <div className="landuse-section">
                <h2>FHI 360's CHAI Project: Climate Change Adaptation in Uganda</h2>
                <p>
                    FHI 360 has implemented the Climate Change Adaptation and ICT (CHAI) project in Uganda, utilizing information and 
                    communication technology tools to support farmers affected by climate change.
                </p>
                <p>
                    By providing timely and relevant insights, the CHAI project enables farmers to minimize crop loss and damage, 
                    enhancing their resilience to the impacts of global warming.
                </p>
            </div>

            <div className="landuse-section">
                <h2>ICTs for Small-Scale Farmers</h2>
                <p>
                    ICTs for Small-Scale Farmers is an initiative developed by the International Center for Tropical Agriculture (CIAT) 
                    in partnership with the CGIAR Research Program on Climate Change, Agriculture, and Food Security (CCAFS).
                </p>
                <p>
                    This project aims to assist smallholder farmers in Colombia and Honduras in adapting to climate variability by providing 
                    them with timely and relevant information.
                </p>
            </div>

            <div className="landuse-section">
                <h2>GainForest: AI for Forest Conservation</h2>
                <p>
                    GainForest is an AI-powered platform dedicated to combating deforestation through advanced data analysis and forecasting. 
                    By leveraging a combination of satellite imagery, drone data, and machine learning algorithms, GainForest monitors 
                    forest changes in real-time, enabling the detection of illegal logging activities and the assessment of forest health.
                </p>
            </div>

            <div className="landuse-section">
                <h2>Rainforest Connection (RFCx): Acoustic Monitoring for Deforestation Prevention</h2>
                <p>
                    Rainforest Connection (RFCx) utilizes acoustic monitoring systems to combat illegal deforestation in real-time. 
                    By deploying solar-powered devices called "Guardians" high in the forest canopy, RFCx continuously captures 
                    ambient sounds of the rainforest.
                </p>
            </div>

            <div className="landuse-section">
                <h2>Ekofolio: Democratizing Timberland Investments</h2>
                <p>
                    Ekofolio is an investment platform that democratizes access to timberland assets by leveraging blockchain technology. 
                    Traditionally, timberland investments have been limited to large institutional investors due to high capital 
                    requirements and illiquidity.
                </p>
            </div>

            <div className="landuse-section">
                <h2>Planet Inc.: Satellite Monitoring for Deforestation Detection</h2>
                <p>
                    Planet Inc. utilizes its extensive satellite constellation and advanced land cover classification algorithms to monitor 
                    and detect deforestation activities globally.
                </p>
            </div>

            <div className="landuse-section">
                <h2>Afforest4Future: Transforming Arid Lands into Forests</h2>
                <p>
                    Afforest4Future is an initiative focused on transforming arid regions, such as deserts, into fertile, food-producing forests. 
                    By employing a patented technology, the organization accelerates soil creation in dry lands from the traditional 
                    10-15 years to just one day.
                </p>
            </div>

            <div className="landuse-section">
                <h2>Ericsson's Connected Mangroves: Technology for Coastal Protection</h2>
                <p>
                    Ericsson's Connected Mangroves project in Selangor, Malaysia, integrates cloud computing, machine-to-machine communication, 
                    and mobile broadband technologies to aid local communities in managing the growth of new mangrove saplings.
                </p>
                <p>
                    Volunteers have planted saplings equipped with sensors that monitor real-time data on soil and weather conditions, 
                    water levels, and potential intrusions.
                </p>
                <p>
                    This information is transmitted to a cloud-based system, providing stakeholders—including farmers, NGOs, analysts, and 
                    authorities—with accessible insights to ensure the healthy development of the mangroves.
                </p>
                <p>
                    The initiative aims to enhance the survival rate of mangrove seedlings, contributing to coastal protection and carbon 
                    emission absorption.
                </p>
            </div>
        </div>
    );
}
