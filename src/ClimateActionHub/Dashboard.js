import { Dashboardleft } from "./Dashboardleft";
import { Dashboardright } from "./Dashboardright";
import "./Assets/CSS/Dashboard.css";

export function Dashboard() {
  return (
    
          <div className="dashboard-container">
            {/* Sidebar */}
            <div className="sidebar-container">
              <Dashboardleft />
            </div>
      
            {/* Main Content */}
            <div className="content-container">
              <Dashboardright />
            </div>
          </div>
        );
      }
      