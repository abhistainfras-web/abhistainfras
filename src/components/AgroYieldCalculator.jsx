import React, { useState } from 'react';
import { Trees, TrendingUp, Sparkles, ShieldCheck, CheckCircle2, DollarSign, ArrowRight, Leaf, FileText } from 'lucide-react';

const PLANTATION_MODELS = [
  {
    id: 'timber',
    name: 'High-Value Sandalwood & Malabar Neem',
    subtitle: 'Maximum Long-Term Timber Returns',
    treesPerHalfAcre: 160,
    annualAgroYieldRate: 0.08, // 8% passive agro yield
    terminalHarvestMultiplier: 2.2, // 2.2x land value at harvest
    treeMix: '40 White Sandalwood + 120 Malabar Neem + Drip Lines',
    taxExemption: '100% Tax-Exempt under Sec 10(1) IT Act',
    description: 'Managed by Abhista agro-engineers with 24/7 drip irrigation, organic bio-fertilizers, and legal felling permits upon maturity.'
  },
  {
    id: 'fruit',
    name: 'Organic Fruit Orchard (Mango & Exotic Greens)',
    subtitle: 'Annual Recurring Harvest Income',
    treesPerHalfAcre: 85,
    annualAgroYieldRate: 0.095, // 9.5% annual fruit sale
    terminalHarvestMultiplier: 1.6,
    treeMix: 'Banganapalli Mango, Taiwan Guava, Lemon & Custard Apple',
    taxExemption: '100% Tax-Exempt under Sec 10(1) IT Act',
    description: 'Delivers sweet annual organic harvests delivered to your doorstep in Hyderabad/Bengaluru plus surplus commercial auction income.'
  },
  {
    id: 'hybrid',
    name: 'Hybrid Agroforestry & Weekend Estate',
    subtitle: 'Lifestyle Villa + Managed Timber',
    treesPerHalfAcre: 110,
    annualAgroYieldRate: 0.075,
    terminalHarvestMultiplier: 1.9,
    treeMix: 'Teakwood Perimeter + Fruit Grove + Lawn Pavilion Zone',
    taxExemption: '100% Tax-Exempt under Sec 10(1) IT Act',
    description: 'Perfect balance of weekend family getaway cottage land plus managed timber wealth quietly compounding in the background.'
  }
];

