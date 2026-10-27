import React, { useState } from 'react';
import { PROPERTIES } from '../data/properties';
import { formatCurrencyValue } from './PropertyCard';
import { Map, Layers, Download, Calendar, ArrowUpRight, Check, Compass } from 'lucide-react';

export default function MahiraInteractiveExplore({ onSelectProperty, onOpenViewingModal, currency }) {
  const [selectedVenture, setSelectedVenture] = useState(PROPERTIES[0]);
  const [selectedFacing, setSelectedFacing] = useState('all');
  const [activePlot, setActivePlot] = useState(null);

  // 24 simulated real plots for interactive exploration
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
    <section id="explore" className="py-24 px-6 sm:px-12 bg-gradient-to-b from-[#060907] via-[#09120c] to-[#060907] border-b border-[#c9a35f]/25">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <p className="text-[11px] font-semibold tracking-[0.42em] uppercase text-[#e8c87a]">
            Interactive Masterplan & Cad
          </p>
          <h2 className="font-garamond text-4xl sm:text-6xl font-normal text-white uppercase tracking-wider leading-tight">
            Explore The <em className="font-serif italic text-[#e8c87a] lowercase">Layouts</em>
          </h2>
          <div className="pt-2 pb-2">
            <div className="ornamental-line"></div>
          </div>
          <p className="font-sans text-xs sm:text-sm text-[#fbf1d3]/70 font-light max-w-xl mx-auto">
            Select any venture to review CAD layout drawings, inspect plot dimensions, and check Vaastu orientation in real-time.
          </p>
        </div>

        {/* Venture Selector Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 justify-start sm:justify-center">
          {PROPERTIES.slice(0, 6).map((v) => (
            <button
              key={v.id}
              onClick={() => {
                setSelectedVenture(v);
                setActivePlot(null);
              }}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all ${
                selectedVenture.id === v.id
                  ? 'bg-gradient-to-r from-[#e8c87a] to-[#c9a35f] text-[#060907] shadow-lg shadow-[#c9a35f]/20 scale-105'
                  : 'bg-[#0d1510] border border-[#c9a35f]/30 text-[#fbf1d3]/70 hover:border-[#c9a35f]'
              }`}
            >
              {v.title}
            </button>
          ))}
        </div>

        {/* Interactive Masterplan & Plot Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Layout Visual */}
          <div className="lg:col-span-7 bg-[#0a110b] rounded-3xl p-6 sm:p-8 border border-[#c9a35f]/35 shadow-2xl space-y-5">
            
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#e8c87a] font-semibold">{selectedVenture.enclave}</span>
                <h3 className="font-garamond text-2xl font-medium text-white">{selectedVenture.title} — Master Layout</h3>
              </div>

              {/* Facing Selector */}
              <div className="flex items-center gap-1.5 bg-[#060907] p-1 rounded-full border border-white/10 text-xs">
                <span className="text-[10px] text-slate-400 px-2 uppercase font-medium">Facing:</span>
                {['all', 'East', 'North', 'West'].map((f) => (
                  <button
                    key={f}
                    onClick={() => setSelectedFacing(f)}
                    className={`px-3 py-1 rounded-full text-[10px] font-semibold uppercase transition-all ${
                      selectedFacing === f ? 'bg-[#c9a35f] text-black' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* Layout Image */}
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-black border border-white/10">
              <img
                src={selectedVenture.layoutImage || selectedVenture.heroImage}
                alt="CAD Master Layout"
                className="w-full h-full object-contain p-2"
              />
              <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-mono text-[#e8c87a] border border-[#c9a35f]/40">
                ● CAD CERTIFIED MASTERPLAN SCHEMATIC
              </div>
            </div>

            {/* Plot Picker Grid */}
            <div>
              <div className="flex justify-between items-center text-xs text-slate-400 mb-2.5 font-light">
                <span>Select Plot to Inspect Vaastu & Dimensions:</span>
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
                          ? 'bg-[#c9a35f] border-[#fbf1d3] text-black font-bold scale-105 shadow-lg shadow-[#c9a35f]/30'
                          : isReserved
                          ? 'bg-black/60 border-slate-800 text-slate-600 cursor-not-allowed'
                          : isFast
                          ? 'bg-amber-950/40 border-amber-500/50 text-amber-300 hover:border-amber-400'
                          : 'bg-[#0e1910] border-[#c9a35f]/25 text-[#fbf1d3] hover:border-[#c9a35f]'
                      }`}
                    >
                      <div className="text-[11px] font-bold">#{plot.plotNo}</div>
                      <div className="text-[9px] opacity-75">{plot.size}</div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right: Selected Plot Dossier */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#0e1a12] to-[#070e09] rounded-3xl p-6 sm:p-8 border border-[#c9a35f]/35 shadow-2xl flex flex-col justify-between">
            {activePlot ? (
              <div className="space-y-6 animate-fade-in">
                <div className="border-b border-white/10 pb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] uppercase tracking-widest text-[#e8c87a] font-semibold">Plot Specifications</span>
                    <span className={`px-3 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                      activePlot.status === 'Available' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                    }`}>
                      {activePlot.status}
                    </span>
                  </div>
                  <h3 className="font-garamond text-3xl font-medium text-white mt-1">
                    Plot #{activePlot.plotNo} — {selectedVenture.title}
                  </h3>
                  <div className="text-xs text-[#fbf1d3]/70 mt-0.5">{selectedVenture.location}</div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-[10px] uppercase text-[#e8c87a]">Dimensions</span>
                    <div className="text-sm font-bold text-white mt-0.5">{activePlot.size}</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-[10px] uppercase text-[#e8c87a]">Vaastu Facing</span>
                    <div className="text-sm font-bold text-emerald-400 mt-0.5">{activePlot.facing} Facing (100%)</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-[10px] uppercase text-[#e8c87a]">Approach</span>
                    <div className="text-sm font-bold text-white mt-0.5">{activePlot.road}</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-[10px] uppercase text-[#e8c87a]">Legal Title</span>
                    <div className="text-sm font-bold text-emerald-400 mt-0.5">Spot Registration Ready</div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#09140b] border border-[#c9a35f]/40">
                  <span className="text-[10px] uppercase tracking-widest text-[#e8c87a] font-semibold">Total Outlay Estimate</span>
                  <div className="font-serif text-3xl font-bold gold-gradient-text mt-0.5">
                    {formatCurrencyValue(activePlot.price, currency)}
                  </div>
                  <div className="text-[10px] text-[#fbf1d3]/60 mt-1">
                    * Includes underground water pipeline connection, internal road paving & boundary demarcation.
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <button
                    onClick={() => onOpenViewingModal({
                      title: `${selectedVenture.title} (Plot #${activePlot.plotNo} - ${activePlot.size} ${activePlot.facing} Facing)`,
                      plotSize: activePlot.size
                    })}
                    className="w-full py-4 rounded-xl gold-gradient-bg text-obsidian-950 font-bold text-xs uppercase tracking-widest hover:scale-[1.02] transition-all flex items-center justify-center gap-2 shadow-xl shadow-gold-500/20"
                  >
                    <span>Reserve Plot #{activePlot.plotNo} for Site Tour</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  {selectedVenture.brochurePdf && (
                    <a
                      href={selectedVenture.brochurePdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 rounded-xl border border-[#c9a35f]/40 hover:bg-[#c9a35f]/15 text-[#e8c87a] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Official PDF Brochure</span>
                    </a>
                  )}
                </div>
              </div>
            ) : (
              <div className="text-center py-24 text-slate-400 space-y-4">
                <Compass className="w-14 h-14 text-[#c9a35f]/40 mx-auto animate-pulse" />
                <h4 className="font-garamond text-2xl font-medium text-white">Select Any Plot</h4>
                <p className="text-xs text-[#fbf1d3]/60 max-w-xs mx-auto leading-relaxed">
                  Click on any numbered plot tile in the matrix to view its live orientation, square yardage, and reserve for a chauffeured site visit.
                </p>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
