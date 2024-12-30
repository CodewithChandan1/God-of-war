
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
// import Realms from './pages/Realms';
// import Combat from './pages/Combat';
// import Media from './pages/Media';
import Privacy from './pages/legal/Privacy';
import Terms from './pages/legal/Terms';
import FAQ from './pages/support/FAQ';
import Support from './pages/support/Support';
import HelpCenter from './pages/support/HelpCenter';
import About from './pages/About';
import HowItWorks from './pages/HowItWorks';
import Contact from './pages/Contact';
import CharacterShowcase from './components/home/CharacterShowcase';
import FeaturedRealms from './components/home/FeaturedRealms';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#111] text-white flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/realms" element={<FeaturedRealms />} />
            <Route path="/characters" element={<CharacterShowcase />} />
            {/* <Route path="/combat" element={<Combat />} /> */}
            {/* <Route path="/media" element={<Media />} /> */}
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/support" element={<Support />} />
            <Route path="/help" element={<HelpCenter />} />
            <Route path="/about" element={<About />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;