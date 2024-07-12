import logo from './logo.svg';
import './App.css';
import HomeBanner from './components/HomeBanner';
import Header from './components/Header';
import Projects from './components/projects';
import PortfolioSkills from './components/PortfolioSkills';

function App() {
  return (
    <div className="App">
    <Header />
    <HomeBanner />
    <Projects />
    <PortfolioSkills />
    </div>
  );
}

export default App;
