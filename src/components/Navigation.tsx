import React, { useState, useEffect } from 'react';
import { ViewState } from '../types';
import { Plus } from 'lucide-react';

interface NavigationProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, setView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const getLinkClass = (view: ViewState) => {
    // Desktop minimal link styles
    const baseClass = "cursor-pointer text-sm font-semibold uppercase tracking-widest transition-colors duration-300";
    return currentView === view 
      ? `${baseClass} text-white` 
      : `${baseClass} text-neutral-500 hover:text-white`;
  };

  const getMobileLinkClass = (view: ViewState) => {
    // Overlay menu link styles (Larger text for touch targets)
    const baseClass = "cursor-pointer text-4xl md:text-5xl font-light uppercase tracking-[0.2em] transition-all duration-300";
    return currentView === view 
      ? `${baseClass} text-white` 
      : `${baseClass} text-neutral-600 hover:text-neutral-300`;
  };

  const handleNavClick = (view: ViewState) => {
    setView(view);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Navbar Container */}
      <nav className="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-6 md:py-8 bg-transparent">
        
        {/* Logo - Always visible, high z-index to sit on top of overlay */}
        <div 
          onClick={() => handleNavClick(ViewState.HOME)} 
          className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 cursor-pointer group z-50"
        >
          {/* Name */}
          <span className="text-xl md:text-3xl font-black tracking-[0.2em] text-white/50 group-hover:text-white transition-colors uppercase whitespace-nowrap">
            Joy Zhang
          </span>
          
          {/* Subtitle */}
          <span className="text-[10px] md:text-xs font-medium tracking-[0.2em] text-neutral-400 group-hover:text-neutral-200 transition-colors uppercase whitespace-nowrap">
            Theater Artist
          </span>
        </div>
        
        {/* Desktop Links - Hidden on screens smaller than LG (1024px) */}
        <ul className="hidden lg:flex gap-12">
          <li className={getLinkClass(ViewState.PORTFOLIO)} onClick={() => setView(ViewState.PORTFOLIO)}>Portfolio</li>
          <li className={getLinkClass(ViewState.ABOUT)} onClick={() => setView(ViewState.ABOUT)}>About</li>
          <li className={getLinkClass(ViewState.CONTACT)} onClick={() => setView(ViewState.CONTACT)}>Contact</li>
        </ul>

        {/* Tablet/Mobile Menu Toggle (Plus Icon) - Visible on screens smaller than LG */}
        <button 
          className="lg:hidden z-50 text-white/50 p-2 hover:text-white transition-colors focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className={`transition-transform duration-500 ease-in-out ${isMenuOpen ? 'rotate-45' : 'rotate-0'}`}>
            <Plus size={32} strokeWidth={1} />
          </div>
        </button>
      </nav>

      {/* Full Screen Overlay Menu */}
      <div 
        className={`fixed inset-0 z-40 bg-[#1a1a1a] flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <ul className="flex flex-col gap-12 text-center">
          <li 
            className={getMobileLinkClass(ViewState.PORTFOLIO)} 
            onClick={() => handleNavClick(ViewState.PORTFOLIO)}
          >
            Portfolio
          </li>
          <li 
            className={getMobileLinkClass(ViewState.ABOUT)} 
            onClick={() => handleNavClick(ViewState.ABOUT)}
          >
            About
          </li>
          <li 
            className={getMobileLinkClass(ViewState.CONTACT)} 
            onClick={() => handleNavClick(ViewState.CONTACT)}
          >
            Contact
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navigation;