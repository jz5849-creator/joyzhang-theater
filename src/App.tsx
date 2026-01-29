import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Works from './components/Works';
import About from './components/About';
import Contact from './components/Contact';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);

  const renderView = () => {
    switch (currentView) {
      case ViewState.HOME:
        return (
          <>
            <Hero />
            {/* Works section rendered directly below Hero for "roll down" experience */}
            <div id="portfolio">
              {/* Show 8 featured items, 2 per row, with "View All" button */}
              <Works 
                limit={8} 
                showTitle={false} 
                onViewAll={() => {
                  setCurrentView(ViewState.PORTFOLIO);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }} 
              />
            </div>
          </>
        );
      case ViewState.PORTFOLIO:
        // Show all items (3 per row) and the title
        return <Works />;
      case ViewState.ABOUT:
        return <About />;
      case ViewState.CONTACT:
        return <Contact />;
      default:
        return (
          <>
            <Hero />
            <Works />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#1F1F1F] font-sans selection:bg-neutral-600 text-neutral-200">
      <Navigation currentView={currentView} setView={setCurrentView} />
      
      <main className="fade-in">
        {renderView()}
      </main>
    </div>
  );
};

export default App;