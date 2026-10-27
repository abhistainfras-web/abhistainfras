import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Sun, Droplets, Trees, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function SustainabilityPage() {
  const initiatives = [
    {
      icon: Droplets,
      title: "Micro-Drip Irrigation Systems",
      desc: "Every farmland plot features pressure-regulated drip irrigation, reducing agricultural water consumption by over 60% compared to traditional flood methods."
    },
    {
      icon: Trees,
      title: "Native Agroforestry & Green Buffers",
      desc: "We plant thousands of indigenous fruit-bearing and timber species (Teak, Sandalwood, Mango, Guava, Malabar Neem) enhancing local soil biodiversity."
    },
    {
      icon: Sun,
      title: "Solar-Powered Layout Infrastructure",
      desc: "Street lighting networks and perimeter security fencing utilize clean solar photovoltaic energy, reducing grid power consumption."
    },
    {
      icon: Leaf,
      title: "Zero-Chemical Organic Stewardship",
      desc: "Our farm communities follow natural regenerative farming principles, utilizing vermicompost and biological pest controls to preserve living soil."
    }
  ];

  return (
    <div className="pt-24 pb-24 bg-white min-h-screen">
      
      {/* Header Banner */}
      <div className="bg-slate-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/assets/abhista/page-titles/about-img.jpg" alt="Sustainability" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-3">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#FDB813]">Sustainability</span>
          </div>

          <div className="max-w-2xl">
            <span className="text-xs uppercase font-bold tracking-widest text-[#FDB813] bg-slate-800 border border-slate-700 px-3 py-1 rounded-full">
              Ecological Stewardship
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-3">
              Sustainable Land Living & Ethical Development
            </h1>
            <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
              In all spheres of activity that we undertake, we strive to uphold uncompromising business ethics by building homes and communities that are successful and sustainable in every sense.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Core Statement from sustainability.php */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
            <Leaf className="w-7 h-7" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Harmonizing Nature with Human Habitation
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            "At Abhista Infras, we believe land is not merely an investment asset; it is an ecological trust. Our masterplans protect natural contours, preserve century-old trees, and recharge ground water aquifers through scientifically placed percolation pits."
          </p>
        </div>

        {/* 4 Initiatives */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {initiatives.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-3">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
}
