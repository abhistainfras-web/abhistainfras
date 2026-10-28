import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PROPERTIES } from '../data/properties';
import { ShieldCheck, MapPin, ArrowRight, CheckCircle2, Trees, Calendar, Eye, FileText, Phone, Award } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const FEATURED_CORRIDORS = [
  {
    id: 'west',
    corridorName: 'Patancheru / ORR Exit 3',
    ventureId: 'abhista-01',
    name: 'Arrjava Farms',
    location: 'Begumpet, Patancheru',
    image: '/assets/abhista/arrjava-banner.jpg',
    tagline: '30-Acre Managed Farmland Retreat',
    plotSizes: '200 to 605 Sq. Yds',
    price: 'From ₹29 Lakhs',
    highlights: ['22 Mins from Neopolis / Financial District', '40-Ft & 33-Ft BT Blacktop Roads', 'Teak & Sandalwood Avenue Plantation']
  },
  {
    id: 'south',
    corridorName: 'Kothur / NH-44 Highway',
    ventureId: 'abhista-02',
    name: 'Orchid Bloom',
    location: 'JP Darga Road, Kothur',
    image: '/assets/abhista/projects/2.jpg',
    tagline: 'HMDA-Approved Gated Plotted Community',
    plotSizes: '150 to 300 Sq. Yds',
    price: 'From ₹28.5 Lakhs',
    highlights: ['18 Mins to Rajiv Gandhi International Airport', 'Underground Drainage & Electricity Cabling', 'Bank Loan Approved & Spot Registration']
  },
  {
    id: 'north',
    corridorName: 'Shamirpet / Genome Valley',
    ventureId: 'abhista-03',
    name: 'Oak Tree Farms',
    location: 'Muduchinthalapally, Shamirpet',
    image: '/assets/abhista/projects/3.jpg',
    tagline: 'Lush Organic Farmland Sanctuary',
    plotSizes: '300 to 1,210 Sq. Yds',
    price: 'From ₹37.5 Lakhs',
    highlights: ['Minutes from Genome Valley Biotech Corridor', 'Automated Solar Drip Irrigation Network', '100% Tax-Free Agricultural Income (Sec 10(1))']
  },
  {
    id: 'southwest',
    corridorName: 'Shabad / Chevella Corridor',
    ventureId: 'abhista-07',
    name: 'Radha Farms',
    location: 'Madhur Village, Shabad Mandal',
    image: '/assets/abhista/projects/radha-farms.png',
    tagline: '14-Acre Fertile Agricultural Estate',
    plotSizes: '267 to 600 Sq. Yds',
    price: 'From ₹28 Lakhs',
    highlights: ['Rich Black Soil Organic Farmland', 'Certified 30-Year Revenue Title Search', 'Peaceful Countryside Living near Upcoming RRR']
  }
];

