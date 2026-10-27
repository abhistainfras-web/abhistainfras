import React from 'react';
import { Link } from 'react-router-dom';
import { PROPERTIES } from '../data/properties';
import { MapPin, Navigation, TrendingUp, Building2, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

const CORRIDOR_DATA = [
  {
    id: 'patancheru',
    name: 'Patancheru & Sangareddy Growth Corridor',
    region: 'West Hyderabad Node',
    highways: 'Outer Ring Road (ORR) Exit 3 • Mumbai NH-65 • Upcoming RRR',
    highlights: [
      'Proximity to Neopolis, Kokapet, and Financial District (25-30 mins via ORR).',
      'Educational & Research hub: IIT Hyderabad (Kandi), Gitam University, and BHEL.',
      'Massive industrial & logistics corridor driving high land capital appreciation.'
    ],
    growthRate: '+18% to 22% p.a. average land value growth',
    filterKey: 'Patancheru',
    tag: 'Highest Appreciation Corridor'
  },
  {
    id: 'kothur',
    name: 'Kothur, Shadnagar & Bangalore Highway',
    region: 'South Hyderabad Industrial Hub',
    highways: 'Bangalore Highway NH-44 • Airport Express • RRR South Junction',
    highlights: [
      'Only 20-25 minutes from Rajiv Gandhi International Airport (RGIA Shamshabad).',
      'Home to multinational giants: Amazon Data Center & Fulfillment, P&G, Johnson & Johnson.',
      'GMR Aerospace SEZ and designated Pharma City logistic zones along NH-44.'
    ],
    growthRate: '+15% to 20% p.a. industrial expansion growth',
    filterKey: 'Kothur',
    tag: 'Industrial & Airport Corridor'
  },
  {
    id: 'shamirpet',
    name: 'Shamirpet & Medchal Biotech Valley',
    region: 'North Hyderabad Research Belt',
    highways: 'Rajiv Rahadari (SH-1) • Genome Valley Road • ORR Exit 6 & 7',
    highlights: [
      'Asia’s largest biotechnology cluster: Genome Valley, Bharat Biotech, Biological E.',
      'Top institutions: BITS Pilani Hyderabad Campus, NALSAR University of Law.',
      'Pristine green belt with perennial groundwater and clean air, perfect for weekend farm retreats.'
    ],
    growthRate: '+14% to 18% p.a. eco-estate growth',
    filterKey: 'Shamirpet',
    tag: 'Biotech & Green Ecology'
  },
  {
    id: 'bengaluru',
    name: 'Bengaluru South & Peripheral Hub',
    region: 'Karnataka High-Tech Residential',
    highways: 'Hosur Road • Peripheral Ring Road (PRR) • Kanakapura Corridor',
    highlights: [
      'Direct connectivity to Electronic City and South Bengaluru commercial corridors.',
      'High demand for weekend retreats, organic farm villas, and secure gated communities.',
      'Backed by rapid public infrastructure development including Namma Metro expansion.'
    ],
    growthRate: '+16% to 20% p.a. residential appreciation',
    filterKey: 'Bengaluru',
    tag: 'Residential Tech Hub'
  }
];

export default function CorridorsPage({ onOpenVisitModal }) {
  return (
    <div className="pt-24 pb-24 bg-slate-50 min-h-screen">
      
      {/* Breadcrumb & Header */}
      <div className="bg-white border-b border-slate-200 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-3">
            <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-800">Growth Corridors</span>
          </div>

          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest font-bold text-[#d99600] bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
              Strategic Infrastructure Nodes
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-3">
              Where Capital Meets Compounding Growth.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
              Every Abhista venture is strictly acquired within designated high-growth highways, Regional Ring Road (RRR) junction nodes, or employment centers to ensure maximum land appreciation.
            </p>
          </div>
        </div>
      </div>

      {/* Corridors Deep Dive */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {CORRIDOR_DATA.map((corridor, idx) => {
          const corridorProjects = PROPERTIES.filter((p) =>
            p.location.toLowerCase().includes(corridor.filterKey.toLowerCase()) ||
            p.enclave.toLowerCase().includes(corridor.filterKey.toLowerCase())
          );

          return (
            <div
              key={corridor.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-8 sm:p-10 border-b border-slate-100">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-50 text-amber-900 border border-amber-200">
                      {corridor.tag}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {corridor.region}
                    </span>
                  </div>

                  <div className="text-xs font-bold text-[#d99600] bg-amber-50/60 px-3 py-1 rounded-lg">
                    {corridor.growthRate}
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
                  {corridor.name}
                </h2>

                <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg mb-6">
                  <Navigation className="w-3.5 h-3.5 shrink-0" />
                  <span>{corridor.highways}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  {corridor.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects in this corridor */}
              <div className="bg-slate-50 p-6 sm:p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xs uppercase font-bold text-slate-500 tracking-wider">
                    Abhista Ventures in this Corridor ({corridorProjects.length})
                  </h3>
                  <Link
                    to={`/projects?location=${corridor.filterKey}`}
                    className="text-xs font-bold text-[#d99600] hover:underline"
                  >
                    View All in {corridor.filterKey} &rarr;
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {corridorProjects.map((p) => (
                    <Link
                      key={p.id}
                      to={`/projects/${p.id}`}
                      className="group bg-white p-4 rounded-xl border border-slate-200 hover:border-amber-500 flex items-center justify-between transition-all"
                    >
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#d99600] transition-colors">
                          {p.title}
                        </h4>
                        <span className="text-[11px] text-slate-500">{p.plotSize} • {p.approval.split('/')[0]}</span>
                      </div>
                      <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-[#FDB813] text-slate-700 group-hover:text-slate-950 flex items-center justify-center transition-colors">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
