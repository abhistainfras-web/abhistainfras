import React, { useState } from 'react';
import { Calculator, TrendingUp, ShieldCheck, ArrowRight } from 'lucide-react';
import { formatCurrencyValue } from './PropertyCard';

export default function BrandCalculator({ onOpenVisitModal, currency }) {
  const [investment, setInvestment] = useState(4000000); // 40 Lakhs INR
  const [years, setYears] = useState(5);
  const [growthRate, setGrowthRate] = useState(15); // 15% p.a.

  // Compounded Future Value: P * (1 + r)^t
  const futureValue = Math.round(investment * Math.pow(1 + growthRate / 100, years));
  const totalProfit = futureValue - investment;

  return (
    <section id="calculator" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-slate-900 rounded-3xl p-8 sm:p-14 text-white shadow-xl relative overflow-hidden">
        
        {/* Ambient Subtle Accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-700/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-2xl mb-12">
          <span className="text-xs uppercase tracking-widest font-bold text-[#FDB813]">
            Interactive Investment Modeling
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
            Land Wealth & Appreciation Simulator
          </h2>
          <p className="text-sm text-slate-300 font-normal mt-2">
            Calculate the compounding capital growth potential on masterplanned farmlands and plotted layouts across Hyderabad's expanding corridors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          
          {/* Sliders Area */}
          <div className="lg:col-span-6 space-y-6 bg-slate-800/60 p-6 sm:p-8 rounded-2xl border border-slate-700">
            
            {/* Slider 1: Investment Outlay */}
            <div>
              <div className="flex justify-between items-center text-xs font-semibold mb-2">
                <span className="text-slate-300">Initial Land Outlay</span>
                <span className="text-[#FDB813] text-base font-bold">{formatCurrencyValue(investment, currency)}</span>
              </div>
              <input
                type="range"
                min="2000000"
                max="10000000"
                step="500000"
                value={investment}
                onChange={(e) => setInvestment(Number(e.target.value))}
                className="w-full accent-[#FDB813] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>₹20 Lakhs</span>
                <span>₹50 Lakhs</span>
                <span>₹1 Crore</span>
              </div>
            </div>

            {/* Slider 2: Holding Years */}
            <div>
              <div className="flex justify-between items-center text-xs font-semibold mb-2">
                <span className="text-slate-300">Holding Horizon</span>
                <span className="text-[#FDB813] text-base font-bold">{years} Years</span>
              </div>
              <input
                type="range"
                min="3"
                max="10"
                step="1"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full accent-[#FDB813] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>3 Years</span>
                <span>5 Years</span>
                <span>10 Years</span>
              </div>
            </div>

            {/* Slider 3: Expected Appreciation Rate */}
            <div>
              <div className="flex justify-between items-center text-xs font-semibold mb-2">
                <span className="text-slate-300">Annual Growth Rate</span>
                <span className="text-[#FDB813] text-base font-bold">{growthRate}% p.a.</span>
              </div>
              <input
                type="range"
                min="10"
                max="25"
                step="1"
                value={growthRate}
                onChange={(e) => setGrowthRate(Number(e.target.value))}
                className="w-full accent-[#FDB813] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>10% (Conservative)</span>
                <span>15% (ORR / NH-44 Trend)</span>
                <span>25% (High Growth SEZ)</span>
              </div>
            </div>

          </div>

          {/* Results Display */}
          <div className="lg:col-span-6 bg-slate-800/90 p-8 rounded-2xl border border-amber-500/30 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#FDB813] font-bold">
                Projected Return After {years} Years
              </span>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-slate-900 rounded-xl border border-slate-700">
                  <span className="text-[10px] uppercase text-slate-400 font-bold block">Estimated Land Value</span>
                  <div className="text-2xl font-extrabold text-[#FDB813] mt-1">
                    {formatCurrencyValue(futureValue, currency)}
                  </div>
                </div>

                <div className="p-4 bg-slate-900 rounded-xl border border-slate-700">
                  <span className="text-[10px] uppercase text-slate-400 font-bold block">Estimated Capital Gain</span>
                  <div className="text-2xl font-extrabold text-white mt-1">
                    +{formatCurrencyValue(totalProfit, currency)}
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-amber-950/40 border border-amber-500/30 text-xs text-amber-200 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#FDB813]" />
                <span>
                  100% Tax-Exempt Agricultural Capital Gains eligible under Section 10(1) & Section 54F for qualified landholders.
                </span>
              </div>
            </div>

            <button
              onClick={() => onOpenVisitModal(null)}
              className="w-full py-4 rounded-xl bg-[#FDB813] hover:bg-[#e6a50e] text-slate-950 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-lg shadow-amber-500/10"
            >
              <span>Request Detailed Due Diligence & Cost Sheet</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
