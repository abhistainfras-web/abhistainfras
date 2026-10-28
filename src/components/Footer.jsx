import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/properties';

export default function Footer({ onOpenViewingModal }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
    }
  };

  const offices = [
    { city: 'Corporate HQ (Hyderabad)', address: '#Plot No - 109, Street No - 3, Kakatiya Hills, Madhapur, Hyderabad - 500081' },
    { city: 'Patancheru Regional Office', address: 'Near Begumpet Village, Patancheru Growth Belt' },
    { city: 'Kothur Project Hub', address: 'JP Darga Road, Kothur Mandal, Ranga Reddy' },
    { city: 'Shamirpet Site Office', address: 'Muduchinthalapally, Shamirpet Biotech Valley' },
    { city: 'Bengaluru Operations', address: 'Jigani-Anekal Corridor, Bengaluru South, Karnataka' },
  ];

  return (
    <footer className="bg-obsidian-950 border-t border-gold-500/20 pt-20 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter / Project Launch Alert */}
        <div className="glass-panel rounded-2xl p-8 sm:p-10 border border-white/10 mb-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <span className="text-[10px] uppercase tracking-[0.25em] text-gold-400 font-semibold">Priority Investor Updates</span>
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium mt-1">
              Be the First to Know About New Farmland & HMDA Pre-Launches
            </h3>
            <p className="text-slate-400 text-xs font-light mt-2">
              Receive confidential pre-launch pricing on high-appreciation plotted ventures across Hyderabad and Bengaluru.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md w-full">
                <input
                  type="email"
                  required
                  placeholder="Enter email or WhatsApp number..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="px-4 py-3 rounded-xl bg-obsidian-900 border border-white/10 text-white text-xs focus:outline-none focus:border-gold-400 min-w-[260px]"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl gold-gradient-bg text-obsidian-950 font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:scale-[1.02] transition-all whitespace-nowrap"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="flex items-center gap-2 text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-5 py-3 rounded-xl">
                <CheckCircle2 className="w-4 h-4" />
                <span>Subscribed for Pre-Launch Alerts!</span>
              </div>
            )}
          </div>
        </div>

        {/* Global Hubs Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 pb-12 border-b border-white/10">
          {offices.map((off, idx) => (
            <div key={idx} className="space-y-1">
              <span className="text-[11px] uppercase tracking-widest text-gold-300 font-semibold">{off.city}</span>
              <p className="text-[11px] text-slate-400 font-light">{off.address}</p>
            </div>
          ))}
        </div>

        {/* Brand & Legal Row */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg border border-gold-400/40 bg-obsidian-900 flex items-center justify-center">
              <span className="font-serif text-sm font-bold gold-gradient-text tracking-widest">A</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-sm tracking-[0.2em] font-semibold text-slate-200 uppercase">
                ABHISTA INFRA’S
              </span>
              <span className="text-[9px] text-slate-500">
                Founded by {COMPANY_INFO.founder}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300">
            <a href="tel:+917075528334" className="hover:text-gold-300 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              +91 70755 28334
            </a>
            <a href="mailto:info@abhista.in" className="hover:text-gold-300 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-gold-400" />
              info@abhista.in
            </a>
          </div>

          <div className="text-[10px] text-slate-500 text-center md:text-right font-light leading-relaxed max-w-sm">
            © {new Date().getFullYear()} Abhista Infra’s. All Rights Reserved. Built with strict adherence to Vedic Vaastu principles and 100% verified legal titles.
          </div>
        </div>

      </div>
    </footer>
  );
}
