import React from 'react';
import { COMPANY_INFO } from '../data/properties';
import { ArrowUpRight } from 'lucide-react';

export default function MahiraEditorialStory({ onOpenViewingModal }) {
  return (
    <section id="storyEd" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left: Offset Framed Picture (Exact Mahira .se-media & .se-frame) */}
        <div className="lg:col-span-5 relative">
          {/* Gold Offset Outline Frame */}
          <div className="absolute -inset-4 sm:-inset-6 border border-[#c9a35f]/50 pointer-events-none rounded-2xl"></div>

          <div className="relative rounded-xl overflow-hidden aspect-[40/48] shadow-2xl bg-black">
            <img
              src="/assets/abhista/about-home.jpg"
              alt="Abhista Heritage Story"
              className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.1]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#e8c87a]">Founded 2006</span>
              <div className="font-serif text-xl text-white font-medium mt-1">
                {COMPANY_INFO.founder}
              </div>
              <p className="text-[11px] text-[#fbf1d3]/70 font-light mt-0.5">
                Founder & Managing Director, Abhista Group
              </p>
            </div>
          </div>
        </div>

        {/* Right: Editorial Typography Copy (Exact Mahira .se-copy) */}
        <div className="lg:col-span-7 space-y-6">
          <p className="text-[11px] font-semibold tracking-[0.42em] uppercase text-[#e8c87a]">
            Our Story & Legacy
          </p>

          <h2 className="font-garamond text-4xl sm:text-6xl font-normal text-white leading-[1.08]">
            Tradition lives<br />
            <em className="font-serif italic text-[#e8c87a]">beautifully.</em>
          </h2>

          <div className="w-20 h-[1.5px] bg-[#c9a35f]"></div>

          <p className="font-sans text-sm sm:text-base text-[#fbf1d3]/85 font-light leading-relaxed">
            Founded initially as Anuradha Properties in 2006 and evolved into Abhista Infra’s in 2016, our philosophy has always remained anchored in the timeless concept of <strong>Sattva Vikasa</strong> (Harmony, Purity & Balanced Living).
          </p>

          <p className="font-sans text-sm text-[#fbf1d3]/70 font-light leading-relaxed">
            We are proud to be Hyderabad's premier real estate entity operating with a full-fledged <strong>backward integration model</strong>. From initial land survey, soil analysis, and Vaastu certification to in-house earthmovers and blacktop road construction, our staff strength of 80+ professionals and in-house academy ensure zero delays and unmatched quality.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onOpenViewingModal(null)}
              className="mahira-btn"
            >
              <span className="btn-fill"></span>
              <span>Discover Our Story</span>
              <svg className="w-6 h-3" viewBox="0 0 28 10" fill="none" stroke="currentColor">
                <path d="M0 5h24M20 1l5 4-5 4" strokeWidth="1.5" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
