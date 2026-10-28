import React, { useState } from 'react';
import { Compass, Sun, ShieldCheck, CheckCircle2, ArrowRight, BookOpen, AlertCircle } from 'lucide-react';

const VAASTU_DIRECTIONS = [
  {
    id: 'ishanya',
    name: 'North-East (Ishanya)',
    deity: 'Lord Shiva / Ishana',
    element: 'Water & Natural Morning Light',
    score: '100% Vaastu Compliant',
    color: 'from-amber-400 to-yellow-500',
    angle: 45,
    summary: 'The premier directional quadrant for real estate. Welcomes natural morning sunlight, cross-ventilation, and enduring prosperity.',
    dos: [
      'Keep this corner open, clean, and lightweight',
      'Ideal for borewells, underground water sumps, and lawn spaces',
      'Ensure the plot slope gently tilts downwards towards North-East'
    ],
    donts: [
      'Avoid heavy structures, septic tanks, or high perimeter walls in this corner'
    ],
    abhistaRule: 'All Abhista farmlands and villa plots ensure an unblocked North-East quadrant for natural morning light and ventilation.'
  },
  {
    id: 'east',
    name: 'East (Purva / Aditya)',
    deity: 'Lord Indra / Sun God',
    element: 'Solar Fire & Life Force',
    score: '98% Highly Auspicious',
    color: 'from-yellow-400 to-amber-500',
    angle: 90,
    summary: 'The gateway of the morning sun. Symbolizes high vitality, professional leadership, social standing, and healthy progeny.',
    dos: [
      'Perfect for main entrance gates and morning sit-outs',
      'Plant low-height ornamental shrubs and aromatic flower beds',
      'Keep ample setback to welcome the morning ultraviolet rays'
    ],
    donts: [
      'Do not place tall, thick trees that block the early morning sunrise'
    ],
    abhistaRule: 'Our East-facing plots feature wide 33ft to 40ft blacktop roads to maximize direct dawn illumination.'
  },
  {
    id: 'agneya',
    name: 'South-East (Agneya)',
    deity: 'Lord Agni (Fire)',
    element: 'Pure Fire Energy',
    score: 'Balanced Energy Zone',
    color: 'from-red-400 to-orange-500',
    angle: 135,
    summary: 'Governs physical health, digestion, vitality, and passionate enterprise. Drives active physical endeavors.',
    dos: [
      'Ideal for open barbecue pavilions, electrical transformers, and kitchens',
      'Good for solar panel arrays and hot water geyser systems'
    ],
    donts: [
      'Avoid underground water storage or borewells in this quadrant'
    ],
    abhistaRule: 'Layout infrastructure keeps utility lines and electrical grids harmoniously aligned with Agneya zones.'
  },
  {
    id: 'south',
    name: 'South (Dakshina)',
    deity: 'Lord Yama',
    element: 'Earth & Stability',
    score: 'Grounded & Secure',
    color: 'from-orange-500 to-amber-600',
    angle: 180,
    summary: 'Provides grounding, endurance, and protection against outside volatility. Excellent for solid retention walls.',
    dos: [
      'Maintain higher boundary elevation than North and East',
      'Suitable for mature timber plantations (Teak & Red Sandalwood)'
    ],
    donts: [
      'Avoid water bodies or large depressions'
    ],
    abhistaRule: 'We plant deep-rooted avenue trees on southern plot borders to create a natural acoustic and wind buffer.'
  },
  {
    id: 'nirruthi',
    name: 'South-West (Nirruthi)',
    deity: 'Nirruthi / Earth Lord',
    element: 'Heavy Earth Element',
    score: 'Wealth Anchor Zone',
    color: 'from-amber-700 to-amber-900',
    angle: 225,
    summary: 'The master anchor of the entire property. Governs stability, wealth preservation, and patriarch longevity.',
    dos: [
      'Highest elevation point of the property layout',
      'Ideal for master suite, overhead water tank, and heavy rockeries',
      'Maintain thickest boundary walls on this side'
    ],
    donts: [
      'Never dig borewells or swimming pools in South-West'
    ],
    abhistaRule: 'Abhista topography grading guarantees South-West corners are elevated to preserve generational wealth.'
  },
  {
    id: 'west',
    name: 'West (Pashchima)',
    deity: 'Lord Varuna (Rain & Oceans)',
    element: 'Water & Wind',
    score: '92% Prosperous Business Stability',
    color: 'from-blue-500 to-indigo-600',
    angle: 270,
    summary: 'Associated with enduring fame, business prosperity, and intellectual pursuits. Very popular for family homes.',
    dos: [
      'Ideal for dining pavilions, study rooms, and wide verandahs',
      'Good location for overhead water tanks on built cottages'
    ],
    donts: [
      'Avoid large declivities or downward slopes towards West'
    ],
    abhistaRule: 'West-facing plots in Arrjava and Orchid Bloom are crafted with elevated frontage for optimal solar balance.'
  },
  {
    id: 'vayavya',
    name: 'North-West (Vayavya)',
    deity: 'Lord Vayu (Wind)',
    element: 'Air & Dynamic Energy',
    score: 'Active & Dynamic Zone',
    color: 'from-teal-400 to-cyan-600',
    angle: 315,
    summary: 'Represents continuous movement, dynamic trade, positive relationships, and social goodwill.',
    dos: [
      'Excellent for guest suites, car parking ports, and organic barns',
      'Promotes continuous airflow across the estate'
    ],
    donts: [
      'Avoid master bedrooms in this zone for long-term residents'
    ],
    abhistaRule: 'We integrate avenue airflow corridors and breezeways across North-West sectors.'
  },
  {
    id: 'kubera',
    name: 'North (Uttara / Kubera)',
    deity: 'Lord Kubera & Mercury',
    element: 'Cosmic Water & Wealth',
    score: '99% Supreme Wealth & Growth',
    color: 'from-emerald-400 to-green-600',
    angle: 0,
    summary: 'The royal direction of Lord Kubera. Represents steady cash flows, financial liquidity, and commercial success.',
    dos: [
      'Keep open green corridors, manicured lawns, and fountains',
      'Ideal for secondary access gates and garden courtyards'
    ],
    donts: [
      'Do not construct heavy boundary walls blocking the Northern light'
    ],
    abhistaRule: 'North-facing Abhista plots enjoy generous front road widths and zero shadow obstruction.'
  }
];

