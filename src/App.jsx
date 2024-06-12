
import Header from "./components/Header.jsx";
import Features from "./components/Features.jsx";
import DigitalPlatform from './components/DigitalPlatform.jsx';
import BusinessSizes from './components/BusinessSizes.jsx';
import PersonalBanking from './components/PersonalBanking.jsx';
import Testimonials from './components/Testimonials.jsx';
import FAQ from './components/FAQ.jsx';
import Newsletter from './components/Newsletter.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Features />
      <DigitalPlatform />
      <BusinessSizes />
      <PersonalBanking />
      <Testimonials />
      <FAQ />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
