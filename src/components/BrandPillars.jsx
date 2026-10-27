import React from 'react';
import { ShieldCheck, Truck, Compass, TrendingUp, CheckCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/properties';

export default function BrandPillars() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: '100% Clear Titles & Due Diligence',
      desc: 'Every square yard undergoes rigorous 30-year revenue title search and legal scrutiny. Guaranteed immediate spot registration for your peace of mind.'
    },
    {
      icon: Truck,
      title: 'Full Backward Integration',
      desc: 'We operate our own heavy machinery, earthmovers, blacktop road pavers, and horticulture nurseries. No third-party contractors, zero delays.'
    },
    {
      icon: Compass,
      title: 'Authentic Vedic Vaastu Compliance',
      desc: 'Every layout is designed according to authentic directional science. Symmetrical road grids, perfect quadrant facing, and positive energetic balance.'
    },
    {
      icon: TrendingUp,
      title: 'Strategic High-Growth Corridors',
      desc: 'We strictly acquire land along upcoming expressways and industrial hubs—Patancheru ORR, NH-44 Kothur, Shamirpet, and South Bengaluru.'
    }
  ];

  return (
    <section id="why-abhista" className="py-20 bg-slate-50 border-y border-slate-200 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-xs uppercase tracking-widest font-bold text-emerald-800">
            The Abhista Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Why Discerning Investors Choose Us
          </h2>
          <p className="text-sm text-slate-500 font-normal">
            Rooted in our philosophy of "{COMPANY_INFO.philosophy}".
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-800">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Abhista Guarantee</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
