import React, { useState } from 'react';
import { PROPERTIES } from '../data/properties';
import { formatCurrencyValue } from './PropertyCard';
import { Trees, MapPin, Download, ArrowRight, ShieldCheck, Check, X, Filter } from 'lucide-react';

export default function BrandProjects({
  onSelectProperty,
  onOpenVisitModal,
  currency = 'INR',
  filterLocation = 'all',
  setFilterLocation = () => {},
  filterCategory = 'all',
  setFilterCategory = () => {}
}) {
  const [activeTab, setActiveTab] = useState('all');

  const filtered = PROPERTIES.filter((p) => {
    // Location filter
    if (filterLocation !== 'all') {
      const locMatch =
        p.location.toLowerCase().includes(filterLocation.toLowerCase()) ||
        p.enclave.toLowerCase().includes(filterLocation.toLowerCase());
      if (!locMatch) return false;
    }

    // Category filter from Hero Search
    if (filterCategory !== 'all') {
      if (p.category !== filterCategory) return false;
    }

    // Tab filter (all, farmland, residential, ongoing, completed)
    if (activeTab === 'farmland') return p.category === 'farmland';
    if (activeTab === 'residential') return p.category === 'residential';
    if (activeTab === 'ongoing') return p.status === 'ongoing';
    if (activeTab === 'completed') return p.status === 'completed';

    return true;
  });

  const filterTabs = [
    { id: 'all', label: 'All Projects (10)' },
    { id: 'farmland', label: 'Organic Farmlands' },
    { id: 'residential', label: 'HMDA & Residential' },
    { id: 'ongoing', label: 'Active Ongoing' },
    { id: 'completed', label: 'Completed Benchmarks' },
  ];

  const hasActiveFilters = filterLocation !== 'all' || filterCategory !== 'all';

  return (
    <section id="ventures" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
        <div>
          <span className="text-xs uppercase tracking-widest font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
            Portfolio of Distinction
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            Featured Projects & Farmlands
          </h2>
          <p className="text-sm text-slate-500 font-normal mt-1.5 max-w-xl">
            Explore our prime developments across Hyderabad and Bengaluru. Each venture features 100% legal title clearance and spot registration.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-[#FDB813] text-slate-950 shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Active Filter Notification Bar */}
      {hasActiveFilters && (
        <div className="mb-8 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between text-xs text-emerald-900">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-emerald-700" />
            <span>
              Showing ventures filtered by{' '}
              {filterLocation !== 'all' && <strong>Corridor: {filterLocation}</strong>}
              {filterLocation !== 'all' && filterCategory !== 'all' && ' & '}
              {filterCategory !== 'all' && <strong>Type: {filterCategory}</strong>}
              {' '}({filtered.length} matching)
            </span>
          </div>

          <button
            onClick={() => {
              setFilterLocation('all');
              setFilterCategory('all');
            }}
            className="inline-flex items-center gap-1 font-bold text-emerald-800 hover:text-emerald-950 underline text-xs"
          >
            <X className="w-3.5 h-3.5" />
            Clear Filters
          </button>
        </div>
      )}

      {/* Modern Cards Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200 p-8">
          <p className="text-base font-semibold text-slate-700">No ventures found matching the selected filters.</p>
          <button
            onClick={() => {
              setFilterLocation('all');
              setFilterCategory('all');
              setActiveTab('all');
            }}
            className="mt-4 px-5 py-2.5 rounded-xl bg-emerald-800 text-white text-xs font-semibold uppercase tracking-wider"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-emerald-600 transition-all duration-300 hover:shadow-lg flex flex-col justify-between group"
            >
              {/* Card Image Area */}
              <div
                className="aspect-[16/10] relative overflow-hidden bg-slate-100 cursor-pointer"
                onClick={() => onSelectProperty(item)}
              >
                <img
                  src={item.heroImage}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-slate-900 shadow-sm">
                    {item.tag}
                  </span>
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white shadow-sm ${
                    item.status === 'ongoing' ? 'bg-emerald-700' : 'bg-slate-700'
                  }`}>
                    {item.status === 'ongoing' ? 'Ongoing' : 'Delivered'}
                  </span>
                </div>
              </div>

              {/* Card Content Area */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-800 font-semibold mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.enclave}</span>
                  </div>

                  <h3
                    onClick={() => onSelectProperty(item)}
                    className="text-xl font-bold text-slate-900 group-hover:text-emerald-800 transition-colors cursor-pointer"
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                    {item.subtitle}
                  </p>

                  {/* Specs Box */}
                  <div className="grid grid-cols-2 gap-2 py-3 my-4 border-y border-slate-100 text-xs text-slate-700">
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase font-medium">Plot Size</span>
                      <strong className="text-slate-900">{item.plotSize}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase font-medium">Approval</span>
                      <strong className="text-emerald-800 truncate block">{item.approval.split('/')[0]}</strong>
                    </div>
                  </div>
                </div>

                {/* Price & Action Row */}
                <div className="pt-2 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase text-slate-400 font-semibold block">Investment From</span>
                    <div className="text-lg font-bold text-slate-900">
                      {formatCurrencyValue(item.priceINR, currency)}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {item.brochurePdf && (
                      <a
                        href={item.brochurePdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl border border-slate-200 hover:border-emerald-600 hover:bg-emerald-50 text-slate-600 hover:text-emerald-800 transition-colors"
                        title="Download PDF Brochure"
                      >
                        <Download className="w-4 h-4" />
                      </a>
                    )}

                    <button
                      onClick={() => onSelectProperty(item)}
                      className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-[#FDB813] hover:text-slate-950 text-white font-bold text-xs tracking-wider uppercase transition-all shadow-sm"
                    >
                      View Details
                    </button>
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>
      )}

    </section>
  );
}
