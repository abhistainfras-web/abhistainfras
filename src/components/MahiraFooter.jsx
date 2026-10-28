import React, { useState } from 'react';
import { Phone, Mail, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/properties';

export default function MahiraFooter({ onOpenViewingModal }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) setSubscribed(true);
  };

  return (
    <footer id="footer" className="bg-[#050806] border-t border-[#c9a35f]/25 pt-20 pb-12 px-6 sm:px-12 text-xs text-[#fbf1d3]/70">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Top Newsletter / Pre-Launch Dispatch */}
        <div className="glass-mahira rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 border border-[#c9a35f]/30">
          <div className="max-w-xl text-center lg:text-left space-y-2">
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#e8c87a] font-semibold">The Sovereign Dispatch</span>
            <h3 className="font-garamond text-3xl sm:text-4xl text-white font-normal">
              Receive Pre-Launch Farmland & HMDA Intelligence
            </h3>
            <p className="text-xs text-[#fbf1d3]/65 font-light leading-relaxed">
              Curated for accredited land buyers and families seeking high-appreciation plotted ventures across Hyderabad and Bengaluru.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md w-full">
                <input
                  type="email"
                  required
                  placeholder="Enter email or WhatsApp number..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="px-5 py-3.5 rounded-full bg-[#0a110b] border border-[#c9a35f]/40 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-[#e8c87a] min-w-[280px]"
                />
                <button
                  type="submit"
                  className="mahira-btn rounded-full whitespace-nowrap"
                >
                  <span className="btn-fill"></span>
                  <span>Subscribe</span>
                </button>
              </form>
            ) : (
              <div className="flex items-center gap-2 text-emerald-400 bg-emerald-950/40 border border-emerald-500/40 px-6 py-3.5 rounded-full">
                <CheckCircle2 className="w-4 h-4" />
                <span>Subscription Confirmed! You are on the priority list.</span>
              </div>
            )}
          </div>
        </div>

        {/* Multi-Column Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          <div className="space-y-3">
            <span className="font-serif text-lg tracking-[0.2em] font-semibold text-white block">ABHISTA INFRA’S</span>
            <p className="text-[11px] text-[#fbf1d3]/60 leading-relaxed font-light">
              Pioneering luxury agriculture farmlands and HMDA residential communities in Hyderabad & Bengaluru. Founded by {COMPANY_INFO.founder}.
            </p>
            <div className="pt-2 text-[11px] text-[#e8c87a]">
              Built with {COMPANY_INFO.model}
            </div>
          </div>

          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#e8c87a] block">Key Ventures</span>
            <ul className="space-y-2 text-xs font-light">
              <li><a href="#explore" className="hover:text-[#e8c87a] transition-colors">Arrjava Farms (Patancheru)</a></li>
              <li><a href="#explore" className="hover:text-[#e8c87a] transition-colors">Orchid Bloom HMDA (Kothur)</a></li>
              <li><a href="#explore" className="hover:text-[#e8c87a] transition-colors">Oak Tree Farms (Shamirpet)</a></li>
              <li><a href="#explore" className="hover:text-[#e8c87a] transition-colors">Mirai Farms (85 Acres, NH-44)</a></li>
              <li><a href="#explore" className="hover:text-[#e8c87a] transition-colors">Serene Luxury Villas (Bengaluru)</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#e8c87a] block">Quick Contact</span>
            <div className="space-y-2 text-xs font-light">
              <a href="tel:+917075528334" className="hover:text-[#e8c87a] flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#e8c87a]" />
                <span>+91 70755 28334</span>
              </a>
              <a href="mailto:info@abhista.in" className="hover:text-[#e8c87a] flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#e8c87a]" />
                <span>info@abhista.in</span>
              </a>
              <div className="flex items-start gap-2 pt-1 text-[11px]">
                <MapPin className="w-3.5 h-3.5 text-[#e8c87a] flex-shrink-0 mt-0.5" />
                <span>#Plot No - 109, Street No - 3, Kakatiya Hills, Madhapur, Hyderabad - 500081</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#e8c87a] block">Assurances</span>
            <ul className="space-y-2 text-[11px] font-light text-[#fbf1d3]/60">
              <li>• 100% Clear Titles & Spot Registration</li>
              <li>• Strict Vedic Vaastu Geometric Design</li>
              <li>• Full In-House Construction & Execution</li>
              <li>• 100+ Acres Delivered & Under Management</li>
            </ul>
          </div>

        </div>

        {/* Copyright & Brand Emblem Line */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4 text-[10px] text-slate-500">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg border border-[#c9a35f]/50 bg-[#0c140e] flex items-center justify-center text-[#e8c87a] font-serif font-bold text-xs">
              A
            </div>
            <span>© 2006–{new Date().getFullYear()} Abhista Infra Developers Pvt Ltd. All Rights Reserved.</span>
          </div>

          <div className="text-center md:text-right">
            <span>Tradition Meets Tomorrow • Inspired by Mahira Theatrical Architecture</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
