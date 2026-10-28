import React, { useState } from 'react';
import { Eye, MapPin, CheckCircle2, ShieldCheck, ChevronRight, Layers, Maximize2, X } from 'lucide-react';

const SITES = [
  {
    id: 'arrjava',
    name: 'Arrjava Farms (Exit 3 ORR, Patancheru)',
    image: '/assets/abhista/projects/1.jpg',
    tagline: '30-Acre Nature Sanctuary with 40-Ft Blacktop Roads',
    hotspots: [
      {
        id: 'h1',
        title: 'Grand Entrance Gateway',
        x: '18%',
        y: '72%',
        tag: 'Security & Access',
        desc: 'Monumental arch with 24/7 manned security, automated boom barriers, and high-definition CCTV coverage.'
      },
      {
        id: 'h2',
        title: 'Clubhouse & Infinity Lawn',
        x: '46%',
        y: '48%',
        tag: 'Community Life',
        desc: 'Private weekend retreat clubhouse featuring leisure lounge, swimming deck, and open-air event amphitheater.'
      },
      {
        id: 'h3',
        title: 'Organic Avenue & Drip Grid',
        x: '75%',
        y: '35%',
        tag: 'Agro Ecology',
        desc: 'Dense rows of mature timber trees with dedicated solar-powered underground drip irrigation network.'
      },
      {
        id: 'h4',
        title: 'Plotted Farmland Enclave',
        x: '62%',
        y: '68%',
        tag: 'Immediate Possession',
        desc: 'Demarcated 267 to 605 Sq.Yd plots with individual survey stones, fenced borders, and clear title deed.'
      }
    ]
  },
  {
    id: 'orchid',
    name: 'Orchid Bloom (NH-44 Bengaluru Highway, Kothur)',
    image: '/assets/abhista/projects/2.jpg',
    tagline: 'HMDA-Compliant Plotted Community Near Airport SEZ',
    hotspots: [
      {
        id: 'h1',
        title: 'Main Boulevard & Green Verge',
        x: '25%',
        y: '65%',
        tag: 'Infrastructure',
        desc: '40-foot wide blacktop avenue designed to HMDA master standards with integrated rainwater percolation pits.'
      },
      {
        id: 'h2',
        title: 'Children\'s Park & Sports Court',
        x: '52%',
        y: '42%',
        tag: 'Recreation',
        desc: 'Family activity center with multipurpose sports court, shaded gazebo, and toddler sensory play zone.'
      },
      {
        id: 'h3',
        title: 'Underground Drainage & Water Lines',
        x: '78%',
        y: '60%',
        tag: 'Smart Utilities',
        desc: 'Concealed underground electric conduits, overhead water storage, and central sewage network.'
      }
    ]
  },
  {
    id: 'oaktree',
    name: 'Oak Tree Farms (Muduchinthalapally, Shamirpet)',
    image: '/assets/abhista/projects/3.jpg',
    tagline: 'Lush Green Agroforestry Belt in North Hyderabad',
    hotspots: [
      {
        id: 'h1',
        title: 'Teak & Sandalwood Forest',
        x: '35%',
        y: '38%',
        tag: 'Wealth Asset',
        desc: 'Managed commercial plantation with registered agroforestry covenants and continuous soil enrichment.'
      },
      {
        id: 'h2',
        title: 'Farm Stay Cottages & Gazebo',
        x: '68%',
        y: '55%',
        tag: 'Weekend Living',
        desc: 'Rustic contemporary chalets nestled in foliage for weekend family stays away from city noise.'
      }
    ]
  }
];

