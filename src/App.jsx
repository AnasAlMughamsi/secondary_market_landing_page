import './App.scss';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Qualities from './components/Qualities/Qualities';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Home/>
      <Services/>
      <Qualities/>
      <Footer/>
    </div>
  );
}

export default App;
