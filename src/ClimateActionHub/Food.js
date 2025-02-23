import food from './Assets/Images/food.jpg';
import './Assets/CSS/food.css';

export function Food() {
    return (
        <div className="food-container">
            <img src={food} alt="Food and Climate Impact" className="food-image" />
            <div className="food-content">
                <h1 className="food-title">Food and Climate Impact</h1>
                <p className="food-text">
                    Agriculture contributes significantly to global greenhouse gas emissions, with crop and livestock 
                    production accounting for around 12% of total emissions, while land clearing—primarily for farming—adds 
                    another 12% (IPCC, 2014).
                </p>
                <p className="food-text">
                    To mitigate these impacts, supply-side solutions like precision agriculture enhance efficiency and reduce 
                    emissions from farming practices. On the demand side, adopting a plant-based diet and minimizing food waste 
                    can significantly lower the need for land conversion, preserving ecosystems and reducing overall emissions.
                </p>
                <p className="food-text">
                    By combining these strategies, the agricultural sector can move towards a more sustainable and 
                    climate-friendly future.
                </p>
            </div>

            <div className="section">
                <h2 className="section-title">Microsoft's Planetary Computer</h2>
                <p className="section-text">
                    Microsoft's Planetary Computer is a comprehensive environmental data platform designed to support 
                    sustainability decision-making. It offers a vast catalog of global environmental datasets, accessible 
                    through intuitive APIs, enabling users to analyze and visualize data pertinent to climate change, 
                    biodiversity, and conservation efforts.
                </p>
                <p className="section-text">
                    While the Planetary Computer provides valuable resources for environmental analysis, it does not specifically 
                    focus on agriculture or offer tools tailored for optimizing crop production. For agricultural applications, 
                    Microsoft's FarmBeats platform is more relevant, as it leverages data from sensors, drones, and satellite 
                    imagery, combined with artificial intelligence, to assist farmers in enhancing crop yields and implementing 
                    data-driven farming practices.
                </p>
            </div>

            <div className="section">
                <h2 className="section-title">foodsharing.de – Combating Food Waste</h2>
                <p className="section-text">
                    foodsharing.de is a free web platform dedicated to combating food waste by facilitating the sharing of 
                    surplus food among individuals and organizations in Germany, Austria, and Switzerland.
                </p>
                <p className="section-text">
                    Launched on December 12, 2012, and operated by the non-profit organization foodsharing e.V., the platform 
                    connects over 605,000 registered users, including more than 167,000 voluntary "Foodsavers," who collect and 
                    distribute excess food from retailers and producers.
                </p>
                <p className="section-text">
                    Users can offer or claim food through "Essenskörbe" (food baskets) and utilize over 1,325 public shelves and 
                    refrigerators, known as "Fairteiler," to share food within their communities.
                </p>
                <p className="section-text">
                    This initiative not only reduces food waste but also raises awareness about sustainable consumption and fosters 
                    a culture of sharing.
                </p>
            </div>

            <div className="section">
                <h2 className="section-title">FHI 360's CHAI Project in Uganda</h2>
                <p className="section-text">
                    FHI 360 has implemented the Climate Change Adaptation and ICT (CHAI) project in Uganda, utilizing information 
                    and communication technology tools to support farmers affected by climate change.
                </p>
                <p className="section-text">
                    Through this initiative, FHI 360 collects, analyzes, and disseminates vital information—including seasonal 
                    weather forecasts, location-specific agricultural advisories, and livestock and crop market data—to Ugandan 
                    farmers.
                </p>
                <p className="section-text">
                    By providing timely and relevant insights, the CHAI project enables farmers to minimize crop loss and damage, 
                    enhancing their resilience to the impacts of global warming.
                </p>
            </div>

            <div className="section">
                <h2 className="section-title">ICTs for Small-Scale Farmers</h2>
                <p className="section-text">
                    ICTs for Small-Scale Farmers is an initiative developed by the International Center for Tropical Agriculture 
                    (CIAT) in partnership with the CGIAR Research Program on Climate Change, Agriculture and Food Security (CCAFS), 
                    along with over ten public and private organizations from Colombia and Honduras.
                </p>
                <p className="section-text">
                    This project aims to assist smallholder farmers in these countries in adapting to climate variability by 
                    providing them with timely and relevant information. Through a suite of Information and Communication 
                    Technology (ICT) tools and applications, technicians from farmer organizations collect, analyze, and 
                    disseminate data on seasonal climate conditions and crop management.
                </p>
                <p className="section-text">
                    This enables farmers to make informed decisions regarding planting schedules, crop selection, and resource 
                    utilization, thereby enhancing agricultural productivity, food security, and sustainability.
                </p>
                <p className="section-text">
                    To date, approximately 300,000 farmers cultivating crops such as maize, beans, rice, fruit trees, and coffee 
                    have benefited from this climate and crop management information.
                </p>
            </div>
        </div>
    );
}