export default function AgroYieldCalculator({ onOpenVisitModal }) {
  const [acreage, setAcreage] = useState(0.5); // 0.5, 1.0, 1.5, 2.0
  const [modelId, setModelId] = useState('timber');
  const [years, setYears] = useState(8);

  const selectedModel = PLANTATION_MODELS.find((m) => m.id === modelId);

  // Calculations
  const baseCostPerHalfAcre = 3200000; // ~32 Lakhs for 0.5 acre (~2420 sq.yds)
  const initialLandInvestment = (acreage / 0.5) * baseCostPerHalfAcre;

  const totalTrees = Math.round((acreage / 0.5) * selectedModel.treesPerHalfAcre);

  // Projected Land Value at 13.5% CAGR
  const annualCagr = 0.135;
  const projectedLandValue = Math.round(initialLandInvestment * Math.pow(1 + annualCagr, years));

  // Cumulative Agro Harvest Income
  const cumulativeHarvestIncome = Math.round(
    initialLandInvestment * selectedModel.annualAgroYieldRate * years * (years >= 8 ? selectedModel.terminalHarvestMultiplier * 0.6 : 0.8)
  );

  const totalWealth = projectedLandValue + cumulativeHarvestIncome;
  const netProfit = totalWealth - initialLandInvestment;

  // Sec 10(1) Tax saved assuming 30% standard IT slab on harvest
  const taxSaved = Math.round(cumulativeHarvestIncome * 0.312);

  const formatLakhs = (val) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    return `₹${(val / 100000).toFixed(1)} Lakhs`;
  };

  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden" id="agro-calculator">
      
      {/* Background radial glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#FDB813]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Leaf className="w-3.5 h-3.5 text-emerald-400" />
            <span>Farmland Plantation & Tax Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Farmland Returns & Timber Harvest Calculator
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Estimate land capital appreciation plus 100% tax-free agricultural income under Section 10(1) of the Income Tax Act.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-8 shadow-2xl">
            
            {/* 1. Plantation Model Selector */}
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
                1. Select Farmland Management Model
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {PLANTATION_MODELS.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setModelId(m.id)}
                    className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                      modelId === m.id
                        ? 'border-emerald-500 bg-emerald-950/30 text-white shadow-lg shadow-emerald-500/10 scale-[1.02]'
                        : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <div className="font-extrabold text-xs text-white leading-snug">
                        {m.name.split('(')[0].trim()}
                      </div>
                      <span className="text-[10px] text-emerald-400 block mt-1 font-semibold">
                        {m.subtitle}
                      </span>
                    </div>
                    {modelId === m.id && (
                      <span className="mt-2 text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Selected
                      </span>
                    )}
                  </button>
                ))}
              </div>
              <p className="text-xs text-slate-400 mt-3 italic">
                {selectedModel.description}
              </p>
            </div>

            {/* 2. Acreage Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  2. Farm Land Parcel Size
                </label>
                <div className="text-sm font-extrabold text-[#FDB813]">
                  {acreage} Acre <span className="text-xs text-slate-400 font-normal">({Math.round(acreage * 4840)} Sq. Yds)</span>
                </div>
              </div>
              <input
                type="range"
                min="0.5"
                max="2.5"
                step="0.5"
                value={acreage}
                onChange={(e) => setAcreage(parseFloat(e.target.value))}
                className="w-full accent-[#FDB813] cursor-pointer h-2 bg-slate-800 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                <span>0.5 Acre (Gunta 20)</span>
                <span>1.0 Acre</span>
                <span>1.5 Acres</span>
                <span>2.0 Acres</span>
                <span>2.5 Acres (Estate)</span>
              </div>
            </div>

            {/* 3. Holding Timeframe */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  3. Compounding Time Horizon
                </label>
                <div className="text-sm font-extrabold text-emerald-400">
                  {years} Years Maturity
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[5, 8, 12].map((y) => (
                  <button
                    key={y}
                    onClick={() => setYears(y)}
                    className={`py-3 rounded-xl text-xs font-extrabold border transition-all ${
                      years === y
                        ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-md'
                        : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:text-white'
                    }`}
                  >
                    {y} Years {y === 8 ? '(Recommended)' : ''}
                  </button>
                ))}
              </div>
            </div>

            {/* Model Tree Distribution Highlight */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">
                  Managed Trees on Your Land
                </span>
                <div className="text-sm font-extrabold text-white mt-0.5">
                  {totalTrees} Commercial Trees
                </div>
                <div className="text-[11px] text-emerald-400 mt-0.5">
                  {selectedModel.treeMix}
                </div>
              </div>
              <Trees className="w-8 h-8 text-emerald-500/60" />
            </div>

          </div>

          {/* Results Summary Card (5 cols) */}
          <div className="lg:col-span-5 bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-6">
            
            <div className="pb-4 border-b border-slate-100">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block">
                Dual-Wealth Projection
              </span>
              <div className="text-3xl sm:text-4xl font-black text-slate-900 mt-1">
                {formatLakhs(totalWealth)}
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Initial Outlay: <strong className="text-slate-800">{formatLakhs(initialLandInvestment)}</strong>
              </p>
            </div>

            {/* Breakdown Stack */}
            <div className="space-y-3">
              
              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-700 block">Projected Land Value</span>
                  <span className="text-[11px] text-slate-500">Based on 13.5% CAGR corridor appreciation</span>
                </div>
                <div className="text-right">
                  <span className="text-base font-extrabold text-slate-900">{formatLakhs(projectedLandValue)}</span>
                </div>
              </div>

              <div className="p-3.5 bg-emerald-50/70 rounded-2xl border border-emerald-200/80 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-emerald-950 block">Cumulative Timber & Harvest Yield</span>
                  <span className="text-[11px] text-emerald-700">Periodic pruning + terminal timber auction</span>
                </div>
                <div className="text-right">
                  <span className="text-base font-extrabold text-emerald-800">{formatLakhs(cumulativeHarvestIncome)}</span>
                </div>
              </div>

              <div className="p-3.5 bg-amber-50/70 rounded-2xl border border-amber-200/80 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-amber-950 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                    <span>Section 10(1) Tax Saved</span>
                  </span>
                  <span className="text-[11px] text-amber-800">100% Tax-Free Agricultural Income</span>
                </div>
                <div className="text-right">
                  <span className="text-base font-extrabold text-amber-900">+{formatLakhs(taxSaved)}</span>
                </div>
              </div>

            </div>

            {/* Net Gain Banner */}
            <div className="p-4 rounded-2xl bg-slate-900 text-white flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FDB813] block">
                  Net Capital Multiplier
                </span>
                <div className="text-xl font-black text-white mt-0.5">
                  {(totalWealth / initialLandInvestment).toFixed(2)}x Growth
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400">Net Profit</span>
                <div className="text-sm font-extrabold text-emerald-400">
                  +{formatLakhs(netProfit)}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2.5 pt-2">
              <button
                onClick={() => onOpenVisitModal && onOpenVisitModal({
                  title: `Agro Farmland Dossier - ${acreage} Acre ${selectedModel.name}`,
                  location: 'Arrjava Farms / Oak Tree / Radha Farms'
                })}
                className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md shadow-emerald-600/30 flex items-center justify-center gap-2"
              >
                <span>Request Detailed Agro Cashflow Sheet</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-center text-slate-400">
                Managed farming agreements are registered directly with your title deed.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
