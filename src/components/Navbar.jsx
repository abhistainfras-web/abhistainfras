import React, { useState, useEffect } from 'react';
import { Bookmark, Phone, Compass, Shield, Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { CURRENCIES, COMPANY_INFO } from '../data/properties';

export default function Navbar({ 
  currentCurrency, 
  setCurrentCurrency, 
  savedCount, 
  onOpenSaved, 
  onOpenViewingModal 
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-obsidian-950/90 backdrop-blur-xl border-b border-gold-500/20 py-3 shadow-2xl shadow-black/80' 
          : 'bg-gradient-to-b from-black/85 via-black/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl border border-gold-400/40 bg-obsidian-900/90 flex items-center justify-center transition-all duration-300 group-hover:border-gold-400 group-hover:shadow-[0_0_15px_rgba(197,160,89,0.35)]">
              <span className="font-serif text-xl font-bold gold-gradient-text tracking-wider">A</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg tracking-[0.2em] font-semibold text-slate-100 group-hover:text-gold-200 transition-colors">
                ABHISTA
              </span>
              <span className="text-[10px] tracking-[0.3em] text-gold-400/90 uppercase font-light -mt-0.5">
                Infra’s & Estates
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs tracking-[0.16em] uppercase font-medium text-slate-300">
            <a href="#collection" className="hover:text-gold-300 transition-colors py-1 relative group">
              Ventures Portfolio
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#investor-intelligence" className="hover:text-gold-300 transition-colors py-1 relative group">
              ROI Modeling
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#prime-hubs" className="hover:text-gold-300 transition-colors py-1 relative group">
              Growth Hubs
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#concierge" className="hover:text-gold-300 transition-colors py-1 relative group">
              About Abhista
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="tel:+917075528334" className="text-gold-400 hover:text-gold-200 transition-colors py-1 flex items-center gap-1.5 font-semibold">
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              +91 70755 28334
            </a>
          </nav>

          {/* Right Action Icons & CTA */}
          <div className="hidden sm:flex items-center gap-4">
            
            {/* Currency Selector */}
            <div className="relative">
              <button 
                onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:border-gold-400/40 text-xs text-slate-300 hover:text-white transition-all"
              >
                <span>{CURRENCIES[currentCurrency].symbol}</span>
                <span className="text-[11px] font-medium">{currentCurrency}</span>
                <ChevronDown className={`w-3 h-3 text-gold-400 transition-transform ${currencyDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {currencyDropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 rounded-xl glass-panel-gold py-1.5 shadow-2xl z-50">
                  {Object.keys(CURRENCIES).map((curr) => (
                    <button
                      key={curr}
                      onClick={() => {
                        setCurrentCurrency(curr);
                        setCurrencyDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-1.5 text-xs transition-colors flex items-center justify-between ${
                        currentCurrency === curr ? 'text-gold-300 bg-gold-500/15 font-semibold' : 'text-slate-300 hover:bg-white/5'
                      }`}
                    >
                      <span>{CURRENCIES[curr].label}</span>
                      {currentCurrency === curr && <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Saved Portfolio Drawer Trigger */}
            <button 
              onClick={onOpenSaved}
              className="relative p-2.5 rounded-full border border-white/10 bg-white/5 hover:border-gold-400/50 hover:bg-gold-500/10 text-slate-200 hover:text-gold-300 transition-all duration-300"
              title="Saved Properties Shortlist"
            >
              <Bookmark className="w-4 h-4" />
              {savedCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold-500 text-obsidian-950 font-bold text-[10px] rounded-full flex items-center justify-center animate-pulse">
                  {savedCount}
                </span>
              )}
            </button>

            {/* Direct Consultation / Site Visit CTA */}
            <button
              onClick={() => onOpenViewingModal(null)}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full overflow-hidden text-xs uppercase tracking-wider font-semibold text-obsidian-950 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-gold-500/20"
            >
              <span className="absolute inset-0 gold-gradient-bg transition-opacity group-hover:opacity-90"></span>
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-obsidian-950" />
                Book Site Visit
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button 
              onClick={onOpenSaved}
              className="relative p-2 rounded-full border border-white/10 bg-white/5 text-slate-200"
            >
              <Bookmark className="w-4 h-4" />
              {savedCount > 0 && (
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-gold-500 text-obsidian-950 font-bold text-[9px] rounded-full flex items-center justify-center">
                  {savedCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-200 hover:text-gold-300"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-t border-white/10 px-6 py-6 mt-3 space-y-4 animate-fade-in">
          <nav className="flex flex-col space-y-3 text-sm tracking-wider uppercase font-medium">
            <a 
              href="#collection" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-gold-300 py-1"
            >
              Ventures Portfolio
            </a>
            <a 
              href="#investor-intelligence" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-gold-300 py-1"
            >
              ROI Modeling
            </a>
            <a 
              href="#prime-hubs" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-gold-300 py-1"
            >
              Growth Hubs
            </a>
            <a 
              href="#concierge" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-gold-300 py-1"
            >
              About Abhista
            </a>
            <a 
              href="tel:+917075528334" 
              className="text-gold-400 hover:text-gold-200 py-1 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              +91 70755 28334
            </a>
          </nav>
          
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400">Display Currency</span>
              <div className="flex gap-2">
                {Object.keys(CURRENCIES).map((c) => (
                  <button
                    key={c}
                    onClick={() => setCurrentCurrency(c)}
                    className={`px-2.5 py-1 text-xs rounded ${currentCurrency === c ? 'bg-gold-500 text-obsidian-950 font-bold' : 'bg-white/5 text-slate-300'}`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenViewingModal(null);
              }}
              className="w-full py-3 rounded-xl gold-gradient-bg text-obsidian-950 font-semibold text-xs tracking-widest uppercase flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Schedule Free Site Visit
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
