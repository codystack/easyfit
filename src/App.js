import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Faqs from './pages/Faqs';
import ScrollToTop from './components/ScrollToTop';
import Contact from './pages/Contact';
import Home from './pages/Home';
import About from './pages/About';
import HowItWorks from './pages/HowItWorks';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/how-it-works' element={<HowItWorks />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/faq' element={<Faqs />} />
            <Route path='/terms' element={<Terms />} />
            <Route path='/privacy' element={<PrivacyPolicy />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
