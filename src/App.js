import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Faqs from './pages/Faqs';
import ScrollToTop from './components/ScrollToTop';
import Contact from './pages/Contact';
import Home from './pages/Home';
import About from './pages/About';
import HowItWorks from './pages/HowItWorks';

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
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
