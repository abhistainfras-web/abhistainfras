import React, { useState } from 'react';
import { Navigation, Clock, MapPin, Car, ShieldCheck, ArrowRight, CheckCircle2, Phone } from 'lucide-react';

const ORIGINS = [
  { id: 'financial-district', name: 'Gachibowli / Financial District', note: 'Wipro Circle, WaveRock, Neopolis SEZ' },
  { id: 'hitec-city', name: 'Hitec City / Madhapur', note: 'Cyber Towers, Inorbit Mall, Mindspace' },
  { id: 'jubilee-hills', name: 'Jubilee Hills / Banjara Hills', note: 'Road No. 36 & 45, KBR Park' },
  { id: 'airport', name: 'RGIA Shamshabad Airport', note: 'International Terminal, AeroCity' },
  { id: 'kukatpally', name: 'Kukatpally / Miyapur Hub', note: 'Metro Line, JNTU, Forum Mall' },
  { id: 'bengaluru-ecity', name: 'Bengaluru - Electronic City', note: 'Hosur Road, Tech Corridors' }
];

// Matrix of distances (kms) and drive times (mins) from origins to ventures
const COMMUTE_MATRIX = {
  'financial-district': [
    {
      ventureId: 'abhista-01',
      name: 'Arrjava Farms',
      location: 'Begumpet, Patancheru',
      corridor: 'West Corridor (ORR Exit 3)',
      time: '22 Mins',
      distance: '24.5 km',
      highway: 'Signal-free via Nehru Outer Ring Road (ORR Exit 3)',
      trafficBadge: 'Signal-Free Expressway',
      highlight: 'Direct smooth drive from Neopolis & Wipro Circle'
    },
    {
      ventureId: 'abhista-04',
      name: 'Mirai Farms',
      location: 'Shankarpally / Mokila',
      corridor: 'West Green Corridor',
      time: '28 Mins',
      distance: '29 km',
      highway: 'Via Shankarpally 4-Lane Highway',
      trafficBadge: 'Scenic Green Drive',
      highlight: 'Just minutes past Mokila luxury villa enclave'
    },
    {
      ventureId: 'abhista-02',
      name: 'Orchid Bloom',
      location: 'JP Darga Road, Kothur',
      corridor: 'South Corridor (NH-44)',
      time: '34 Mins',
      distance: '39 km',
      highway: 'Via ORR Exit 16 to NH-44 Bengaluru Highway',
      trafficBadge: 'National Highway Express',
      highlight: 'Near Amazon Fulfillment & GMR Airport SEZ'
    },
    {
      ventureId: 'abhista-03',
      name: 'Oak Tree Farms',
      location: 'Muduchinthalapally, Shamirpet',
      corridor: 'North Corridor (Genome Valley)',
      time: '42 Mins',
      distance: '48 km',
      highway: 'Via ORR Exit 7 (Shamirpet / Rajiv Rahadari)',
      trafficBadge: 'Clean Air Belt',
      highlight: 'Lush greenery adjacent to Genome Valley & BITS'
    },
    {
      ventureId: 'abhista-07',
      name: 'Radha Farms',
      location: 'Madhur Village, Shabad Mandal',
      corridor: 'South-West Agro Corridor',
      time: '36 Mins',
      distance: '38 km',
      highway: 'Via Chevella / Shabad Road',
      trafficBadge: 'Agro Countryside',
      highlight: '14-Acre lush farmland near proposed Pharma City ring'
    }
  ],
  'hitec-city': [
    {
      ventureId: 'abhista-01',
      name: 'Arrjava Farms',
      location: 'Begumpet, Patancheru',
      corridor: 'West Corridor (ORR Exit 3)',
      time: '26 Mins',
      distance: '28 km',
      highway: 'Via Gachibowli ORR Interchange',
      trafficBadge: 'Signal-Free Expressway',
      highlight: 'Straight forward drive from Cyber Towers'
    },
    {
      ventureId: 'abhista-04',
      name: 'Mirai Farms',
      location: 'Shankarpally / Mokila',
      corridor: 'West Green Corridor',
      time: '32 Mins',
      distance: '33 km',
      highway: 'Via Tellapur / Mokila Arterial Road',
      trafficBadge: 'Scenic Green Drive',
      highlight: 'Rapidly emerging IT executive retreat hub'
    },
    {
      ventureId: 'abhista-02',
      name: 'Orchid Bloom',
      location: 'JP Darga Road, Kothur',
      corridor: 'South Corridor (NH-44)',
      time: '38 Mins',
      distance: '42 km',
      highway: 'Via ORR South towards Kothur',
      trafficBadge: 'National Highway Express',
      highlight: 'Direct highway access to industrial growth zone'
    },
    {
      ventureId: 'abhista-03',
      name: 'Oak Tree Farms',
      location: 'Muduchinthalapally, Shamirpet',
      corridor: 'North Corridor (Genome Valley)',
      time: '40 Mins',
      distance: '45 km',
      highway: 'Via ORR Exit 7 Shamirpet',
      trafficBadge: 'Clean Air Belt',
      highlight: 'Serene drive away from city pollution'
    },
    {
      ventureId: 'abhista-07',
      name: 'Radha Farms',
      location: 'Madhur Village, Shabad Mandal',
      corridor: 'South-West Agro Corridor',
      time: '39 Mins',
      distance: '41 km',
      highway: 'Via Chevella Road',
      trafficBadge: 'Agro Countryside',
      highlight: 'Peaceful weekend farm gateway'
    }
  ],
  'jubilee-hills': [
    {
      ventureId: 'abhista-01',
      name: 'Arrjava Farms',
      location: 'Begumpet, Patancheru',
      corridor: 'West Corridor (ORR Exit 3)',
      time: '30 Mins',
      distance: '31 km',
      highway: 'Via Road No. 45 Flyover & ORR Exit 3',
      trafficBadge: 'Flyover & Expressway',
      highlight: 'High-speed elevated corridor to Patancheru'
    },
    {
      ventureId: 'abhista-02',
      name: 'Orchid Bloom',
      location: 'JP Darga Road, Kothur',
      corridor: 'South Corridor (NH-44)',
      time: '36 Mins',
      distance: '38 km',
      highway: 'Via Masab Tank & PVNR Elevated Expressway to NH-44',
      trafficBadge: 'Elevated Corridor',
      highlight: 'Effortless South-bound drive'
    },
    {
      ventureId: 'abhista-04',
      name: 'Mirai Farms',
      location: 'Shankarpally / Mokila',
      corridor: 'West Green Corridor',
      time: '35 Mins',
      distance: '36 km',
      highway: 'Via Gachibowli to Shankarpally Road',
      trafficBadge: 'Arterial Highway',
      highlight: 'Surrounded by top international schools'
    },
    {
      ventureId: 'abhista-03',
      name: 'Oak Tree Farms',
      location: 'Muduchinthalapally, Shamirpet',
      corridor: 'North Corridor (Genome Valley)',
      time: '44 Mins',
      distance: '47 km',
      highway: 'Via Begumpet & Rajiv Rahadari / ORR',
      trafficBadge: 'North Corridor',
      highlight: 'Escape to lush green tree canopies'
    },
    {
      ventureId: 'abhista-07',
      name: 'Radha Farms',
      location: 'Madhur Village, Shabad Mandal',
      corridor: 'South-West Agro Corridor',
      time: '41 Mins',
      distance: '43 km',
      highway: 'Via Appa Junction & Shabad Road',
      trafficBadge: 'Agro Countryside',
      highlight: 'Rich black soil farmlands'
    }
  ],
  'airport': [
    {
      ventureId: 'abhista-02',
      name: 'Orchid Bloom',
      location: 'JP Darga Road, Kothur',
      corridor: 'South Corridor (NH-44)',
      time: '18 Mins',
      distance: '21 km',
      highway: 'Direct NH-44 Bengaluru Highway',
      trafficBadge: 'Airport SEZ Corridor',
      highlight: 'Closest prime plotted venture to RGIA Shamshabad'
    },
    {
      ventureId: 'abhista-07',
      name: 'Radha Farms',
      location: 'Madhur Village, Shabad Mandal',
      corridor: 'South-West Agro Corridor',
      time: '24 Mins',
      distance: '26 km',
      highway: 'Via Shamshabad - Shabad Link Road',
      trafficBadge: 'Quick Agro Access',
      highlight: 'Strategic proximity to aerotropolis logistics'
    },
    {
      ventureId: 'abhista-01',
      name: 'Arrjava Farms',
      location: 'Begumpet, Patancheru',
      corridor: 'West Corridor (ORR Exit 3)',
      time: '32 Mins',
      distance: '44 km',
      highway: 'Direct 8-Lane ORR from Shamshabad Exit to Exit 3',
      trafficBadge: '100% Signal-Free ORR',
      highlight: 'Smooth 100km/h cruising speed highway'
    },
    {
      ventureId: 'abhista-04',
      name: 'Mirai Farms',
      location: 'Shankarpally / Mokila',
      corridor: 'West Green Corridor',
      time: '35 Mins',
      distance: '42 km',
      highway: 'Via ORR Exit 1 towards Kollur & Shankarpally',
      trafficBadge: 'Scenic Drive',
      highlight: 'Seamless travel from domestic & international flights'
    },
    {
      ventureId: 'abhista-03',
      name: 'Oak Tree Farms',
      location: 'Muduchinthalapally, Shamirpet',
      corridor: 'North Corridor (Genome Valley)',
      time: '48 Mins',
      distance: '68 km',
      highway: 'Via Eastern ORR Ring directly to Shamirpet Exit 7',
      trafficBadge: 'Express Ring Road',
      highlight: 'Ring road connectivity spanning entire city'
    }
  ],
  'kukatpally': [
    {
      ventureId: 'abhista-01',
      name: 'Arrjava Farms',
      location: 'Begumpet, Patancheru',
      corridor: 'West Corridor (ORR Exit 3)',
      time: '19 Mins',
      distance: '20 km',
      highway: 'Direct via NH-65 Mumbai Highway to Patancheru',
      trafficBadge: 'Direct NH-65 Highway',
      highlight: 'Under 20 minutes from Miyapur Metro terminal'
    },
    {
      ventureId: 'abhista-03',
      name: 'Oak Tree Farms',
      location: 'Muduchinthalapally, Shamirpet',
      corridor: 'North Corridor (Genome Valley)',
      time: '34 Mins',
      distance: '37 km',
      highway: 'Via Miyapur - Bachupally - ORR Exit 5 to Exit 7',
      trafficBadge: 'Fast North Link',
      highlight: 'Quick drive through Bachupally educational hub'
    },
    {
      ventureId: 'abhista-04',
      name: 'Mirai Farms',
      location: 'Shankarpally / Mokila',
      corridor: 'West Green Corridor',
      time: '32 Mins',
      distance: '31 km',
      highway: 'Via BHEL & Patancheru - Shankarpally Road',
      trafficBadge: 'State Highway',
      highlight: 'Smooth countryside access'
    },
    {
      ventureId: 'abhista-02',
      name: 'Orchid Bloom',
      location: 'JP Darga Road, Kothur',
      corridor: 'South Corridor (NH-44)',
      time: '44 Mins',
      distance: '51 km',
      highway: 'Via ORR Exit 4 (Miyapur) to Exit 16 (Kothur)',
      trafficBadge: 'High-Speed Ring Road',
      highlight: 'Rapid transit bypass avoiding downtown traffic'
    },
    {
      ventureId: 'abhista-07',
      name: 'Radha Farms',
      location: 'Madhur Village, Shabad Mandal',
      corridor: 'South-West Agro Corridor',
      time: '45 Mins',
      distance: '48 km',
      highway: 'Via ORR to Shabad Road',
      trafficBadge: 'Countryside Access',
      highlight: 'Accessible retreat for North-West residents'
    }
  ],
  'bengaluru-ecity': [
    {
      ventureId: 'abhista-05',
      name: 'Abhista Serene',
      location: 'South Bengaluru Corridor',
      corridor: 'Bengaluru IT Belt',
      time: '24 Mins',
      distance: '22 km',
      highway: 'Via Electronic City Elevated Expressway & Hosur Road',
      trafficBadge: 'Tech Corridor Link',
      highlight: 'Directly linked to Bengaluru top IT employment parks'
    },
    {
      ventureId: 'bengaluru-completed',
      name: 'Bengaluru Footprint (7 Projects)',
      location: 'Whitefield, Bannerghatta & Devanahalli',
      corridor: 'Greater Bengaluru Matrix',
      time: '25-40 Mins',
      distance: '25-38 km',
      highway: 'Peripheral Ring Road & Airport Expressway',
      trafficBadge: 'Metro & Ring Road',
      highlight: 'Over 18 years of delivered plotted landmarks in Karnataka'
    }
  ]
};

