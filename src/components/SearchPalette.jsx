import React, { useState, useEffect } from 'react';
import { Search, X, MapPin, ArrowUpRight, Trees, Shield } from 'lucide-react';
import { PROPERTIES } from '../data/properties';
import { formatCurrencyValue } from './PropertyCard';

export default function SearchPalette({ isOpen, onClose, onSelectProperty, currency }) {
  const [query, setQuery] = useState('');

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose();
      }
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const results = PROPERTIES.filter((p) => {
    if (!query) return true;
    const q = query.toLowerCase();
    return (
      p.title.toLowerCase().includes(q) ||
      p.location.toLowerCase().includes(q) ||
      p.enclave.toLowerCase().includes(q) ||
      p.tag.toLowerCase().includes(q) ||
      p.approval.toLowerCase().includes(q)
    );
  });

  return (
    <div className="fixed inset-0 z-[90] flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-2xl bg-[#0d121c] border border-gold-400/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-white/10 flex items-center gap-3 bg-[#080b11]">
          <Search className="w-5 h-5 text-gold-400 flex-shrink-0" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by venture, corridor (e.g. Patancheru, Shamirpet, HMDA)..."
            className="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-slate-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 rounded bg-white/10 text-[10px] text-slate-400 uppercase font-mono"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-3 space-y-2 flex-grow">
          <div className="px-3 py-1.5 text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
            {results.length} Ventures Found
          </div>

          {results.map((prop) => (
            <div
              key={prop.id}
              onClick={() => {
                onClose();
                onSelectProperty(prop);
              }}
              className="p-3 rounded-xl hover:bg-white/[0.04] border border-transparent hover:border-gold-400/30 flex items-center justify-between gap-4 cursor-pointer transition-all group"
            >
              <div className="flex items-center gap-3.5">
                <img
                  src={prop.heroImage}
                  alt={prop.title}
                  className="w-14 h-14 rounded-lg object-cover flex-shrink-0 bg-slate-900"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-semibold text-gold-400 tracking-wider">
                      {prop.tag}
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="text-xs text-slate-400">{prop.enclave}</span>
                  </div>
                  <h4 className="font-serif text-base text-white group-hover:text-gold-200 transition-colors font-medium">
                    {prop.title}
                  </h4>
                  <div className="text-[11px] text-slate-400 flex items-center gap-2 mt-0.5">
                    <span>{prop.plotSize}</span>
                    <span>•</span>
                    <span className="text-emerald-400">{prop.approval.split('/')[0]}</span>
                  </div>
                </div>
              </div>

              <div className="text-right flex-shrink-0">
                <div className="font-serif text-sm font-bold gold-gradient-text">
                  {formatCurrencyValue(prop.priceINR, currency)}
                </div>
                <div className="text-[10px] text-slate-500 flex items-center justify-end gap-1 group-hover:text-gold-300 transition-colors mt-0.5">
                  <span>View Dossier</span>
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer info */}
        <div className="p-3 border-t border-white/10 bg-[#080b11] text-[10px] text-slate-500 flex items-center justify-between">
          <span>Search verified real estate ventures of Abhista Infra’s</span>
          <span>Press <strong>ESC</strong> to dismiss</span>
        </div>

      </div>
    </div>
  );
}
