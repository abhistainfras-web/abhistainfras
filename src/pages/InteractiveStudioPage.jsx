import React from 'react';
import InteractiveStudio from '../components/InteractiveStudio';
import { Compass, MapPin, Phone, ShieldCheck } from 'lucide-react';

export default function InteractiveStudioPage({ onOpenVisitModal }) {
  return (
    <div className="pt-20 bg-slate-950 text-white min-h-screen">
      
      {/* Hero Banner */}
      <section className="py-16 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FDB813]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDB813]/10 border border-[#FDB813]/30 text-[#FDB813] text-xs font-bold uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Interactive Experience Suite</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Creative Discovery & Layout Studio
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            Experience our ventures with creative real-time tools: explore authentic plot boundaries, analyze Vedic Vaastu energy, calculate highway commute times, and simulate agro-wealth yields.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 text-xs font-semibold text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              100% Cadastral Surveyed Layouts
            </span>
            <span className="flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-[#FDB813]" />
              Authentic Vedic Vaastu Certified
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-400" />
              Direct ORR & NH-44 Expressways
            </span>
          </div>

        </div>
      </section>

      {/* Embedded Studio */}
      <InteractiveStudio onOpenVisitModal={onOpenVisitModal} />

      {/* Bottom Assistance Banner */}
      <section className="py-16 bg-slate-900 border-t border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl font-black text-white">
            Need Guided Plot Selection from Our Senior Architect?
          </h3>
          <p className="text-sm text-slate-300 mt-2">
            Speak directly with our technical land planning team at Kakatiya Hills, Madhapur HQ or schedule a chauffeured site visit.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenVisitModal && onOpenVisitModal(null)}
              className="px-8 py-3.5 rounded-xl bg-[#FDB813] hover:bg-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#FDB813]/25"
            >
              Book Complimentary Site Visit
            </button>
            <a
              href="tel:+918185898089"
              className="px-8 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider transition-all border border-slate-700 flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#FDB813]" />
              <span>Call +91 818 5898 089</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