export default function VirtualSiteViewer({ onOpenVisitModal }) {
  const [selectedSiteId, setSelectedSiteId] = useState('arrjava');
  const [activeHotspot, setActiveHotspot] = useState(SITES[0].hotspots[0]);

  const currentSite = SITES.find((s) => s.id === selectedSiteId) || SITES[0];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden" id="virtual-tour">
      
      {/* Ambient backdrop */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[#FDB813]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDB813]/10 border border-[#FDB813]/30 text-[#FDB813] text-xs font-bold uppercase tracking-wider mb-3">
            <Eye className="w-3.5 h-3.5 text-[#FDB813]" />
            <span>Interactive Aerial Tour</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Explore Ground Realities & Infrastructure
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Click on interactive hotspots across our aerial site surveys to inspect layout roads, clubhouses, plantation health, and boundary development.
          </p>
        </div>

        {/* Site Switcher */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-8">
          {SITES.map((site) => (
            <button
              key={site.id}
              onClick={() => {
                setSelectedSiteId(site.id);
                setActiveHotspot(site.hotspots[0]);
              }}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                selectedSiteId === site.id
                  ? 'bg-[#FDB813] text-slate-950 shadow-lg shadow-[#FDB813]/25 scale-105'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700/80 border border-slate-700'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>{site.name.split('(')[0].trim()}</span>
            </button>
          ))}
        </div>

        {/* Interactive Viewport Canvas */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl">
          
          {/* Main Panorama Image */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden">
            <img
              src={currentSite.image}
              alt={currentSite.name}
              className="w-full h-full object-cover brightness-90 filter transition-transform duration-1000 scale-100 hover:scale-105"
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-slate-950/60 pointer-events-none" />

            {/* Top Bar on Panorama */}
            <div className="absolute top-3 left-3 sm:top-6 sm:left-6 z-20 flex items-center gap-2 bg-slate-950/85 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl border border-slate-700 max-w-[calc(100%-1.5rem)] sm:max-w-md">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span className="text-[11px] sm:text-xs font-bold text-white truncate">{currentSite.tagline}</span>
            </div>

            {/* Interactive Pulsing Hotspots */}
            {currentSite.hotspots.map((spot) => {
              const isActive = activeHotspot?.id === spot.id;
              return (
                <div
                  key={spot.id}
                  style={{ top: spot.y, left: spot.x }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group"
                >
                  <button
                    onClick={() => setActiveHotspot(spot)}
                    className="relative flex items-center justify-center focus:outline-none"
                  >
                    {/* Ripple ring */}
                    <span className={`absolute w-10 h-10 rounded-full animate-ping opacity-75 ${
                      isActive ? 'bg-[#FDB813]' : 'bg-emerald-400'
                    }`} />

                    {/* Central hotspot button */}
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black shadow-lg transition-transform ${
                      isActive
                        ? 'bg-[#FDB813] text-slate-950 scale-125 border-2 border-white'
                        : 'bg-slate-900/90 text-[#FDB813] border-2 border-[#FDB813] hover:scale-110'
                    }`}>
                      +
                    </span>
                  </button>

                  {/* Micro Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block whitespace-nowrap bg-slate-900 text-white text-[10px] font-bold py-1 px-2.5 rounded-lg border border-slate-700 shadow-xl pointer-events-none">
                    {spot.title}
                  </div>
                </div>
              );
            })}

            {/* Bottom Overlay Hotspot Info Drawer */}
            {activeHotspot && (
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-md bg-slate-950/95 backdrop-blur-md border border-slate-700 rounded-2xl p-5 shadow-2xl z-30 transition-all">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#FDB813]/20 text-[#FDB813] border border-[#FDB813]/30">
                    {activeHotspot.tag}
                  </span>
                  <span className="text-xs text-slate-400">Inspected Spot</span>
                </div>

                <h4 className="text-lg font-extrabold text-white">
                  {activeHotspot.title}
                </h4>

                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                  {activeHotspot.desc}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => onOpenVisitModal && onOpenVisitModal({
                      title: `Live Site Inspection - ${activeHotspot.title} (${currentSite.name})`,
                      location: currentSite.name
                    })}
                    className="text-xs font-bold text-[#FDB813] hover:text-amber-300 flex items-center gap-1 group"
                  >
                    <span>Schedule Physical Site Visit</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* Quick Hotspot Strip Below Viewer */}
          <div className="p-4 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
            <span className="text-slate-400 font-medium">Click on any hotspot badge:</span>
            <div className="flex flex-wrap items-center gap-2">
              {currentSite.hotspots.map((spot) => (
                <button
                  key={spot.id}
                  onClick={() => setActiveHotspot(spot)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeHotspot?.id === spot.id
                      ? 'bg-[#FDB813] text-slate-950'
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {spot.title}
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
