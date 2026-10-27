import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { PROPERTIES } from '../data/properties';
import { formatCurrencyValue } from '../components/PropertyCard';
import { MapPin, Download, ArrowRight, Filter, Search, X, Check, ShieldCheck, Compass } from 'lucide-react';

export default function ProjectsPage({ onOpenVisitModal }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialLoc = searchParams.get('location') || 'all';
  const initialCat = searchParams.get('category') || 'all';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(initialLoc);
  const [selectedTab, setSelectedTab] = useState(initialCat);

  useEffect(() => {
    const loc = searchParams.get('location');
    const cat = searchParams.get('category');
    if (loc) setSelectedLocation(loc);
    if (cat) setSelectedTab(cat);
  }, [searchParams]);

  const filtered = PROPERTIES.filter((p) => {
    // Text search
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const match =
        p.title.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q) ||
        p.enclave.toLowerCase().includes(q);
      if (!match) return false;
    }

    // Location filter
    if (selectedLocation !== 'all') {
      const locMatch =
        p.location.toLowerCase().includes(selectedLocation.toLowerCase()) ||
        p.enclave.toLowerCase().includes(selectedLocation.toLowerCase());
      if (!locMatch) return false;
    }

    // Category / Status filter
    if (selectedTab === 'farmland') return p.category === 'farmland';
    if (selectedTab === 'residential') return p.category === 'residential';
    if (selectedTab === 'ongoing') return p.status === 'ongoing';
    if (selectedTab === 'completed') return p.status === 'completed';

    return true;
  });

  const categories = [
    { id: 'all', label: 'All Ventures (10)' },
    { id: 'farmland', label: 'Organic Farmlands' },
    { id: 'residential', label: 'HMDA & Residential' },
    { id: 'ongoing', label: 'Ongoing Projects' },
    { id: 'completed', label: 'Delivered Benchmarks' },
  ];

  const locations = [
    { id: 'all', label: 'All Corridors' },
    { id: 'Patancheru', label: 'Patancheru / ORR Exit 3' },
    { id: 'Kothur', label: 'Kothur & Shadnagar (NH-44)' },
    { id: 'Shamirpet', label: 'Shamirpet (Biotech Hub)' },
    { id: 'Bengaluru', label: 'Bengaluru South' },
  ];

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      
      {/* Page Header & Breadcrumbs */}
      <div className="bg-white border-b border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-3">
            <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-800">Ventures & Farmlands</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#d99600] bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
                Abhista Infras Portfolio
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-3">
                All Projects & Farmlands
              </h1>
              <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
                Discover our masterplanned gated layout communities and organic farmlands across high-growth corridors of Hyderabad and Bengaluru. 100% legal title clearance and spot registration guaranteed.
              </p>
            </div>

            <button
              onClick={() => onOpenVisitModal(null)}
              className="px-6 py-3.5 rounded-xl bg-[#FDB813] hover:bg-[#e6a50e] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md whitespace-nowrap self-start md:self-auto"
            >
              Book Free Site Visit
            </button>
          </div>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white rounded-2xl p-5 shadow-lg border border-slate-200 space-y-4">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search venture name, highway, or area..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Corridor Filter */}
            <div className="md:col-span-4">
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold text-slate-800 bg-white focus:outline-none focus:border-amber-500 cursor-pointer"
              >
                {locations.map((loc) => (
                  <option key={loc.id} value={loc.id}>{loc.label}</option>
                ))}
              </select>
            </div>

            {/* Clear All Filters Button */}
            <div className="md:col-span-3 flex justify-end">
              {(selectedLocation !== 'all' || selectedTab !== 'all' || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedLocation('all');
                    setSelectedTab('all');
                    setSearchQuery('');
                    setSearchParams({});
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-amber-600"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Reset All Filters</span>
                </button>
              )}
            </div>

          </div>

          {/* Category Tabs */}
          <div className="pt-3 border-t border-slate-100 flex items-center gap-2 overflow-x-auto no-scrollbar">
            {categories.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedTab === tab.id
                    ? 'bg-[#FDB813] text-slate-950 shadow-sm'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Ventures Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        
        {/* Results Counter */}
        <div className="mb-6 flex items-center justify-between text-xs text-slate-500">
          <span>Showing <strong>{filtered.length}</strong> ventures matching your criteria</span>
          <span className="hidden sm:inline">100% Freehold Title Scrutinized</span>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 p-8">
            <Compass className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800">No ventures found matching your search</h3>
            <p className="text-xs text-slate-500 mt-1">Try resetting the corridor or category filters.</p>
            <button
              onClick={() => {
                setSelectedLocation('all');
                setSelectedTab('all');
                setSearchQuery('');
              }}
              className="mt-4 px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-amber-500 transition-all duration-300 hover:shadow-xl flex flex-col justify-between group"
              >
                {/* Image Link */}
                <Link to={`/projects/${item.id}`} className="aspect-[16/10] relative overflow-hidden bg-slate-100 block">
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
                </Link>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-[#d99600] font-bold mb-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{item.enclave}</span>
                    </div>

                    <Link to={`/projects/${item.id}`}>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#d99600] transition-colors">
                        {item.title}
                      </h3>
                    </Link>
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

                  {/* Pricing and Action */}
                  <div className="pt-2 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase text-slate-400 font-semibold block">Investment From</span>
                      <div className="text-lg font-bold text-slate-900">
                        {formatCurrencyValue(item.priceINR, 'INR')}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {item.brochurePdf && (
                        <a
                          href={item.brochurePdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-xl border border-slate-200 hover:border-amber-500 hover:bg-amber-50 text-slate-600 hover:text-amber-800 transition-colors"
                          title="Download Brochure PDF"
                        >
                          <Download className="w-4 h-4" />
                        </a>
                      )}

                      <Link
                        to={`/projects/${item.id}`}
                        className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-[#FDB813] hover:text-slate-950 text-white font-bold text-xs tracking-wider uppercase transition-all shadow-sm"
                      >
                        View Webpage
                      </Link>
                    </div>
                  </div>

                </div>
              </article>
            ))}
          </div>
        )}

      </div>

    </div>
  );
}
