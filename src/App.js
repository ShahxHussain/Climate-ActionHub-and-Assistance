import { CardsPage } from "./CardsPage";
import { LandingPage } from "./LandingPage";
import {Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Chatboty} from './ClimateAssitant/Chatbot';
import Routing from './ClimateRefugee/Earth';
import {Dashboard} from './ClimateActionHub/Dashboard'
import ProfileCard from "./Aboutus/Profilecards";
import "@fortawesome/fontawesome-free/css/all.min.css";
import DeepSea from "./DeepSeekandAquaBodies/DeepSea";
function App() {
  return (
    <>
   
  <Routes>
  <Route path='/' element={<LandingPage/>}></Route>
    <Route path='/selectoptions' element={<CardsPage/>}></Route>
    <Route path='/climateassistant' element={<Chatboty/>}></Route>
    <Route path='/climaterefuge' element={<Routing/>}></Route>
    <Route path='/dashboard/*' element={<Dashboard/>}></Route>
    <Route path='/aboutus' element={<ProfileCard/>}></Route>
    <Route path='/deepseaandaquabodies' element={<DeepSea/>}></Route>

  </Routes>
    </>
  );
}

export default App;
