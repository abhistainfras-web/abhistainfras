import React from 'react';
import { Link } from 'react-router-dom';
import { PROPERTIES } from '../data/properties';
import { formatCurrencyValue } from '../components/PropertyCard';
import { MapPin, Download, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function OngoingProjectsPage({ onOpenVisitModal }) {
  const ongoing = PROPERTIES.filter((p) => p.status === 'ongoing');
  const hydOngoing = ongoing.filter((p) => p.city === 'Hyderabad');
  const bngOngoing = ongoing.filter((p) => p.city === 'Bengaluru');

  return (
    <div className="pt-24 pb-24 bg-slate-50 min-h-screen">
      
      {/* Header Banner */}
      <div className="bg-slate-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/assets/abhista/home/about-banner.jpg" alt="Ongoing Projects" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-400">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#FDB813]">Ongoing Projects</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Active Ongoing Projects
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Explore our ongoing real estate ventures in Hyderabad and Bengaluru, offering open plots and farm plot ventures that present lucrative investment opportunities.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Hyderabad Section */}
        <div>
          <div className="flex items-end justify-between mb-8 pb-4 border-b border-slate-200">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#d99600]">Telangana</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Hyderabad Ongoing Projects ({hydOngoing.length})
              </h2>
            </div>
            <span className="text-xs text-slate-500 font-semibold">Immediate Spot Registration</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hydOngoing.map((item) => (
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

                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-[10px] font-bold text-[#d99600] uppercase block">{item.enclave}</span>
                    <Link to={`/projects/${item.id}`}>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-[#d99600] transition-colors mt-0.5">
                        {item.title}
                      </h3>
                    </Link>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">{item.subtitle}</p>
                    <div className="pt-2 text-xs font-semibold text-slate-700">Plot: {item.plotSize}</div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between">
                    <div className="text-sm font-extrabold text-slate-900">{formatCurrencyValue(item.priceINR, 'INR')}</div>
                    <Link to={`/projects/${item.id}`} className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-[#FDB813] hover:text-slate-950 text-white font-bold text-[11px] uppercase tracking-wider transition-all">
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bengaluru Section */}
        <div>
          <div className="flex items-end justify-between mb-8 pb-4 border-b border-slate-200">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#d99600]">Karnataka</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Bengaluru Ongoing Projects ({bngOngoing.length})
              </h2>
            </div>
            <span className="text-xs text-slate-500 font-semibold">Gated Agro Communities</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bngOngoing.map((item) => (
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

                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-[10px] font-bold text-[#d99600] uppercase block">{item.enclave}</span>
                    <Link to={`/projects/${item.id}`}>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-[#d99600] transition-colors mt-0.5">
                        {item.title}
                      </h3>
                    </Link>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">{item.subtitle}</p>
                    <div className="pt-2 text-xs font-semibold text-slate-700">Plot: {item.plotSize}</div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between">
                    <div className="text-sm font-extrabold text-slate-900">{formatCurrencyValue(item.priceINR, 'INR')}</div>
                    <Link to={`/projects/${item.id}`} className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-[#FDB813] hover:text-slate-950 text-white font-bold text-[11px] uppercase tracking-wider transition-all">
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
