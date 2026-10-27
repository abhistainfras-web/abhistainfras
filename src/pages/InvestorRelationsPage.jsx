import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../data/properties';
import { ShieldCheck, TrendingUp, Building2, CheckCircle2, Lock, ArrowRight, Phone, Mail } from 'lucide-react';

export default function InvestorRelationsPage({ onOpenVisitModal }) {
  return (
    <div className="pt-24 pb-24 bg-white min-h-screen">
      
      {/* Header Banner */}
      <div className="bg-slate-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img src="/assets/abhista/home/invester-banner.png" alt="Investor Relations" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-3">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#FDB813]">Investor Relations</span>
          </div>

          <div className="max-w-2xl">
            <span className="text-xs uppercase font-bold tracking-widest text-[#FDB813] bg-slate-800 border border-slate-700 px-3 py-1 rounded-full">
              Capital Security & Growth
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-3">
              Investor Relations & Corporate Governance
            </h1>
            <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
              Mr. M. Ramachandra Reddy founded Anuradha Properties in 2006 with the vision of transforming the way people perceive quality. Today, ABHISTA is the most trusted Real Estate brand in Hyderabad and the only backward integrated real estate player in the country.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Core Statements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-lg">
              M
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We work hard to give our customers the best building workmanship possible, based on the values of honesty, a solid work ethic, knowledge, and dedication. In order to establish ourselves as a premium real estate brand in Hyderabad, we are committed to developing magnificent real estate locations of the greatest calibre.
            </p>
          </div>

          <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-lg">
              V
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We work hard to be the most dependable and well-liked real estate developers in Hyderabad, supporting clients in creating assets that will bring them pride and profit for generations to come.
            </p>
          </div>
        </div>

        {/* Executive Leadership Spotlight */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-56 sm:w-64 aspect-[3/4] rounded-2xl overflow-hidden border-2 border-[#FDB813] shadow-2xl bg-slate-800">
                <img
                  src="/assets/abhista/ramachandra-reddy.jpg"
                  alt="Mr. M. Ramachandra Reddy - Founder & MD"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDB813]/10 border border-[#FDB813]/30 text-[#FDB813] text-xs font-bold uppercase tracking-wider">
                Founder & Managing Director
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                Mr. M. Ramachandra Reddy
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                "Our guiding philosophy since 2006 has remained unwavering: land ownership is a sacred trust. By integrating legal due diligence, company-owned earthmoving infrastructure, and deep agricultural stewardship, Abhista Infra protects our investors’ capital and delivers genuine generational peace of mind."
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800 text-xs">
                <div>
                  <span className="text-slate-400 block font-medium">Inception Year</span>
                  <span className="text-base font-extrabold text-white mt-0.5 block">2006 (Anuradha)</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Core Commitment</span>
                  <span className="text-base font-extrabold text-[#FDB813] mt-0.5 block">100% Clear Titles</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Operational Reach</span>
                  <span className="text-base font-extrabold text-emerald-400 mt-0.5 block">Hyd & Bengaluru</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Governance & Legal Audit Wing */}
        <div className="bg-slate-900 text-white p-8 sm:p-12 rounded-3xl shadow-xl space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-[#FDB813]">Institutional Due Diligence</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              The 3-Tier Title Verification Standard
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              How Abhista Infras ensures 100% legal immunity for every square yard acquired.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-6 bg-slate-800 rounded-2xl border border-slate-700 space-y-2">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">Tier 1</span>
              <h4 className="text-base font-bold text-white">30-Year Revenue Search</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Complete search of pahanis, encumbrance certificates (EC), 1-B records, and mutation entries from 1980 to date.
              </p>
            </div>

            <div className="p-6 bg-slate-800 rounded-2xl border border-slate-700 space-y-2">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">Tier 2</span>
              <h4 className="text-base font-bold text-white">Physical Demarcation & Survey</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Tippon and FMB field measurement book scrutiny conducted by licensed government-registered land surveyors.
              </p>
            </div>

            <div className="p-6 bg-slate-800 rounded-2xl border border-slate-700 space-y-2">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">Tier 3</span>
              <h4 className="text-base font-bold text-white">Bank Legal Audit</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Layouts undergo independent legal validation by panel lawyers of leading nationalized and private banks (SBI, HDFC).
              </p>
            </div>
          </div>
        </div>

        {/* Direct Investor Desk */}
        <div className="p-8 rounded-3xl bg-amber-50 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-slate-900">Seeking Institutional or NRI Land Portfolio Advisory?</h3>
            <p className="text-xs text-slate-600">
              Connect directly with our senior investment desk at Kakatiya Hills, Madhapur, Hyderabad.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:+918185898089"
              className="px-5 py-3 rounded-xl bg-slate-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-slate-800 transition-colors"
            >
              Call +91 818 5898 089
            </a>
            <Link
              to="/contact"
              className="px-5 py-3 rounded-xl bg-[#FDB813] text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-[#e6a50e] transition-colors"
            >
              Contact Desk
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}
