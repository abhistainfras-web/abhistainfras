import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Navigation, TrendingUp, Building2, Car, ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

const CORRIDORS = [
  {
    id: 'west',
    name: 'West Hyderabad (Patancheru / ORR Exit 3)',
    tag: 'Neopolis & Financial District Growth Belt',
    driveTime: '20-25 Mins from Wipro Circle',
    expressway: 'Nehru Outer Ring Road (ORR) 8-Lane Expressway',
    catalysts: [
      'Direct link to Neopolis SEZ & Kokapet High-Rise IT District',
      'IIT Hyderabad Kandi & Gitam University Education Hub',
      'Seamless connectivity to Mumbai Highway (NH-65)',
      'Upcoming Regional Ring Road (RRR) interchange'
    ],
    ventures: [
      { name: 'Arrjava Farms', id: 'abhista-01', type: 'Managed Farmland', size: '200-605 Sq.Yds' },
      { name: 'Mirai Farms', id: 'abhista-04', type: 'Organic Agro Estate', size: '250-605 Sq.Yds' }
    ],
    appreciationRate: '16.8% CAGR over 5 Years'
  },
  {
    id: 'south',
    name: 'South Hyderabad (Kothur / NH-44 Highway)',
    tag: 'Airport SEZ & Industrial Powerhouse',
    driveTime: '18-30 Mins from RGIA Shamshabad Airport',
    expressway: 'NH-44 Hyderabad-Bengaluru National Highway',
    catalysts: [
      'GMR Hyderabad Aerotropolis & Aerospace Park',
      'Amazon Mega Fulfillment Centers & Data Center Belt',
      'Symbiosis International University & Special Economic Zones',
      'Proximity to upcoming Pharma City & P&G / Johnson & Johnson Hubs'
    ],
    ventures: [
      { name: 'Orchid Bloom', id: 'abhista-02', type: 'HMDA Plotted Community', size: '150-300 Sq.Yds' },
      { name: 'Florance', id: 'abhista-09', type: 'Gated Villa Layout', size: '165-250 Sq.Yds' }
    ],
    appreciationRate: '15.2% CAGR over 5 Years'
  },
  {
    id: 'north',
    name: 'North Hyderabad (Shamirpet / Genome Valley)',
    tag: 'Global Biotech, Clean Air & Innovation Belt',
    driveTime: '35-40 Mins via ORR Exit 7',
    expressway: 'Rajiv Rahadari State Highway & ORR Northern Arc',
    catalysts: [
      'Genome Valley: India’s premier life-sciences research hub (Bharat Biotech, Biological E)',
      'BITS Pilani Hyderabad Campus & Top Medical Universities',
      'Lush green ecologically conserved water-body surroundings',
      'Fast connectivity to Secunderabad railway terminal'
    ],
    ventures: [
      { name: 'Oak Tree Farms', id: 'abhista-03', type: 'Eco Agroforestry Farmland', size: '300-1,210 Sq.Yds' }
    ],
    appreciationRate: '13.8% CAGR over 5 Years'
  },
  {
    id: 'southwest',
    name: 'South-West Agro Corridor (Shabad / Chevella)',
    tag: 'Lush Green Weekend Countryside Living',
    driveTime: '35-40 Mins from Appa Junction / ORR',
    expressway: 'Chevella - Shabad Arterial Highway',
    catalysts: [
      'Dense fertile black soil agricultural belt',
      'Surrounded by luxury weekend farm houses & golf resorts',
      'Direct link to proposed Regional Ring Road (RRR) ring',
      'Peaceful, unpolluted nature lifestyle retreat'
    ],
    ventures: [
      { name: 'Radha Farms', id: 'abhista-07', type: '14-Acre Farmland Estate', size: '267-600 Sq.Yds' }
    ],
    appreciationRate: '14.5% CAGR over 5 Years'
  },
  {
    id: 'bengaluru',
    name: 'Bengaluru Southern Corridor',
    tag: 'Silicon Valley Expansion Matrix',
    driveTime: '20-30 Mins from Electronic City',
    expressway: 'Hosur Road Elevated Expressway & Peripheral Ring Road',
    catalysts: [
      'Direct access to Electronic City Tech Corridors & Infosys/Wipro',
      'Metro Phase expansion along South Bengaluru',
      '18+ years of delivered plotted benchmarks by Abhista group',
      'High rental and capital appreciation dynamics'
    ],
    ventures: [
      { name: 'Abhista Serene', id: 'abhista-05', type: 'Plotted Community', size: '150-300 Sq.Yds' }
    ],
    appreciationRate: '14.1% CAGR over 5 Years'
  }
];

