import './App.scss';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Qualities from './components/Qualities/Qualities';
import Footer from './components/Footer/Footer';
import SubscribeEmail from './components/SubscribeEmail/SubscribeEmail';
import Navbar from './components/Navbar/Navbar';
import {Routes, Route, BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    

      {/* <Navbar/> */}
      <Home/>
      <Services/>
      <Qualities/>
      <SubscribeEmail/>
      {/* <Footer/> */}

      
    </div>
  );
}

export default App;
