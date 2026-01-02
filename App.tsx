
import React, { useState, createContext, useContext } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import GeminiChat from './components/GeminiChat';
import ApiKeyGuard from './components/ApiKeyGuard';

type Language = 'EN' | 'ZU';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({ lang: 'EN', setLang: () => {} });
export const useLanguage = () => useContext(LanguageContext);

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('EN');

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <ApiKeyGuard>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <GeminiChat />
          </div>
        </Router>
      </ApiKeyGuard>
    </LanguageContext.Provider>
  );
};

export default App;
