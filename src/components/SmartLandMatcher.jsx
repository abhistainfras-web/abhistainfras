import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PROPERTIES } from '../data/properties';
import { formatCurrencyValue } from './PropertyCard';
import { Sparkles, ArrowRight, CheckCircle2, RotateCcw, MapPin, ShieldCheck, HeartHandshake, Trees, Building2, TrendingUp } from 'lucide-react';

export default function SmartLandMatcher({ onOpenVisitModal }) {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    goal: 'retreat',
    corridor: 'west',
    budget: 'mid'
  });

  const goals = [
    { id: 'retreat', label: 'Weekend Farm Retreat', icon: Trees, desc: 'Organic nature living, fruit plantations & peaceful weekend cottages' },
    { id: 'appreciation', label: 'High Capital Growth', icon: TrendingUp, desc: 'Maximum compounding land appreciation along expressways & RRR' },
    { id: 'residential', label: 'HMDA Home Construction', icon: Building2, desc: 'Approved plotted gated layouts ready for immediate villa construction' }
  ];

  const corridors = [
    { id: 'west', label: 'West Hyderabad (Patancheru / ORR Exit 3)', desc: '20-25 mins from Neopolis, Financial District & IIT Hyderabad' },
    { id: 'south', label: 'South Hyderabad (Kothur / NH-44)', desc: 'Bangalore Highway near Airport SEZ & Amazon Data Centers' },
    { id: 'north', label: 'North Hyderabad (Shamirpet)', desc: 'Genome Valley Biotech Hub, lush green ecology & BITS Pilani' },
    { id: 'bengaluru', label: 'Bengaluru South & Peripheral', desc: 'Electronic City connectivity, high tech expansion corridor' }
  ];

  const budgets = [
    { id: 'low', label: '₹28 Lakhs – ₹40 Lakhs', desc: 'Entry-level farm plots with managed agriculture income' },
    { id: 'mid', label: '₹40 Lakhs – ₹55 Lakhs', desc: 'Prime corridor farmland & residential plots with clubhouses' },
    { id: 'high', label: '₹55 Lakhs – ₹75 Lakhs+', desc: 'Large estate plots & premium luxury gated communities' }
  ];

  // Logic to find best matching venture
  const getMatch = () => {
    if (answers.corridor === 'west') {
      return answers.goal === 'retreat' 
        ? PROPERTIES.find((p) => p.id === 'abhista-01') // Arrjava
        : PROPERTIES.find((p) => p.id === 'abhista-04'); // Mirai
    }
    if (answers.corridor === 'south') {
      return answers.goal === 'residential'
        ? PROPERTIES.find((p) => p.id === 'abhista-02') // Orchid Bloom
        : PROPERTIES.find((p) => p.id === 'abhista-09'); // Florance
    }
    if (answers.corridor === 'north') {
      return PROPERTIES.find((p) => p.id === 'abhista-03'); // Oak Tree
    }
    if (answers.corridor === 'bengaluru') {
      return PROPERTIES.find((p) => p.id === 'abhista-05'); // Serene
    }
    return PROPERTIES[0];
  };

  const matchedProperty = getMatch();

  const handleReset = () => {
    setStep(1);
    setAnswers({ goal: 'retreat', corridor: 'west', budget: 'mid' });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FDB813]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-[#FDB813] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Venture Preference Matcher</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Find Your Ideal Land Venture in 3 Steps
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Select your primary objective, preferred corridor, and budget to view the matching Abhista venture.
          </p>

          {/* Progress Indicator */}
          {step <= 3 && (
            <div className="flex items-center justify-center gap-3 mt-6">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <div
                    className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center transition-all ${
                      step === s
                        ? 'bg-[#FDB813] text-slate-950 scale-110 shadow-lg shadow-amber-500/20'
                        : step > s
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-800 text-slate-500'
                    }`}
                  >
                    {step > s ? '✓' : s}
                  </div>
                  {s < 3 && <div className={`w-12 h-0.5 ${step > s ? 'bg-emerald-600' : 'bg-slate-800'}`}></div>}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Step 1: Investment Goal */}
        {step === 1 && (
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-3xl p-6 sm:p-10 backdrop-blur-md animate-fade-in space-y-6">
            <div className="text-center">
              <span className="text-[10px] uppercase font-bold text-[#FDB813] tracking-widest">Step 1 of 3</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">What is your primary investment objective?</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {goals.map((g) => {
                const Icon = g.icon;
                const isSelected = answers.goal === g.id;
                return (
                  <div
                    key={g.id}
                    onClick={() => setAnswers({ ...answers, goal: g.id })}
                    className={`p-6 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'bg-slate-900 border-[#FDB813] shadow-lg shadow-amber-500/10 scale-[1.02]'
                        : 'bg-slate-900/50 border-slate-700/60 hover:border-slate-500'
                    }`}
                  >
                    <div>
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                        isSelected ? 'bg-[#FDB813] text-slate-950' : 'bg-slate-800 text-slate-300'
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-base font-bold text-white mb-2">{g.label}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{g.desc}</p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between text-xs font-bold">
                      <span className={isSelected ? 'text-[#FDB813]' : 'text-slate-500'}>
                        {isSelected ? 'Selected' : 'Click to select'}
                      </span>
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-[#FDB813]" />}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center pt-4">
              <button
                onClick={() => setStep(2)}
                className="px-8 py-3.5 rounded-xl bg-[#FDB813] hover:bg-[#e6a50e] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md inline-flex items-center gap-2"
              >
                <span>Continue to Corridor Selection</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Preferred Corridor */}
        {step === 2 && (
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-3xl p-6 sm:p-10 backdrop-blur-md animate-fade-in space-y-6">
            <div className="text-center">
              <span className="text-[10px] uppercase font-bold text-[#FDB813] tracking-widest">Step 2 of 3</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">Which high-growth highway corridor attracts you?</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {corridors.map((c) => {
                const isSelected = answers.corridor === c.id;
                return (
                  <div
                    key={c.id}
                    onClick={() => setAnswers({ ...answers, corridor: c.id })}
                    className={`p-5 rounded-2xl border cursor-pointer transition-all flex items-start justify-between gap-3 ${
                      isSelected
                        ? 'bg-slate-900 border-[#FDB813] shadow-lg shadow-amber-500/10'
                        : 'bg-slate-900/50 border-slate-700/60 hover:border-slate-500'
                    }`}
                  >
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">{c.label}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{c.desc}</p>
                    </div>
                    {isSelected ? (
                      <CheckCircle2 className="w-5 h-5 text-[#FDB813] shrink-0 mt-0.5" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border border-slate-600 shrink-0 mt-0.5"></div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between pt-4">
              <button
                onClick={() => setStep(1)}
                className="text-xs text-slate-400 hover:text-white font-semibold"
              >
                &larr; Back to Goal
              </button>
              <button
                onClick={() => setStep(3)}
                className="px-8 py-3.5 rounded-xl bg-[#FDB813] hover:bg-[#e6a50e] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md inline-flex items-center gap-2"
              >
                <span>Continue to Budget Selection</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Budget Range */}
        {step === 3 && (
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-3xl p-6 sm:p-10 backdrop-blur-md animate-fade-in space-y-6">
            <div className="text-center">
              <span className="text-[10px] uppercase font-bold text-[#FDB813] tracking-widest">Step 3 of 3</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">What is your planned investment bracket?</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {budgets.map((b) => {
                const isSelected = answers.budget === b.id;
                return (
                  <div
                    key={b.id}
                    onClick={() => setAnswers({ ...answers, budget: b.id })}
                    className={`p-6 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'bg-slate-900 border-[#FDB813] shadow-lg shadow-amber-500/10 scale-[1.02]'
                        : 'bg-slate-900/50 border-slate-700/60 hover:border-slate-500'
                    }`}
                  >
                    <div>
                      <span className="text-xs font-bold text-[#FDB813] block mb-1">Budget Tier</span>
                      <h4 className="text-base font-bold text-white mb-2">{b.label}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{b.desc}</p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between text-xs font-bold">
                      <span className={isSelected ? 'text-[#FDB813]' : 'text-slate-500'}>
                        {isSelected ? 'Selected' : 'Select'}
                      </span>
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-[#FDB813]" />}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between pt-4">
              <button
                onClick={() => setStep(2)}
                className="text-xs text-slate-400 hover:text-white font-semibold"
              >
                &larr; Back to Corridor
              </button>
              <button
                onClick={() => setStep(4)}
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#FDB813] to-amber-500 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20 inline-flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Calculate My Exact Match</span>
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Result Match Display */}
        {step === 4 && matchedProperty && (
          <div className="bg-slate-900 border-2 border-[#FDB813] rounded-3xl p-6 sm:p-10 shadow-2xl animate-fade-in relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#FDB813] text-slate-950 px-6 py-2 rounded-bl-2xl text-xs font-extrabold uppercase tracking-widest shadow-md">
              98% Investor Match
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Photo */}
              <div className="lg:col-span-5 rounded-2xl overflow-hidden aspect-[4/3] bg-slate-800 relative">
                <img
                  src={matchedProperty.heroImage}
                  alt={matchedProperty.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/80 text-[10px] font-bold uppercase text-white backdrop-blur-sm">
                  {matchedProperty.tag}
                </div>
              </div>

              {/* Match Details */}
              <div className="lg:col-span-7 space-y-4">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-[#FDB813] font-bold mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{matchedProperty.enclave}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {matchedProperty.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                    {matchedProperty.subtitle}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3 p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 text-center text-xs">
                  <div>
                    <span className="text-[10px] uppercase text-slate-400 block font-semibold">Plot Size</span>
                    <strong className="text-white text-sm">{matchedProperty.plotSize}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-slate-400 block font-semibold">Approval</span>
                    <strong className="text-emerald-400 text-xs truncate block">{matchedProperty.approval.split('/')[0]}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-slate-400 block font-semibold">Investment</span>
                    <strong className="text-[#FDB813] text-sm">{formatCurrencyValue(matchedProperty.priceINR, 'INR')}</strong>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {matchedProperty.description.slice(0, 180)}...
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    to={`/projects/${matchedProperty.id}`}
                    className="px-6 py-3 rounded-xl bg-[#FDB813] hover:bg-[#e6a50e] text-slate-950 font-extrabold text-xs uppercase tracking-wider transition-all shadow-md"
                  >
                    View Project Webpage & CAD
                  </Link>

                  <button
                    onClick={() => onOpenVisitModal(matchedProperty)}
                    className="px-6 py-3 rounded-xl border border-slate-600 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    Schedule Site Visit
                  </button>

                  <button
                    onClick={handleReset}
                    className="p-3 text-slate-400 hover:text-white transition-colors"
                    title="Retake Quiz"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
