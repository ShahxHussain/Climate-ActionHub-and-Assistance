import metrics from './Assets/Images/datametrics.png';
import './Assets/CSS/datametrics.css';

export function Dataandmetrics() {
    return (
        <div className="data-metrics-container">
            <img src={metrics} alt="Data Metrics" className="data-metrics-image" />
            
            <div className="data-section">
                <h1 className="data-title">Project Drawdown</h1>
                <p className="data-text">
                    Project Drawdown is a comprehensive initiative that identifies and analyzes 93 solutions to reduce 
                    greenhouse gas concentrations in Earth's atmosphere. It categorizes solutions into reducing emissions, 
                    supporting carbon sinks, and improving societal resilience.
                </p>
                <p className="data-text">
                    The initiative focuses on decreasing emissions from key sectors, including electricity generation, 
                    transportation, industry, and agriculture. It also emphasizes the importance of enhancing carbon absorption 
                    methods such as reforestation, soil carbon sequestration, and coastal wetland restoration.
                </p>
                <p className="data-text">
                    Project Drawdown highlights the role of social improvements, including education, health, and equality, 
                    in contributing to emission reductions and fostering community resilience. Each solution is evaluated based on 
                    its effectiveness in avoiding emissions or sequestering carbon, financial feasibility, and scalability.
                </p>
                <p className="data-text">
                    The overarching goal is to reach ‘drawdown’—the point when atmospheric greenhouse gas levels begin to decline—by mid-century. 
                    Project Drawdown underscores that its proposed solutions are already available, economically viable, and can be 
                    implemented immediately to mitigate climate change.
                </p>
            </div>

            <div className="data-section">
                <h1 className="data-title">Global Carbon Atlas</h1>
                <p className="data-text">
                    The Global Carbon Atlas is an interactive platform designed to explore and visualize the latest data on carbon fluxes 
                    from both human activities and natural processes. It provides comprehensive insights into carbon emissions, budgets, 
                    and their global distribution.
                </p>
                <p className="data-text">
                    Users can access CO₂ emission data at global and country levels, focusing on sources like fossil fuels, land-use 
                    changes, and nitrous oxide emissions. The platform also examines CO₂ emissions from cities worldwide, offering 
                    data compiled in collaboration with organizations such as the Carbon Disclosure Project (CDP).
                </p>
                <p className="data-text">
                    Additionally, it presents an analysis of the global carbon budget, detailing the balance of all CO₂ emissions and 
                    removals from human activities, including fossil fuel combustion and land-use changes.
                </p>
                <p className="data-text">
                    The Global Carbon Atlas further explores methane emissions and sinks, synthesizing data from over 50 research 
                    institutions, and assesses carbon fluxes in inland and coastal waters, highlighting their roles in the global 
                    carbon cycle.
                </p>
                <p className="data-text">
                    Developed by the Global Carbon Project, the platform serves as a valuable resource for researchers, policymakers, 
                    and the public, providing accessible and up-to-date carbon data to support climate action.
                </p>
            </div>

            <div className="data-section">
                <h1 className="data-title">The Climate Impact Lab</h1>
                <p className="data-text">
                    The Climate Impact Lab is a collaborative initiative comprising over 30 climate scientists, economists, computational 
                    experts, researchers, analysts, and students from the United States. Their mission is to quantify and communicate the 
                    real-world costs of climate change through an evidence-based, data-driven approach. By analyzing impacts across various 
                    sectors and communities, the Lab provides actionable insights to inform public policy and private sector decisions.
                </p>
                <p className="data-text">
                    One of their key tools is the Impact Map, which offers localized projections of climate impacts, including temperature 
                    changes and economic damages. This interactive platform enables users to explore how different regions may be affected 
                    under various emissions scenarios. Additionally, the Lab has developed the Human Climate Horizons data platform in 
                    partnership with the United Nations Development Programme, delivering hyperlocal climate data to regions most vulnerable 
                    to climate change.
                </p>
                <p className="data-text">
                    The Climate Impact Lab also collaborates with financial and insurance sectors, providing data to institutions like the 
                    Federal Reserve and the Bank of England to help assess climate-related risks. Their research efforts include developing 
                    empirically derived estimates of the social cost of carbon, aiding governments in crafting effective climate policies. 
                    Through these initiatives, the Lab strives to empower stakeholders with the information necessary to mitigate and adapt 
                    to the evolving challenges posed by climate change.
                </p>
            </div>

            <div className="data-section">
                <h1 className="data-title">Gold Standard</h1>
                <p className="data-text">
                    Gold Standard is a leading organization dedicated to setting rigorous benchmarks for climate and sustainable 
                    development projects, ensuring they deliver measurable and verified impacts. Established in 2003 by WWF and other 
                    international NGOs, Gold Standard aims to accelerate progress toward climate security and sustainable development by 
                    leveraging financial markets to support the most vulnerable communities.
                </p>
                <p className="data-text">
                    The organization offers the Gold Standard for the Global Goals, an impact standard recognized for its integrity across 
                    various sectors, including clean cooking, safe water access, natural climate solutions, renewable energy, and energy 
                    efficiency. This standard enables the certification of projects that contribute to both climate mitigation and the 
                    United Nations Sustainable Development Goals (SDGs).
                </p>
                <p className="data-text">
                    To date, Gold Standard has certified over 3,464 projects in 111 countries, resulting in the reduction or removal of 
                    371 million tonnes of CO₂ equivalent and creating approximately USD 56.89 billion in shared value.
                </p>
                <p className="data-text">
                    In addition to project certification, Gold Standard has introduced innovative frameworks such as the Pilot Policy 
                    Requirements and Procedures, which allow for the certification and issuance of carbon credits for emission reductions 
                    achieved through policies or regulations. This approach facilitates large-scale climate action by integrating carbon 
                    finance into policy implementation.
                </p>
                <p className="data-text">
                    Through its comprehensive standards and methodologies, Gold Standard ensures that climate and development interventions 
                    are not only effective in reducing emissions but also contribute positively to sustainable development, delivering real 
                    benefits to people and the planet.
                </p>
            </div>
        </div>
    );
}
