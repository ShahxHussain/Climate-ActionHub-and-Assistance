import { CardsPage } from "./CardsPage";
import { LandingPage } from "./LandingPage";
import {Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Chatboty} from './ClimateAssitant/Chatbot';
function App() {
  return (
    <>
   
  <Routes>
  <Route path='/' element={<LandingPage/>}></Route>
    <Route path='/selectoptions' element={<CardsPage/>}></Route>
    <Route path='/climateassistant' element={<Chatboty/>}></Route>

  </Routes>
    </>
  );
}

export default App;
