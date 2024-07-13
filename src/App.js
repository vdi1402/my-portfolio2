import logo from './logo.svg';
import './App.css';
import HomeBanner from './components/HomeBanner';
import Header from './components/Header';
import Projects from './components/projects';
import PortfolioSkills from './components/PortfolioSkills';
import ContactUs from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Header />
    <HomeBanner />
    <Projects />
    <PortfolioSkills />
    <ContactUs />
    <Footer />
    </div>
  );
}

export default App;
