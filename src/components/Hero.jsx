import React, { useState, useEffect } from 'react';
import { Search, MapPin, Building2, SlidersHorizontal, ArrowUpRight, Award } from 'lucide-react';
import { PROPERTIES } from '../data/properties';
import { formatCurrencyValue } from './PropertyCard';

export default function Hero({ 
  onSelectProperty, 
  filterLocation, 
  setFilterLocation, 
  filterCategory, 
  setFilterCategory, 
  filterPrice, 
  setFilterPrice, 
  onPerformSearch,
  currency
}) {
  const [activeSlide, setActiveSlide] = useState(0);
  const showcaseProperties = PROPERTIES.slice(0, 3);

  // Auto rotate showcase slides every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % showcaseProperties.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [showcaseProperties.length]);

  const currentProp = showcaseProperties[activeSlide];

  return (
    <section className="relative min-h-[96vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden">
      
      {/* Background Images with smooth fade transition */}
      {showcaseProperties.map((prop, idx) => (
        <div
          key={prop.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            activeSlide === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          } transition-transform duration-[8000ms] ease-out`}
        >
          <img
            src={prop.heroImage}
            alt={prop.title}
            className="w-full h-full object-cover object-center filter brightness-[0.42] contrast-[1.1]"
          />
          {/* Subtle cinematic gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/40 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian-950/95 via-obsidian-950/50 to-transparent" />
        </div>
      ))}

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto pt-8">
        
        {/* Prestige Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-400/30 bg-black/50 backdrop-blur-md mb-6 animate-fade-in">
          <Award className="w-3.5 h-3.5 text-gold-400" />
          <span className="text-[11px] font-medium tracking-[0.25em] text-gold-300 uppercase">
            Abhista Infra’s • Established 2016 • Hyderabad & Bengaluru
          </span>
        </div>

        {/* Hero Editorial Headline */}
        <div className="max-w-3xl space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-medium tracking-tight text-white leading-[1.08]">
            Where Nature, <br />
            <span className="italic font-normal gold-gradient-text">Vaastu Purity</span> & Wealth Converge.
          </h1>
          <p className="text-base sm:text-lg text-slate-300 font-light max-w-2xl leading-relaxed tracking-wide">
            Delivering landmark farmland communities, HMDA gated residential layouts, and luxury villas with 100% clear titles and full backward integration.
          </p>
        </div>

        {/* Featured Property Slide Pill */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button
            onClick={() => onSelectProperty(currentProp)}
            className="group glass-panel-gold px-5 py-2.5 rounded-full flex items-center gap-3 text-xs tracking-wider uppercase text-gold-200 hover:text-white transition-all shadow-lg hover:shadow-gold-500/20"
          >
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-ping"></span>
            <span>Featured Venture: <strong className="font-semibold text-white">{currentProp.title}</strong> — From {formatCurrencyValue(currentProp.priceINR, currency)}</span>
            <ArrowUpRight className="w-4 h-4 text-gold-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Slide Selector Indicators */}
        <div className="flex items-center gap-3 mt-6">
          {showcaseProperties.map((prop, idx) => (
            <button
              key={prop.id}
              onClick={() => setActiveSlide(idx)}
              className={`text-left group transition-all duration-300 py-1 ${
                activeSlide === idx ? 'opacity-100' : 'opacity-40 hover:opacity-80'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className={`text-[11px] font-mono tracking-widest ${activeSlide === idx ? 'text-gold-400 font-bold' : 'text-slate-400'}`}>
                  0{idx + 1}
                </span>
                <span className="text-xs tracking-wider text-slate-200 hidden md:inline">
                  {prop.title}
                </span>
                <div className={`h-[2px] transition-all duration-500 rounded-full ${
                  activeSlide === idx ? 'w-12 bg-gold-400' : 'w-4 bg-white/20 group-hover:w-8'
                }`} />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Floating Interactive Search & Filter Bar */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 w-full mt-10">
        <div className="glass-panel rounded-2xl p-4 sm:p-5 shadow-2xl border border-white/10 hover:border-gold-500/30 transition-all duration-300">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
            
            {/* Location Selector */}
            <div className="flex flex-col space-y-1.5 px-3 py-1.5 border-b sm:border-b-0 sm:border-r border-white/10">
              <label className="text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-gold-400" />
                Growth Corridor
              </label>
              <select
                value={filterLocation}
                onChange={(e) => setFilterLocation(e.target.value)}
                aria-label="Filter by Corridor"
                className="bg-transparent text-slate-100 text-xs font-medium focus:outline-none cursor-pointer pr-4 appearance-none"
              >
                <option value="all" className="bg-obsidian-900 text-slate-200">All Corridors</option>
                <option value="Patancheru" className="bg-obsidian-900 text-slate-200">Patancheru / Begumpet (ORR)</option>
                <option value="Kothur" className="bg-obsidian-900 text-slate-200">Kothur & Shadnagar (NH-44)</option>
                <option value="Shamirpet" className="bg-obsidian-900 text-slate-200">Shamirpet (Biotech Hub)</option>
                <option value="Shabad" className="bg-obsidian-900 text-slate-200">Chegur / Shabad (NH-44)</option>
                <option value="Bengaluru" className="bg-obsidian-900 text-slate-200">Bengaluru (Jigani & Kanakapura)</option>
              </select>
            </div>

            {/* Typology */}
            <div className="flex flex-col space-y-1.5 px-3 py-1.5 border-b sm:border-b-0 lg:border-r border-white/10">
              <label className="text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold flex items-center gap-1.5">
                <Building2 className="w-3 h-3 text-gold-400" />
                Venture Type
              </label>
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                aria-label="Filter by Venture Type"
                className="bg-transparent text-slate-100 text-xs font-medium focus:outline-none cursor-pointer pr-4 appearance-none"
              >
                <option value="all" className="bg-obsidian-900 text-slate-200">All Ventures</option>
                <option value="farmland" className="bg-obsidian-900 text-slate-200">Organic Gated Farmland</option>
                <option value="residential" className="bg-obsidian-900 text-slate-200">HMDA & DTCP Layouts / Villas</option>
              </select>
            </div>

            {/* Investment Bracket */}
            <div className="flex flex-col space-y-1.5 px-3 py-1.5 border-b sm:border-b-0 sm:border-r border-white/10">
              <label className="text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold flex items-center gap-1.5">
                <SlidersHorizontal className="w-3 h-3 text-gold-400" />
                Investment Range
              </label>
              <select
                value={filterPrice}
                onChange={(e) => setFilterPrice(e.target.value)}
                aria-label="Filter by Investment Range"
                className="bg-transparent text-slate-100 text-xs font-medium focus:outline-none cursor-pointer pr-4 appearance-none"
              >
                <option value="all" className="bg-obsidian-900 text-slate-200">Any Investment Range</option>
                <option value="under35L" className="bg-obsidian-900 text-slate-200">Under ₹35 Lakhs</option>
                <option value="35Lto50L" className="bg-obsidian-900 text-slate-200">₹35 Lakhs — ₹50 Lakhs</option>
                <option value="over50L" className="bg-obsidian-900 text-slate-200">₹50 Lakhs+ Premium</option>
              </select>
            </div>

            {/* Search Button */}
            <div className="px-2 pt-2 sm:pt-0">
              <button
                onClick={onPerformSearch}
                className="w-full py-3 px-6 rounded-xl gold-gradient-bg text-obsidian-950 font-semibold text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-2 hover:scale-[1.02] transition-all shadow-lg shadow-gold-500/20 active:scale-95"
              >
                <Search className="w-4 h-4 text-obsidian-950" />
                <span>Explore Ventures</span>
              </button>
            </div>

          </div>
        </div>

        {/* Global Authority Metrics Ticker */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="glass-panel py-3 px-4 rounded-xl border border-white/5">
            <div className="font-serif text-2xl font-semibold gold-gradient-text">100+ Acres</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400 mt-0.5">Masterplanned Farmland</div>
          </div>
          <div className="glass-panel py-3 px-4 rounded-xl border border-white/5">
            <div className="font-serif text-2xl font-semibold gold-gradient-text">100%</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400 mt-0.5">Clear Titles & Spot Reg.</div>
          </div>
          <div className="glass-panel py-3 px-4 rounded-xl border border-white/5">
            <div className="font-serif text-2xl font-semibold gold-gradient-text">80+ Team</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400 mt-0.5">In-House Execution</div>
          </div>
          <div className="glass-panel py-3 px-4 rounded-xl border border-white/5">
            <div className="font-serif text-2xl font-semibold gold-gradient-text">Since 2016</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400 mt-0.5">Hyderabad & Bengaluru</div>
          </div>
        </div>

      </div>

    </section>
  );
}
