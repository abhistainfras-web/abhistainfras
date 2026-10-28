import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../data/properties';
import { ShieldCheck, Users, Truck, Compass, HeartHandshake, CheckCircle2, ArrowRight } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';

export default function AboutPage({ onOpenVisitModal }) {
  const milestones = [
    {
      year: '2006',
      title: 'Foundation Under Anuradha Properties',
      desc: 'Mr. M. Ramachandra Reddy entered the South Indian real estate landscape with a foundational commitment to zero-litigation open plot developments.'
    },
    {
      year: '2012',
      title: 'Expansion into Greenfield Farmlands',
      desc: 'Pioneered managed agro-estates and gated farm plot investments around Hyderabad’s upcoming Outer Ring Road (ORR) growth zones.'
    },
    {
      year: '2016',
      title: 'Incorporation of Abhista Infra Developers',
      desc: 'Formally incorporated Abhista Infra with complete backward integration—investing in company-owned heavy machinery, road rollers, and legal due diligence cadred.'
    },
    {
      year: '2020',
      title: 'Bengaluru Highway & Biotech Corridors',
      desc: 'Acquired prime land banks along Bangalore Highway (NH-44 Kothur-Shadnagar) and Shamirpet Genome Valley, serving institutional and NRI investors.'
    },
    {
      year: '2024+',
      title: 'Flagship Benchmark Deliveries',
      desc: '1,200+ acres masterplanned, 25+ delivered ventures, and over 10,000 delighted land owners across South India.'
    }
  ];

  return (
    <div className="pt-24 pb-24 bg-white min-h-screen">
      
      {/* Breadcrumb & Header */}
      <div className="bg-slate-50 border-b border-slate-200 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-3">
            <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-800">Our Legacy & Leadership</span>
          </div>

          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest font-bold text-[#d99600] bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
              Heritage of Distinction
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-3">
              18+ Years of Unassailable Trust & Ethical Land Banking.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
              Founded on the bedrock of complete legal transparency, backward integration, and Vedic Vaastu compliance, Abhista Infras transforms raw land into appreciating, generational wealth.
            </p>
          </div>
        </div>
      </div>

      {/* Founder Profile Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden bg-slate-900 border-4 border-slate-100 shadow-xl aspect-[4/5] relative">
              <img
                src="/assets/abhista/ramachandra-reddy.jpg"
                alt="Mr. M. Ramachandra Reddy"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <img src="/assets/abhista/abhista-icon.png" alt="Abhista Infras" className="w-6 h-6 object-contain rounded-full bg-white p-0.5" />
                  <span className="text-xs uppercase font-bold text-[#FDB813]">Leadership</span>
                </div>
                <h3 className="text-xl font-bold">Mr. M. Ramachandra Reddy</h3>
                <p className="text-xs text-slate-300">Founder & Managing Director</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-widest font-bold text-[#d99600]">
              Founder’s Vision & Philosophy
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              "We Don’t Just Sell Plots; We Build Relationships Anchored in Title Certainty."
            </h2>

            <blockquote className="border-l-4 border-[#FDB813] pl-4 text-sm sm:text-base text-slate-700 italic leading-relaxed">
              "When I began in 2006 with Anuradha Properties, my guiding rule was simple: never accept a rupee of investor capital until our own legal advocates have verified 30 years of revenue link documents. Today, under Abhista Infras, we maintain that sacred pledge with company-owned machinery, punctual layout development, and spot registration."
            </blockquote>

            <p className="text-sm text-slate-600 leading-relaxed">
              Under Mr. Reddy’s direction, Abhista Infras has eliminated third-party contractor dependencies. By controlling earthmoving equipment, road laying, water networks, and horticulture teams in-house, the company guarantees layout completion on time, every time.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-100 text-center">
              <div>
                <div className="text-3xl font-extrabold text-[#d99600]">
                  <AnimatedCounter end={18} start={0} suffix="+" duration={1600} />
                </div>
                <div className="text-xs text-slate-500 font-semibold mt-1">Years Track Record</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-[#d99600]">
                  <AnimatedCounter end={1200} start={0} suffix="+" duration={1800} />
                </div>
                <div className="text-xs text-slate-500 font-semibold mt-1">Acres Masterplanned</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-[#d99600]">
                  <AnimatedCounter end={25} start={0} suffix="+" duration={1600} />
                </div>
                <div className="text-xs text-slate-500 font-semibold mt-1">Delivered Layouts</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-[#d99600]">
                  <AnimatedCounter end={10000} start={0} suffix="+" duration={2000} />
                </div>
                <div className="text-xs text-slate-500 font-semibold mt-1">Happy Families</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Backward Integration USP */}
      <div className="bg-slate-50 border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#d99600]">
              Our Structural Advantage
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              The Backward Integration Model
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              How Abhista delivers superior infrastructure quality without the delays typical of real estate developers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Company-Owned Machinery Fleet</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We own our excavators, graders, road rollers, and asphalt pavers. Layout blacktop roads (33ft & 40ft) are constructed directly by our team without subcontracting delays.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">80+ Dedicated Specialists</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Full-time land surveyors, civil engineers, and revenue advocates verify title boundaries, survey sketches, and encumbrance records prior to project acquisition.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Vedic Vaastu Design Cadre</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Every layout is scientifically drawn to honor cardinal directions (East & North orientations, southwest elevation, and northeast water recharge zones).
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Corporate Timeline */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 text-center mb-12">
          Milestones in Our 18-Year Journey
        </h2>

        <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:w-0.5 before:bg-slate-200">
          {milestones.map((item, idx) => (
            <div key={idx} className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className={`sm:w-1/2 ${idx % 2 === 0 ? 'sm:text-right' : 'sm:order-last'}`}>
                <div className="inline-block px-3 py-1 rounded-md bg-[#FDB813] text-slate-950 font-bold text-xs mb-1">
                  {item.year}
                </div>
                <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
              </div>

              <div className="w-8 h-8 rounded-full bg-white border-4 border-[#FDB813] z-10 shrink-0 hidden sm:block"></div>

              <div className="sm:w-1/2 hidden sm:block"></div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Bottom Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-2xl font-bold">Experience the Abhista Standard in Person</h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Visit our Kakatiya Hills, Madhapur headquarters or schedule a weekend site tour.
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => onOpenVisitModal(null)}
              className="px-6 py-3.5 rounded-xl bg-[#FDB813] hover:bg-[#e6a50e] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all whitespace-nowrap"
            >
              Book Site Visit
            </button>
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-xl border border-slate-700 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-all whitespace-nowrap"
            >
              Contact Office
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}
