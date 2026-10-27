import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Send, ShieldCheck, ArrowRight, MessageSquare } from 'lucide-react';
import { COMPANY_INFO, PROPERTIES } from '../data/properties';

export default function BrandFooter({ onOpenVisitModal }) {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inquiryPhone) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setInquiryName('');
      setInquiryPhone('');
    }, 4000);
  };

  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Quick Inquiry Callout Bar */}
        <div className="bg-emerald-950/80 border border-emerald-800/60 rounded-2xl p-8 mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-2">
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">
              Direct Developer Desk
            </span>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Request a Master Layout CAD & Verified Cost Sheet
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Get authentic survey sketches, legal link documents, and price breakdown delivered to your WhatsApp.
            </p>
          </div>

          <div className="lg:col-span-6">
            {submitted ? (
              <div className="p-4 rounded-xl bg-emerald-900/60 border border-emerald-600 text-emerald-200 text-sm font-semibold flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                Thank you! Our Madhapur desk advisor will call you within 15 minutes.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={inquiryName}
                  onChange={(e) => setInquiryName(e.target.value)}
                  className="px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-emerald-500 flex-1"
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone Number (+91)"
                  value={inquiryPhone}
                  onChange={(e) => setInquiryPhone(e.target.value)}
                  className="px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-emerald-500 flex-1"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wider uppercase transition-colors whitespace-nowrap shadow-sm"
                >
                  Request Kit
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 4 Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand Info & Address (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white rounded-2xl p-3.5 sm:p-4 inline-block shadow-lg">
              <img
                src="/assets/abhista/abhista-logo.png"
                alt="abhista infras"
                className="h-12 sm:h-14 lg:h-16 w-auto object-contain"
              />
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              18+ years of excellence in gated layouts, luxury villas, and organic farm lands across Hyderabad and Bengaluru. Clear titles, Vedic Vaastu compliance, and complete backward integration.
            </p>

            <div className="space-y-2.5 pt-2 text-xs text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#FDB813] shrink-0 mt-0.5" />
                <span>
                  {COMPANY_INFO.address}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#FDB813] shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-[#FDB813] transition-colors font-semibold">
                  {COMPANY_INFO.phone} / +91 910 0999 923
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#FDB813] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Mon – Sat: 9:30 AM – 7:00 PM (Sunday Site Visits Open)</span>
              </div>
            </div>
          </div>

          {/* Col 2: All 10 Ventures (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FDB813]">
              Featured Ventures
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {PROPERTIES.slice(0, 7).map((p) => (
                <li key={p.id}>
                  <Link to={`/projects/${p.id}`} className="hover:text-white transition-colors flex items-center justify-between">
                    <span>{p.title}</span>
                    <span className="text-[10px] text-slate-500">{p.location.split(',')[0]}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/projects" className="text-xs font-bold text-[#FDB813] hover:underline pt-1 block">
                  View All 11 Ventures &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Pages & Corridors (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FDB813]">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/interactive-studio" className="hover:text-[#FDB813] transition-colors font-bold text-white flex items-center gap-1">
                  <span>Interactive Studio</span>
                  <span className="text-[9px] bg-[#FDB813] text-slate-950 px-1 rounded font-black">NEW</span>
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-white transition-colors">All 11 Ventures</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">Our Legacy (2006)</Link>
              </li>
              <li>
                <Link to="/corridors" className="hover:text-white transition-colors">Growth Corridors</Link>
              </li>
              <li>
                <Link to="/calculator" className="hover:text-white transition-colors">ROI Calculator</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact Madhapur HQ</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Action & WhatsApp (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Direct Contact
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Plan your weekend layout inspection with company transport pickup and return from anywhere in Hyderabad.
            </p>

            <button
              onClick={() => onOpenVisitModal(null)}
              className="w-full py-3 rounded-xl bg-[#FDB813] hover:bg-[#e6a50e] text-slate-950 font-bold text-xs tracking-wider uppercase transition-colors shadow-sm flex items-center justify-center gap-2"
            >
              <span>Book Free Site Visit</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="https://wa.me/918185898089?text=Hello%20Abhista%20Infra,%20I%20am%20interested%20in%20your%20ventures."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl border border-emerald-700/60 hover:bg-emerald-950 text-emerald-400 font-semibold text-xs tracking-wide flex items-center justify-center gap-2 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            &copy; {new Date().getFullYear()} Abhista Infra Developers. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-[11px]">
            <span>HMDA & DTCP Approved</span>
            <span>•</span>
            <span>RERA Registered</span>
            <span>•</span>
            <span>100% Legal Clearances</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
