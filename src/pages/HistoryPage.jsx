import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HistoricPortfolioGallery from '../components/HistoricPortfolioGallery';
import { BENGALURU_COMPLETED_PROJECTS, PROPERTIES } from '../data/properties';
import { ShieldCheck, CheckCircle2, TrendingUp, Building2, MapPin, Award, ArrowRight, Clock, Sparkles, Trees, Compass, Calendar, ChevronRight } from 'lucide-react';

const CHRONOLOGY = [
  {
    year: '2006',
    era: 'The Foundation Era',
    title: 'Anuradha Properties Inception',
    founderQuote: '"In 2006, land buying in Hyderabad lacked legal transparency. We made a sacred vow: every single square yard must carry an undisputed 30-year certified title search before taking a single rupee."',
    milestone: 'Zero-litigation plotted development model established in Hyderabad.',
    highlight: '100% Spot Registration Pioneer',
    tag: 'Legal Foundation'
  },
  {
    year: '2012',
    era: 'The Infrastructure Foresight',
    title: 'Early Outer Ring Road (ORR) Land Banking',
    founderQuote: '"We foresaw how the 158-km Nehru Outer Ring Road would redefine Hyderabad’s economic geography. We secured prime land banks along Exit 3 (Patancheru) and Exit 16 (Kothur)."',
    milestone: 'Acquisition of strategic greenfield parcels adjacent to upcoming expressway junctions.',
    highlight: 'Strategic Location Foresight',
    tag: 'Corridor Expansion'
  },
  {
    year: '2016',
    era: 'The Backward Integration Revolution',
    title: 'Abhista Infra Developers Incorporation',
    founderQuote: '"To eradicate contractor delays and shoddy blacktop roads, we bought our own fleet of earthmovers, rollers, and paving machinery. Complete backward integration became our hallmark."',
    milestone: 'Formal incorporation of Abhista Infra Developers with in-house machinery and survey cadre.',
    highlight: 'Company-Owned Equipment Fleet',
    tag: 'Operational Independence'
  },
  {
    year: '2019',
    era: 'Interstate Footprint',
    title: 'Bengaluru Southern Corridor Landmark Deliveries',
    founderQuote: '"Expanding to Bengaluru proved our title audit standard was universally trusted by tech leaders, NRIs, and institutional investors seeking long-term wealth compounding."',
    milestone: 'Completion of 7 landmark plotted communities across Whitefield, Electronic City, and South Bengaluru.',
    highlight: '7 Landmark Karnataka Projects Delivered',
    tag: 'Bengaluru Footprint'
  },
  {
    year: '2022',
    era: 'The Agro-Wealth Innovation',
    title: 'Managed Timber & Sustainable Farmland Retreats',
    founderQuote: '"We merged weekend countryside sanctuary with commercial timber cultivation—planting teak, sandalwood, and organic fruit groves with 100% tax-free Section 10(1) cash flows."',
    milestone: 'Launch of Arrjava Farms, Oak Tree Farms, and Mirai Farms with solar automated drip networks.',
    highlight: 'Dual-Wealth Agroforestry Model',
    tag: 'Ecological Prosperity'
  },
  {
    year: '2026',
    era: 'The Sovereign Land Benchmark',
    title: 'Decade of Trust & 1,200+ Acres Delivered',
    founderQuote: '"Today, over 10,000 delighted landowners hold clear registered deeds with Abhista Infra. We remain dedicated to building relationships that endure for generations."',
    milestone: '11 Active Master Ventures, 25+ Completed Developments, and 1,200+ Masterplanned Acres.',
    highlight: '10,000+ Landowners Served',
    tag: 'Enduring Trust'
  }
];

