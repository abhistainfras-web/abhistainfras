import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { formatCurrencyValue } from '../components/PropertyCard';
import { Calculator, TrendingUp, ShieldCheck, CheckCircle2, ArrowRight, Download, Calendar } from 'lucide-react';

export default function CalculatorPage({ onOpenVisitModal }) {
  const [investment, setInvestment] = useState(4000000); // 40 Lakhs INR
  const [years, setYears] = useState(5);
  const [growthRate, setGrowthRate] = useState(15); // 15% p.a.

  // Compounded Future Value: P * (1 + r)^t
  const futureValue = Math.round(investment * Math.pow(1 + growthRate / 100, years));
  const totalProfit = futureValue - investment;

  // Year by year breakdown
  const yearBreakdown = [];
  for (let y = 1; y <= years; y++) {
    const val = Math.round(investment * Math.pow(1 + growthRate / 100, y));
    yearBreakdown.push({ year: y, value: val, gain: val - investment });
  }

  return (
    <div className="pt-24 pb-24 bg-slate-50 min-h-screen">
      
      {/* Breadcrumb & Header */}
      <div className="bg-white border-b border-slate-200 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-3">
            <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-800">Land Wealth & ROI Calculator</span>
          </div>

          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest font-bold text-[#d99600] bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
              Interactive Investment Modeling
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-3">
              Land Capital Appreciation & Compounding Simulator
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
              Model your future returns across Hyderabad and Bengaluru’s rapidly expanding expressways. See compounding growth projections and tax exemptions under Indian tax laws.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Controls Panel (6 cols) */}
          <div className="lg:col-span-6 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-8">
            <h2 className="text-xl font-bold text-slate-900">Configure Your Investment Parameters</h2>

            {/* Outlay */}
            <div>
              <div className="flex justify-between items-center text-xs font-bold mb-2">
                <span className="text-slate-700">Initial Land Outlay</span>
                <span className="text-xl text-[#d99600] font-extrabold">{formatCurrencyValue(investment, 'INR')}</span>
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
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-semibold">
                <span>₹20 Lakhs</span>
                <span>₹50 Lakhs</span>
                <span>₹1 Crore</span>
              </div>
            </div>

            {/* Tenure */}
            <div>
              <div className="flex justify-between items-center text-xs font-bold mb-2">
                <span className="text-slate-700">Investment Horizon</span>
                <span className="text-xl text-[#d99600] font-extrabold">{years} Years</span>
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
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-semibold">
                <span>3 Years</span>
                <span>5 Years</span>
                <span>10 Years</span>
              </div>
            </div>

            {/* Growth Rate */}
            <div>
              <div className="flex justify-between items-center text-xs font-bold mb-2">
                <span className="text-slate-700">Expected Annual Growth Rate</span>
                <span className="text-xl text-[#d99600] font-extrabold">{growthRate}% p.a.</span>
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
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-semibold">
                <span>10% (Conservative)</span>
                <span>15% (ORR Trend)</span>
                <span>25% (SEZ Boom)</span>
              </div>
            </div>

            {/* Section 10(1) Tax Perks Box */}
            <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 space-y-2">
              <div className="flex items-center gap-2 font-bold text-amber-900 text-xs uppercase tracking-wide">
                <ShieldCheck className="w-4 h-4 text-amber-700" />
                <span>Agricultural Land Tax Advantage</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Under <strong>Section 10(1)</strong> of the Income Tax Act, 1961, agricultural produce yields are 100% tax-free. Furthermore, reinvestment in residential property or agricultural land affords capital gain exemptions under <strong>Section 54F</strong>.
              </p>
            </div>
          </div>

          {/* Results Summary & Breakdown (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl space-y-6">
              <span className="text-xs uppercase tracking-widest font-bold text-[#FDB813]">
                Compounded Valuation Result
              </span>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 bg-slate-800 rounded-2xl border border-slate-700">
                  <span className="text-[10px] uppercase text-slate-400 font-bold block">Estimated Land Value</span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#FDB813] mt-1">
                    {formatCurrencyValue(futureValue, 'INR')}
                  </div>
                </div>

                <div className="p-5 bg-slate-800 rounded-2xl border border-slate-700">
                  <span className="text-[10px] uppercase text-slate-400 font-bold block">Total Capital Gain</span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 mt-1">
                    +{formatCurrencyValue(totalProfit, 'INR')}
                  </div>
                </div>
              </div>

              <button
                onClick={() => onOpenVisitModal(null)}
                className="w-full py-4 rounded-xl bg-[#FDB813] hover:bg-[#e6a50e] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Site Visit & Lock Price</span>
              </button>
            </div>

            {/* Year-by-Year Table */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 mb-4">Year-by-Year Projection Breakdown</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-400 font-bold uppercase text-[10px]">
                      <th className="pb-2">Year</th>
                      <th className="pb-2">Estimated Value</th>
                      <th className="pb-2">Cumulative Gain</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {yearBreakdown.map((row) => (
                      <tr key={row.year} className="hover:bg-slate-50">
                        <td className="py-2.5 font-bold text-slate-800">Year {row.year}</td>
                        <td className="py-2.5 font-bold text-slate-900">{formatCurrencyValue(row.value, 'INR')}</td>
                        <td className="py-2.5 font-bold text-emerald-700">+{formatCurrencyValue(row.gain, 'INR')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
