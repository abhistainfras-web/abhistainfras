import React from 'react';
import { Compass, ShieldCheck, Cog, HeartHandshake, Leaf, Building2, TrendingUp, CheckCircle2 } from 'lucide-react';

const PILLARS = [
  {
    num: '01',
    title: 'Concept to Reality',
    subtitle: 'End-to-End Development Life Cycle',
    icon: Building2,
    desc: 'Our technical teams manage every critical phase from cadastral demarcation and topographic contouring to blacktop roads, automated drip networks, and seamless legal possession.',
    stat: '100% In-House Machinery'
  },
  {
    num: '02',
    title: 'Unique Living Experiences',
    subtitle: 'Nature-Integrated Farmlands & Villas',
    icon: Leaf,
    desc: 'We curate generational land investments that harmonize modern infrastructure with organic fruit plantations, weekend leisure pavilions, and energy-efficient layout architecture.',
    stat: 'Chemical-Free Farmland'
  },
  {
    num: '03',
    title: 'Honoring Traditions (Vaastu)',
    subtitle: 'Authentic Vedic Directional Science',
    icon: Compass,
    desc: 'While we deploy modern engineering, every road, water channel, and plot boundary strictly adheres to ancient Vedic Vaastu principles to guarantee peace, prosperity, and positive energy influx.',
    stat: '100% Vaastu Graded'
  },
  {
    num: '04',
    title: 'Relationships Through Transparency',
    subtitle: 'Clear Titles & Long-Term Trust',
    icon: ShieldCheck,
    desc: 'Transparency and credibility are key to our success. We maintain open communication throughout the entire journey, building relationships that stand the test of time.',
    stat: '18+ Years Clear Track'
  },
  {
    num: '05',
    title: 'Intelligent Planning & Fleet',
    subtitle: 'Company-Owned Equipment Fleet',
    icon: Cog,
    desc: 'Our fully backward-integrated services complement the overarching layout concept, ensuring each venture is executed with company-owned machinery without contractor delays.',
    stat: 'Zero Contractor Lag'
  },
  {
    num: '06',
    title: 'Making Dreams a Reality',
    subtitle: 'Generational Value & Security',
    icon: TrendingUp,
    desc: 'Our focus is on helping clients create enduring wealth. We create properties that stand the test of time and offer lasting value across Hyderabad and Bengaluru.',
    stat: '13.5% Avg. Corridor CAGR'
  }
];

export default function ArchitecturalPillars() {
  return (
    <section className="py-24 bg-[#0B0F15] text-white relative overflow-hidden border-b border-slate-800">
      
      {/* Background Subtle Accent Grids */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-[#FDB813]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDB813]/10 border border-[#FDB813]/30 text-[#FDB813] text-xs font-black uppercase tracking-widest mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>The Abhista Standard</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Bridging Tradition and Innovation.
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
              At Abhista Infra's, each project is more than just land development—it is an enduring sanctuary designed to yield compounding generational prosperity.
            </p>
          </div>

          <div className="lg:text-right shrink-0">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">Established Benchmark</span>
            <div className="text-xl sm:text-2xl font-black text-[#FDB813] mt-0.5">
              Decade of Trust Since 2006
            </div>
          </div>
        </div>

        {/* 6 Architectural Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PILLARS.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/80 border border-slate-800 hover:border-[#FDB813]/60 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Background Number Watermark */}
                <span className="absolute top-4 right-6 text-5xl font-black text-slate-800/40 select-none pointer-events-none group-hover:text-[#FDB813]/15 transition-colors">
                  {p.num}
                </span>

                <div className="space-y-4 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-slate-800 text-[#FDB813] flex items-center justify-center border border-slate-700/80 group-hover:bg-[#FDB813] group-hover:text-slate-950 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#FDB813] block">
                      {p.subtitle}
                    </span>
                    <h3 className="text-xl font-black text-white mt-1 group-hover:text-[#FDB813] transition-colors">
                      {p.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs relative z-10">
                  <span className="text-emerald-400 font-semibold flex items-center gap-1.5 text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {p.stat}
                  </span>
                  <span className="text-slate-500 font-bold text-[10px] uppercase tracking-wider">Pillar {p.num}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
