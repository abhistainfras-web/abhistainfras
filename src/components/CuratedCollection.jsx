import React, { useState } from 'react';
import PropertyCard from './PropertyCard';
import { Sparkles, SlidersHorizontal, RefreshCcw } from 'lucide-react';

export default function CuratedCollection({
  properties,
  currency,
  savedList,
  onToggleSave,
  onSelectProperty,
  onOpenViewingModal,
  selectedCategory,
  setSelectedCategory,
  onResetFilters
}) {
  const [sortBy, setSortBy] = useState('price-desc');

  // Filter by category tab
  const filtered = properties.filter((prop) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'ongoing') return prop.status === 'ongoing';
    if (selectedCategory === 'completed') return prop.status === 'completed';
    return prop.category === selectedCategory;
  });

  // Sort logic
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'price-desc') return b.priceINR - a.priceINR;
    if (sortBy === 'price-asc') return a.priceINR - b.priceINR;
    if (sortBy === 'growth') return parseFloat(b.appreciation5Y) - parseFloat(a.appreciation5Y);
    if (sortBy === 'sqft') return b.sqft - a.sqft;
    return 0;
  });

  const categories = [
    { id: 'all', label: 'All Ventures (10)' },
    { id: 'farmland', label: 'Gated Farmlands' },
    { id: 'residential', label: 'HMDA / DTCP & Villas' },
    { id: 'ongoing', label: 'Active Ongoing' },
    { id: 'completed', label: 'Delivered Benchmarks' },
  ];

  return (
    <section id="collection" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-400/30 bg-gold-500/10 text-gold-300 text-[11px] uppercase tracking-[0.25em] font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            Abhista Venture Portfolio
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-white tracking-tight">
            Exclusively Developed <span className="italic font-normal gold-gradient-text">Masterworks</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light mt-2 max-w-xl">
            Each project features 100% clear legal titles, authentic Vaastu alignment, blacktop roads, water connection, and verified spot registration.
          </p>
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl glass-panel text-xs text-slate-300 border border-white/10">
            <SlidersHorizontal className="w-3.5 h-3.5 text-gold-400" />
            <span className="text-slate-400">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              aria-label="Sort properties"
              className="bg-transparent text-slate-100 font-medium focus:outline-none cursor-pointer"
            >
              <option value="price-desc" className="bg-obsidian-900">Price: Highest First</option>
              <option value="price-asc" className="bg-obsidian-900">Price: Lowest First</option>
              <option value="growth" className="bg-obsidian-900">5Y Capital Growth Potential</option>
              <option value="sqft" className="bg-obsidian-900">Plot Extent</option>
            </select>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-medium whitespace-nowrap transition-all duration-300 ${
              selectedCategory === cat.id
                ? 'gold-gradient-bg text-obsidian-950 font-bold shadow-lg shadow-gold-500/20'
                : 'glass-panel text-slate-300 hover:text-white hover:border-gold-400/40'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Property Cards Grid */}
      {sorted.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sorted.map((prop) => (
            <PropertyCard
              key={prop.id}
              property={prop}
              currency={currency}
              isSaved={savedList.includes(prop.id)}
              onToggleSave={onToggleSave}
              onSelectProperty={onSelectProperty}
              onOpenViewingModal={onOpenViewingModal}
            />
          ))}
        </div>
      ) : (
        <div className="glass-panel rounded-2xl p-12 text-center border border-white/10 max-w-lg mx-auto">
          <p className="font-serif text-xl text-slate-200">No ventures match your filter</p>
          <p className="text-xs text-slate-400 mt-2 mb-6 font-light">
            Try adjusting your search criteria or reset filters to browse the entire Abhista collection.
          </p>
          <button
            onClick={onResetFilters}
            className="px-5 py-2.5 rounded-xl gold-gradient-bg text-obsidian-950 font-semibold text-xs tracking-wider uppercase inline-flex items-center gap-2"
          >
            <RefreshCcw className="w-3.5 h-3.5" />
            Reset All Filters
          </button>
        </div>
      )}

    </section>
  );
}
