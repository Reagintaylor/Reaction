import header from './header.gif';
import './App.css';
import Footer from './components/Footer'
import PortfolioContainer from './components/PortfolioContainer';

function App() {
  return (
    <div className="App">
      
        <img src={header} className="App-logo" alt="header" />
        
        <PortfolioContainer />
        <br/>
        <Footer />
    </div>
  );
}

export default App;
