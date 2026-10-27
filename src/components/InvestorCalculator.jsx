import React, { useState } from 'react';
import { Calculator, TrendingUp, PieChart, ShieldCheck, ArrowRight } from 'lucide-react';
import { formatCurrencyValue } from './PropertyCard';

export default function InvestorCalculator({ currency, onOpenViewingModal }) {
  const [assetPrice, setAssetPrice] = useState(4500000); // 45 Lakhs INR
  const [equityPercent, setEquityPercent] = useState(60); // 60% down
  const [annualYield, setAnnualYield] = useState(8.5); // 8.5% net yield
  const [appreciation5Y, setAppreciation5Y] = useState(72); // 72% 5Y appreciation

  // Financial calculations
  const equityInjected = (assetPrice * equityPercent) / 100;
  const annualGrossRental = (assetPrice * annualYield) / 100;
  const fiveYearAppreciationGain = (assetPrice * appreciation5Y) / 100;
  const total5YearReturn = (annualGrossRental * 5) + fiveYearAppreciationGain;
  const annualizedRoiOnEquity = ((total5YearReturn / equityInjected) / 5) * 100;

  return (
    <section id="investor-intelligence" className="py-24 bg-gradient-to-b from-obsidian-950 via-obsidian-900 to-obsidian-950 relative overflow-hidden">
      
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-400/30 bg-gold-500/10 text-gold-300 text-[11px] uppercase tracking-[0.25em] font-medium mb-3">
            <Calculator className="w-3.5 h-3.5 text-gold-400" />
            Land & Farmland Wealth Modeling
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-white tracking-tight">
            Farmland Yield & <span className="italic font-normal gold-gradient-text">Capital Appreciation</span> Engine
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light mt-3">
            Model cash flow from plantation yield, 5-year compounding land appreciation along Hyderabad ORR and Bengaluru expressways.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Column */}
          <div className="lg:col-span-6 glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 space-y-6">
            <h3 className="text-xs uppercase tracking-[0.2em] text-gold-400 font-semibold border-b border-white/10 pb-3 flex items-center justify-between">
              <span>Acquisition Parameters</span>
              <span className="text-slate-400 font-normal">Real-Time Simulator</span>
            </h3>

            {/* Slider 1: Asset Value */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-300">Target Plot / Venture Value</span>
                <span className="font-serif text-base text-gold-300 font-semibold">{formatCurrencyValue(assetPrice, currency)}</span>
              </div>
              <input
                type="range"
                min="1500000"
                max="25000000"
                step="500000"
                value={assetPrice}
                onChange={(e) => setAssetPrice(Number(e.target.value))}
                aria-label="Target Plot / Venture Value"
                className="w-full h-1.5 bg-obsidian-800 rounded-lg appearance-none cursor-pointer accent-gold-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>₹15 Lakhs</span>
                <span>₹1 Crore</span>
                <span>₹2.5 Crores+</span>
              </div>
            </div>

            {/* Slider 2: Equity Allocation */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-300">Equity / Initial Down Payment</span>
                <span className="font-serif text-base text-gold-300 font-semibold">{equityPercent}% ({formatCurrencyValue(equityInjected, currency)})</span>
              </div>
              <input
                type="range"
                min="20"
                max="100"
                step="5"
                value={equityPercent}
                onChange={(e) => setEquityPercent(Number(e.target.value))}
                aria-label="Equity Percentage"
                className="w-full h-1.5 bg-obsidian-800 rounded-lg appearance-none cursor-pointer accent-gold-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>20% (Bank Loan Support)</span>
                <span>60% (Balanced)</span>
                <span>100% (Outright Spot Reg.)</span>
              </div>
            </div>

            {/* Slider 3: Net Rental Yield */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-300">Annual Plantation / Lease Yield</span>
                <span className="font-serif text-base text-emerald-400 font-semibold">{annualYield.toFixed(1)}% / yr</span>
              </div>
              <input
                type="range"
                min="4"
                max="14"
                step="0.5"
                value={annualYield}
                onChange={(e) => setAnnualYield(Number(e.target.value))}
                aria-label="Annual Yield"
                className="w-full h-1.5 bg-obsidian-800 rounded-lg appearance-none cursor-pointer accent-gold-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>4.0% (Base Lease)</span>
                <span>8.5% (High Horticulture)</span>
                <span>14.0% (Organic Agri High-Yield)</span>
              </div>
            </div>

            {/* Slider 4: 5-Year Capital Appreciation */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-300">5-Year Land Value Growth Forecast</span>
                <span className="font-serif text-base text-gold-300 font-semibold">+{appreciation5Y}%</span>
              </div>
              <input
                type="range"
                min="30"
                max="120"
                step="2"
                value={appreciation5Y}
                onChange={(e) => setAppreciation5Y(Number(e.target.value))}
                aria-label="5-Year Land Growth"
                className="w-full h-1.5 bg-obsidian-800 rounded-lg appearance-none cursor-pointer accent-gold-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>+30% (Standard)</span>
                <span>+72% (Patancheru / NH-44 Track Record)</span>
                <span>+120% (High Growth SEZ Corridor)</span>
              </div>
            </div>

            {/* Note */}
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-slate-400 leading-relaxed flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
              <span>
                100% Tax-Exempt Agricultural Income under Section 10(1) of Indian Income Tax Act. Section 54F Capital Gains exemption applicable.
              </span>
            </div>

          </div>

          {/* Results Projection Card */}
          <div className="lg:col-span-6 glass-panel-gold rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            
            <div>
              <div className="flex items-center justify-between border-b border-gold-500/20 pb-4 mb-6">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-gold-400 font-semibold">5-Year Growth Outlook</span>
                  <h4 className="font-serif text-2xl text-white font-medium">Wealth Creation Summary</h4>
                </div>
                <div className="p-2 rounded-xl bg-gold-500/10 text-gold-400">
                  <PieChart className="w-5 h-5" />
                </div>
              </div>

              {/* Major KPI Display */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400">Annual Return / Yield</span>
                  <div className="font-serif text-xl sm:text-2xl font-bold text-emerald-400 mt-1">
                    {formatCurrencyValue(annualGrossRental, currency)}
                  </div>
                  <span className="text-[10px] text-slate-400">{annualYield}% yearly yield</span>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400">5Y Land Capital Gain</span>
                  <div className="font-serif text-xl sm:text-2xl font-bold gold-gradient-text mt-1">
                    {formatCurrencyValue(fiveYearAppreciationGain, currency)}
                  </div>
                  <span className="text-[10px] text-slate-400">+{appreciation5Y}% asset appreciation</span>
                </div>
              </div>

              {/* Total Cumulative Return Card */}
              <div className="p-5 rounded-xl bg-gradient-to-r from-gold-500/15 via-gold-400/10 to-transparent border border-gold-400/30 mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-gold-300 font-medium">
                      Total 5-Year Capital Expansion
                    </span>
                    <div className="font-serif text-3xl sm:text-4xl font-bold text-white mt-1">
                      {formatCurrencyValue(total5YearReturn, currency)}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400">Equity Annualized ROI</span>
                    <div className="text-lg font-bold text-emerald-400 mt-0.5">
                      ~{annualizedRoiOnEquity.toFixed(1)}% p.a.
                    </div>
                  </div>
                </div>
              </div>

              {/* Tax & Legal Privileges */}
              <div className="space-y-2 mb-6">
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">Investor Assurances</span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.02] text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>100% Clear Title Verification</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.02] text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
                    <span>Immediate Spot Registration</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onOpenViewingModal(null)}
                className="flex-1 py-3 px-5 rounded-xl gold-gradient-bg text-obsidian-950 font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:scale-[1.02] transition-all shadow-lg"
              >
                <span>Request Project Cost Sheet & Due Diligence</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
