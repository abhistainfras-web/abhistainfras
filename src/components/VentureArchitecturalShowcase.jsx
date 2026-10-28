import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PROPERTIES } from '../data/properties';
import { formatCurrencyValue } from './PropertyCard';
import { MapPin, Trees, Building2, ArrowRight, Download, Eye, ShieldCheck, CheckCircle2, Calendar, Compass, Sparkles, Filter } from 'lucide-react';

export default function VentureArchitecturalShowcase({ onSelectProperty, onOpenVisitModal }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPropertyId, setSelectedPropertyId] = useState(PROPERTIES[0].id);

  const filteredProperties = PROPERTIES.filter((p) => {
    if (activeCategory === 'farmland') return p.category === 'farmland';
    if (activeCategory === 'residential') return p.category === 'residential';
    if (activeCategory === 'completed') return p.status === 'completed';
    return true;
  });

  const activeProperty = PROPERTIES.find((p) => p.id === selectedPropertyId) || PROPERTIES[0];

  const categories = [
    { id: 'all', label: `All 11 Ventures (${PROPERTIES.length})` },
    { id: 'farmland', label: 'Managed Farmlands' },
    { id: 'residential', label: 'HMDA Plotted Gated' },
    { id: 'completed', label: 'Completed Benchmarks' }
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#FAF9F6] text-slate-900 border-b border-slate-200" id="signature-portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-[#b37a00] text-xs font-extrabold uppercase tracking-widest mb-3">
              <Building2 className="w-3.5 h-3.5" />
              <span>Project Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Featured Land & Farmland Ventures
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Masterplanned developments across Hyderabad's primary expressways. Clear legal link titles, verified survey boundaries, and spot registration.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => {
                  setActiveCategory(c.id);
                  const firstInCat = PROPERTIES.find((p) => {
                    if (c.id === 'farmland') return p.category === 'farmland';
                    if (c.id === 'residential') return p.category === 'residential';
                    if (c.id === 'completed') return p.status === 'completed';
                    return true;
                  });
                  if (firstInCat) setSelectedPropertyId(firstInCat.id);
                }}
                className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all whitespace-nowrap ${
                  activeCategory === c.id
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Master Architectural Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (5 cols): Interactive Venture Catalog List */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block px-1">
              Select Venture to Inspect Blueprint:
            </span>

            <div className="space-y-2.5 max-h-[720px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-300">
              {filteredProperties.map((p, index) => {
                const isSelected = p.id === activeProperty.id;
                const indexFormatted = String(index + 1).padStart(2, '0');
                return (
                  <div
                    key={p.id}
                    onClick={() => setSelectedPropertyId(p.id)}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer relative group flex items-center justify-between ${
                      isSelected
                        ? 'bg-white border-[#FDB813] shadow-xl shadow-amber-500/15 scale-[1.01]'
                        : 'bg-white/80 hover:bg-white border-slate-200/90 hover:border-[#FDB813]/40 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <span className={`text-xs font-black transition-colors ${
                        isSelected ? 'text-[#b37a00]' : 'text-slate-400 group-hover:text-slate-600'
                      }`}>
                        {indexFormatted}
                      </span>
                      <div>
                        <h4 className={`text-base font-black transition-colors ${
                          isSelected ? 'text-slate-900' : 'text-slate-800 group-hover:text-[#b37a00]'
                        }`}>
                          {p.title}
                        </h4>
                        <div className="flex items-center gap-2 mt-0.5 text-xs text-slate-500">
                          <MapPin className="w-3 h-3 text-[#b37a00]" />
                          <span>{p.location.split(',')[0]}</span>
                          <span className="text-slate-300">•</span>
                          <span className="font-semibold text-slate-700">{p.sqYards}</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-xs font-extrabold text-slate-900 block">
                        {p.formattedPrice}
                      </span>
                      <span className={`inline-flex items-center text-[10px] font-bold uppercase px-2 py-0.5 rounded-full mt-1 ${
                        p.status === 'completed'
                          ? 'bg-slate-100 text-slate-600'
                          : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      }`}>
                        {p.status === 'completed' ? 'Delivered' : 'Active'}
                      </span>
                    </div>

                    {isSelected && (
                      <div className="absolute left-0 top-3 bottom-3 w-1.5 bg-[#FDB813] rounded-r-full" />
                    )}
                  </div>
                );
              })}
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 text-white flex items-center justify-between mt-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FDB813]">
                  Have a specific locality in mind?
                </span>
                <p className="text-xs text-slate-300 mt-0.5">Filter by Patancheru, Kothur, Shamirpet, or Bengaluru</p>
              </div>
              <Link
                to="/projects"
                className="px-4 py-2 rounded-xl bg-[#FDB813] hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shrink-0"
              >
                All 11 Grid
              </Link>
            </div>
          </div>

          {/* Right Column (7 cols): Large Format Architectural Dossier Viewport */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xl relative overflow-hidden">
            
            {/* Top Bar of Active Dossier */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[11px] font-black uppercase tracking-widest text-[#b37a00]">
                    {activeProperty.category === 'farmland' ? 'Organic Farmland Retreat' : 'Plotted Community'}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="text-xs text-slate-500 font-semibold">{activeProperty.enclave}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {activeProperty.title}
                </h3>
              </div>

              <div className="text-left sm:text-right">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Starting Investment</span>
                <div className="text-2xl font-black text-slate-900">
                  {activeProperty.formattedPrice}
                </div>
              </div>
            </div>

            {/* Cinematic Large Photo Display */}
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mt-6 bg-slate-950 group">
              <img
                src={activeProperty.heroImage}
                alt={activeProperty.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

              {/* Badges on Image */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-slate-950/80 text-white backdrop-blur-md border border-white/20">
                  {activeProperty.location}
                </span>
              </div>

              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <p className="text-xs text-slate-200 italic max-w-md line-clamp-1 sm:line-clamp-none">
                  "{activeProperty.tagline}"
                </p>
                {activeProperty.layoutImage && (
                  <button
                    onClick={() => onSelectProperty && onSelectProperty(activeProperty)}
                    className="self-start sm:self-auto px-3 py-1.5 rounded-lg bg-[#FDB813] text-slate-950 text-xs font-bold uppercase tracking-wider shadow-md hover:bg-amber-400 transition-all flex items-center gap-1 shrink-0"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View CAD</span>
                  </button>
                )}
              </div>
            </div>

            {/* Architectural Specifications Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
              <div className="p-3 sm:p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Plot Dimensions</span>
                <span className="font-extrabold text-slate-900 text-xs mt-0.5 block">{activeProperty.sqYards}</span>
              </div>

              <div className="p-3 sm:p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Cap Rate Yield</span>
                <span className="font-extrabold text-emerald-700 text-xs mt-0.5 block">{activeProperty.capRate}</span>
              </div>

              <div className="p-3 sm:p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">5Y Growth Record</span>
                <span className="font-extrabold text-[#b37a00] text-xs mt-0.5 block">{activeProperty.appreciation5Y}</span>
              </div>

              <div className="p-3 sm:p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Vaastu Alignment</span>
                <span className="font-extrabold text-slate-900 text-xs mt-0.5 block">100% Compliant</span>
              </div>
            </div>

            {/* Curated Amenities Checklist */}
            <div className="space-y-2 mb-6">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                Infrastructure & Plantation Included:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                {activeProperty.features.slice(0, 4).map((f, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                to={`/projects/${activeProperty.id}`}
                className="w-full sm:flex-1 py-3.5 px-5 rounded-xl bg-slate-900 hover:bg-[#FDB813] hover:text-slate-950 text-white font-black text-xs uppercase tracking-wider transition-all text-center shadow-md flex items-center justify-center gap-2 group"
              >
                <span>Complete Project Dossier</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                onClick={() => onOpenVisitModal && onOpenVisitModal(activeProperty)}
                className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-[#FDB813] hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-md shadow-amber-500/20 flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Free Site Visit Cab</span>
              </button>

              {activeProperty.brochure && (
                <a
                  href={activeProperty.brochure}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-center sm:self-auto p-3.5 rounded-xl border border-slate-200 hover:border-slate-400 text-slate-700 hover:text-slate-950 transition-colors"
                  title="Download Brochure PDF"
                >
                  <Download className="w-4 h-4" />
                </a>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
