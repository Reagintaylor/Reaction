import header from './header.gif';
import './App.css';
// import About from './components/About'
// import Contact from './components/Contact'
// import NavTabs from './components/NavTabs'
// import Home from './components/Home'
import PortfolioContainer from './components/PortfolioContainer';

function App() {
  return (
    <div className="App">
      
        <img src={header} className="App-logo" alt="header" />
        {/* <NavTabs /> */}
        <PortfolioContainer />
    </div>
  );
}

export default App;
