import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import Login from './components/login/login';
import CreateCampaign from './components/createCampaign/createCampaign';
import CampaignPage from './components/campaignPage/campaignPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/createCampaign" element={<CreateCampaign />} />
        <Route path="/campaignPage" element={<CampaignPage />} />
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //  <Home/>
    // </div>
  );
}

export default App;