const WHY_INVEST_PILLARS = [
  {
    num: '01',
    title: 'A Specialist in Hyderabad Real Estate',
    desc: 'Abhista Infra is the trusted partner guiding investors through Hyderabad’s intricate land markets. With deep regional mastery and 18+ years of revenue record expertise, every acquisition is guaranteed to be legally unassailable and highly lucrative.'
  },
  {
    num: '02',
    title: 'Strategic Locations for Maximum Returns',
    desc: 'Real estate value revolves around connectivity. Every Abhista venture is strictly selected along high-speed expressways (ORR, NH-44, RRR), airport SEZs, and technology growth zones—guaranteeing rapid capital compounding.'
  },
  {
    num: '03',
    title: 'Uncompromising Quality & Innovation',
    desc: 'We never cut corners. We deploy superior materials, wide 40-ft and 33-ft blacktop roads, underground utilities, and company-owned heavy machinery to create layouts with lasting architectural permanence.'
  },
  {
    num: '04',
    title: 'Wide Range of Investment Opportunities',
    desc: 'From high-yielding managed organic farmlands with sandalwood plantations to HMDA-approved villa plots ready for immediate home construction—we provide tailored assets for every family’s vision.'
  },
  {
    num: '05',
    title: 'Strong Track Record & Client Satisfaction',
    desc: 'The foundation of our achievement lies in the confidence of our clients. A proven track record of punctual handovers, transparent documentation, and customer-first ethics has earned us an exceptionally loyal investor community.'
  },
  {
    num: '06',
    title: 'Sustainable & Environmentally Responsible',
    desc: 'We build communities that harmonize with nature. Dense avenue plantations, rainwater percolation pits, and chemical-free organic farming practices ensure minimal ecological footprint and a healthier tomorrow.'
  }
];

