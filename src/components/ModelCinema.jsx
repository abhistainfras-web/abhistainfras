import React, { useState, useEffect, useRef } from 'react';
import TheatricalCurtainIntro from './TheatricalCurtainIntro';
import GoldDustCanvas from './GoldDustCanvas';
import SearchPalette from './SearchPalette';
import { PROPERTIES, COMPANY_INFO } from '../data/properties';
import { formatCurrencyValue } from './PropertyCard';
import { Crown, Sparkles, Search, ArrowUpRight, Phone, Download, Calendar, Play, ChevronRight, Layers, ShieldCheck, Check } from 'lucide-react';

export default function ModelCinema({ currency, onSelectProperty, onOpenViewingModal }) {
  const [replayKey, setReplayKey] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);
  const [hoveredMegaVenture, setHoveredMegaVenture] = useState(PROPERTIES[0]);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  const heroVentures = PROPERTIES.slice(0, 4);

  // Auto-cycle hero every 7 seconds with progress bar
  useEffect(() => {
    setProgress(0);
    const intervalTime = 100;
    const totalDuration = 7000;
    const increment = (intervalTime / totalDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setHeroIndex((idx) => (idx + 1) % heroVentures.length);
          return 0;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [heroIndex, heroVentures.length]);

  const activeHero = heroVentures[heroIndex];

  return (
    <div className="bg-[#080b11] text-slate-100 font-sans min-h-screen relative overflow-x-hidden selection:bg-gold-500/30 selection:text-gold-200">
      
      {/* 1. THEATRICAL CINEMA VELVET CURTAIN & LENS FLARE INTRO */}
      <TheatricalCurtainIntro replayTrigger={replayKey} />

      {/* 2. FLOATING GOLD DUST & SPARKLE CANVAS */}
      <GoldDustCanvas />

      {/* 3. SEARCH COMMAND PALETTE (CTRL+K) */}
      <SearchPalette
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectProperty={onSelectProperty}
        currency={currency}
      />

      {/* 4. LUXURY CINEMA HEADER WITH MEGA MENU */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#080b11]/85 backdrop-blur-xl border-b border-gold-400/25 py-4 px-6 sm:px-12 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Brand Logo & Emblem */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl border border-gold-400/50 bg-[#0f1422] flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.35)]">
              <span className="font-serif text-2xl font-bold gold-gradient-text tracking-wider">A</span>
            </div>
            <div>
              <span className="font-serif text-lg tracking-[0.25em] font-semibold text-white block leading-none">
                ABHISTA
              </span>
              <span className="text-[9px] tracking-[0.35em] text-gold-400 uppercase font-light">
                Cinema Select • Est. 2016
              </span>
            </div>
          </div>

          {/* Desktop Navigation with Mega Menu Trigger */}
          <nav className="hidden lg:flex items-center gap-8 text-xs tracking-[0.2em] uppercase font-medium text-slate-300">
            <div
              className="relative py-2 group cursor-pointer"
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
            >
              <span className="text-white hover:text-gold-300 flex items-center gap-1">
                Ventures Fleet
                <ChevronRight className={`w-3 h-3 text-gold-400 transition-transform ${megaMenuOpen ? 'rotate-90' : ''}`} />
              </span>

              {/* Interactive Mega Menu Box */}
              {megaMenuOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[720px] rounded-2xl glass-panel-gold p-6 shadow-2xl border border-gold-400/40 grid grid-cols-12 gap-6 animate-fade-in z-50">
                  <div className="col-span-5 space-y-1.5 border-r border-white/10 pr-4">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-gold-400 block mb-2">Select Venture</span>
                    {PROPERTIES.slice(0, 6).map((item) => (
                      <button
                        key={item.id}
                        onMouseEnter={() => setHoveredMegaVenture(item)}
                        onClick={() => {
                          setMegaMenuOpen(false);
                          onSelectProperty(item);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-xl text-xs flex justify-between items-center transition-all ${
                          hoveredMegaVenture.id === item.id
                            ? 'bg-gold-500/20 text-gold-300 font-semibold'
                            : 'text-slate-300 hover:bg-white/5'
                        }`}
                      >
                        <span className="truncate">{item.title}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-gold-400" />
                      </button>
                    ))}
                  </div>

                  {/* Mega Menu Live Image & Specification Preview */}
                  <div className="col-span-7 flex flex-col justify-between">
                    <div className="aspect-[16/10] rounded-xl overflow-hidden relative bg-black border border-white/10">
                      <img
                        src={hoveredMegaVenture.heroImage}
                        alt={hoveredMegaVenture.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-black/80 backdrop-blur-md px-2.5 py-0.5 rounded text-[9px] text-gold-300 border border-gold-400/30">
                        {hoveredMegaVenture.tag}
                      </div>
                    </div>

                    <div className="mt-3 flex justify-between items-end">
                      <div>
                        <div className="text-[10px] text-slate-400 uppercase">{hoveredMegaVenture.enclave}</div>
                        <h4 className="font-serif text-base text-white font-medium">{hoveredMegaVenture.title}</h4>
                        <div className="text-[11px] text-emerald-400 mt-0.5">{hoveredMegaVenture.plotSize} • {hoveredMegaVenture.approval.split('/')[0]}</div>
                      </div>
                      <div className="font-serif text-base font-bold gold-gradient-text">
                        {formatCurrencyValue(hoveredMegaVenture.priceINR, currency)}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a href="#cinema-showcase" className="hover:text-gold-300 transition-colors">Showcase</a>
            <a href="#backward-integration" className="hover:text-gold-300 transition-colors">Integration</a>
            <a href="tel:+918185898089" className="text-gold-400 font-semibold flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" />
              +91 818 5898 089
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            
            {/* Quick Search Palette Trigger */}
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2.5 rounded-full border border-white/10 bg-white/5 hover:border-gold-400/50 text-slate-300 hover:text-white transition-all flex items-center gap-2"
              title="Search Ventures (Ctrl+K)"
            >
              <Search className="w-4 h-4 text-gold-400" />
              <span className="text-[10px] text-slate-400 font-mono hidden md:inline">Ctrl+K</span>
            </button>

            {/* Replay Theatrical Curtain Opening */}
            <button
              onClick={() => setReplayKey((k) => k + 1)}
              className="px-3.5 py-1.5 rounded-full border border-gold-400/40 bg-gold-500/10 hover:bg-gold-500/20 text-gold-300 text-[10px] uppercase tracking-wider font-semibold flex items-center gap-1.5 transition-all shadow-md"
              title="Replay Theatrical Curtain Animation"
            >
              <Play className="w-3 h-3 fill-current" />
              <span>Curtains Reveal</span>
            </button>

            <button
              onClick={() => onOpenViewingModal(activeHero)}
              className="hidden sm:inline-flex px-5 py-2.5 rounded-full gold-gradient-bg text-obsidian-950 font-semibold text-xs uppercase tracking-wider hover:scale-[1.02] transition-transform shadow-lg shadow-gold-500/20"
            >
              Book Site Visit
            </button>
          </div>

        </div>
      </header>

      {/* 5. CINEMATIC FULL-BLEED HERO WITH PROGRESS TIMER BAR */}
      <section className="relative min-h-[96vh] flex flex-col justify-end pb-16 pt-32 px-6 sm:px-12 overflow-hidden">
        
        {/* Hero Background Images with Crossfade */}
        {heroVentures.map((item, idx) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              heroIndex === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            } transition-transform duration-[7000ms] ease-out`}
          >
            <img
              src={item.heroImage}
              alt={item.title}
              className="w-full h-full object-cover filter brightness-[0.45] contrast-[1.12]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080b11] via-[#080b11]/40 to-black/70"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#080b11]/90 via-[#080b11]/40 to-transparent"></div>
          </div>
        ))}

        <div className="relative z-10 max-w-7xl mx-auto w-full space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold-400/40 bg-black/60 backdrop-blur-md text-gold-300 text-[10px] uppercase font-mono tracking-widest">
            <Sparkles className="w-3 h-3 text-gold-400" />
            <span>Chapter 0{heroIndex + 1} • {activeHero.tag}</span>
          </div>

          <div className="max-w-4xl space-y-3">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-medium text-white tracking-tight leading-[1.06]">
              {activeHero.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-light max-w-2xl leading-relaxed">
              {activeHero.subtitle}
            </p>
          </div>

          {/* Quick Specifications Strip */}
          <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-slate-300">
            <div>
              <span className="text-[10px] uppercase text-slate-400 tracking-wider">Plot Scale</span>
              <div className="font-semibold text-white mt-0.5">{activeHero.plotSize}</div>
            </div>
            <div className="h-6 w-[1px] bg-white/20"></div>
            <div>
              <span className="text-[10px] uppercase text-slate-400 tracking-wider">Project Extent</span>
              <div className="font-semibold text-white mt-0.5">{activeHero.landExtent}</div>
            </div>
            <div className="h-6 w-[1px] bg-white/20"></div>
            <div>
              <span className="text-[10px] uppercase text-slate-400 tracking-wider">Investment From</span>
              <div className="font-serif text-lg font-bold gold-gradient-text mt-0.5">
                {formatCurrencyValue(activeHero.priceINR, currency)}
              </div>
            </div>
          </div>

          {/* Action CTAs & Progress Bar */}
          <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex items-center gap-3">
              <button
                onClick={() => onSelectProperty(activeHero)}
                className="px-6 py-3 rounded-xl gold-gradient-bg text-obsidian-950 font-semibold text-xs uppercase tracking-wider flex items-center gap-2 hover:scale-105 transition-all shadow-lg shadow-gold-500/20"
              >
                <span>Inspect Full Dossier</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenViewingModal(activeHero)}
                className="px-6 py-3 rounded-xl glass-panel text-white hover:border-gold-400/50 text-xs uppercase tracking-wider font-semibold transition-colors"
              >
                Book Site Visit
              </button>
            </div>

            {/* Slide Indicators with Progress Bar */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              {heroVentures.map((v, idx) => (
                <button
                  key={v.id}
                  onClick={() => setHeroIndex(idx)}
                  className="group py-2 text-left"
                >
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-mono ${heroIndex === idx ? 'text-gold-400 font-bold' : 'text-slate-500'}`}>
                      0{idx + 1}
                    </span>
                    <div className="w-12 h-1 rounded-full bg-white/20 overflow-hidden relative">
                      {heroIndex === idx && (
                        <div
                          className="h-full bg-gold-400 transition-all duration-100 ease-linear"
                          style={{ width: `${progress}%` }}
                        />
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 6. INTERACTIVE 3D PERSPECTIVE SHOWCASE (Inspired by Mahira Grid) */}
      <section id="cinema-showcase" className="py-24 max-w-7xl mx-auto px-6 sm:px-12 border-t border-white/10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-400/30 bg-gold-500/10 text-gold-300 text-[11px] uppercase tracking-[0.25em] font-medium mb-3">
              ✦ The Cinematic Fleet
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-medium text-white tracking-tight">
              Masterplanned <span className="italic font-normal gold-gradient-text">Ventures</span>
            </h2>
          </div>

          <div className="text-xs uppercase tracking-wider text-slate-400">
            Click any venture for CAD schematics & official brochure
          </div>
        </div>

        {/* 3D Tilted Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROPERTIES.map((prop) => (
            <div
              key={prop.id}
              className="group relative rounded-3xl overflow-hidden glass-panel border border-white/10 hover:border-gold-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold-500/10 flex flex-col justify-between"
            >
              <div
                className="aspect-[16/10] overflow-hidden relative cursor-pointer bg-black"
                onClick={() => onSelectProperty(prop)}
              >
                <img
                  src={prop.heroImage}
                  alt={prop.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080b11] via-transparent to-black/40"></div>
                
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] uppercase font-semibold bg-black/80 backdrop-blur-md text-gold-300 border border-gold-400/30">
                    {prop.tag}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-gold-400 font-semibold mb-1">
                    {prop.enclave}
                  </div>
                  <h3
                    onClick={() => onSelectProperty(prop)}
                    className="font-serif text-2xl font-medium text-white group-hover:text-gold-200 transition-colors cursor-pointer"
                  >
                    {prop.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2 font-light">
                    {prop.subtitle}
                  </p>

                  <div className="grid grid-cols-2 gap-2 py-3 my-4 border-y border-white/10 text-xs text-slate-300">
                    <div>Plot: <strong>{prop.plotSize}</strong></div>
                    <div className="text-right text-emerald-400">{prop.approval.split('/')[0]}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400">Offering</span>
                    <div className="font-serif text-xl font-bold gold-gradient-text">
                      {formatCurrencyValue(prop.priceINR, currency)}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {prop.brochurePdf && (
                      <a
                        href={prop.brochurePdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl border border-white/10 hover:border-gold-400 text-slate-400 hover:text-gold-300 transition-colors"
                        title="Download PDF Brochure"
                      >
                        <Download className="w-4 h-4" />
                      </a>
                    )}
                    <button
                      onClick={() => onSelectProperty(prop)}
                      className="px-4 py-2 rounded-xl gold-gradient-bg text-obsidian-950 font-semibold text-xs uppercase tracking-wider hover:scale-105 transition-all"
                    >
                      Dossier
                    </button>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* 7. CINEMA SELECT FOOTER */}
      <footer className="border-t border-white/10 bg-[#05070a] py-12 px-6 sm:px-12 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg border border-gold-400/40 bg-[#0c1018] flex items-center justify-center">
              <span className="font-serif text-sm font-bold gold-gradient-text">A</span>
            </div>
            <div>
              <strong className="text-white block font-serif text-sm">ABHISTA INFRA’S • CINEMA SELECT EDITION</strong>
              <span className="text-[10px] text-slate-500">Madhapur Corporate HQ, Hyderabad - 500081</span>
            </div>
          </div>

          <div className="flex gap-6 text-slate-300">
            <a href="tel:+918185898089" className="hover:text-gold-300">+91 818 5898 089</a>
            <a href="mailto:info@abhista.in" className="hover:text-gold-300">info@abhista.in</a>
          </div>

          <div className="text-[10px] text-slate-500">
            © {new Date().getFullYear()} Abhista Infra’s. Inspired by Mahira Select Theatrical Architecture.
          </div>
        </div>
      </footer>

    </div>
  );
}
