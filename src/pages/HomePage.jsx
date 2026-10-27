import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ArchitecturalHero from '../components/ArchitecturalHero';
import VentureArchitecturalShowcase from '../components/VentureArchitecturalShowcase';
import InteractiveStudio from '../components/InteractiveStudio';
import InteractiveCorridorMap from '../components/InteractiveCorridorMap';
import ArchitecturalPillars from '../components/ArchitecturalPillars';
import BrandCalculator from '../components/BrandCalculator';
import BrandStory from '../components/BrandStory';
import { TESTIMONIALS, PROPERTIES } from '../data/properties';
import { ArrowRight, ShieldCheck, CheckCircle2, Star, Quote, ChevronLeft, ChevronRight, Sparkles, MapPin } from 'lucide-react';

export default function HomePage({
  onOpenVisitModal,
  onSelectProperty,
  filterLocation,
  setFilterLocation,
  filterCategory,
  setFilterCategory
}) {
  const navigate = useNavigate();
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const clientLogos = [
    { name: "Arrjava Farms", img: "/assets/abhista/clients/Arrjava-farms.png", link: "/projects/abhista-01" },
    { name: "Orchid Bloom", img: "/assets/abhista/clients/Orchid-Blooms.png", link: "/projects/abhista-02" },
    { name: "Oak Tree Farms", img: "/assets/abhista/clients/Oak-tree-farms.png", link: "/projects/abhista-03" },
    { name: "Florance", img: "/assets/abhista/clients/Florance.png", link: "/projects/abhista-09" },
    { name: "Abhista Homes", img: "/assets/abhista/clients/abhista-homes.png", link: "/projects/abhista-11" },
    { name: "Radha Farms", img: "/assets/abhista/projects/radha-farms.png", link: "/projects/abhista-07" },
    { name: "Mirai Farms", img: "/assets/abhista/projects/mirai-logo.png", link: "/projects/abhista-04" },
    { name: "Aurum", img: "/assets/abhista/home/aurum-logo.png", link: "/projects/abhista-08" }
  ];

  return (
    <div className="bg-[#FAF9F6]">
      
      {/* 1. Master Architectural Hero with Dynamic Corridor Spotlight */}
      <ArchitecturalHero
        onOpenVisitModal={onOpenVisitModal}
        onSelectProperty={onSelectProperty}
      />

      {/* 2. Flagship Venture Architectural Split Dossier */}
      <VentureArchitecturalShowcase
        onSelectProperty={onSelectProperty}
        onOpenVisitModal={onOpenVisitModal}
      />

      {/* 3. The 6-Tool Interactive Creative Discovery Studio */}
      <InteractiveStudio onOpenVisitModal={onOpenVisitModal} />

      {/* 4. Strategic Location Intelligence Corridor Map */}
      <InteractiveCorridorMap onOpenVisitModal={onOpenVisitModal} />

      {/* 5. The Abhista Standard - 6 Architectural Pillars */}
      <ArchitecturalPillars />

      {/* 6. Landmark Communities Portfolio Strip */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-xs font-black uppercase tracking-[0.25em] text-slate-400 mb-8">
            Our Landmark Communities Portfolio (Hyderabad & Bengaluru)
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6 items-center">
            {clientLogos.map((c, i) => (
              <Link
                key={i}
                to={c.link}
                className="p-3.5 rounded-2xl bg-slate-50 hover:bg-amber-50/50 border border-slate-200 hover:border-amber-300 flex items-center justify-center transition-all h-20 shadow-sm"
                title={c.name}
              >
                <img src={c.img} alt={c.name} className="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Authentic Customer Testimonials from index.php */}
      <section className="py-24 bg-[#090D12] text-white relative overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <span className="text-xs uppercase font-black tracking-widest text-[#FDB813]">
                Verified Buyer Feedback
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white mt-1.5">
                What Our Clients Say!!
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevTestimonial}
                className="p-3.5 rounded-full bg-slate-900 border border-slate-700 hover:bg-[#FDB813] hover:text-slate-950 text-white transition-colors"
                title="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3.5 rounded-full bg-slate-900 border border-slate-700 hover:bg-[#FDB813] hover:text-slate-950 text-white transition-colors"
                title="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-8 sm:p-14 relative backdrop-blur-md shadow-2xl">
            <Quote className="w-16 h-16 text-[#FDB813]/15 absolute top-6 right-6 pointer-events-none" />

            <div className="space-y-6 max-w-3xl">
              <div className="flex items-center gap-1.5 text-[#FDB813]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FDB813]" />
                ))}
              </div>

              <blockquote className="text-lg sm:text-2xl text-slate-100 font-medium leading-relaxed italic">
                "{TESTIMONIALS[activeTestimonial].quote}"
              </blockquote>

              <div className="pt-4 border-t border-slate-800">
                <div className="text-base font-extrabold text-white">
                  - {TESTIMONIALS[activeTestimonial].name}
                </div>
                <div className="text-xs font-bold text-[#FDB813] mt-0.5">
                  {TESTIMONIALS[activeTestimonial].venture}
                </div>
              </div>
            </div>

            {/* Testimonial counter dots */}
            <div className="flex items-center gap-2 mt-8">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`h-2 rounded-full transition-all ${
                    activeTestimonial === i ? 'w-8 bg-[#FDB813]' : 'w-2 bg-slate-700'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 8. Interactive Land Wealth & Appreciation Calculator */}
      <BrandCalculator onOpenVisitModal={onOpenVisitModal} />

      {/* 9. Founder Heritage & 18-Year Trust */}
      <BrandStory />

    </div>
  );
}
