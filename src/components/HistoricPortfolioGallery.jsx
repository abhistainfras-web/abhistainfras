import React, { useState } from 'react';
import { HYDERABAD_HISTORIC_PROJECTS, BENGALURU_COMPLETED_PROJECTS } from '../data/properties';
import { Building2, MapPin, ShieldCheck, CheckCircle2, Award, Calendar, Sparkles, FileText, Eye, Layers, Filter, Maximize2, X } from 'lucide-react';

export default function HistoricPortfolioGallery() {
  const [activeState, setActiveState] = useState('hyderabad'); // 'hyderabad' or 'bengaluru'
  const [viewMode, setViewMode] = useState('digital'); // 'digital' or 'archive'
  const [filterEra, setFilterEra] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = activeState === 'hyderabad' ? HYDERABAD_HISTORIC_PROJECTS : BENGALURU_COMPLETED_PROJECTS;

  const filteredProjects = projects.filter((p) => {
    if (filterEra === 'all') return true;
    const yr = parseInt(p.year);
    if (filterEra === 'early') return yr <= 2005;
    if (filterEra === 'mid') return yr >= 2006 && yr <= 2009;
    if (filterEra === 'modern') return yr >= 2010;
    return true;
  });

  const totalAcres = activeState === 'hyderabad' ? '617.5+ Acres' : '205+ Acres';
  const totalCount = activeState === 'hyderabad' ? '13 Historic Benchmarks' : '7 Completed Benchmarks';

  return (
    <div className="space-y-10" id="historic-gallery">
      
      {/* 1. Master Control Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-4 sm:p-6 bg-white border border-slate-200 rounded-3xl shadow-sm">
        
        {/* Left: State Switcher Pills */}
        <div className="p-1 sm:p-1.5 rounded-2xl bg-slate-100 border border-slate-200 flex flex-wrap sm:inline-flex items-center gap-1 sm:gap-1.5 w-full sm:w-auto">
          <button
            onClick={() => {
              setActiveState('hyderabad');
              setFilterEra('all');
            }}
            className={`flex-1 sm:flex-initial px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-1.5 sm:gap-2 ${
              activeState === 'hyderabad'
                ? 'bg-[#FDB813] text-slate-950 shadow-md scale-[1.02] sm:scale-105'
                : 'text-slate-600 hover:text-slate-950'
            }`}
          >
            <Building2 className="w-4 h-4 shrink-0" />
            <span>Hyderabad <span className="hidden sm:inline">Portfolio</span> (TG)</span>
          </button>

          <button
            onClick={() => {
              setActiveState('bengaluru');
              setFilterEra('all');
            }}
            className={`flex-1 sm:flex-initial px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-1.5 sm:gap-2 ${
              activeState === 'bengaluru'
                ? 'bg-[#FDB813] text-slate-950 shadow-md scale-[1.02] sm:scale-105'
                : 'text-slate-600 hover:text-slate-950'
            }`}
          >
            <MapPin className="w-4 h-4 shrink-0" />
            <span>Bengaluru <span className="hidden sm:inline">Portfolio</span> (KA)</span>
          </button>
        </div>

        {/* Right: Modern UI vs Certified Document Toggle */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider hidden sm:inline">View Mode:</span>
          <div className="p-1 rounded-xl bg-slate-100 border border-slate-200 inline-flex items-center gap-1">
            <button
              onClick={() => setViewMode('digital')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                viewMode === 'digital'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FDB813]" />
              <span>Interactive Gallery</span>
            </button>

            <button
              onClick={() => setViewMode('archive')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                viewMode === 'archive'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-amber-400" />
              <span>Certified Archival Scan</span>
            </button>
          </div>
        </div>

      </div>

      {/* 2. Portfolio Metrics Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FDB813] mb-1">
            <ShieldCheck className="w-4 h-4" />
            <span>Audited Historical Registry (1998 – 2026)</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            {activeState === 'hyderabad' ? 'Telangana State Historical Deliveries' : 'Karnataka State Completed Landmarks'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
            {activeState === 'hyderabad'
              ? 'Every development surveyed with cadastral boundary stones, registered with Sub-Registrar offices, and developed with in-house machinery.'
              : 'Decades of delivered gated communities and plotted developments serving Bengaluru’s technology workforce.'}
          </p>
        </div>

        <div className="flex items-center gap-6 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-slate-800 md:pl-8 shrink-0">
          <div>
            <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Total Extent</span>
            <span className="text-2xl sm:text-3xl font-black text-[#FDB813]">{totalAcres}</span>
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Delivered Assets</span>
            <span className="text-2xl sm:text-3xl font-black text-emerald-400">{totalCount}</span>
          </div>
        </div>
      </div>

      {/* 3A. MODERN DIGITAL BEAUTIFIED CARDS VIEW */}
      {viewMode === 'digital' && (
        <div className="space-y-6">
          
          {/* Era Filter Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1 mr-1">
                <Filter className="w-3.5 h-3.5 text-[#b37a00]" /> Era:
              </span>
              {[
                { id: 'all', label: `All Projects (${projects.length})` },
                { id: 'early', label: '1998 – 2005 (Pioneering Era)' },
                { id: 'mid', label: '2006 – 2009 (Expansion Phase)' },
                { id: 'modern', label: '2010 – 2020 (Signature Benchmarks)' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilterEra(tab.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                    filterEra === tab.id
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <span className="text-xs text-slate-500 font-semibold">
              Showing {filteredProjects.length} of {projects.length} Landmarks
            </span>
          </div>

          {/* Master Creative Grid: Beautified Architectural Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map((p) => (
              <div
                key={p.id}
                onClick={() => setSelectedProject(p)}
                className="bg-white rounded-3xl border border-slate-200 hover:border-[#FDB813] shadow-sm hover:shadow-2xl transition-all duration-300 p-6 flex flex-col justify-between group cursor-pointer relative overflow-hidden hover:-translate-y-1.5"
              >
                {/* Year Header Banner */}
                <div className="flex items-center justify-between gap-2 pb-4 border-b border-slate-100">
                  <span className="px-3 py-1 rounded-full text-xs font-black bg-gradient-to-r from-slate-900 to-slate-800 text-[#FDB813] shadow-sm tracking-wider">
                    {p.year}
                  </span>
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                    Delivered
                  </span>
                </div>

                {/* Project Title & Subtitle */}
                <div className="py-5 space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#b37a00] block">
                    {p.type}
                  </span>
                  <h4 className="text-xl font-black text-slate-900 group-hover:text-[#b37a00] transition-colors leading-snug">
                    {p.name}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                {/* Extent & Location Footer Badge */}
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[9px] uppercase font-bold text-slate-400 block tracking-wider">Total Extent</span>
                      <div className="text-base font-black text-slate-900 group-hover:text-[#b37a00] transition-colors">
                        {p.extent}
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-2xl bg-amber-50 group-hover:bg-[#FDB813] text-[#b37a00] group-hover:text-slate-950 flex items-center justify-center transition-colors">
                      <Award className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                    <span className="flex items-center gap-1 truncate max-w-[180px]">
                      <MapPin className="w-3 h-3 text-[#b37a00] shrink-0" />
                      <span className="truncate">{p.location || 'Hyderabad, Telangana'}</span>
                    </span>
                    <span className="text-[#b37a00] font-bold group-hover:translate-x-1 transition-transform inline-flex items-center">
                      Inspect &rarr;
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      )}

      {/* 3B. CERTIFIED ARCHIVAL DOCUMENT SCAN VIEW */}
      {viewMode === 'archive' && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-lg space-y-6 animate-fade-in">
          
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-[#b37a00]">
              Certified Company Archives
            </span>
            <h4 className="text-2xl font-black text-slate-900 mt-1">
              Official Historical Completion Registry
            </h4>
            <p className="text-xs text-slate-500 mt-1">
              Photographic reproduction of the original certified completion documents from Abhista corporate records.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden border border-slate-300 bg-slate-50 p-4 sm:p-8 shadow-inner max-w-4xl mx-auto">
            <img
              src={activeState === 'hyderabad' ? '/assets/abhista/home/hyd-properties.png' : '/assets/abhista/home/bangalore-properties.png'}
              alt={activeState === 'hyderabad' ? 'Hyderabad Completed Properties' : 'Bengaluru Completed Properties'}
              className="w-full h-auto object-contain mx-auto drop-shadow-md"
            />
          </div>

          <div className="text-center text-xs text-slate-500 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Authenticated against Telangana & Karnataka Revenue Survey Records</span>
          </div>

        </div>
      )}

      {/* 4. MODAL: DETAILED ARCHIVAL DOSSIER */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 relative">
            
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black bg-[#FDB813] text-slate-950">
                <Calendar className="w-3.5 h-3.5" />
                <span>Delivered in {selectedProject.year}</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 pt-2">
                {selectedProject.name}
              </h3>
              <p className="text-xs text-[#b37a00] font-bold uppercase tracking-wider">
                {selectedProject.type}
              </p>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {selectedProject.desc}
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Land Extent</span>
                <span className="font-extrabold text-slate-900 text-sm mt-0.5 block">{selectedProject.extent}</span>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Status</span>
                <span className="font-extrabold text-emerald-700 text-sm mt-0.5 block">100% Inhabited</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs text-slate-800 space-y-1">
              <span className="font-extrabold text-amber-950 block">Title Search Certified</span>
              <p className="text-[11px] text-amber-900">
                All individual plot buyers received clear 30-year link titles, revenue survey sketches, and spot registration with the Sub-Registrar.
              </p>
            </div>

            <button
              onClick={() => setSelectedProject(null)}
              className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-[#FDB813] hover:text-slate-950 text-white font-extrabold text-xs uppercase tracking-wider transition-all"
            >
              Close Dossier
            </button>

          </div>
        </div>
      )}

    </div>
  );
}
