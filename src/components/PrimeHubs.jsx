import React from 'react';
import { PRIME_HUBS } from '../data/properties';
import { Globe, ArrowUpRight, TrendingUp, Landmark } from 'lucide-react';

export default function PrimeHubs({ onSelectHub }) {
  return (
    <section id="prime-hubs" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-400/30 bg-gold-500/10 text-gold-300 text-[11px] uppercase tracking-[0.25em] font-medium mb-3">
            <Globe className="w-3.5 h-3.5 text-gold-400" />
            Strategic Growth Corridors
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-white tracking-tight">
            Hyderabad & Bengaluru <span className="italic font-normal gold-gradient-text">Expansion Sectors</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light mt-2 max-w-xl">
            Abhista carefully selects micro-markets offering rapid infrastructure development, clean legal titles, and multiplying land valuations.
          </p>
        </div>

        <div className="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold flex items-center gap-2">
          <span>Key Corridors of Telangana & Karnataka</span>
        </div>
      </div>

      {/* Hub Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PRIME_HUBS.map((hub) => (
          <div
            key={hub.id}
            onClick={() => onSelectHub(hub.name)}
            className="group relative rounded-2xl overflow-hidden glass-panel border border-white/10 hover:border-gold-400/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer flex flex-col justify-between"
          >
            {/* Background Image */}
            <div className="relative aspect-[4/5] overflow-hidden bg-black">
              <img
                src={hub.image}
                alt={hub.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-[0.65]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/40 to-transparent" />
              
              {/* Top Details */}
              <div className="absolute top-4 right-4 z-10">
                <div className="p-2 rounded-full bg-black/60 backdrop-blur-md text-white group-hover:bg-gold-500 group-hover:text-obsidian-950 transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Card Content inside the image overlay */}
              <div className="absolute inset-x-0 bottom-0 p-5 z-10 flex flex-col justify-end">
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold">
                  {hub.country}
                </span>
                <h3 className="font-serif text-2xl text-white font-medium group-hover:text-gold-200 transition-colors">
                  {hub.name}
                </h3>
                <p className="text-xs text-slate-300 font-light mt-1.5 line-clamp-2">
                  {hub.description}
                </p>

                {/* Key Hub Metrics */}
                <div className="mt-4 pt-3 border-t border-white/15 grid grid-cols-2 gap-2 text-[11px]">
                  <div>
                    <div className="text-[9px] uppercase tracking-wider text-slate-400">Benchmark</div>
                    <div className="font-semibold text-white">{hub.avgSqFt} / sq.yd</div>
                  </div>
                  <div>
                    <div className="text-[9px] uppercase tracking-wider text-slate-400">5Y Growth</div>
                    <div className="font-semibold text-emerald-400 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      {hub.appreciation}
                    </div>
                  </div>
                </div>

                {/* Tax Pill */}
                <div className="mt-3 p-2 rounded-lg bg-black/50 border border-white/10 text-[10px] text-gold-300 flex items-center gap-1.5">
                  <Landmark className="w-3.5 h-3.5 flex-shrink-0 text-gold-400" />
                  <span className="truncate">{hub.taxAdvantage}</span>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
