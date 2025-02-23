import React from 'react';
import funding from './Assets/Images/funding.jpg';
import './Assets/CSS/funding.css';

export function Funding() {
    return (
        <div className="funding-container">
            <img src={funding} alt="Funding" className="funding-image" />
            <br/>            <br/>            
            
            <div className="funding-section">
                <h1>Fundings</h1>
                <p>
                    Innovative climate solutions require financial support to scale and drive impact. Funding sources such as grants, venture capital, 
                    government incentives, and crowdfunding provide essential resources for climate-focused projects.
                </p>
                <p>
                    Organizations like the Green Climate Fund and Breakthrough Energy Ventures support startups, while government subsidies and corporate 
                    investments accelerate sustainability efforts. Crowdfunding platforms also empower communities to back innovative climate technologies.
                </p>
                <p>
                    By leveraging these financial opportunities, developers and entrepreneurs can bring transformative climate solutions to life, helping 
                    to combat global warming and build a more sustainable future.
                </p>
            </div>

            <div className="funding-section">
                <h1>Microsoft AI for Earth</h1>
                <p>
                    Microsoft AI for Earth is a program that provides funding, cloud computing resources, and AI tools to support 
                    innovative sustainability projects. By leveraging Microsoft's AI capabilities, researchers and organizations can enhance their 
                    environmental efforts in areas such as climate resilience, biodiversity conservation, and sustainable agriculture.
                </p>
                <p>
                    The program also offers networking opportunities and public recognition, helping climate innovators scale their impact. Through these 
                    grants and technological support, AI for Earth accelerates solutions that address global environmental challenges, making it a key 
                    resource for those driving climate action.
                </p>
            </div>

            <div className="funding-section">
                <h1>Y Combinator</h1>
                <p>
                    Y Combinator plays a crucial role in accelerating climate innovation by funding startups focused on breakthrough technologies like carbon removal. 
                </p>
                <p>
                    Through its investment, mentorship, and networking opportunities, it empowers entrepreneurs to develop scalable solutions that address climate change.
                </p>
                <p>
                    By supporting frontier technologies, Y Combinator fosters a new wave of climate-tech startups aiming to reduce emissions, capture carbon, and create a sustainable future.
                </p>
            </div>

            <div className="funding-section">
                <h1>Hack4Climate</h1>
                <p>
                    Hack4Climate is a five-year innovation program (2019-2022) supported by the UNFCCC, aiming to accelerate disruptive and tangible climate solutions at scale. 
                </p>
                <p>
                    Focusing on the intersection of climate action and emerging technologies—such as Distributed Ledger Technology (DLT), Internet of Things (IoT), 
                    and Artificial Intelligence (AI)—Hack4Climate mobilizes a global community of developers and climate experts.
                </p>
                <p>
                    By fostering collaboration and leveraging technological innovation, the program seeks to implement the Paris Climate Agreement effectively and drive exponential climate action.
                </p>
            </div>

            <div className="funding-section">
                <h1>Climate Crisis Collective</h1>
                <p>
                    Climate Crisis Collective is a dynamic, community-driven initiative dedicated to mobilizing the tech industry to address the urgent challenges of climate change.
                </p>
                <p>
                    By fostering collaboration among developers, entrepreneurs, and industry leaders, it accelerates the creation of innovative and scalable solutions for a sustainable future.
                </p>
                <p>
                    The initiative not only raises awareness but also provides funding, mentorship, and networking opportunities, empowering changemakers to turn groundbreaking ideas into real-world impact.
                </p>
                <p>
                    Through strategic partnerships and cutting-edge technology, the Climate Crisis Collective drives meaningful action in the fight against global warming.
                </p>
            </div>
        </div>
    );
}
