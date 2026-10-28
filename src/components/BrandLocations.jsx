import React from 'react';
import { MapPin, Navigation, TrendingUp, Building, ArrowUpRight } from 'lucide-react';

const CORRIDORS = [
  {
    id: 'patancheru',
    name: 'Patancheru & Sangareddy',
    region: 'West Hyderabad Growth Corridor',
    highways: 'ORR Exit 3 • Mumbai NH-65 • RRR',
    highlights: 'IIT Hyderabad, BHEL, Neopolis/Kokapet proximity, High land value growth.',
    venturesCount: '3 Ventures (Arrjava, Polam, Mirai)',
    filterKey: 'Patancheru',
    gradient: 'from-emerald-900 to-slate-900',
    tag: 'Highest Appreciation'
  },
  {
    id: 'kothur',
    name: 'Kothur & Shadnagar',
    region: 'South Hyderabad Industrial Hub',
    highways: 'Bangalore Highway NH-44 • Airport SEZ',
    highlights: 'Amazon Data Center, GMR Aerospace, P&G, Johnson & Johnson, 20 mins to RGIA Airport.',
    venturesCount: '3 Ventures (Orchid Bloom, Florance, Seven Oaks)',
    filterKey: 'Kothur',
    gradient: 'from-slate-900 to-emerald-950',
    tag: 'Industrial Belt'
  },
  {
    id: 'shamirpet',
    name: 'Shamirpet & Medchal',
    region: 'North Hyderabad Biotech Valley',
    highways: 'Rajiv Rahadari • Genome Valley Road',
    highlights: 'Genome Valley, Bharat Biotech, BITS Pilani, pristine green ecology and weekend estates.',
    venturesCount: '2 Ventures (Oak Tree, Aurum Heights)',
    filterKey: 'Shamirpet',
    gradient: 'from-emerald-950 to-slate-900',
    tag: 'Eco & Biotech'
  },
  {
    id: 'bengaluru',
    name: 'Bengaluru South & Peripheral',
    region: 'Karnataka High-Tech Expansion',
    highways: 'Hosur Road • Peripheral Ring Road',
    highlights: 'Proximity to IT hubs, premium villa development, institutional capital backing.',
    venturesCount: '2 Ventures (Serene Villas, Abhista Homes)',
    filterKey: 'Bengaluru',
    gradient: 'from-slate-900 to-emerald-900',
    tag: 'Residential Tech'
  }
];

export default function BrandLocations({ onSelectCorridor }) {
  const handleCorridorClick = (filterKey) => {
    if (onSelectCorridor) {
      onSelectCorridor(filterKey);
    }
    const elem = document.getElementById('ventures');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="locations" className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-emerald-800 text-xs font-bold tracking-widest uppercase bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
              Strategic Growth Corridors
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight mt-4">
              Where Capital Meets Compounding Growth.
            </h2>
            <p className="text-base text-slate-600 mt-3 leading-relaxed">
              Every Abhista venture is strictly situated along designated high-growth highways, Regional Ring Road (RRR) nodes, or thriving employment centers.
            </p>
          </div>

          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Click any corridor to filter ventures
          </div>
        </div>

        {/* 4 Corridor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORRIDORS.map((corridor) => (
            <div
              key={corridor.id}
              onClick={() => handleCorridorClick(corridor.filterKey)}
              className="group cursor-pointer rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg hover:border-emerald-700/50 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200">
                    {corridor.tag}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-emerald-800 group-hover:text-white text-slate-600 flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors mb-1">
                  {corridor.name}
                </h3>
                <div className="text-xs font-semibold text-slate-500 mb-3">
                  {corridor.region}
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs text-emerald-700 font-medium mb-4 bg-emerald-50/50 px-2 py-1 rounded">
                  <Navigation className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{corridor.highways}</span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {corridor.highlights}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-800">{corridor.venturesCount}</span>
                <span className="text-emerald-800 font-bold group-hover:underline">Explore &rarr;</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Map Banner */}
        <div className="mt-12 rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">Need Guidance on Which Corridor Fits Your Budget?</h4>
              <p className="text-xs sm:text-sm text-slate-600">
                Our senior portfolio advisors provide zero-obligation land valuation and site feasibility reports.
              </p>
            </div>
          </div>

          <a
            href="tel:+917075528334"
            className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs tracking-wider uppercase whitespace-nowrap transition-colors"
          >
            Speak with Land Advisor (+91 70755 28334)
          </a>
        </div>

      </div>
    </section>
  );
}
