import React from 'react';
import { CONCIERGE_SERVICES, TESTIMONIALS, COMPANY_INFO } from '../data/properties';
import { ShieldCheck, Car, Scale, Trees, Key, Award, ArrowRight, Quote } from 'lucide-react';

export default function ConciergeSection({ onOpenViewingModal }) {
  const iconMap = {
    ShieldCheck: ShieldCheck,
    Plane: Car,
    Scale: Scale,
    Compass: Trees
  };

  return (
    <section id="concierge" className="py-24 relative overflow-hidden bg-obsidian-900/60">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-400/30 bg-gold-500/10 text-gold-300 text-[11px] uppercase tracking-[0.25em] font-medium mb-3">
            <Key className="w-3.5 h-3.5 text-gold-400" />
            The Abhista Advantage
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-white tracking-tight">
            Why Investors Choose <span className="italic font-normal gold-gradient-text">Abhista Infra’s</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light mt-3">
            Pioneered by {COMPANY_INFO.founder}. Built on {COMPANY_INFO.philosophy}.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {CONCIERGE_SERVICES.map((srv, idx) => {
            const Icon = iconMap[srv.icon] || ShieldCheck;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-gold-400/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-400/30 flex items-center justify-center text-gold-400 mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl text-white font-medium mb-2.5">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Backward Integration & Corporate Callout */}
        <div id="vault" className="glass-panel-gold rounded-3xl p-8 sm:p-12 relative overflow-hidden mb-20">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold-400 font-bold mb-3">
                <Award className="w-4 h-4 text-gold-400" />
                <span>Backward Integration Model • Zero Compromise</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl text-white font-medium leading-snug">
                Hyderabad’s Only Real Estate Developer With Full Backward Integration
              </h3>
              <p className="text-slate-300 text-sm font-light mt-3 leading-relaxed">
                We handle everything in-house: from initial land survey, title diligence, architectural planning, and Vaastu validation to earthmoving machinery, blacktop paving, and tree transplantation. Staff strength of 80+ professionals and an in-house academy ensure unmatched execution.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <button
                onClick={() => onOpenViewingModal(null)}
                className="px-8 py-4 rounded-xl gold-gradient-bg text-obsidian-950 font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:scale-[1.03] transition-all shadow-xl shadow-gold-500/20 whitespace-nowrap"
              >
                <span>Book Chauffeured Site Visit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Client Discretion Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 relative">
              <Quote className="w-8 h-8 text-gold-500/30 mb-3" />
              <p className="font-serif text-base sm:text-lg text-slate-200 italic font-light leading-relaxed">
                "{t.quote}"
              </p>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <div>
                  <div className="font-medium text-white">{t.author}</div>
                  <div className="text-[11px] text-slate-400 font-light">{t.asset}</div>
                </div>
                <div className="flex items-center gap-1 text-gold-400 font-mono text-[11px]">
                  <span>★ ★ ★ ★ ★</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
