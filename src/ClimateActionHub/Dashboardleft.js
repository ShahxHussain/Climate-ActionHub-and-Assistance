import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5"; // Importing Back Icon
import "./Assets/CSS/Dashboardleft.css";

export function Dashboardleft() {

    return (
        <aside className="sidebar">
            {/* Back Button */}
            <Link to='/selectoptions' style={{textDecoration:'none'}}>
            <button className="back-button" >
                <IoArrowBack className="back-icon" /> Back
            </button>
            </Link>
            <h2>CLIMATE CHANGE</h2>
            <ul>
                <li><Link to='/dashboard/movements'>🏠 Movements</Link></li>
                <li><Link to='/dashboard/dataandmetrics'>📊 Data & Metrics</Link></li>
                <li><Link to='/dashboard/energy'>⚡ Energy</Link></li>
                <li><Link to="/dashboard/food">🍽️ Food</Link></li>
                <li><Link to="/dashboard/landuse">🌿 Land Use</Link></li>
                <li><Link to='/dashboard/buildingandcities'>🏢 Buildings & Cities</Link></li>
                <li><Link to='/dashboard/transport'>🚗 Transport</Link></li>
                <li><Link to='/dashboard/materials'>🏗️ Materials</Link></li>
                <li><Link to='/dashboard/emergingsolutions'>🌍 Emerging Solutions</Link></li>
                <li><Link to='/dashboard/climatechangeandsociety'>🗣️ Climate & Society</Link></li>
                <li><Link to='/dashboard/fundings'>💰 Funding</Link></li>
            </ul>
        </aside>
    );
}
