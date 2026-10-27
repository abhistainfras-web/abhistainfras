import React from 'react';
import { Link } from 'react-router-dom';
import { PROPERTIES, BENGALURU_COMPLETED_PROJECTS } from '../data/properties';
import { formatCurrencyValue } from '../components/PropertyCard';
import { MapPin, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export default function CompletedProjectsPage() {
  const hydCompleted = PROPERTIES.filter((p) => p.status === 'completed');

  return (
    <div className="pt-24 pb-24 bg-slate-50 min-h-screen">
      
      {/* Header Banner */}
      <div className="bg-slate-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/assets/abhista/home/about-banner.jpg" alt="Completed Projects" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-400">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#FDB813]">Completed Projects</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Delivered Benchmarks & Completed Projects
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            A proven record of 100% on-time execution and clear title registration across Hyderabad and Bengaluru.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Hyderabad Completed */}
        <div>
          <div className="flex items-end justify-between mb-8 pb-4 border-b border-slate-200">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#d99600]">Delivered Landmarks</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Hyderabad Completed Communities ({hydCompleted.length})
              </h2>
            </div>
            <span className="text-xs text-emerald-800 font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              100% Inhabited Communities
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hydCompleted.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-amber-500 transition-all duration-300 hover:shadow-lg flex flex-col justify-between group"
              >
                <Link to={`/projects/${item.id}`} className="aspect-[16/10] relative overflow-hidden bg-slate-100 block">
                  <img src={item.heroImage} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-slate-900 shadow-sm">
                      {item.tag}
                    </span>
                  </div>
                </Link>

                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-[10px] font-bold text-[#d99600] uppercase block">{item.enclave}</span>
                    <Link to={`/projects/${item.id}`}>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#d99600] transition-colors mt-0.5">
                        {item.title}
                      </h3>
                    </Link>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">{item.subtitle}</p>
                    <div className="pt-2 text-xs font-semibold text-slate-700">Plot: {item.plotSize} • {item.approval.split('/')[0]}</div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between">
                    <div className="text-xs font-bold text-emerald-700">Delivered & Clear Titles</div>
                    <Link to={`/projects/${item.id}`} className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-[#FDB813] hover:text-slate-950 text-white font-bold text-xs uppercase tracking-wider transition-all">
                      View Dossier
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bengaluru Completed */}
        <div className="pt-8 border-t border-slate-200">
          <div className="flex items-end justify-between mb-8 pb-4 border-b border-slate-200">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#d99600]">Karnataka Heritage</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Bengaluru Completed Projects ({BENGALURU_COMPLETED_PROJECTS.length})
              </h2>
            </div>
            <span className="text-xs text-slate-500 font-semibold">Established Since 2006</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENGALURU_COMPLETED_PROJECTS.map((p) => (
              <div
                key={p.id}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-[#d99600] font-bold mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{p.location}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{p.name}</h3>
                  <p className="text-xs text-slate-500 mt-1">{p.type}</p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-[11px] font-bold text-emerald-800 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{p.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
