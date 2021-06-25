import './App.css';
import NavigationBar from './components/NavigationBar';
import ConferenceOverview from './components/sub-nav-components/ConferenceOverview';
import Registration from './components/sub-nav-components/Registration';

function App() {
  return (
    <div>
     <NavigationBar/>
     {/* <ConferenceOverview/> */}
     <Registration/>
    </div>
  );
}

export default App;
