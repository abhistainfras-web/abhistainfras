import React, { useState } from 'react';
import { PROPERTIES, COMPANY_INFO } from '../data/properties';
import { formatCurrencyValue } from './PropertyCard';
import { Crown, Shield, Landmark, Phone, ArrowUpRight, Award, Scroll, Sparkles, Trees, Check } from 'lucide-react';

export default function ModelHeritage({ currency, onSelectProperty, onOpenViewingModal }) {
  const [selectedEra, setSelectedEra] = useState('all');

  const timelineMilestones = [
    { year: '2006', title: 'Anuradha Properties Inception', desc: 'Founded by Mr. M. Ramachandra Reddy with the pioneering vision of transparent plotted land ownership in Hyderabad.' },
    { year: '2016', title: 'Birth of Abhista Infra’s', desc: 'Evolution into a full-scale infrastructure developer with a unique in-house backward integration model.' },
    { year: '2020', title: 'Mega Farmland Expansion', desc: 'Launch of flagship 25-Acre Oak Tree Farms & 85-Acre Mirai Farms along strategic expressway corridors.' },
    { year: '2026', title: 'Bespoke Luxury Portfolios', desc: 'Over 100+ masterplanned acres delivered across Hyderabad & Bengaluru with 100% clean title track record.' }
  ];

  return (
    <div className="bg-[#05140e] text-[#f4efe6] font-serif min-h-screen selection:bg-[#d4af37]/30 selection:text-[#f7e6a5]">
      
      {/* Royal Heritage Navigation */}
      <nav className="border-b border-[#d4af37]/25 bg-[#030d09]/90 backdrop-blur-md sticky top-0 z-40 px-6 sm:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-sans">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-[#d4af37] bg-[#0b261b] flex items-center justify-center text-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              <Crown className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif text-xl tracking-[0.22em] font-semibold text-white block leading-none">
                ABHISTA
              </span>
              <span className="text-[9px] tracking-[0.35em] text-[#d4af37] uppercase font-light">
                Royal Heritage Estates
              </span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8 text-xs tracking-[0.2em] uppercase font-medium text-slate-300">
            <a href="#heritage-hero" className="hover:text-[#d4af37] transition-colors">Imperial Dynasty</a>
            <a href="#timeline-section" className="hover:text-[#d4af37] transition-colors">20-Year Legacy</a>
            <a href="#heritage-collection" className="hover:text-[#d4af37] transition-colors">Royal Portfolios</a>
            <a href="tel:+918185898089" className="text-[#d4af37] font-semibold flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" />
              +91 818 5898 089
            </a>
          </div>

          <button
            onClick={() => onOpenViewingModal(null)}
            className="px-6 py-2.5 rounded-full border border-[#d4af37] bg-gradient-to-r from-[#d4af37] to-[#aa8322] text-[#05140e] font-sans font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform shadow-lg shadow-[#d4af37]/20"
          >
            Request Royal Audience
          </button>
        </div>
      </nav>

      {/* Imperial Hero Section */}
      <section id="heritage-hero" className="relative py-20 lg:py-28 px-6 sm:px-12 overflow-hidden border-b border-[#d4af37]/20">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="/assets/abhista/about-banner.jpg" alt="Estate Heritage" className="w-full h-full object-cover filter contrast-125" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05140e] via-[#05140e]/80 to-[#05140e]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/40 bg-[#0b261b]/80 backdrop-blur-md text-[#d4af37] text-xs uppercase tracking-[0.3em] font-sans">
            <Crown className="w-3.5 h-3.5" />
            <span>The Regal Landholdings of Telangana</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.12]">
            Ancestral Earth. <br />
            <span className="italic font-light text-[#d4af37]">Generational Sovereignty.</span>
          </h1>

          <p className="font-sans text-sm sm:text-base text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            Crafted for families who understand that real land is the only true enduring dynasty. Rooted in two decades of unbroken trust, Vedic Vaastu perfection, and prime highway expansion.
          </p>

          <div className="pt-6 flex flex-wrap justify-center gap-4 font-sans text-xs uppercase tracking-widest font-semibold">
            <a
              href="#heritage-collection"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#d4af37] to-[#aa8322] text-[#05140e] hover:brightness-110 transition-all shadow-xl shadow-[#d4af37]/25"
            >
              Inspect Royal Holdings
            </a>
            <button
              onClick={() => onOpenViewingModal(null)}
              className="px-8 py-4 rounded-full border border-[#d4af37]/50 text-[#d4af37] hover:bg-[#d4af37]/10 transition-colors"
            >
              Chauffeured Inspection
            </button>
          </div>
        </div>
      </section>

      {/* 20-Year Heritage Timeline */}
      <section id="timeline-section" className="py-20 max-w-6xl mx-auto px-6 sm:px-12">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-sans font-semibold">Timeline of Distinction</span>
          <h2 className="text-3xl sm:text-4xl text-white font-normal mt-1">Two Decades of Land Stewardship</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {timelineMilestones.map((m, idx) => (
            <div key={idx} className="relative p-6 rounded-2xl bg-[#092117] border border-[#d4af37]/30 hover:border-[#d4af37] transition-all group">
              <div className="text-3xl font-bold text-[#d4af37] mb-2">{m.year}</div>
              <h3 className="text-lg font-medium text-white mb-2 leading-snug">{m.title}</h3>
              <p className="font-sans text-xs text-slate-300 font-light leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Royal Portfolios Collection */}
      <section id="heritage-collection" className="py-20 max-w-7xl mx-auto px-6 sm:px-12 border-t border-[#d4af37]/20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-sans font-semibold">Heirloom Ventures</span>
            <h2 className="text-3xl sm:text-5xl text-white font-normal mt-1">The Crown Farmlands</h2>
          </div>
          <div className="font-sans text-xs text-[#d4af37] flex items-center gap-2">
            <Award className="w-4 h-4" />
            <span>Guaranteed 100% Freehold Title Transfer</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROPERTIES.map((prop) => (
            <div
              key={prop.id}
              className="bg-[#081f15] rounded-3xl overflow-hidden border border-[#d4af37]/30 hover:border-[#d4af37] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group shadow-xl"
            >
              <div className="aspect-[16/10] relative overflow-hidden cursor-pointer" onClick={() => onSelectProperty(prop)}>
                <img src={prop.heroImage} alt={prop.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.75]" />
                <div className="absolute top-4 left-4 bg-[#05140e]/90 px-3 py-1 rounded-full border border-[#d4af37]/40 text-[10px] font-sans uppercase tracking-widest text-[#d4af37]">
                  {prop.tag}
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="font-sans text-[10px] uppercase tracking-widest text-[#d4af37] mb-1">{prop.enclave}</div>
                  <h3 onClick={() => onSelectProperty(prop)} className="text-2xl font-medium text-white group-hover:text-[#d4af37] cursor-pointer transition-colors leading-snug">
                    {prop.title}
                  </h3>
                  <p className="font-sans text-xs text-slate-300 mt-1 font-light line-clamp-2">
                    {prop.subtitle}
                  </p>

                  <div className="font-sans grid grid-cols-2 gap-2 py-3 my-4 border-y border-[#d4af37]/20 text-xs text-slate-200">
                    <div>Extent: <strong className="text-white">{prop.plotSize}</strong></div>
                    <div className="text-right">5Y Growth: <strong className="text-[#d4af37]">{prop.appreciation5Y}</strong></div>
                  </div>
                </div>

                <div className="font-sans flex items-center justify-between pt-2">
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-slate-400">Imperial Valuation</span>
                    <div className="font-serif text-xl font-bold text-[#d4af37]">
                      {formatCurrencyValue(prop.priceINR, currency)}
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectProperty(prop)}
                    className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#aa8322] text-[#05140e] font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all"
                  >
                    Dossier
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Royal Seal Footer */}
      <footer className="border-t border-[#d4af37]/30 bg-[#030a07] py-12 px-6 sm:px-12 font-sans text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Crown className="w-6 h-6 text-[#d4af37]" />
            <div>
              <strong className="text-white block font-serif text-sm">ABHISTA INFRA’S IMPERIAL REGISTRY</strong>
              <span className="text-[10px] text-slate-500">Corporate Palace: Kakatiya Hills, Madhapur, Hyderabad - 500081</span>
            </div>
          </div>
          <div className="text-center md:text-right text-[10px] text-slate-500">
            © 2006–{new Date().getFullYear()} Abhista Infra’s. Royal Heritage Edition.
          </div>
        </div>
      </footer>

    </div>
  );
}
