import './App.css';
import NavigationBar from './components/NavigationBar';
import ConferenceOverview from './components/sub-nav-components/ConferenceOverview';
import Registration from './components/sub-nav-components/Registration';
import TravelInformation from './components/sub-nav-components/TravelInformation';

function App() {
  return (
    <div>
     <NavigationBar/>
     {/* <ConferenceOverview/> */}
     {/* <Registration/> */}
     <TravelInformation/>
    </div>
  );
}

export default App;
