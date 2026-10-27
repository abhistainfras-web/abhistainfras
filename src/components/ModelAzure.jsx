import React, { useState } from 'react';
import { PROPERTIES, COMPANY_INFO } from '../data/properties';
import { formatCurrencyValue } from './PropertyCard';
import { Sun, Waves, Phone, ArrowUpRight, Calculator, Check, Shield, Download, MapPin, Sparkles } from 'lucide-react';

export default function ModelAzure({ currency, onSelectProperty, onOpenViewingModal }) {
  const [activeTab, setActiveTab] = useState('all');
  const [emiLoanAmount, setEmiLoanAmount] = useState(3000000);
  const [emiTenure, setEmiTenure] = useState(15); // years

  // Simple EMI calculator: P * r * (1+r)^n / ((1+r)^n - 1) at ~8.5% interest
  const monthlyRate = 8.5 / (12 * 100);
  const totalMonths = emiTenure * 12;
  const calculatedEmi = Math.round(
    (emiLoanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1)
  );

  const filtered = PROPERTIES.filter((p) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'farmland') return p.category === 'farmland';
    if (activeTab === 'residential') return p.category === 'residential';
    return true;
  });

  return (
    <div className="bg-[#f8fafc] text-[#0f172a] font-sans min-h-screen selection:bg-sky-500/20 selection:text-sky-900">
      
      {/* Azure Coastal Top Header */}
      <nav className="border-b border-slate-200 bg-white/95 backdrop-blur-md sticky top-0 z-40 px-6 sm:px-12 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sky-600 to-blue-700 text-white flex items-center justify-center font-bold shadow-md shadow-sky-500/20">
              <Sun className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <span className="font-bold text-lg tracking-wide text-slate-900 block leading-none">ABHISTA COASTAL & RESORT</span>
              <span className="text-[10px] tracking-widest text-sky-600 uppercase font-semibold">Luxury Farm Estates</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-slate-600">
            <a href="#azure-ventures" className="hover:text-sky-600 transition-colors">Resort Estates</a>
            <a href="#azure-calculator" className="hover:text-sky-600 transition-colors">EMI Simulator</a>
            <a href="#azure-lifestyle" className="hover:text-sky-600 transition-colors">Resort Lifestyle</a>
            <a href="tel:+918185898089" className="text-sky-600 font-bold flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" />
              +91 818 5898 089
            </a>
          </div>

          <button
            onClick={() => onOpenViewingModal(null)}
            className="px-5 py-2.5 rounded-full bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-md shadow-sky-500/20"
          >
            Book Free Tour
          </button>
        </div>
      </nav>

      {/* Sunlit Coastal Hero */}
      <section className="relative bg-gradient-to-b from-sky-50 via-white to-slate-50 py-16 lg:py-24 px-6 sm:px-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>Resort Farmlands & Gated Communities • Hyderabad & Bengaluru</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Weekend Escapes. <br />
              <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                Generational Wealth.
              </span>
            </h1>

            <p className="text-base text-slate-600 font-normal leading-relaxed max-w-xl">
              Imagine waking up to the gentle rustle of teak trees, crystal-clear blue skies, and your private orchard—all located within a 45-minute drive from the city.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200 text-slate-800 text-xs">
              <div>
                <div className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">Acreage</div>
                <div className="text-xl font-bold text-sky-600 mt-0.5">100+ Acres</div>
              </div>
              <div>
                <div className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">Title Status</div>
                <div className="text-xl font-bold text-slate-900 mt-0.5">100% Clear</div>
              </div>
              <div>
                <div className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">Starting Plot</div>
                <div className="text-xl font-bold text-emerald-600 mt-0.5">151 Sq.Yds</div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="#azure-ventures"
                className="px-8 py-3.5 rounded-full bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-sky-600/25"
              >
                Explore Active Ventures
              </a>
              <button
                onClick={() => onOpenViewingModal(null)}
                className="px-8 py-3.5 rounded-full border border-slate-300 hover:border-slate-400 bg-white text-slate-800 font-semibold text-xs uppercase tracking-wider transition-colors"
              >
                Arrange Weekend Site Visit
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/3]">
              <img
                src="/assets/abhista/sample-slide.jpg"
                alt="Coastal Resort Farm"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 max-w-xs hidden sm:block">
              <div className="flex items-center gap-2 text-emerald-600 text-xs font-bold mb-1">
                <Check className="w-4 h-4" />
                <span>Immediate Spot Registration</span>
              </div>
              <p className="text-[11px] text-slate-500">
                100% Vaastu compliant layouts with dedicated water pipeline and 33-foot avenue roads.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Azure Ventures Catalog */}
      <section id="azure-ventures" className="py-20 max-w-7xl mx-auto px-6 sm:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600">Curated Opportunities</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">Featured Plotted Enclaves</h2>
          </div>

          <div className="flex gap-2">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'farmland', label: 'Organic Farmlands' },
              { id: 'residential', label: 'Plotted Layouts' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-sky-600 text-white shadow-md'
                    : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-sky-500 transition-all duration-300 hover:shadow-xl flex flex-col justify-between group"
            >
              <div className="aspect-[16/10] relative overflow-hidden cursor-pointer bg-slate-100" onClick={() => onSelectProperty(item)}>
                <img src={item.heroImage} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 rounded-full text-[10px] font-bold text-sky-700 shadow-sm">
                  {item.tag}
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="text-xs font-semibold text-sky-600 uppercase tracking-wide mb-1">{item.enclave}</div>
                  <h3 onClick={() => onSelectProperty(item)} className="text-xl font-bold text-slate-900 group-hover:text-sky-600 cursor-pointer transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">{item.subtitle}</p>

                  <div className="grid grid-cols-2 gap-2 py-3 my-4 border-y border-slate-100 text-xs text-slate-700">
                    <div>Plot: <strong>{item.plotSize}</strong></div>
                    <div className="text-right text-emerald-600 font-semibold">{item.approval.split('/')[0]}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div>
                    <span className="text-[10px] uppercase text-slate-400 font-medium">Starting At</span>
                    <div className="text-xl font-extrabold text-slate-900">
                      {formatCurrencyValue(item.priceINR, currency)}
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectProperty(item)}
                    className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-sky-600 text-white font-semibold text-xs uppercase tracking-wider transition-colors"
                  >
                    Dossier
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive EMI Calculator Section */}
      <section id="azure-calculator" className="bg-slate-100 py-20 px-6 sm:px-12 border-t border-slate-200">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-wider font-bold text-sky-600">Financial Planning</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">Estimated Monthly EMI Simulator</h2>
            <p className="text-xs text-slate-500 mt-1">Based on prevailing 8.5% p.a. bank loan rates for plotted property.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                  <span>Loan Amount</span>
                  <span className="text-sky-600">{formatCurrencyValue(emiLoanAmount, currency)}</span>
                </div>
                <input
                  type="range"
                  min="1000000"
                  max="10000000"
                  step="200000"
                  value={emiLoanAmount}
                  onChange={(e) => setEmiLoanAmount(Number(e.target.value))}
                  className="w-full accent-sky-600"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                  <span>Tenure (Years)</span>
                  <span className="text-sky-600">{emiTenure} Years</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="20"
                  step="1"
                  value={emiTenure}
                  onChange={(e) => setEmiTenure(Number(e.target.value))}
                  className="w-full accent-sky-600"
                />
              </div>
            </div>

            <div className="bg-sky-50 rounded-2xl p-6 text-center border border-sky-100">
              <span className="text-xs font-semibold text-sky-800 uppercase tracking-wider">Estimated Monthly EMI</span>
              <div className="text-3xl sm:text-4xl font-extrabold text-sky-700 mt-2">
                {formatCurrencyValue(calculatedEmi, currency)} <span className="text-xs font-normal text-slate-500">/ month</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-2">
                Bank loan assistance provided through our institutional partners (SBI, HDFC, ICICI).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Coastal Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 px-6 sm:px-12 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <strong className="text-white text-sm block">ABHISTA INFRA’S RESORT & PLOTTED VENTURES</strong>
            <span className="text-[11px] text-slate-400">Madhapur Corporate HQ, Hyderabad - 500081</span>
          </div>
          <div className="flex gap-6">
            <a href="tel:+918185898089" className="text-sky-400 font-semibold">+91 818 5898 089</a>
            <a href="mailto:info@abhista.in" className="text-sky-400 font-semibold">info@abhista.in</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
