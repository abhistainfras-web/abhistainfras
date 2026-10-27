import React from 'react';
import { Search, MapPin, Building2, SlidersHorizontal, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PROPERTIES } from '../data/properties';

export default function BrandHero({
  filterLocation,
  setFilterLocation,
  filterCategory,
  setFilterCategory,
  onSearchClick,
  onOpenVisitModal
}) {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Trust Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold tracking-wide mb-6">
          <img src="/assets/abhista/abhista-icon.png" alt="Abhista Mark" className="w-4 h-4 object-contain rounded-full" />
          <span>100% Clear Titles • Vedic Vaastu • Hyderabad & Bengaluru</span>
        </div>

        {/* Hero Headline & Subtitle */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Invest in Proven Land & <br />
              <span className="text-[#d99600]">Gated Communities.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
              Abhista Infras crafts masterplanned organic farmlands, HMDA approved gated layouts, and luxury villas along high-growth corridors—built with complete backward integration and absolute legal transparency.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onOpenVisitModal(null)}
                className="px-6 py-3.5 rounded-xl bg-[#FDB813] hover:bg-[#e6a50e] text-slate-950 font-bold text-xs tracking-wider uppercase transition-all shadow-md shadow-amber-500/20 flex items-center gap-2"
              >
                <span>Schedule a Site Visit</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#ventures"
                className="px-6 py-3.5 rounded-xl border border-slate-300 hover:border-slate-900 bg-white text-slate-800 font-bold text-xs tracking-wider uppercase transition-colors"
              >
                View 10 Projects
              </a>
            </div>

            {/* Quick Guarantees Row */}
            <div className="pt-4 flex flex-wrap gap-6 text-xs text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600" />
                <span>Immediate Spot Registration</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600" />
                <span>100% Vaastu Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600" />
                <span>Bank Loan Approved Layouts</span>
              </div>
            </div>
          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/3] relative">
              <img
                src="/assets/abhista/arrjava-banner.jpg"
                alt="Arrjava Farms Patancheru"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="px-3 py-1 rounded-full bg-emerald-800/90 text-[10px] uppercase font-bold tracking-wider text-emerald-100">
                  Featured Venture
                </span>
                <h3 className="text-2xl font-bold mt-2">Arrjava Farms, Patancheru</h3>
                <p className="text-xs text-slate-200 mt-0.5">151 Sq. Yards Farm Plots • Minutes from ORR Junction</p>
                <div className="mt-2 text-sm font-bold text-amber-300">₹42 Lakhs onwards</div>
              </div>
            </div>
          </div>

        </div>

        {/* Floating Quick Search & Filter Strip */}
        <div className="mt-12 bg-white rounded-2xl p-4 sm:p-5 shadow-xl border border-slate-200">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 items-center">
            
            {/* Location Selector */}
            <div className="px-3 border-b sm:border-b-0 sm:border-r border-slate-200 pb-2 sm:pb-0">
              <label className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                Corridor / Location
              </label>
              <select
                value={filterLocation}
                onChange={(e) => setFilterLocation(e.target.value)}
                className="w-full bg-transparent text-slate-800 text-xs font-semibold focus:outline-none cursor-pointer"
              >
                <option value="all">All Locations</option>
                <option value="Patancheru">Patancheru / Begumpet (ORR)</option>
                <option value="Kothur">Kothur & Shadnagar (NH-44)</option>
                <option value="Shamirpet">Shamirpet (Biotech Hub)</option>
                <option value="Shabad">Chegur / Shabad (Bangalore Hwy)</option>
                <option value="Bengaluru">Bengaluru South (Jigani & Kanakapura)</option>
              </select>
            </div>

            {/* Type Selector */}
            <div className="px-3 border-b sm:border-b-0 lg:border-r border-slate-200 pb-2 sm:pb-0">
              <label className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-1 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-emerald-700" />
                Venture Type
              </label>
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="w-full bg-transparent text-slate-800 text-xs font-semibold focus:outline-none cursor-pointer"
              >
                <option value="all">All Types</option>
                <option value="farmland">Organic Farmland Plots</option>
                <option value="residential">HMDA & DTCP Layouts / Villas</option>
              </select>
            </div>

            {/* Price Selector */}
            <div className="px-3 border-b sm:border-b-0 sm:border-r border-slate-200 pb-2 sm:pb-0">
              <label className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-1 flex items-center gap-1.5">
                <SlidersHorizontal className="w-3.5 h-3.5 text-emerald-700" />
                Budget Tier
              </label>
              <div className="text-xs font-semibold text-slate-800">
                ₹28 Lakhs — ₹75 Lakhs
              </div>
            </div>

            {/* Search CTA */}
            <div>
              <button
                onClick={onSearchClick}
                className="w-full py-3 rounded-xl bg-[#FDB813] hover:bg-[#e6a50e] text-slate-950 font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <Search className="w-4 h-4" />
                <span>Search Projects</span>
              </button>
            </div>

          </div>
        </div>

        {/* Brand Key Stats Row */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center border-t border-slate-200 pt-10">
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#d99600]">18+ Years</div>
            <div className="text-xs text-slate-600 font-semibold mt-1">Heritage (Est. 2006)</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#d99600]">100+ Acres</div>
            <div className="text-xs text-slate-600 font-semibold mt-1">Masterplanned Farmland</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#d99600]">100% Clear</div>
            <div className="text-xs text-slate-600 font-semibold mt-1">Titles & Due Diligence</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#d99600]">10,000+</div>
            <div className="text-xs text-slate-600 font-semibold mt-1">Satisfied Investor Families</div>
          </div>
        </div>

      </div>
    </section>
  );
}
