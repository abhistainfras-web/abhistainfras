import React, { useState } from 'react';
import { PROPERTIES, COMPANY_INFO } from '../data/properties';
import { formatCurrencyValue } from './PropertyCard';
import { Map, Layers, CheckCircle, Clock, Compass, Phone, Sparkles, ArrowRight, Eye, Video, Download } from 'lucide-react';

export default function ModelInteractive({ currency, onSelectProperty, onOpenViewingModal }) {
  const [selectedVenture, setSelectedVenture] = useState(PROPERTIES[0]);
  const [selectedFacing, setSelectedFacing] = useState('all');
  const [activePlot, setActivePlot] = useState(null);

  // Generate simulated authentic plots for the selected venture
  const plots = Array.from({ length: 24 }, (_, i) => {
    const plotNo = 101 + i;
    const facings = ['East', 'North', 'West', 'East'];
    const facing = facings[i % facings.length];
    const statuses = ['Available', 'Available', 'Reserved', 'Available', 'Available', 'Fast Selling'];
    const status = statuses[i % statuses.length];
    const size = i % 5 === 0 ? 200 : 151;
    const price = Math.round(selectedVenture.priceINR * (size / 151));

    return {
      plotNo,
      facing,
      size: `${size} Sq.Yds`,
      status,
      price,
      road: i < 12 ? '33-Foot Avenue Road' : '40-Foot Main Spine'
    };
  });

  const filteredPlots = plots.filter((p) => {
    if (selectedFacing === 'all') return true;
    return p.facing === selectedFacing;
  });

  return (
    <div className="bg-[#0a0f1d] text-slate-100 font-sans min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* High-Tech Top Navigation */}
      <nav className="border-b border-cyan-500/20 bg-[#0d1426]/90 backdrop-blur-md sticky top-0 z-40 px-6 sm:px-10 py-3.5 shadow-lg shadow-cyan-950/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-cyan-600 to-blue-500 flex items-center justify-center font-bold text-white shadow-lg shadow-cyan-500/30">
              AI
            </div>
            <div>
              <span className="font-bold tracking-wider text-white text-base block leading-none">ABHISTA INTERACTIVE</span>
              <span className="text-[10px] tracking-widest text-cyan-400 font-mono">PORTAL • 3D MASTERPLAN EXPLORER</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-xs font-mono uppercase text-slate-300">
            <a href="#interactive-picker" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              Live Plot Picker
            </a>
            <a href="#portfolio-grid" className="hover:text-cyan-400 transition-colors">Ventures</a>
            <a href="tel:+917075528334" className="text-cyan-400 font-bold flex items-center gap-1">
              <Phone className="w-3.5 h-3.5" />
              +91 70755 28334
            </a>
          </div>

          <button
            onClick={() => onOpenViewingModal(selectedVenture)}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/20"
          >
            Schedule Site Tour
          </button>
        </div>
      </nav>

      {/* Interactive Hero with Live Plot Telemetry */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-12 lg:py-16">
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-[10px] uppercase font-mono tracking-widest mb-3">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            Live Plot Availability & Layout Engine
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Explore & Select Your Plot in <br />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
              Real-Time 3D Interactive Masterplans
            </span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 font-light max-w-xl mx-auto">
            Click any plot below to inspect Vaastu facing, square yardage, road approach width, and lock in special pre-launch pricing.
          </p>
        </div>

        {/* Venture Selector Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 justify-start sm:justify-center mb-8">
          {PROPERTIES.slice(0, 5).map((v) => (
            <button
              key={v.id}
              onClick={() => {
                setSelectedVenture(v);
                setActivePlot(null);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono whitespace-nowrap transition-all ${
                selectedVenture.id === v.id
                  ? 'bg-cyan-500 text-black font-bold shadow-lg shadow-cyan-500/25 scale-105'
                  : 'bg-[#131b30] border border-cyan-500/20 text-slate-300 hover:border-cyan-400'
              }`}
            >
              {v.title}
            </button>
          ))}
        </div>

        {/* Interactive Masterplan & Plot Matrix */}
        <div id="interactive-picker" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Masterplan Visual / Schematic */}
          <div className="lg:col-span-7 bg-[#0f172a] rounded-3xl p-6 border border-cyan-500/30 shadow-2xl space-y-4">
            
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">{selectedVenture.enclave}</span>
                <h3 className="text-lg font-bold text-white">{selectedVenture.title} — Master Layout</h3>
              </div>

              {/* Facing Filter */}
              <div className="flex items-center gap-1.5 bg-[#0a0f1d] p-1 rounded-xl border border-white/10 text-xs">
                <span className="text-[10px] text-slate-400 px-2 font-mono">Facing:</span>
                {['all', 'East', 'North', 'West'].map((f) => (
                  <button
                    key={f}
                    onClick={() => setSelectedFacing(f)}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-mono ${
                      selectedFacing === f ? 'bg-cyan-500 text-black font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {f.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Layout Image Preview or Visual Grid */}
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-black border border-white/10">
              <img
                src={selectedVenture.layoutImage || selectedVenture.heroImage}
                alt="Master Layout"
                className="w-full h-full object-contain p-2"
              />
              <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-cyan-300 border border-cyan-500/30">
                ● LIVE SECTOR INTERACTIVE MATRIX
              </div>
            </div>

            {/* Plot Grid Picker */}
            <div>
              <div className="flex justify-between items-center text-xs font-mono text-slate-400 mb-2">
                <span>Select Plot to View Specifications:</span>
                <div className="flex items-center gap-3 text-[10px]">
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-400"></span> Available</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-400"></span> Fast Selling</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-slate-600"></span> Reserved</span>
                </div>
              </div>

              <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                {filteredPlots.map((plot) => {
                  const isSelected = activePlot?.plotNo === plot.plotNo;
                  const isReserved = plot.status === 'Reserved';
                  const isFast = plot.status === 'Fast Selling';

                  return (
                    <button
                      key={plot.plotNo}
                      disabled={isReserved}
                      onClick={() => setActivePlot(plot)}
                      className={`p-2.5 rounded-xl border text-center transition-all ${
                        isSelected
                          ? 'bg-cyan-500 border-cyan-300 text-black font-bold scale-105 shadow-lg shadow-cyan-500/30'
                          : isReserved
                          ? 'bg-slate-900/60 border-slate-800 text-slate-600 cursor-not-allowed'
                          : isFast
                          ? 'bg-amber-950/30 border-amber-500/40 text-amber-300 hover:border-amber-400'
                          : 'bg-[#111c38] border-cyan-500/20 text-slate-200 hover:border-cyan-400'
                      }`}
                    >
                      <div className="text-[11px] font-mono font-bold">#{plot.plotNo}</div>
                      <div className="text-[9px] opacity-75 font-mono">{plot.size}</div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right: Selected Plot Intelligence Dossier */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#0f172a] to-[#0d1426] rounded-3xl p-6 border border-cyan-500/30 shadow-2xl flex flex-col justify-between">
            {activePlot ? (
              <div className="space-y-5 animate-fade-in">
                <div className="border-b border-white/10 pb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400">Plot Telemetry Dossier</span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold ${
                      activePlot.status === 'Available' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'
                    }`}>
                      {activePlot.status}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mt-1">Plot #{activePlot.plotNo} — {selectedVenture.title}</h3>
                  <div className="text-xs text-slate-400 mt-0.5">{selectedVenture.location}</div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-[10px] font-mono text-slate-400">Plot Dimensions</span>
                    <div className="text-sm font-bold text-white mt-0.5">{activePlot.size}</div>
                  </div>
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-[10px] font-mono text-slate-400">Vaastu Orientation</span>
                    <div className="text-sm font-bold text-cyan-400 mt-0.5">{activePlot.facing} Facing (100% Vaastu)</div>
                  </div>
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-[10px] font-mono text-slate-400">Road Approach</span>
                    <div className="text-sm font-bold text-white mt-0.5">{activePlot.road}</div>
                  </div>
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-[10px] font-mono text-slate-400">Legal Registration</span>
                    <div className="text-sm font-bold text-emerald-400 mt-0.5">Spot Registration Ready</div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/30">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-300">Estimated Total Outlay</span>
                  <div className="text-2xl font-bold text-white mt-0.5">
                    {formatCurrencyValue(activePlot.price, currency)}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">
                    * Includes layout infrastructure, water connection, avenue trees & clear title transfer.
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <button
                    onClick={() => onOpenViewingModal({
                      title: `${selectedVenture.title} (Plot #${activePlot.plotNo} - ${activePlot.size} ${activePlot.facing} Facing)`,
                      plotSize: activePlot.size
                    })}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
                  >
                    <span>Reserve Plot #{activePlot.plotNo} for Site Tour</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {selectedVenture.brochurePdf && (
                    <a
                      href={selectedVenture.brochurePdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 rounded-xl border border-cyan-500/30 hover:bg-cyan-500/10 text-cyan-300 text-xs font-mono flex items-center justify-center gap-2 transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Official PDF Brochure</span>
                    </a>
                  )}
                </div>
              </div>
            ) : (
              <div className="text-center py-20 text-slate-400 space-y-3">
                <Compass className="w-12 h-12 text-cyan-400/50 mx-auto animate-pulse" />
                <h4 className="text-base font-bold text-white">No Plot Selected</h4>
                <p className="text-xs text-slate-400 max-w-xs mx-auto">
                  Click on any numbered plot tile in the matrix to view its live orientation, square yardage, and reserve for a site visit.
                </p>
              </div>
            )}
          </div>

        </div>

      </section>

      {/* Ventures Catalog Grid */}
      <section id="portfolio-grid" className="max-w-7xl mx-auto px-6 sm:px-10 py-16 border-t border-cyan-500/20">
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">All Ventures</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mt-1">Abhista Project Fleet</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROPERTIES.map((p) => (
            <div
              key={p.id}
              className="bg-[#0f172a] rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-400 transition-all group flex flex-col justify-between"
            >
              <div className="aspect-[16/10] overflow-hidden relative cursor-pointer" onClick={() => onSelectProperty(p)}>
                <img src={p.heroImage} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3 bg-black/80 px-2.5 py-1 rounded-md text-[10px] font-mono text-cyan-300 border border-cyan-500/30">
                  {p.tag}
                </div>
              </div>

              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <div className="text-[10px] font-mono text-cyan-400">{p.enclave}</div>
                  <h3 onClick={() => onSelectProperty(p)} className="text-lg font-bold text-white hover:text-cyan-300 cursor-pointer transition-colors mt-0.5">{p.title}</h3>
                  <div className="text-xs text-slate-400 mt-1">{p.plotSize} • {p.landExtent}</div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-white/10 mt-4">
                  <div className="text-sm font-bold text-white">
                    {formatCurrencyValue(p.priceINR, currency)}
                  </div>
                  <button
                    onClick={() => onSelectProperty(p)}
                    className="px-3.5 py-1.5 rounded-lg bg-cyan-500 text-black font-bold text-xs uppercase"
                  >
                    View Specs
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* High-Tech Footer */}
      <footer className="border-t border-cyan-500/20 bg-[#060a14] py-10 px-6 sm:px-10 text-xs font-mono text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <strong className="text-white">ABHISTA INFRA'S (EST. 2016)</strong> — Madhapur Corporate HQ, Hyderabad
          </div>
          <div className="flex gap-4">
            <a href="tel:+917075528334" className="text-cyan-400">+91 70755 28334</a>
            <a href="mailto:info@abhista.in" className="text-cyan-400">info@abhista.in</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