export default function ArchitecturalHero({ onOpenVisitModal }) {
  const [activeCorridorId, setActiveCorridorId] = useState('west');
  const activeVenture = FEATURED_CORRIDORS.find((c) => c.id === activeCorridorId) || FEATURED_CORRIDORS[0];

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-slate-950 text-white overflow-hidden border-b border-slate-800">
      
      {/* Subtle Atmospheric Lighting - Sophisticated, Not Garish */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-emerald-950/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Trust Ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-800 text-xs">
          <div className="flex items-center gap-2.5 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-[#FDB813]" />
            <span className="font-extrabold text-[#FDB813] uppercase tracking-wider">Since 2006</span>
            <span className="text-slate-600">|</span>
            <span className="font-medium">18+ Years of Trust Across Hyderabad & Bengaluru</span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-slate-400 font-medium">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              100% Clear Titles & Spot Registration
            </span>
            <span className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#FDB813]" />
              Company-Owned Machinery
            </span>
            <span className="flex items-center gap-1.5">
              <Trees className="w-4 h-4 text-emerald-400" />
              Managed Farmlands
            </span>
          </div>
        </div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left: Authority Headline & Corridor Selector (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="space-y-4">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#FDB813] block animate-fade-in-up" style={{animationDelay:'0ms'}}>
                Abhista Infras • Premier Plotted & Farmland Developments
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] animate-fade-in-up" style={{animationDelay:'80ms'}}>
                Invest in Hyderabad’s <br className="hidden sm:inline" />
                <span className="text-[#FDB813]">Highest-Growth Corridors.</span>
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl animate-fade-in-up" style={{animationDelay:'160ms'}}>
                Masterplanned organic farmlands and HMDA-approved gated communities along the Outer Ring Road (ORR) and National Highway 44. Complete legal transparency, company-owned construction machinery, and lifelong asset management.
              </p>
            </div>

            {/* Growth Corridor Tabs */}
            <div className="space-y-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                Select Growth Corridor:
              </span>
              <div className="flex flex-wrap gap-2">
                {FEATURED_CORRIDORS.map((c) => {
                  const isActive = activeCorridorId === c.id;
                  return (
                    <button
                      key={c.id}
                      onClick={() => setActiveCorridorId(c.id)}
                      className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 sm:gap-2 ${
                        isActive
                          ? 'bg-[#FDB813] text-slate-950 font-black shadow-md shadow-amber-500/20'
                          : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                      }`}
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{c.corridorName}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 animate-fade-in-up" style={{animationDelay:'280ms'}}>
              <button
                onClick={() => onOpenVisitModal && onOpenVisitModal({
                  title: `Complimentary Site Visit - ${activeVenture.name}`,
                  location: activeVenture.location
                })}
                className="w-full sm:w-auto px-6 sm:px-7 py-3.5 rounded-xl bg-[#FDB813] hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
              >
                <span>Book Free AC Cab Site Visit</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                to={`/projects/${activeVenture.ventureId}`}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <Eye className="w-4 h-4 text-[#FDB813]" />
                <span>Explore {activeVenture.name}</span>
              </Link>
            </div>

            {/* Real Estate Statistics HUD */}
            <div className="pt-6 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 animate-fade-in-up" style={{animationDelay:'360ms'}}>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-white block">
                  <AnimatedCounter end={18} start={0} suffix="+" duration={1600} />
                </span>
                <span className="text-xs text-slate-400 font-medium">Years Established</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-[#FDB813] block">
                  <AnimatedCounter end={11} start={0} duration={1400} />
                </span>
                <span className="text-xs text-slate-400 font-medium">Active Master Ventures</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-white block">
                  <AnimatedCounter end={1200} start={0} suffix="+" duration={1800} />
                </span>
                <span className="text-xs text-slate-400 font-medium">Acres Developed</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-emerald-400 block">
                  <AnimatedCounter end={10000} start={0} suffix="+" duration={2000} />
                </span>
                <span className="text-xs text-slate-400 font-medium">Satisfied Landowners</span>
              </div>
            </div>

          </div>

          {/* Right: Architectural Property Spotlight Card (5 cols) */}
          <div className="lg:col-span-5 animate-slide-in-right" style={{animationDelay:'200ms'}}>
            <div className="rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/90 shadow-2xl backdrop-blur-sm">
              
              {/* Photo Viewport */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                <img
                  src={activeVenture.image}
                  alt={activeVenture.name}
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Corridor Pill */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-slate-950/90 text-[#FDB813] border border-[#FDB813]/40">
                    {activeVenture.corridorName}
                  </span>
                </div>

                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Available Now
                  </span>
                </div>

                {/* Bottom Overlay Title */}
                <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                  <h3 className="text-2xl font-black">{activeVenture.name}</h3>
                  <p className="text-xs text-slate-300 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-[#FDB813]" />
                    <span>{activeVenture.location}</span>
                  </p>
                </div>
              </div>

              {/* Specs & Highlights Body */}
              <div className="p-6 space-y-4">
                
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Plot Dimensions</span>
                    <span className="text-sm font-extrabold text-white">{activeVenture.plotSizes}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Investment Range</span>
                    <span className="text-sm font-extrabold text-[#FDB813]">{activeVenture.price}</span>
                  </div>
                </div>

                {/* Key Points */}
                <div className="space-y-2 text-xs text-slate-300">
                  {activeVenture.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-3 grid grid-cols-2 gap-2.5">
                  <Link
                    to={`/projects/${activeVenture.ventureId}`}
                    className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold uppercase tracking-wider text-center transition-colors border border-slate-700 flex items-center justify-center gap-1.5"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#FDB813]" />
                    <span>View Dossier</span>
                  </Link>

                  <button
                    onClick={() => onOpenVisitModal && onOpenVisitModal({
                      title: activeVenture.name,
                      location: activeVenture.location
                    })}
                    className="py-3 px-4 rounded-xl bg-[#FDB813] hover:bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider text-center transition-colors shadow-md flex items-center justify-center gap-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book VIP Tour</span>
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