export default function InteractiveCorridorMap({ onOpenVisitModal }) {
  const [selectedCorridorId, setSelectedCorridorId] = useState('west');
  const currentCorridor = CORRIDORS.find((c) => c.id === selectedCorridorId) || CORRIDORS[0];

  return (
    <section className="py-24 bg-white text-slate-900 border-b border-slate-200" id="growth-corridors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-[#b37a00] text-xs font-black uppercase tracking-widest mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Strategic Location Intelligence</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Hyderabad & Bengaluru Growth Corridors
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            We don’t just acquire land—we position our ventures directly along multi-crore infrastructure growth axes to ensure maximum compounding wealth.
          </p>
        </div>

        {/* Corridor Switcher Buttons */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-10">
          {CORRIDORS.map((c) => {
            const isSelected = selectedCorridorId === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setSelectedCorridorId(c.id)}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-black transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-xl scale-105'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                <MapPin className={`w-3.5 h-3.5 ${isSelected ? 'text-[#FDB813]' : 'text-slate-500'}`} />
                <span>{c.name.split('(')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Master Corridor Dossier Box */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-slate-200 gap-4">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-[#b37a00] block">
                {currentCorridor.tag}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                {currentCorridor.name}
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="px-4 py-2 rounded-xl bg-emerald-100 text-emerald-900 text-xs font-black flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-emerald-700" />
                <span>{currentCorridor.appreciationRate}</span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1.5">
                <Car className="w-4 h-4 text-[#b37a00]" />
                <span>{currentCorridor.driveTime}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8 items-start">
            
            {/* Left: Catalysts */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-black uppercase tracking-wider text-slate-500 block">
                Government Infrastructure & High-Value Catalysts:
              </span>
              <div className="space-y-3">
                {currentCorridor.catalysts.map((cat, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">{cat}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 italic pt-1">
                Major Transit Link: <strong>{currentCorridor.expressway}</strong>
              </p>
            </div>

            {/* Right: Active Abhista Ventures in this corridor */}
            <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 sm:p-7 space-y-4 shadow-xl">
              <div>
                <span className="text-[10px] uppercase font-black tracking-widest text-[#FDB813] block">
                  Abhista Landmark Presence
                </span>
                <h4 className="text-lg font-black text-white mt-0.5">
                  Ventures in This Corridor
                </h4>
              </div>

              <div className="space-y-3">
                {currentCorridor.ventures.map((v, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-extrabold text-white">{v.name}</div>
                      <span className="text-[11px] text-slate-400">{v.type} • {v.size}</span>
                    </div>
                    <Link
                      to={`/projects/${v.id}`}
                      className="px-3 py-1.5 rounded-lg bg-[#FDB813] text-slate-950 text-xs font-black uppercase tracking-wider hover:bg-amber-400 transition-colors"
                    >
                      Dossier
                    </Link>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onOpenVisitModal && onOpenVisitModal({
                  title: `${currentCorridor.name} Site Inspection`,
                  location: currentCorridor.name
                })}
                className="w-full mt-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <Car className="w-4 h-4" />
                <span>Book Free AC Cab to this Corridor</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
