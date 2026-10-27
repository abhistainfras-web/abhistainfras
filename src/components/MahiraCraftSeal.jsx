import React from 'react';

export default function MahiraCraftSeal() {
  return (
    <section id="craft" className="relative py-16 sm:py-20 px-6 sm:px-12 bg-gradient-to-b from-[#18281c] to-[#0c160f] border-b border-[#c9a35f]/25">
      
      {/* Top Ornamental Line with Diamond Node */}
      <div className="ornamental-line mb-12"></div>

      {/* 4 Pillars Row */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 items-center">
        
        {/* Pillar 1 */}
        <div className="flex flex-col items-center text-center space-y-3 group px-4">
          <svg className="w-10 h-10 text-[#e8c87a] transition-transform duration-500 group-hover:scale-110" viewBox="0 0 40 32" fill="none" stroke="currentColor">
            <path d="M20 4c2.5 4 2.5 9 0 13-2.5-4-2.5-9 0-13zM12 8c4 2.5 6.5 7 6.5 11.5C14 18 11 13.5 12 8zM28 8c1 5.5-2 10-6.5 11.5 0-4.5 2.5-9 6.5-11.5zM5 14c4.5.7 8.5 3.8 10.5 8C11 22 7 19 5 14zM35 14c-2 5-6 8-10.5 8 2-4.2 6-7.3 10.5-8z" strokeWidth="1.5" />
          </svg>
          <div className="font-serif text-sm tracking-[0.2em] uppercase font-semibold text-white">
            <span>Authentic</span><br />
            <span className="text-[#e8c87a]">Title Diligence</span>
          </div>
          <p className="text-[11px] text-[#fbf1d3]/70 font-light leading-relaxed">
            100% verified legal records & guaranteed spot registration.
          </p>
        </div>

        {/* Pillar 2 */}
        <div className="flex flex-col items-center text-center space-y-3 group px-4 lg:border-l border-white/10">
          <svg className="w-10 h-10 text-[#e8c87a] transition-transform duration-500 group-hover:scale-110" viewBox="0 0 32 36" fill="none" stroke="currentColor">
            <path d="M16 2 29 7v10c0 8.5-5.5 14.5-13 17C8.5 31.5 3 25.5 3 17V7z" strokeWidth="1.5" />
          </svg>
          <div className="font-serif text-sm tracking-[0.2em] uppercase font-semibold text-white">
            <span>Vedic Vaastu</span><br />
            <span className="text-[#e8c87a]">Compliance</span>
          </div>
          <p className="text-[11px] text-[#fbf1d3]/70 font-light leading-relaxed">
            Every plot mapped to ancient geometry for prosperity and balance.
          </p>
        </div>

        {/* Pillar 3 */}
        <div className="flex flex-col items-center text-center space-y-3 group px-4 lg:border-l border-white/10">
          <svg className="w-10 h-10 text-[#e8c87a] transition-transform duration-500 group-hover:scale-110" viewBox="0 0 44 32" fill="none" stroke="currentColor">
            <g strokeWidth="1.5">
              <rect x="4" y="6" width="22" height="16" rx="1.5" />
              <path d="M26 11h7l6 6v5h-13" />
              <circle cx="12" cy="26" r="3.4" />
              <circle cx="32" cy="26" r="3.4" />
            </g>
          </svg>
          <div className="font-serif text-sm tracking-[0.2em] uppercase font-semibold text-white">
            <span>Backward</span><br />
            <span className="text-[#e8c87a]">Integration</span>
          </div>
          <p className="text-[11px] text-[#fbf1d3]/70 font-light leading-relaxed">
            80+ specialists, in-house road equipment & plantation care.
          </p>
        </div>

        {/* Pillar 4 */}
        <div className="flex flex-col items-center text-center space-y-3 group px-4 lg:border-l border-white/10">
          <svg className="w-10 h-10 text-[#e8c87a] transition-transform duration-500 group-hover:scale-110" viewBox="0 0 36 32" fill="none" stroke="currentColor">
            <path d="M18 29 6.6 18a7.5 7.5 0 0 1 0-10.7 7.7 7.7 0 0 1 10.8 0l.6.6.6-.6a7.7 7.7 0 0 1 10.8 0 7.5 7.5 0 0 1 0 10.7z" strokeWidth="1.5" />
          </svg>
          <div className="font-serif text-sm tracking-[0.2em] uppercase font-semibold text-white">
            <span>Loved By</span><br />
            <span className="text-[#e8c87a]">2,000+ Families</span>
          </div>
          <p className="text-[11px] text-[#fbf1d3]/70 font-light leading-relaxed">
            Unbroken two-decade legacy across Hyderabad & Bengaluru.
          </p>
        </div>

      </div>

      {/* Bottom Ornamental Line with Diamond Node */}
      <div className="ornamental-line mt-12"></div>

    </section>
  );
}
