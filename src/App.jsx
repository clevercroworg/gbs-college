import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Legacy from './components/Legacy';
import About from './components/About';
import MissionVision from './components/MissionVision';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    switch (currentPath) {
      case '#/privacy-policy':
        return <PrivacyPolicy />;
      case '#/terms-and-conditions':
        return <TermsAndConditions />;
      default:
        return (
          <>
            <Hero />
            <Programs />
            <Legacy />
            <About />
            <MissionVision />
            <Facilities />
            <Gallery />
            <CTABanner />
          </>
        );
    }
  };

  return (
    <div className="font-sans antialiased text-slate-800 bg-white selection:bg-bgs-red/20">
      {/* Header is persistent across pages */}
      <Header />
      
      <main>
        {renderContent()}
      </main>
      
      {/* Footer is persistent across pages */}
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
