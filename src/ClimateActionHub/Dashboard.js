import { Dashboardleft } from "./Dashboardleft";
import { Dashboardright } from "./Dashboardright";
import "./Assets/CSS/Dashboard.css";

export function Dashboard() {
  return (
    <>
      {/* <div className="dashboard-container">
        <div className="sidebar-container">
          <Dashboardleft />
        </div>
        <div className="content-container">
          <Dashboardright />
        </div>
      </div> */}

      <div className="dashboardmain">
        <div className="col-md-2" >
          <Dashboardleft/>
        </div>
        <div className="col-md-10" >
          <Dashboardright/>
        </div>
      </div>
    </>
  );
}
