import './App.css';
import NavigationBar from './components/NavigationBar';
import ConferenceOverview from './components/sub-nav-components/ConferenceOverview';
import Registration from './components/sub-nav-components/Registration';
import TravelInformation from './components/sub-nav-components/TravelInformation';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import BottomNav from './components/BottomNav';

function App() {
  return (
    <div>
      <Router>
      <NavigationBar />
        <Routes>
          <Route path="/" element={<ConferenceOverview/>} />
          <Route path="/registration" element={<Registration/>} />
          <Route path="/travelInfo" element={<TravelInformation/>} />
        </Routes>
        <BottomNav/>
      </Router>
    </div>
  );
}

export default App;