export default function HighwayTimeCalculator({ onOpenVisitModal }) {
  const [selectedOrigin, setSelectedOrigin] = useState('financial-district');

  const currentTrips = COMMUTE_MATRIX[selectedOrigin] || COMMUTE_MATRIX['financial-district'];
  const activeOriginObj = ORIGINS.find((o) => o.id === selectedOrigin);

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden" id="commute-matrix">
      
      {/* Decorative Blur */}
      <div className="absolute top-10 right-1/4 w-80 h-80 bg-[#FDB813]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDB813]/10 border border-[#FDB813]/30 text-[#FDB813] text-xs font-bold uppercase tracking-wider mb-3">
            <Car className="w-3.5 h-3.5" />
            <span>Interactive Commute Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How Far Is Abhista From Your Doorstep?
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Select your residential or office hub to preview real highway drive times, distances, and route corridors to our flagship ventures.
          </p>
        </div>

        {/* Origin Selector Pills */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-10">
          {ORIGINS.map((origin) => {
            const isSelected = selectedOrigin === origin.id;
            return (
              <button
                key={origin.id}
                onClick={() => setSelectedOrigin(origin.id)}
                className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all text-left flex flex-col items-start ${
                  isSelected
                    ? 'bg-[#FDB813] text-slate-950 shadow-lg shadow-[#FDB813]/25 scale-105'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700/80 border border-slate-700'
                }`}
              >
                <span>{origin.name}</span>
                <span className={`text-[10px] font-normal truncate max-w-[200px] ${
                  isSelected ? 'text-slate-800 font-medium' : 'text-slate-400'
                }`}>
                  {origin.note}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Origin Notification Bar */}
        <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-4 sm:p-5 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FDB813] text-slate-950 flex items-center justify-center font-black">
              <Navigation className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#FDB813]">
                Starting Departure Point
              </span>
              <div className="text-base font-extrabold text-white">
                {activeOriginObj?.name}
              </div>
            </div>
          </div>
          <div className="text-xs text-slate-400 sm:text-right">
            <span>Calculated via Nehru ORR, NH-44 & Arterial Highways</span>
            <span className="block text-emerald-400 font-semibold text-[11px] mt-0.5">
              Complimentary Site Visit Cab Available on Weekends
            </span>
          </div>
        </div>

        {/* Results Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentTrips.map((trip, idx) => (
            <div
              key={idx}
              className="bg-slate-950/80 border border-slate-800 hover:border-[#FDB813]/60 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Venture Corridor & Time Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-900 px-2.5 py-1 rounded-full border border-slate-800">
                    {trip.corridor}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-black text-[#FDB813] bg-[#FDB813]/10 border border-[#FDB813]/30 px-2.5 py-1 rounded-full">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{trip.time}</span>
                  </div>
                </div>

                {/* Venture Name & Locality */}
                <h3 className="text-xl font-black text-white group-hover:text-[#FDB813] transition-colors">
                  {trip.name}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#FDB813]" />
                  <span>{trip.location}</span>
                </p>

                {/* Distance & Route Specs */}
                <div className="my-5 p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Total Distance:</span>
                    <span className="font-extrabold text-white text-sm">{trip.distance}</span>
                  </div>
                  <div className="text-[11px] text-slate-400 pt-1 border-t border-slate-800/80">
                    <span className="text-slate-300 font-medium">{trip.highway}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed italic">
                  "{trip.highlight}"
                </p>
              </div>

              {/* Action buttons */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <button
                  onClick={() => onOpenVisitModal && onOpenVisitModal({
                    title: `Complimentary Site Visit - ${trip.name}`,
                    location: `${activeOriginObj?.name} to ${trip.location}`
                  })}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-[#FDB813] hover:text-slate-950 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
                >
                  <Car className="w-3.5 h-3.5" />
                  <span>Book Free AC Cab</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Free Cab Footnote */}
        <div className="mt-12 text-center text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#FDB813]" />
          <span>
            Abhista provides chauffeured luxury AC cab pick-up and drop from your doorstep for all family site visits.
          </span>
          <a href="tel:+917075528334" className="text-[#FDB813] font-bold hover:underline">
            Call +91 70755 28334 to Book
          </a>
        </div>

      </div>
    </section>
  );
}
