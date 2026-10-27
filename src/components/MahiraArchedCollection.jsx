import React, { useState } from 'react';
import { PROPERTIES } from '../data/properties';
import { formatCurrencyValue } from './PropertyCard';
import { ChevronLeft, ChevronRight, Download, Trees, Shield } from 'lucide-react';

export default function MahiraArchedCollection({ onSelectProperty, onOpenViewingModal, currency }) {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(PROPERTIES.length / itemsPerPage);

  const displayedVentures = PROPERTIES.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="relative py-24 px-6 sm:px-12 bg-gradient-to-b from-[#060907] via-[#0b1610] to-[#060907] border-y border-[#c9a35f]/25 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,163,95,0.08)_0%,_transparent_70%)] pointer-events-none"></div>

      {/* Left Rail (Mahira signature) */}
      <aside className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-6 pointer-events-none z-10">
        <svg className="w-8 h-8 text-[#c9a35f] opacity-80" viewBox="0 0 40 32" fill="none" stroke="currentColor">
          <path d="M20 4c2.5 4 2.5 9 0 13-2.5-4-2.5-9 0-13zM12 8c4 2.5 6.5 7 6.5 11.5C14 18 11 13.5 12 8zM28 8c1 5.5-2 10-6.5 11.5 0-4.5 2.5-9 6.5-11.5zM5 14c4.5.7 8.5 3.8 10.5 8C11 22 7 19 5 14zM35 14c-2 5-6 8-10.5 8 2-4.2 6-7.3 10.5-8z" strokeWidth="1.2"/>
        </svg>
        <div className="vertical-rail">
          <span>MODERN</span>&nbsp;•&nbsp;<span>ROOTED</span>&nbsp;•&nbsp;<span>ALWAYS</span>&nbsp;•&nbsp;<span>YOU</span>
        </div>
        <div className="w-[1px] h-24 bg-gradient-to-b from-[#c9a35f] to-transparent"></div>
      </aside>

      {/* Right Rail (Mahira signature) */}
      <aside className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-6 pointer-events-none z-10">
        <div className="w-[1px] h-24 bg-gradient-to-t from-[#c9a35f] to-transparent"></div>
        <div className="vertical-rail">
          <span>ELEGANCE</span>&nbsp;•&nbsp;<span>LIVES</span>&nbsp;•&nbsp;<span>IN EVERY</span>&nbsp;•&nbsp;<span>DETAIL</span>
        </div>
        <svg className="w-6 h-6 text-[#c9a35f] opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="9" strokeWidth="1.2"/>
        </svg>
      </aside>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header (Exact Mahira .sec-head & .sh-orna) */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-[11px] font-semibold tracking-[0.42em] uppercase text-[#e8c87a]">
            Curated Acquisitions
          </p>
          <h2 className="font-garamond text-4xl sm:text-6xl font-normal text-white uppercase tracking-wider leading-tight">
            Flagship Farmlands &<br />
            <em className="font-serif italic text-[#e8c87a] lowercase">Gated Estates</em>
          </h2>

          {/* Ornamental Divider with Diamond Node */}
          <div className="pt-2 pb-2">
            <div className="ornamental-line"></div>
          </div>

          <p className="font-sans text-xs sm:text-sm text-[#fbf1d3]/70 font-light max-w-xl mx-auto leading-relaxed">
            Pioneering luxury agriculture and plotted community developments across Telangana and Karnataka.
          </p>
        </div>

        {/* Arched Window Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {displayedVentures.map((prop) => (
            <article
              key={prop.id}
              className="arch-card relative bg-[#09120c] overflow-hidden flex flex-col justify-between group cursor-pointer"
              onClick={() => onSelectProperty(prop)}
            >
              {/* Image Area with Arched Top */}
              <div className="relative aspect-[397/500] overflow-hidden bg-black">
                <img
                  src={prop.heroImage}
                  alt={prop.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.8]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09120c] via-transparent to-black/30"></div>
                
                {/* Badge */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-[#060907]/90 backdrop-blur-md px-4 py-1 rounded-full border border-[#c9a35f]/50 text-[10px] font-semibold text-[#e8c87a] uppercase tracking-widest whitespace-nowrap">
                  {prop.tag}
                </div>

                {/* Caption Overlay */}
                <div className="absolute bottom-6 inset-x-6 z-10 space-y-2">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#e8c87a] font-semibold">
                    {prop.enclave}
                  </p>
                  <h3 className="font-garamond text-3xl font-medium text-white group-hover:text-[#e8c87a] transition-colors leading-snug">
                    {prop.title}
                  </h3>
                  <p className="text-xs text-[#fbf1d3]/75 font-light line-clamp-1">
                    {prop.subtitle}
                  </p>
                  
                  <div className="pt-2 flex justify-between items-center text-xs border-t border-white/10">
                    <span className="text-[#fbf1d3]/70">{prop.plotSize}</span>
                    <span className="font-serif font-bold text-[#e8c87a]">
                      From {formatCurrencyValue(prop.priceINR, currency)}
                    </span>
                  </div>

                  {/* Interactive CTA Arrow Button */}
                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[10px] uppercase font-semibold text-[#e8c87a] tracking-widest flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                      <span>Explore Dossier</span>
                      <svg className="w-5 h-2.5" viewBox="0 0 28 10" fill="none" stroke="currentColor">
                        <path d="M0 5h24M20 1l5 4-5 4" strokeWidth="1.5" />
                      </svg>
                    </span>

                    {prop.brochurePdf && (
                      <a
                        href={prop.brochurePdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-full border border-[#c9a35f]/40 hover:bg-[#c9a35f]/20 text-[#e8c87a] transition-colors"
                        title="Download PDF Brochure"
                      >
                        <Download className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Carousel Pagination Nav (Exact Mahira .w-nav) */}
        <div className="mt-14 flex items-center justify-center gap-6">
          <button
            onClick={prevPage}
            className="w-12 h-12 rounded-full border border-[#c9a35f]/40 hover:border-[#e8c87a] bg-[#0d1510] text-[#e8c87a] flex items-center justify-center transition-colors"
            title="Previous Collection"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <p className="font-mono text-xs tracking-widest text-[#e8c87a] flex items-center gap-3">
            <span>0{currentPage + 1}</span>
            <i className="w-8 h-[1px] bg-[#c9a35f]"></i>
            <span>0{totalPages}</span>
          </p>

          <button
            onClick={nextPage}
            className="w-12 h-12 rounded-full border border-[#c9a35f]/40 hover:border-[#e8c87a] bg-[#0d1510] text-[#e8c87a] flex items-center justify-center transition-colors"
            title="Next Collection"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>

    </section>
  );
}
