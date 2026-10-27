import React, { useState } from 'react';
import { Trees, MapPin, Maximize2, Bookmark, ArrowUpRight, Shield, TrendingUp, Calendar, ChevronLeft, ChevronRight, FileText } from 'lucide-react';
import { CURRENCIES } from '../data/properties';

export function formatCurrencyValue(priceINR, currencyKey) {
  const curr = CURRENCIES[currencyKey] || CURRENCIES.INR;
  if (curr.isRupee) {
    if (priceINR >= 10000000) {
      return `₹${(priceINR / 10000000).toFixed(2)} Cr`;
    } else if (priceINR >= 100000) {
      return `₹${(priceINR / 100000).toFixed(2)} Lakhs`;
    }
    return `₹${priceINR.toLocaleString('en-IN')}`;
  }
  const converted = Math.round(priceINR * curr.rate);
  return `${curr.symbol}${converted.toLocaleString('en-US')}`;
}

export default function PropertyCard({ 
  property, 
  currency, 
  isSaved, 
  onToggleSave, 
  onSelectProperty, 
  onOpenViewingModal 
}) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const formattedPrice = formatCurrencyValue(property.priceINR, currency);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  return (
    <div 
      className="group relative rounded-2xl overflow-hidden glass-panel border border-white/10 hover:border-gold-500/40 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-gold-500/10 flex flex-col justify-between"
    >
      {/* Top Image Showcase Area */}
      <div className="relative aspect-[16/10] overflow-hidden bg-obsidian-900 cursor-pointer" onClick={() => onSelectProperty(property)}>
        <img
          src={property.images[currentImgIndex]}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Ambient Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-black/40" />

        {/* Exclusive Tag Badge */}
        <div className="absolute top-4 left-4 flex flex-col gap-1.5 z-10">
          <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-semibold bg-obsidian-950/80 backdrop-blur-md text-gold-300 border border-gold-400/30 flex items-center gap-1.5 shadow-md">
            <Shield className="w-3 h-3 text-gold-400" />
            {property.tag}
          </span>
          {property.approval && (
            <span className="px-2.5 py-0.5 rounded-full text-[9px] uppercase tracking-wider font-medium bg-emerald-950/80 backdrop-blur-md text-emerald-300 border border-emerald-500/30">
              {property.approval.split('/')[0]}
            </span>
          )}
        </div>

        {/* Save Bookmark Action */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleSave(property.id);
          }}
          className={`absolute top-4 right-4 z-10 p-2.5 rounded-full backdrop-blur-md transition-all duration-300 ${
            isSaved 
              ? 'bg-gold-500 text-obsidian-950 shadow-lg shadow-gold-500/30 scale-105' 
              : 'bg-black/50 text-slate-300 hover:text-gold-300 hover:bg-black/80 border border-white/10'
          }`}
          title={isSaved ? 'Remove from Saved' : 'Save to Portfolio'}
        >
          <Bookmark className="w-4 h-4 fill-current" />
        </button>

        {/* Image Carousel Quick Arrows */}
        {property.images.length > 1 && (
          <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <button
              onClick={prevImage}
              aria-label="Previous image"
              className="p-1.5 rounded-full bg-black/60 hover:bg-gold-500 hover:text-obsidian-950 text-white backdrop-blur-sm pointer-events-auto transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextImage}
              aria-label="Next image"
              className="p-1.5 rounded-full bg-black/60 hover:bg-gold-500 hover:text-obsidian-950 text-white backdrop-blur-sm pointer-events-auto transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Image Pagination Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
          {property.images.map((_, i) => (
            <span
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${
                currentImgIndex === i ? 'w-5 bg-gold-400' : 'w-1 bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Card Content & Details */}
      <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow">
        <div>
          {/* Location & Enclave */}
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span className="tracking-widest uppercase text-gold-400 font-medium">
              {property.enclave}
            </span>
            <span className="truncate max-w-[150px]">{property.city}</span>
          </div>

          {/* Title & Subtitle */}
          <h3 
            onClick={() => onSelectProperty(property)}
            className="font-serif text-xl sm:text-2xl font-medium text-slate-100 group-hover:text-gold-200 transition-colors cursor-pointer leading-snug"
          >
            {property.title}
          </h3>
          <p className="text-xs text-slate-400 mt-1 line-clamp-1 font-light">
            {property.subtitle}
          </p>

          {/* Key Specifications Grid */}
          <div className="grid grid-cols-2 gap-2 py-3.5 my-4 border-y border-white/10 text-slate-300 text-xs">
            <div className="flex items-center gap-2">
              <Trees className="w-4 h-4 text-gold-400/80" />
              <span><strong>{property.plotSize}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Maximize2 className="w-4 h-4 text-gold-400/80" />
              <span>{property.landExtent}</span>
            </div>
          </div>

          {/* Investor Return Metrics Pill */}
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/5 mb-5 text-[11px]">
            <div className="flex items-center gap-1.5 text-slate-300">
              <TrendingUp className="w-3.5 h-3.5 text-gold-400" />
              <span>Yield: <strong className="text-emerald-400">{property.projectedYield}</strong></span>
            </div>
            <div className="text-slate-400">
              5Y Growth: <strong className="text-gold-300">{property.appreciation5Y}</strong>
            </div>
          </div>
        </div>

        {/* Pricing & Interaction Actions */}
        <div className="pt-2 flex items-center justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-medium">Investment From</div>
            <div className="font-serif text-xl sm:text-2xl font-semibold gold-gradient-text">
              {formattedPrice}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onOpenViewingModal(property)}
              className="p-2.5 rounded-xl border border-gold-400/30 hover:border-gold-400 bg-gold-500/10 hover:bg-gold-500/20 text-gold-300 transition-colors"
              title="Schedule Site Visit"
            >
              <Calendar className="w-4 h-4" />
            </button>
            <button
              onClick={() => onSelectProperty(property)}
              className="px-4 py-2 rounded-xl gold-gradient-bg text-obsidian-950 font-semibold text-xs uppercase tracking-wider flex items-center gap-1.5 hover:scale-[1.03] transition-all"
            >
              <span>Dossier</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
