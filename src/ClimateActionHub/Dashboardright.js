import { Route, Routes } from "react-router-dom";
import { Movements } from "./Movements";
import { Dataandmetrics} from "./Datametrics";
import { Energy } from "./Energy";
import { Food } from "./Food";
import { Landuse } from "./Landuse";
import { Buildingandcities } from "./Buildingcities";
import { Transport } from "./Transport";
import { Material } from "./Material";
import { Emergingsolutions } from "./Emergingsolutions";
import { ClimatechangeandSociety } from "./Climatechange";
import { Funding } from "./Funding";
export function Dashboardright(){
    return(
        <>
        <Routes>
        <Route path="/movements" element={<Movements/>}/>
        <Route path="/dataandmetrics" element={<Dataandmetrics/>}/>
        <Route path="/energy" element={<Energy/>}/>
        <Route path="/food" element={<Food/>}/>
        <Route path="/landuse" element={<Landuse/>}/>
        <Route path="/buildingandcities" element={<Buildingandcities/>}/>
        <Route path="/transport" element={<Transport/>}/>
        <Route path="/materials" element={<Material/>}/>
        <Route path="/emergingsolutions" element={<Emergingsolutions/>}/>
        <Route path="/climatechangeandsociety" element={<ClimatechangeandSociety/>}/>
        <Route path="/fundings" element={<Funding/>}/>
        </Routes>
        </>
    )
}