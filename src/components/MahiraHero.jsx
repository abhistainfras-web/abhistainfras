import React, { useState, useEffect } from 'react';
import { PROPERTIES } from '../data/properties';
import { formatCurrencyValue } from './PropertyCard';
import { ArrowUpRight, Play, Pause, ChevronRight, Sparkles } from 'lucide-react';

export default function MahiraHero({ onSelectProperty, onOpenViewingModal, currency }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const slides = PROPERTIES.slice(0, 3);

  useEffect(() => {
    if (!isPlaying) return;
    const intervalTime = 80;
    const totalDuration = 7000;
    const step = (intervalTime / totalDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveSlide((curr) => (curr + 1) % slides.length);
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [activeSlide, isPlaying, slides.length]);

  const current = slides[activeSlide];

  return (
    <section className="relative min-h-[96vh] flex items-center justify-between overflow-hidden pt-28 pb-16 px-6 sm:px-16 select-none">
      
      {/* Background Slides with Crossfade */}
      {slides.map((s, idx) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            activeSlide === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          } transition-transform duration-[7000ms] ease-out`}
        >
          <img
            src={s.heroImage}
            alt={s.title}
            className="w-full h-full object-cover filter brightness-[0.42] contrast-[1.12]"
          />
          {/* Deep Forest Gradient Scrim (Mahira signature palette) */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#060907] via-[#060907]/45 to-black/75"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#060907]/95 via-[#060907]/50 to-transparent"></div>
        </div>
      ))}

      {/* Left Vertical Typography Rail (Mahira signature) */}
      <aside className="absolute left-6 top-1/2 -translate-y-1/2 z-20 hidden xl:flex flex-col items-center gap-6 pointer-events-none">
        <svg className="w-7 h-7 text-[#c9a35f] opacity-80" viewBox="0 0 40 32" fill="none" stroke="currentColor">
          <path d="M20 4c2.5 4 2.5 9 0 13-2.5-4-2.5-9 0-13zM12 8c4 2.5 6.5 7 6.5 11.5C14 18 11 13.5 12 8zM28 8c1 5.5-2 10-6.5 11.5 0-4.5 2.5-9 6.5-11.5z" strokeWidth="1.5"/>
        </svg>
        <div className="vertical-rail">
          <span>ABHISTA</span>&nbsp;•&nbsp;<span>TRADITION</span>&nbsp;•&nbsp;<span>ROOTED</span>&nbsp;•&nbsp;<span>ESTATES</span>
        </div>
        <div className="w-[1px] h-20 bg-gradient-to-b from-[#c9a35f] to-transparent"></div>
      </aside>

      {/* Main Hero Center Content */}
      <div className="relative z-20 max-w-4xl w-full mx-auto xl:ml-20 space-y-6">
        
        {/* Eyebrow with hairline */}
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-semibold tracking-[0.38em] uppercase text-[#e8c87a]">
            Tradition Meets Tomorrow
          </span>
          <div className="w-16 h-[1px] bg-[#c9a35f]/60"></div>
        </div>

        {/* Headline in Cormorant Garamond / Playfair */}
        <h1 className="font-garamond text-5xl sm:text-7xl lg:text-8xl font-normal text-white leading-[1.04] tracking-tight">
          Where Soil Becomes<br />
          <em className="font-serif italic text-[#e8c87a]">Generational Royalty.</em>
        </h1>

        <p className="font-sans text-sm sm:text-base text-[#fbf1d3]/85 font-light max-w-xl leading-relaxed tracking-wide">
          Crafting Hyderabad & Bengaluru's most distinguished organic farmlands, HMDA gated layouts, and luxury villas with 100% clear titles.
        </p>

        {/* Feature Pill: Active Slide Details */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <div className="px-4 py-2 rounded-full border border-[#c9a35f]/40 bg-[#0d1510]/80 backdrop-blur-md text-xs flex items-center gap-3 text-[#fbf1d3]">
            <span className="w-2 h-2 rounded-full bg-[#e8c87a] animate-ping"></span>
            <span>Feature: <strong className="text-[#e8c87a] font-semibold">{current.title}</strong> ({current.enclave})</span>
            <span className="text-white/30">•</span>
            <span className="font-serif font-bold text-[#e8c87a]">{formatCurrencyValue(current.priceINR, currency)}</span>
          </div>
        </div>

        {/* CTA Buttons (Exact Mahira Style) */}
        <div className="pt-4 flex flex-wrap items-center gap-4">
          <button
            onClick={() => onSelectProperty(current)}
            className="mahira-btn"
          >
            <span className="btn-fill"></span>
            <span>Explore Venture</span>
            <svg className="w-6 h-3" viewBox="0 0 28 10" fill="none" stroke="currentColor">
              <path d="M0 5h24M20 1l5 4-5 4" strokeWidth="1.5" />
            </svg>
          </button>

          <button
            onClick={() => onOpenViewingModal(current)}
            className="mahira-btn-ghost"
          >
            <span>Arrange Site Visit</span>
            <svg className="w-6 h-3" viewBox="0 0 28 10" fill="none" stroke="currentColor">
              <path d="M0 5h24M20 1l5 4-5 4" strokeWidth="1.5" />
            </svg>
          </button>
        </div>

      </div>

      {/* Right Vertical Typography Rail (Mahira signature) */}
      <aside className="absolute right-6 top-1/2 -translate-y-1/2 z-20 hidden xl:flex flex-col items-center gap-6 pointer-events-none">
        <div className="w-[1px] h-20 bg-gradient-to-t from-[#c9a35f] to-transparent"></div>
        <div className="vertical-rail">
          <span>VAASTU</span>&nbsp;•&nbsp;<span>PURITY</span>&nbsp;•&nbsp;<span>SOVEREIGN</span>&nbsp;•&nbsp;<span>WEALTH</span>
        </div>
        <svg className="w-5 h-5 text-[#c9a35f] opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="9" strokeWidth="1.5"/>
          <path d="M12 3v18M3 12h18" strokeWidth="1.2"/>
        </svg>
      </aside>

      {/* Bottom Floating Telemetry Bar with Timer & Slide Numbers */}
      <div className="absolute left-6 sm:left-16 bottom-8 z-30 flex items-center gap-6">
        
        {/* Play/Pause Button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-8 h-8 rounded-full border border-[#c9a35f]/40 bg-[#0d1510]/80 flex items-center justify-center text-[#e8c87a] hover:border-[#e8c87a] transition-colors"
          title={isPlaying ? 'Pause Auto-cycle' : 'Play Auto-cycle'}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current ml-0.5" />}
        </button>

        {/* Slide Counter & Live Progress Line */}
        <div className="flex items-center gap-3">
          {slides.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => {
                setActiveSlide(idx);
                setProgress(0);
              }}
              className="flex items-center gap-2 group py-2"
            >
              <span className={`text-xs font-mono tracking-wider ${activeSlide === idx ? 'text-[#e8c87a] font-bold' : 'text-[#fbf1d3]/40'}`}>
                0{idx + 1}
              </span>
              <div className="w-12 h-[2px] bg-white/20 rounded-full overflow-hidden relative">
                {activeSlide === idx && (
                  <div
                    className="h-full bg-[#e8c87a] transition-all duration-75 ease-linear"
                    style={{ width: `${progress}%` }}
                  />
                )}
              </div>
            </button>
          ))}
        </div>

      </div>

    </section>
  );
}
