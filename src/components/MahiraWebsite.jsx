import React, { useState } from 'react';
import TheatricalCurtainIntro from './TheatricalCurtainIntro';
import GoldDustCanvas from './GoldDustCanvas';
import SearchPalette from './SearchPalette';
import MahiraHero from './MahiraHero';
import MahiraArchedCollection from './MahiraArchedCollection';
import MahiraInteractiveExplore from './MahiraInteractiveExplore';
import MahiraCraftSeal from './MahiraCraftSeal';
import MahiraEditorialStory from './MahiraEditorialStory';
import MahiraFooter from './MahiraFooter';
import { PROPERTIES, COMPANY_INFO, CURRENCIES } from '../data/properties';
import { formatCurrencyValue } from './PropertyCard';
import { Search, ChevronDown, Play, Phone, ArrowUpRight, Bookmark, Sparkles } from 'lucide-react';

export default function MahiraWebsite({ 
  currency, 
  setCurrency, 
  savedCount, 
  onOpenSaved, 
  onSelectProperty, 
  onOpenViewingModal 
}) {
  const [replayKey, setReplayKey] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [hoveredVenture, setHoveredVenture] = useState(PROPERTIES[0]);

  return (
    <div className="relative min-h-screen bg-[#060907] text-[#fbf1d3] font-sans selection:bg-[#c9a35f]/30 selection:text-[#fbf1d3]">
      
      {/* 1. THEATRICAL VELVET CURTAINS & ANAMORPHIC LENS FLARE INTRO */}
      <TheatricalCurtainIntro replayTrigger={replayKey} />

      {/* 2. FLOATING GOLD DUST & SPARKLE CANVAS */}
      <GoldDustCanvas />

      {/* 3. INSTANT COMMAND SEARCH PALETTE (CTRL+K) */}
      <SearchPalette
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectProperty={onSelectProperty}
        currency={currency}
      />

      {/* 4. MAHIRA-STYLE LUXURY HEADER WITH CENTER PINNED EMBLEM */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#060907]/90 backdrop-blur-xl border-b border-[#c9a35f]/25 py-3.5 px-6 sm:px-12 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Left Navigation Group */}
          <nav className="hidden lg:flex items-center gap-7 text-xs tracking-[0.2em] uppercase font-medium text-[#fbf1d3]/80">
            <a href="#hero" className="hover:text-[#e8c87a] transition-colors">Home</a>
            
            {/* Interactive Mega Menu */}
            <div
              className="relative py-2 group cursor-pointer"
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
            >
              <span className="hover:text-[#e8c87a] flex items-center gap-1 transition-colors">
                Ventures
                <ChevronDown className={`w-3 h-3 text-[#c9a35f] transition-transform ${megaMenuOpen ? 'rotate-180' : ''}`} />
              </span>

              {/* Mega Menu Dropdown */}
              {megaMenuOpen && (
                <div className="absolute top-full left-0 mt-3 w-[720px] rounded-3xl glass-mahira p-6 shadow-2xl border border-[#c9a35f]/40 grid grid-cols-12 gap-6 animate-fade-in z-50">
                  <div className="col-span-5 space-y-1.5 border-r border-white/10 pr-4">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#e8c87a] block mb-2">Venture Portfolios</span>
                    {PROPERTIES.slice(0, 6).map((item) => (
                      <button
                        key={item.id}
                        onMouseEnter={() => setHoveredVenture(item)}
                        onClick={() => {
                          setMegaMenuOpen(false);
                          onSelectProperty(item);
                        }}
                        className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs flex justify-between items-center transition-all ${
                          hoveredVenture.id === item.id
                            ? 'bg-[#c9a35f]/20 text-[#e8c87a] font-semibold border-l-2 border-[#e8c87a]'
                            : 'text-slate-300 hover:bg-white/5'
                        }`}
                      >
                        <span className="truncate">{item.title}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#e8c87a]" />
                      </button>
                    ))}
                  </div>

                  {/* Mega Menu Dynamic Live Preview Card */}
                  <div className="col-span-7 flex flex-col justify-between">
                    <div className="aspect-[16/10] rounded-2xl overflow-hidden relative bg-black border border-white/10">
                      <img
                        src={hoveredVenture.heroImage}
                        alt={hoveredVenture.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-black/85 backdrop-blur-md px-3 py-0.5 rounded-full text-[9px] text-[#e8c87a] border border-[#c9a35f]/40">
                        {hoveredVenture.tag}
                      </div>
                    </div>

                    <div className="mt-3 flex justify-between items-end">
                      <div>
                        <div className="text-[10px] text-slate-400 uppercase tracking-widest">{hoveredVenture.enclave}</div>
                        <h4 className="font-garamond text-xl text-white font-medium">{hoveredVenture.title}</h4>
                        <div className="text-[11px] text-emerald-400 mt-0.5">{hoveredVenture.plotSize} • {hoveredVenture.approval.split('/')[0]}</div>
                      </div>
                      <div className="font-serif text-lg font-bold text-[#e8c87a]">
                        {formatCurrencyValue(hoveredVenture.priceINR, currency)}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a href="#explore" className="hover:text-[#e8c87a] transition-colors">Masterplans</a>
            <a href="#craft" className="hover:text-[#e8c87a] transition-colors">Quality Seal</a>
            <a href="#storyEd" className="hover:text-[#e8c87a] transition-colors">Heritage</a>
          </nav>

          {/* Center Pinned Royal Emblem */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl border border-[#c9a35f]/50 bg-[#0d1510] flex items-center justify-center shadow-[0_0_20px_rgba(201,163,95,0.35)]">
              <span className="font-serif text-2xl font-bold gold-gradient-text tracking-wider">A</span>
            </div>
            <div>
              <span className="font-serif text-lg tracking-[0.22em] font-semibold text-white block leading-none">
                ABHISTA
              </span>
              <span className="text-[9px] tracking-[0.35em] text-[#e8c87a] uppercase font-light">
                Tradition Meets Tomorrow
              </span>
            </div>
          </div>

          {/* Right Action Icons & Controls */}
          <div className="flex items-center gap-3">
            
            {/* Quick Command Search */}
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2.5 rounded-full border border-white/10 bg-white/5 hover:border-[#c9a35f] text-slate-300 hover:text-white transition-all flex items-center gap-2"
              title="Search (Ctrl+K)"
            >
              <Search className="w-4 h-4 text-[#e8c87a]" />
              <span className="text-[10px] text-slate-400 font-mono hidden md:inline">Ctrl+K</span>
            </button>

            {/* Currency Selector */}
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="bg-[#0d1510] border border-[#c9a35f]/40 rounded-full px-3 py-1.5 text-xs text-[#fbf1d3] focus:outline-none focus:border-[#e8c87a] cursor-pointer"
            >
              <option value="INR">INR (₹)</option>
              <option value="USD">USD ($)</option>
              <option value="AED">AED (د.إ)</option>
              <option value="EUR">EUR (€)</option>
            </select>

            {/* Saved Shortlist Drawer Trigger */}
            <button
              onClick={onOpenSaved}
              className="relative p-2.5 rounded-full border border-white/10 bg-white/5 hover:border-[#c9a35f] text-[#fbf1d3] hover:text-[#e8c87a] transition-all"
              title="Saved Properties Shortlist"
            >
              <Bookmark className="w-4 h-4" />
              {savedCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#e8c87a] text-black font-bold text-[10px] rounded-full flex items-center justify-center animate-pulse">
                  {savedCount}
                </span>
              )}
            </button>

            {/* Replay Curtains Reveal Button */}
            <button
              onClick={() => setReplayKey((k) => k + 1)}
              className="px-3.5 py-1.5 rounded-full border border-[#c9a35f]/50 bg-[#c9a35f]/15 hover:bg-[#c9a35f]/25 text-[#e8c87a] text-[10px] uppercase tracking-wider font-semibold flex items-center gap-1.5 transition-all shadow-md hidden sm:inline-flex"
              title="Replay Velvet Curtains Opening"
            >
              <Play className="w-3 h-3 fill-current" />
              <span>Curtains</span>
            </button>

            {/* Direct Book Site Visit */}
            <button
              onClick={() => onOpenViewingModal(null)}
              className="mahira-btn rounded-full text-black hidden sm:inline-flex"
            >
              <span className="btn-fill"></span>
              <span>Site Visit</span>
            </button>
          </div>

        </div>
      </header>

      {/* 5. MAHIRA SIGNATURE HERO */}
      <div id="hero">
        <MahiraHero
          onSelectProperty={onSelectProperty}
          onOpenViewingModal={onOpenViewingModal}
          currency={currency}
        />
      </div>

      {/* 6. MAHIRA ARCHED PALACE CARDS COLLECTION */}
      <MahiraArchedCollection
        onSelectProperty={onSelectProperty}
        onOpenViewingModal={onOpenViewingModal}
        currency={currency}
      />

      {/* 7. INTERACTIVE CAD MASTERPLAN & PLOT EXPLORER */}
      <MahiraInteractiveExplore
        onSelectProperty={onSelectProperty}
        onOpenViewingModal={onOpenViewingModal}
        currency={currency}
      />

      {/* 8. MAHIRA CRAFTSMANSHIP & QUALITY SEAL */}
      <MahiraCraftSeal />

      {/* 9. MAHIRA EDITORIAL BRAND STORY */}
      <MahiraEditorialStory
        onOpenViewingModal={onOpenViewingModal}
      />

      {/* 10. MAHIRA MULTI-COLUMN LUXURY FOOTER */}
      <MahiraFooter
        onOpenViewingModal={onOpenViewingModal}
      />

    </div>
  );
}