export default function HistoryPage({ onOpenVisitModal }) {
  const [activeYearIndex, setActiveYearIndex] = useState(0);
  const [activePortfolioState, setActivePortfolioState] = useState('telangana'); // 'telangana' or 'karnataka'
  const currentTimeline = CHRONOLOGY[activeYearIndex];

  return (
    <div className="pt-24 pb-24 bg-[#FAF9F6] min-h-screen">
      
      {/* 1. Cinematic History Banner */}
      <section className="bg-gradient-to-b from-[#090D12] via-[#0E131A] to-[#090D12] text-white py-16 sm:py-20 relative overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FDB813]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#FDB813]">Our History & Achievements</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FDB813]/10 border border-[#FDB813]/30 text-[#FDB813] text-xs font-black uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5" />
            <span>18-Year Living Legacy (2006 – 2026)</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Our History & Landmark Achievements
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From Anuradha Properties in 2006 to Abhista Infra today—explore how visionary leadership, company-owned infrastructure, and an unassailable legal audit standard created South India’s most trusted land bank.
          </p>

          {/* Key Quick Counters */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-slate-800/80">
            <div className="p-3 bg-slate-900/80 rounded-2xl border border-slate-800">
              <span className="text-2xl sm:text-3xl font-black text-white block">2006</span>
              <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Inception Year</span>
            </div>
            <div className="p-3 bg-slate-900/80 rounded-2xl border border-slate-800">
              <span className="text-2xl sm:text-3xl font-black text-[#FDB813] block">1,200+</span>
              <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Acres Masterplanned</span>
            </div>
            <div className="p-3 bg-slate-900/80 rounded-2xl border border-slate-800">
              <span className="text-2xl sm:text-3xl font-black text-white block">25+</span>
              <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Delivered Benchmarks</span>
            </div>
            <div className="p-3 bg-slate-900/80 rounded-2xl border border-slate-800">
              <span className="text-2xl sm:text-3xl font-black text-emerald-400 block">10,000+</span>
              <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Happy Landowners</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Innovative Interactive Chronological Time-Traveler */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-black uppercase tracking-widest text-[#b37a00] block">
            Interactive Milestone Time-Traveler
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mt-1">
            The Evolution of a Real Estate Pioneer
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Click through each milestone era to watch our backward-integrated development model unfold from 2006 to 2026.
          </p>
        </div>

        {/* Horizontal Year Timeline Switcher with Smooth Progress Animation */}
        <div className="relative mb-14 px-4 sm:px-8">
          
          {/* Background Timeline Rail */}
          <div className="absolute top-[28px] left-10 right-10 h-1.5 bg-slate-200 rounded-full -translate-y-1/2 z-0 hidden md:block" />

          {/* Active Animated Progress Track */}
          <div
            className="absolute top-[28px] left-10 h-1.5 bg-gradient-to-r from-[#FDB813] to-amber-500 rounded-full -translate-y-1/2 z-0 hidden md:block transition-all duration-500 ease-out"
            style={{ width: `calc(${(activeYearIndex / (CHRONOLOGY.length - 1)) * 100}% * 0.85)` }}
          />

          {/* Interactive Year Node Buttons */}
          <div
            className="flex items-center sm:justify-between gap-4 sm:gap-6 overflow-x-auto py-2 px-2 sm:px-4 relative z-10 no-scrollbar scrollbar-none"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {CHRONOLOGY.map((item, idx) => {
              const isSelected = activeYearIndex === idx;
              return (
                <button
                  key={item.year}
                  onClick={() => setActiveYearIndex(idx)}
                  className={`flex flex-col items-center shrink-0 transition-all duration-300 group focus:outline-none ${
                    isSelected ? 'scale-110' : 'opacity-75 hover:opacity-100 hover:scale-105'
                  }`}
                >
                  <div className="relative flex items-center justify-center">
                    {/* Pulsing Aura on Active Year */}
                    {isSelected && (
                      <span className="absolute w-14 h-14 rounded-2xl bg-[#FDB813]/40 animate-ping" />
                    )}

                    <span className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-sm transition-all border-2 relative z-10 ${
                      isSelected
                        ? 'bg-[#FDB813] text-slate-950 border-[#FDB813] shadow-xl shadow-amber-500/30'
                        : 'bg-white text-slate-800 border-slate-300 group-hover:border-slate-500 shadow-sm'
                    }`}>
                      {item.year}
                    </span>
                  </div>

                  <span className={`text-[11px] font-black uppercase tracking-wider mt-2.5 px-2 py-0.5 rounded-full transition-colors whitespace-nowrap ${
                    isSelected
                      ? 'text-[#b37a00] bg-amber-50 border border-amber-200'
                      : 'text-slate-500 group-hover:text-slate-800'
                  }`}>
                    {item.era}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Era Master Showcase Card (Animated on Year Switch) */}
        <div
          key={currentTimeline.year}
          className="bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 sm:p-10 relative overflow-hidden animate-fade-in"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Prominent Executive Chairman Card with Large Photo & Proper Alignment */}
            <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl border border-slate-800 relative">
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-5 pb-5 border-b border-slate-800">
                {/* Large, Handsome Executive Photo */}
                <div className="w-32 h-44 sm:w-36 sm:h-48 rounded-2xl overflow-hidden border-2 border-[#FDB813] shadow-2xl shrink-0 bg-slate-800 mx-auto sm:mx-0">
                  <img
                    src="/assets/abhista/ramachandra-reddy.jpg"
                    alt="Mr. M. Ramachandra Reddy - Founder & Chairman"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Chairman Identity & Title Alignment */}
                <div className="text-center sm:text-left space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FDB813]/20 border border-[#FDB813]/40 text-[#FDB813] text-[10px] font-black uppercase tracking-wider">
                    Executive Leadership
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-white leading-tight">
                    Mr. M. Ramachandra Reddy
                  </h4>
                  <p className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Founder & Managing Director
                  </p>
                  <span className="text-[11px] font-bold text-[#FDB813] block pt-1">
                    Era Chapter: {currentTimeline.year} ({currentTimeline.era})
                  </span>
                </div>
              </div>

              {/* Founder's Personal Archival Quote */}
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                  Chairman's Archival Reflection:
                </span>
                <blockquote className="text-xs sm:text-sm text-slate-200 italic leading-relaxed pl-3 border-l-2 border-[#FDB813]">
                  {currentTimeline.founderQuote}
                </blockquote>
              </div>

              <div className="pt-2 flex items-center justify-between text-[11px] text-emerald-400 font-bold border-t border-slate-800/80">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                  Verified Title Standard
                </span>
                <span className="text-slate-400">Since 2006</span>
              </div>
            </div>

            {/* Right: Milestone Breakdown */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-500/10 text-[#b37a00] border border-amber-500/30">
                  {currentTimeline.tag}
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-xs font-black text-slate-500 uppercase tracking-widest">{currentTimeline.era}</span>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#b37a00] block mb-1">
                  Historical Milestone Milestone #{activeYearIndex + 1}
                </span>
                <h3 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
                  {currentTimeline.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                {currentTimeline.milestone}
              </p>

              {/* Strategic Achievement Box */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-50/80 via-white to-amber-50/40 border border-amber-200/80 flex items-center justify-between shadow-sm">
                <div>
                  <span className="text-[10px] uppercase font-black text-slate-500 block tracking-wider">Pivotal Company Achievement</span>
                  <div className="text-base font-black text-slate-900 mt-0.5">{currentTimeline.highlight}</div>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-[#FDB813] text-slate-950 flex items-center justify-center shadow-md shrink-0">
                  <Award className="w-6 h-6" />
                </div>
              </div>

              {/* Stepper Navigation Controls */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-100">
                <div className="text-xs text-slate-500 font-semibold">
                  Viewing Milestone <strong>{activeYearIndex + 1}</strong> of <strong>{CHRONOLOGY.length}</strong> ({currentTimeline.year})
                </div>

                <div className="flex items-center gap-2.5">
                  <button
                    disabled={activeYearIndex === 0}
                    onClick={() => setActiveYearIndex((prev) => Math.max(0, prev - 1))}
                    className="px-4 py-2.5 rounded-xl border border-slate-300 text-xs font-bold disabled:opacity-30 hover:bg-slate-100 transition-all flex items-center gap-1.5"
                  >
                    <span>← Previous Era</span>
                  </button>
                  <button
                    disabled={activeYearIndex === CHRONOLOGY.length - 1}
                    onClick={() => setActiveYearIndex((prev) => Math.min(CHRONOLOGY.length - 1, prev + 1))}
                    className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-[#FDB813] hover:text-slate-950 text-white text-xs font-black disabled:opacity-30 transition-all flex items-center gap-1.5 shadow-md"
                  >
                    <span>Next Era →</span>
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

      </section>

      {/* 3. Innovative Historic Portfolio Gallery (Digitized & Beautified) */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-black uppercase tracking-widest text-[#b37a00] block">
              Proven Delivery Footprint
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mt-1">
              Delivered Landmarks Across Telangana & Karnataka
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Explore our digitized historical registry spanning 1998 to 2026. Every project is certified with cadastral demarcation, 30-year link titles, and spot registration.
            </p>
          </div>

          {/* Master Digitized & Beautified Gallery Component */}
          <HistoricPortfolioGallery />

        </div>
      </section>

      {/* 4. The 6 Major "Why Invest in Abhista Infra's?" Pillars (From history.php) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-black uppercase tracking-widest mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>The Deciding Edge</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Why INVEST in Abhista Infra’s?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            The core tenets that have guided our operations since 2006, ensuring each investor achieves lasting financial security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_INVEST_PILLARS.map((p, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-3xl border border-slate-200 hover:border-[#FDB813] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <span className="text-xs font-black text-[#b37a00] uppercase tracking-wider block">
                  Pillar {p.num}
                </span>
                <h3 className="text-lg font-black text-slate-900 group-hover:text-[#b37a00] transition-colors leading-snug">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span className="text-emerald-700 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Guaranteed Standard
                </span>
                <span>Since 2006</span>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* 5. Ready to Invest Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-[#FDB813] block">
              Join 10,000+ Delighted Landowners
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
              Ready to Secure Your Generational Land?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              Schedule a complimentary site visit with luxury AC cab pickup from anywhere in Hyderabad with zero obligation.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenVisitModal && onOpenVisitModal(null)}
              className="px-6 py-3.5 rounded-xl bg-[#FDB813] hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-md shadow-amber-500/20 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Free Site Visit</span>
            </button>
            <a
              href="tel:+918185898089"
              className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider transition-colors border border-slate-700"
            >
              Call +91 818 5898 089
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
