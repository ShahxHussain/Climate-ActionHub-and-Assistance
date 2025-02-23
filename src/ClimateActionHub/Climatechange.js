import climatechange from './Assets/Images/climatechange.jpg';
import './Assets/CSS/climatechange.css';

export function ClimatechangeandSociety() {
    return (
        <div className="climate-container">
            <img src={climatechange} alt="Climate Change" />

            <div className="climate-section">
                <h1>Climate Change and Society</h1>
                <p>
                    Climate change is not just an environmental issue—it is a societal crisis with far-reaching consequences. Rising global 
                    temperatures are already forcing communities to migrate due to extreme weather events, sea-level rise, and resource shortages, 
                    creating climate refugees in vulnerable regions. Travel and infrastructure are increasingly at risk as hurricanes, wildfires, 
                    and floods become more frequent and severe.
                </p>
                <p>
                    Furthermore, existing social inequalities mean that women and girls are disproportionately affected, facing heightened risks 
                    from climate-related diseases, food insecurity, and displacement. Empowering marginalized communities, promoting climate justice, 
                    and integrating inclusive policies are essential to building a resilient society that can withstand and adapt to the growing 
                    challenges of climate change.
                </p>
            </div>

            <div className="climate-section">
                <h1>Global Policy Lab</h1>
                <p>
                    Global Policy Lab utilizes a vast archive of 1.6 million historical aerial photographs to analyze the impact of major droughts 
                    and climate change on human migration in Africa. By leveraging this extensive dataset, researchers can track environmental 
                    changes over time and assess how climate-induced disruptions force communities to relocate.
                </p>
                <p>
                    This innovative approach provides valuable insights into the relationship between climate variability and migration patterns, 
                    helping policymakers develop proactive solutions to mitigate displacement and enhance resilience. Understanding these trends 
                    is crucial for shaping sustainable strategies that address the social and economic consequences of climate change.
                </p>
            </div>

            <div className="climate-section">
                <h1>Smart-ICE</h1>
                <p>
                    SmartICE is an innovative climate change adaptation tool that combines traditional Inuit knowledge of sea ice with advanced 
                    data acquisition and remote monitoring technology. By integrating local expertise with real-time ice monitoring, SmartICE helps 
                    Indigenous communities in the Arctic safely navigate changing ice conditions, reducing travel risks caused by climate change.
                </p>
                <p>
                    This system provides critical information for planning safe routes on the ice, ensuring that hunters, fishers, and travelers 
                    can make informed decisions while preserving their way of life. As climate change accelerates the loss of stable sea ice, 
                    SmartICE plays a vital role in enhancing resilience and safety for Arctic communities.
                </p>
            </div> 

            <div className="climate-section">
                <h1>CREA Mont-Blanc</h1>
                <p>
                    CREA Mont-Blanc uses a combination of webcams, citizen science, and automated monitoring to track temperatures, snow patterns, 
                    and the behaviors of flora and fauna in the Mont-Blanc region. By collecting real-time environmental data, the organization 
                    provides valuable insights into the impacts of climate change on mountain ecosystems.
                </p>
                <p>
                    This information helps inform sustainable land-use strategies and conservation efforts, ensuring that the delicate balance of 
                    alpine biodiversity is preserved. As climate change continues to alter high-altitude environments, CREA Mont-Blanc’s research 
                    and technology-driven approach play a crucial role in understanding and mitigating its effects on mountain landscapes.
                </p>
            </div>
        </div>
    );
}
