import React from 'react';
import { X, Trash2, ArrowUpRight, Sparkles, FolderDown } from 'lucide-react';
import { CURRENCIES } from '../data/properties';

export default function SavedDrawer({ 
  isOpen, 
  onClose, 
  savedIds, 
  properties, 
  currency, 
  onRemoveSaved, 
  onSelectProperty, 
  onOpenViewingModal 
}) {
  if (!isOpen) return null;

  const curr = CURRENCIES[currency] || CURRENCIES.USD;
  const savedProperties = properties.filter((p) => savedIds.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity" 
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-obsidian-950 border-l border-gold-500/25 shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold-400 font-semibold">Private Shortlist</span>
              <h3 className="font-serif text-xl text-white font-medium">Saved Acquisitions ({savedProperties.length})</h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-gold-500 hover:text-obsidian-950 text-slate-300 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body items list */}
          <div className="p-6 overflow-y-auto space-y-4 flex-grow">
            {savedProperties.length > 0 ? (
              savedProperties.map((prop) => {
                const converted = (prop.priceUSD * curr.rate).toLocaleString('en-US', {
                  maximumFractionDigits: 0
                });

                return (
                  <div
                    key={prop.id}
                    className="p-3.5 rounded-2xl glass-panel border border-white/10 flex gap-3.5 items-center group relative hover:border-gold-500/30 transition-all"
                  >
                    <img
                      src={prop.heroImage}
                      alt={prop.title}
                      className="w-20 h-20 rounded-xl object-cover flex-shrink-0 cursor-pointer"
                      onClick={() => {
                        onClose();
                        onSelectProperty(prop);
                      }}
                    />

                    <div className="flex-grow min-w-0">
                      <div className="text-[10px] text-gold-400 uppercase tracking-wider">{prop.enclave}</div>
                      <h4 
                        onClick={() => {
                          onClose();
                          onSelectProperty(prop);
                        }}
                        className="font-serif text-sm text-white font-medium truncate cursor-pointer hover:text-gold-200 transition-colors"
                      >
                        {prop.title}
                      </h4>
                      <div className="text-xs font-semibold text-gold-300 mt-0.5">
                        {curr.symbol}{converted}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-1">
                        {prop.beds} Beds • {prop.sqft.toLocaleString()} Sq Ft
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => onRemoveSaved(prop.id)}
                        className="p-2 text-slate-500 hover:text-red-400 transition-colors"
                        title="Remove from shortlist"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => {
                          onClose();
                          onSelectProperty(prop);
                        }}
                        className="p-2 text-gold-400 hover:text-white transition-colors"
                        title="View Dossier"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-16 text-slate-400">
                <Sparkles className="w-8 h-8 text-gold-400/40 mx-auto mb-3" />
                <p className="font-serif text-base text-slate-300">Your portfolio shortlist is empty</p>
                <p className="text-xs text-slate-500 mt-1">
                  Bookmark trophy properties from the collection to curate your private acquisition list.
                </p>
              </div>
            )}
          </div>

          {/* Footer actions */}
          {savedProperties.length > 0 && (
            <div className="p-6 border-t border-white/10 space-y-3 bg-obsidian-900/50">
              <button
                onClick={() => {
                  onClose();
                  onOpenViewingModal(null);
                }}
                className="w-full py-3.5 rounded-xl gold-gradient-bg text-obsidian-950 font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:scale-[1.01] transition-all shadow-xl"
              >
                <Sparkles className="w-4 h-4" />
                <span>Request Consolidated Dossier</span>
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
