import React, { useState } from 'react';
import { PROPERTIES, COMPANY_INFO } from '../data/properties';
import { formatCurrencyValue } from './PropertyCard';
import { ArrowUpRight, Trees, Shield, Download, Calendar, Phone, Check, MapPin, SlidersHorizontal, Sparkles } from 'lucide-react';

export default function ModelOrganic({ currency, onSelectProperty, onOpenViewingModal }) {
  const [activeTab, setActiveTab] = useState('all');
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);

  const heroEstates = PROPERTIES.slice(0, 3);
  const currentHero = heroEstates[activeHeroIndex];

  const filtered = PROPERTIES.filter((p) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'ongoing') return p.status === 'ongoing';
    if (activeTab === 'completed') return p.status === 'completed';
    return p.category === activeTab;
  });

  return (
    <div className="bg-[#f7f5f0] text-[#1c1917] font-sans min-h-screen selection:bg-[#8c734b]/20 selection:text-[#5c4a2e]">
      
      {/* Editorial Top Navigation */}
      <nav className="border-b border-[#e5dfd5] bg-[#f7f5f0]/90 backdrop-blur-md sticky top-0 z-40 px-6 sm:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-serif text-2xl tracking-[0.18em] font-medium text-[#1c1917]">
              ABHISTA
            </span>
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#8c734b] font-semibold border-l border-[#d3cbbe] pl-3">
              Atelier Living
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs tracking-[0.2em] uppercase font-medium text-[#57534e]">
            <a href="#atelier-portfolio" className="hover:text-[#8c734b] transition-colors">Portfolios</a>
            <a href="#nature-philosophy" className="hover:text-[#8c734b] transition-colors">Sattva Philosophy</a>
            <a href="#backward-integration" className="hover:text-[#8c734b] transition-colors">Integration</a>
            <a href="tel:+917075528334" className="text-[#8c734b] font-semibold flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" />
              +91 70755 28334
            </a>
          </div>

          <button
            onClick={() => onOpenViewingModal(null)}
            className="px-5 py-2.5 rounded-full border border-[#8c734b] text-[#8c734b] hover:bg-[#8c734b] hover:text-white transition-all text-xs uppercase tracking-wider font-semibold"
          >
            Arrange Private Visit
          </button>
        </div>
      </nav>

      {/* Magazine Split-Screen Hero */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Editorial Copy */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#8c734b]">
            <span className="w-6 h-[1.5px] bg-[#8c734b]"></span>
            <span>Edition 2026 • Curated Hyderabad & Bengaluru</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-[#1c1917] font-normal leading-[1.12] tracking-tight">
            Soil, Soul & <br />
            <span className="italic font-light text-[#8c734b]">Architectural Purity</span>
          </h1>

          <p className="text-sm sm:text-base text-[#57534e] font-light leading-relaxed max-w-xl">
            Abhista Infra redefines how urban families build lasting generational wealth. Integrating Vedic Vaastu, lush horticulture, and 100% transparent legal titles across Telangana’s fastest-appreciating corridors.
          </p>

          {/* Quick Info Strip */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#e5dfd5] text-xs">
            <div>
              <div className="text-[10px] uppercase text-[#78716c] tracking-widest">Heritage</div>
              <div className="font-serif text-lg font-medium text-[#1c1917] mt-0.5">Since 2016</div>
            </div>
            <div>
              <div className="text-[10px] uppercase text-[#78716c] tracking-widest">Farmland Scale</div>
              <div className="font-serif text-lg font-medium text-[#1c1917] mt-0.5">100+ Acres</div>
            </div>
            <div>
              <div className="text-[10px] uppercase text-[#78716c] tracking-widest">Execution</div>
              <div className="font-serif text-lg font-medium text-[#8c734b] mt-0.5">100% In-House</div>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onSelectProperty(currentHero)}
              className="px-6 py-3.5 rounded-full bg-[#1c1917] text-[#f7f5f0] text-xs uppercase tracking-widest font-semibold hover:bg-[#8c734b] transition-colors flex items-center gap-2"
            >
              <span>Explore {currentHero.title}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onOpenViewingModal(currentHero)}
              className="px-6 py-3.5 rounded-full border border-[#1c1917]/20 text-[#1c1917] text-xs uppercase tracking-widest font-semibold hover:border-[#1c1917] transition-colors"
            >
              Book Chauffeured Visit
            </button>
          </div>
        </div>

        {/* Right Large Image Showcase */}
        <div className="lg:col-span-6 relative">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-[#e5dfd5]">
            <img
              src={currentHero.heroImage}
              alt={currentHero.title}
              className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6 text-white flex justify-between items-end">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#dec277]">{currentHero.enclave}</span>
                <h3 className="font-serif text-2xl font-medium">{currentHero.title}</h3>
                <p className="text-xs text-white/80 mt-0.5 font-light">{currentHero.plotSize} • {currentHero.approval}</p>
              </div>
              <div className="text-right">
                <span className="text-[10px] uppercase tracking-wider text-white/70">From</span>
                <div className="font-serif text-xl font-bold text-[#dec277]">
                  {formatCurrencyValue(currentHero.priceINR, currency)}
                </div>
              </div>
            </div>
          </div>

          {/* Slide selector pills */}
          <div className="flex gap-2 justify-center mt-4">
            {heroEstates.map((e, idx) => (
              <button
                key={e.id}
                onClick={() => setActiveHeroIndex(idx)}
                className={`px-4 py-1.5 rounded-full text-xs transition-all ${
                  activeHeroIndex === idx
                    ? 'bg-[#8c734b] text-white font-semibold'
                    : 'bg-white border border-[#e5dfd5] text-[#57534e] hover:border-[#8c734b]'
                }`}
              >
                0{idx + 1} {e.title}
              </button>
            ))}
          </div>
        </div>

      </section>

      {/* Portfolio Gallery Section */}
      <section id="atelier-portfolio" className="max-w-7xl mx-auto px-6 sm:px-12 py-16 border-t border-[#e5dfd5]">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#8c734b] font-semibold">Curated Collection</span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1c1917] font-normal mt-1">
              The Living <span className="italic text-[#8c734b]">Portfolios</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {[
              { id: 'all', label: 'All Ventures' },
              { id: 'farmland', label: 'Farmlands' },
              { id: 'residential', label: 'Plotted Layouts' },
              { id: 'ongoing', label: 'Ongoing' },
              { id: 'completed', label: 'Completed' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#8c734b] text-white shadow-md'
                    : 'bg-white border border-[#e5dfd5] text-[#57534e] hover:border-[#8c734b]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl overflow-hidden border border-[#e5dfd5] hover:border-[#8c734b]/60 transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
            >
              <div 
                className="aspect-[16/10] overflow-hidden relative cursor-pointer bg-[#e5dfd5]"
                onClick={() => onSelectProperty(item)}
              >
                <img
                  src={item.heroImage}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-white/95 text-[#1c1917] shadow-sm">
                    {item.tag}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex justify-between items-center text-xs text-[#78716c] mb-1">
                    <span className="uppercase tracking-widest text-[#8c734b] font-medium">{item.enclave}</span>
                    <span>{item.city}</span>
                  </div>

                  <h3
                    onClick={() => onSelectProperty(item)}
                    className="font-serif text-2xl text-[#1c1917] hover:text-[#8c734b] cursor-pointer transition-colors"
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#57534e] mt-1 font-light line-clamp-2">
                    {item.subtitle}
                  </p>

                  <div className="grid grid-cols-2 gap-2 py-3 my-4 border-y border-[#f0ede6] text-xs text-[#44403c]">
                    <div className="flex items-center gap-1.5">
                      <Trees className="w-3.5 h-3.5 text-[#8c734b]" />
                      <span>{item.plotSize}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-right justify-end">
                      <span className="text-[#78716c]">Growth:</span>
                      <strong className="text-[#8c734b]">{item.appreciation5Y}</strong>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#78716c]">From</span>
                    <div className="font-serif text-xl font-bold text-[#1c1917]">
                      {formatCurrencyValue(item.priceINR, currency)}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {item.brochurePdf && (
                      <a
                        href={item.brochurePdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-full border border-[#e5dfd5] hover:bg-[#8c734b]/10 text-[#57534e] hover:text-[#8c734b] transition-colors"
                        title="Download Brochure"
                      >
                        <Download className="w-4 h-4" />
                      </a>
                    )}
                    <button
                      onClick={() => onSelectProperty(item)}
                      className="px-4 py-2 rounded-full bg-[#1c1917] text-white hover:bg-[#8c734b] text-xs uppercase tracking-wider font-semibold transition-colors"
                    >
                      Dossier
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Sattva Philosophy Section */}
      <section id="nature-philosophy" className="bg-[#eeeae1] py-20 px-6 sm:px-12 border-t border-[#e5dfd5]">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8c734b] font-semibold">Our Ethos</span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1c1917] font-normal">
            Rooted in <span className="italic text-[#8c734b]">Sattva Vikasa</span>
          </h2>
          <p className="text-sm sm:text-base text-[#57534e] font-light max-w-2xl mx-auto leading-relaxed">
            Founded by Mr. M. Ramachandra Reddy, Abhista Infra creates spaces where nature, Vaastu harmony, and generational value flourish together.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 text-left">
            <div className="bg-white/80 p-6 rounded-2xl border border-[#e5dfd5]">
              <div className="w-8 h-8 rounded-full bg-[#8c734b]/15 text-[#8c734b] flex items-center justify-center font-serif font-bold text-sm mb-3">1</div>
              <h4 className="font-serif text-lg font-medium text-[#1c1917]">Purity of Soil</h4>
              <p className="text-xs text-[#57534e] mt-1 font-light leading-relaxed">
                Organic farmlands pre-planted with high-value fruit trees, sandalwood, and drip irrigation systems.
              </p>
            </div>

            <div className="bg-white/80 p-6 rounded-2xl border border-[#e5dfd5]">
              <div className="w-8 h-8 rounded-full bg-[#8c734b]/15 text-[#8c734b] flex items-center justify-center font-serif font-bold text-sm mb-3">2</div>
              <h4 className="font-serif text-lg font-medium text-[#1c1917]">Vedic Vaastu</h4>
              <p className="text-xs text-[#57534e] mt-1 font-light leading-relaxed">
                Every layout is drafted with traditional geometry to ensure balance, prosperity, and positive energy flow.
              </p>
            </div>

            <div className="bg-white/80 p-6 rounded-2xl border border-[#e5dfd5]">
              <div className="w-8 h-8 rounded-full bg-[#8c734b]/15 text-[#8c734b] flex items-center justify-center font-serif font-bold text-sm mb-3">3</div>
              <h4 className="font-serif text-lg font-medium text-[#1c1917]">Transparent Title</h4>
              <p className="text-xs text-[#57534e] mt-1 font-light leading-relaxed">
                Complete legal scrutiny with revenue title history and immediate spot registration for absolute peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Atelier Footer */}
      <footer className="bg-[#1c1917] text-[#e5dfd5] py-12 px-6 sm:px-12 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-serif text-xl tracking-[0.2em] font-medium text-white block">ABHISTA INFRA’S</span>
            <span className="text-[10px] text-[#a8a29e] mt-0.5">Corporate HQ: Plot 109, Street 3, Kakatiya Hills, Madhapur, Hyderabad</span>
          </div>

          <div className="flex items-center gap-6 text-slate-300">
            <a href="tel:+917075528334" className="hover:text-[#dec277]">+91 70755 28334</a>
            <a href="mailto:info@abhista.in" className="hover:text-[#dec277]">info@abhista.in</a>
          </div>

          <div className="text-[10px] text-[#a8a29e]">
            © {new Date().getFullYear()} Abhista Infra’s. Atelier Edition.
          </div>
        </div>
      </footer>

    </div>
  );
}