export default function VaastuCompassExplorer({ onOpenVisitModal }) {
  const [activeDirection, setActiveDirection] = useState(VAASTU_DIRECTIONS[0]);
  const [rotationAngle, setRotationAngle] = useState(45);

  const selectDirection = (dir) => {
    setActiveDirection(dir);
    setRotationAngle(dir.angle);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden" id="vaastu-compass">
      
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FDB813]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDB813]/10 border border-[#FDB813]/30 text-[#FDB813] text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Pillar 3: Honoring Traditions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Interactive Vaastu Shastra Compass
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Every Abhista venture is strictly planned according to Vedic Vaastu principles to maximize natural ventilation, morning sunlight, and positive living for your family.
          </p>
        </div>

        {/* Main Interactive Compass & Knowledge Card Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Interactive Rotatable Compass Wheel (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-4 sm:p-8 bg-slate-900/60 border border-slate-800 rounded-3xl relative backdrop-blur-sm">
            
            <div className="text-center mb-6">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#FDB813]">
                Click Any Cardinal Direction
              </span>
              <p className="text-xs text-slate-400 mt-0.5">
                Select a direction to review layout specifications & energy alignment
              </p>
            </div>

            {/* Compass Outer Ring */}
            <div className="relative w-[260px] h-[260px] sm:w-80 sm:h-80 rounded-full border-4 border-slate-800 flex items-center justify-center bg-slate-950/80 shadow-2xl">
              
              {/* Outer Degree Marks */}
              <div className="absolute inset-2 rounded-full border border-dashed border-slate-700/60 pointer-events-none" />
              <div className="absolute inset-6 rounded-full border border-slate-800 pointer-events-none" />

              {/* Center Pivot Needle */}
              <div
                className="absolute w-full h-full flex items-center justify-center pointer-events-none transition-transform duration-700 ease-out"
                style={{ transform: `rotate(${rotationAngle}deg)` }}
              >
                {/* Needle Arrow */}
                <div className="relative w-2 h-36 sm:h-44 flex flex-col items-center">
                  <div className="w-0 h-0 border-x-8 border-x-transparent border-b-[28px] sm:border-b-[32px] border-b-[#FDB813] drop-shadow-[0_0_8px_rgba(253,184,19,0.8)]" />
                  <div className="w-1.5 h-full bg-gradient-to-b from-[#FDB813] to-slate-700 rounded-full" />
                  <div className="w-0 h-0 border-x-6 border-x-transparent border-t-[20px] sm:border-t-[24px] border-t-slate-600" />
                </div>
              </div>

              {/* Center Jewel */}
              <div className="absolute w-12 h-12 rounded-full bg-[#FDB813] text-slate-950 font-black text-xs flex items-center justify-center shadow-lg shadow-[#FDB813]/30 z-20 border-2 border-white">
                VAASTU
              </div>

              {/* 8 Direction Clickable Buttons along the perimeter */}
              {/* North */}
              <button
                onClick={() => selectDirection(VAASTU_DIRECTIONS[7])}
                className={`absolute top-2 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg text-xs font-black transition-all z-10 ${
                  activeDirection.id === 'kubera' ? 'bg-[#FDB813] text-slate-950 scale-110 shadow-md' : 'bg-slate-800 text-slate-300 hover:text-white'
                }`}
              >
                N
              </button>

              {/* North-East (Ishanya) */}
              <button
                onClick={() => selectDirection(VAASTU_DIRECTIONS[0])}
                className={`absolute top-8 right-8 px-2.5 py-1 rounded-lg text-xs font-black transition-all z-10 ${
                  activeDirection.id === 'ishanya' ? 'bg-[#FDB813] text-slate-950 scale-110 shadow-md' : 'bg-slate-800 text-[#FDB813] hover:text-white'
                }`}
              >
                NE
              </button>

              {/* East */}
              <button
                onClick={() => selectDirection(VAASTU_DIRECTIONS[1])}
                className={`absolute top-1/2 right-2 -translate-y-1/2 px-2.5 py-1 rounded-lg text-xs font-black transition-all z-10 ${
                  activeDirection.id === 'east' ? 'bg-[#FDB813] text-slate-950 scale-110 shadow-md' : 'bg-slate-800 text-slate-300 hover:text-white'
                }`}
              >
                E
              </button>

              {/* South-East (Agneya) */}
              <button
                onClick={() => selectDirection(VAASTU_DIRECTIONS[2])}
                className={`absolute bottom-8 right-8 px-2.5 py-1 rounded-lg text-xs font-black transition-all z-10 ${
                  activeDirection.id === 'agneya' ? 'bg-[#FDB813] text-slate-950 scale-110 shadow-md' : 'bg-slate-800 text-slate-300 hover:text-white'
                }`}
              >
                SE
              </button>

              {/* South */}
              <button
                onClick={() => selectDirection(VAASTU_DIRECTIONS[3])}
                className={`absolute bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg text-xs font-black transition-all z-10 ${
                  activeDirection.id === 'south' ? 'bg-[#FDB813] text-slate-950 scale-110 shadow-md' : 'bg-slate-800 text-slate-300 hover:text-white'
                }`}
              >
                S
              </button>

              {/* South-West (Nirruthi) */}
              <button
                onClick={() => selectDirection(VAASTU_DIRECTIONS[4])}
                className={`absolute bottom-8 left-8 px-2.5 py-1 rounded-lg text-xs font-black transition-all z-10 ${
                  activeDirection.id === 'nirruthi' ? 'bg-[#FDB813] text-slate-950 scale-110 shadow-md' : 'bg-slate-800 text-slate-300 hover:text-white'
                }`}
              >
                SW
              </button>

              {/* West */}
              <button
                onClick={() => selectDirection(VAASTU_DIRECTIONS[5])}
                className={`absolute top-1/2 left-2 -translate-y-1/2 px-2.5 py-1 rounded-lg text-xs font-black transition-all z-10 ${
                  activeDirection.id === 'west' ? 'bg-[#FDB813] text-slate-950 scale-110 shadow-md' : 'bg-slate-800 text-slate-300 hover:text-white'
                }`}
              >
                W
              </button>

              {/* North-West (Vayavya) */}
              <button
                onClick={() => selectDirection(VAASTU_DIRECTIONS[6])}
                className={`absolute top-8 left-8 px-2.5 py-1 rounded-lg text-xs font-black transition-all z-10 ${
                  activeDirection.id === 'vayavya' ? 'bg-[#FDB813] text-slate-950 scale-110 shadow-md' : 'bg-slate-800 text-slate-300 hover:text-white'
                }`}
              >
                NW
              </button>

            </div>

            {/* Selected Direction Quick Pill */}
            <div className="mt-6 flex items-center gap-2 text-xs text-slate-300 bg-slate-800/80 px-4 py-2 rounded-full border border-slate-700">
              <Sun className="w-4 h-4 text-[#FDB813]" />
              <span>Current Direction: <strong className="text-white">{activeDirection.name}</strong></span>
            </div>

          </div>

          {/* Detailed Direction Vaastu Dossier (7 cols) */}
          <div className="lg:col-span-7 bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-3">
              <div>
                <span className="text-xs font-bold text-[#d99600] uppercase tracking-wider block">
                  Directional Energy Breakdown
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-0.5">
                  {activeDirection.name}
                </h3>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>{activeDirection.score}</span>
              </div>
            </div>

            <div className="py-6 space-y-5">
              
              {/* Meta Grid */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                  <span className="text-[10px] font-bold text-slate-500 uppercase">Governing Deity</span>
                  <div className="text-sm font-extrabold text-slate-900 mt-0.5">{activeDirection.deity}</div>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                  <span className="text-[10px] font-bold text-slate-500 uppercase">Natural Element</span>
                  <div className="text-sm font-extrabold text-slate-900 mt-0.5">{activeDirection.element}</div>
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                {activeDirection.summary}
              </p>

              {/* Do's and Don'ts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Recommended (Do's) */}
                <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/70 space-y-2">
                  <span className="text-xs font-bold text-emerald-800 flex items-center gap-1.5 uppercase tracking-wider">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Recommended Layout Usage
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {activeDirection.dos.map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-emerald-600 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Things to Avoid */}
                <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/70 space-y-2">
                  <span className="text-xs font-bold text-amber-800 flex items-center gap-1.5 uppercase tracking-wider">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                    Important Vaastu Cautions
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {activeDirection.donts.map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-amber-600 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Abhista Infra's Execution Guarantee */}
              <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-[#FDB813] uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FDB813]" />
                  <span>The Abhista Layout Guarantee</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeDirection.abhistaRule}
                </p>
              </div>

            </div>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                onClick={() => onOpenVisitModal && onOpenVisitModal({
                  title: `Vaastu Consultation - ${activeDirection.name} Facing Plots`,
                  location: activeDirection.name
                })}
                className="w-full sm:w-auto flex-1 py-3.5 px-6 rounded-xl bg-[#FDB813] hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#FDB813]/20 flex items-center justify-center gap-2"
              >
                <span>Request {activeDirection.name.split('(')[0].trim()} Plot Availability</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
