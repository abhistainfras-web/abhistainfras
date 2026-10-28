import React from 'react';
import { Award, Users, CheckCircle, ShieldCheck, Compass, HeartHandshake } from 'lucide-react';
import { COMPANY_INFO } from '../data/properties';
import AnimatedCounter from './AnimatedCounter';

export default function BrandStory() {
  return (
    <section id="about-us" className="py-20 lg:py-28 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 animate-fade-in-up">
          <span className="text-[#b37a00] text-xs font-bold tracking-widest uppercase bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-full">
            Our Heritage & Values
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight mt-4 mb-4">
            Building South India's Most Trusted Land Bank Since 2006.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Founded under the vision of Mr. M. Ramachandra Reddy, Abhista Infra has transformed open land development into a structured, transparent, and high-yielding asset class for discerning families and investors.
          </p>
        </div>

        {/* Founder & Corporate Model Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: Founder Portrait & Vision */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 space-y-6 shadow-sm transition-shadow hover:shadow-lg">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 pb-6 border-b border-slate-200">
              <div className="w-36 h-48 sm:w-44 sm:h-56 rounded-2xl overflow-hidden border-2 border-[#FDB813] shadow-xl shrink-0 bg-slate-200 mx-auto sm:mx-0">
                <img
                  src="/assets/abhista/ramachandra-reddy.jpg"
                  alt="Mr. M. Ramachandra Reddy - Founder & Managing Director"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="text-center sm:text-left space-y-1">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                  <img src="/assets/abhista/abhista-icon.png" alt="Abhista Infras" className="w-5 h-5 object-contain" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#b37a00]">
                    Visionary Leadership
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">Mr. M. Ramachandra Reddy</h3>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Founder & Managing Director
                </p>
                <div className="pt-2">
                  <span className="inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500/10 text-[#b37a00] border border-amber-500/20">
                    18+ Years Direct Stewardship
                  </span>
                </div>
              </div>
            </div>

            <blockquote className="text-sm sm:text-base text-slate-700 leading-relaxed italic">
              "When we started our journey in 2006 under Anuradha Properties and scaled into Abhista Infra in 2016, real estate was fraught with ambiguous paperwork, delayed layout development, and broken promises. We made a binding commitment: every single square yard we sell must have unassailable 30-year link titles, prompt registration, and complete infrastructure developed before handover."
            </blockquote>

            <div className="border-t border-slate-200 pt-6 grid grid-cols-3 gap-4 text-center sm:text-left">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900">
                  <AnimatedCounter end={2006} start={1990} duration={1600} useIndianFormat={false} />
                </div>
                <div className="text-[11px] text-slate-500 font-semibold mt-0.5">Foundation of Trust</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#b37a00]">
                  <AnimatedCounter end={2016} start={2000} duration={1700} useIndianFormat={false} />
                </div>
                <div className="text-[11px] text-slate-500 font-semibold mt-0.5">Abhista Infra Incorp.</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-emerald-700">
                  <AnimatedCounter end={10000} start={0} suffix="+" duration={2000} />
                </div>
                <div className="text-[11px] text-slate-500 font-semibold mt-0.5">Happy Landowners</div>
              </div>
            </div>
          </div>

          {/* Right Column: Backward Integration USP */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:border-[#FDB813]/40 transition-all card-hover">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center mb-4 border border-slate-200/80">
                <ShieldCheck className="w-5 h-5 text-slate-800" />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">Company-Owned Machinery</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We own our fleet of earthmovers, rollers, and paving machinery. By removing external contractors, we guarantee layout roads, electricity lines, and water pipelines are completed strictly to schedule.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:border-[#FDB813]/40 transition-all card-hover">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center mb-4 border border-slate-200/80">
                <Users className="w-5 h-5 text-slate-800" />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">In-House Civil & Legal Cadre</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Over 80 full-time engineers, surveyors, and legal advocates review revenue records, survey sketches, and encumbrance certificates prior to project acquisition.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:border-[#FDB813]/40 transition-all card-hover">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center mb-4 border border-slate-200/80">
                <HeartHandshake className="w-5 h-5 text-slate-800" />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">Lifelong Asset Management</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                For our organic managed farm communities (like Arrjava Farms and Mirai), our agricultural staff handles cultivation, drip irrigation, and harvesting with revenue share.
              </p>
            </div>
          </div>

        </div>

        {/* 4 Quantitative Milestones */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 sm:p-10 rounded-2xl bg-slate-950 text-white border border-slate-800 shadow-xl">
          <div>
            <div className="text-3xl sm:text-4xl font-black text-white">
              <AnimatedCounter end={18} start={0} suffix="+" duration={1600} />
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Years of Operational Excellence</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-[#FDB813]">
              <AnimatedCounter end={1200} start={0} suffix="+" duration={1800} />
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Acres Master-Planned</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-white">
              <AnimatedCounter end={25} start={0} suffix="+" duration={1600} />
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Delivered Gated Ventures</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-[#FDB813]">
              <AnimatedCounter end={100} start={0} suffix="%" duration={1600} />
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Clean Title Clearances</div>
          </div>
        </div>

      </div>
    </section>
  );
}
