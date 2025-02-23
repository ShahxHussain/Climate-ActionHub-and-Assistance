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
                <h2>GainForest: AI for Forest Conservation</h2>
                <p>
                    GainForest is an AI-powered platform dedicated to combating deforestation through advanced data analysis and forecasting. 
                    By leveraging a combination of satellite imagery, drone data, and machine learning algorithms, GainForest monitors 
                    forest changes in real-time, enabling the detection of illegal logging activities and the assessment of forest health.
                </p>
                <a
          href="https://gainforest.org/"
          className="learn-more-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
            </div>

            <div className="landuse-section">
                <h2>Rainforest Connection (RFCx): Acoustic Monitoring for Deforestation Prevention</h2>
                <p>
                    Rainforest Connection (RFCx) utilizes acoustic monitoring systems to combat illegal deforestation in real-time. 
                    By deploying solar-powered devices called "Guardians" high in the forest canopy, RFCx continuously captures 
                    ambient sounds of the rainforest.
                </p>
                <a
          href="https://rfcx.org/"
          className="learn-more-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
            </div>

            <div className="landuse-section">
                <h2>Ekofolio: Democratizing Timberland Investments</h2>
                <p>
                    Ekofolio is an investment platform that democratizes access to timberland assets by leveraging blockchain technology. 
                    Traditionally, timberland investments have been limited to large institutional investors due to high capital 
                    requirements and illiquidity.
                </p>
                <a
          href="https://www.ekofolio.com/"
          className="learn-more-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
            </div>

            <div className="landuse-section">
                <h2>Planet Inc.: Satellite Monitoring for Deforestation Detection</h2>
                <p>
                    Planet Inc. utilizes its extensive satellite constellation and advanced land cover classification algorithms to monitor 
                    and detect deforestation activities globally.
                </p>
                <a
          href="https://medium.com/planet-stories/a-turning-point-in-tropical-forest-monitoring-f7b693f69417"
          className="learn-more-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
            </div>

            <div className="landuse-section">
                <h2>Afforest4Future: Transforming Arid Lands into Forests</h2>
                <p>
                    Afforest4Future is an initiative focused on transforming arid regions, such as deserts, into fertile, food-producing forests. 
                    By employing a patented technology, the organization accelerates soil creation in dry lands from the traditional 
                    10-15 years to just one day.
                </p>
                <a
          href="https://www.godaddy.com/forsale/afforest4future.com?utm_source=TDFS_BINNS2&utm_medium=parkedpages&utm_campaign=x_corp_tdfs-binns2_base&traffic_type=TDFS_BINNS2&traffic_id=binns2&"
          className="learn-more-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
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
                <a
          href="https://unfccc.int/climate-action/momentum-for-change/ict-solutions/connected-mangroves"
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
