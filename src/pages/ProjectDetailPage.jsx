import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PROPERTIES } from '../data/properties';
import { formatCurrencyValue } from '../components/PropertyCard';
import { 
  MapPin, Download, Calendar, ShieldCheck, CheckCircle2, ChevronLeft, 
  ChevronRight, ArrowLeft, ArrowRight, Layers, Trees, FileText, Phone, MessageSquare 
} from 'lucide-react';

export default function ProjectDetailPage({ onOpenVisitModal }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedPhoto, setSelectedPhoto] = useState(0);

  const property = PROPERTIES.find((p) => p.id === id) || PROPERTIES[0];

  const handleNextProject = () => {
    const currentIndex = PROPERTIES.findIndex((p) => p.id === property.id);
    const nextIndex = (currentIndex + 1) % PROPERTIES.length;
    navigate(`/projects/${PROPERTIES[nextIndex].id}`);
    window.scrollTo(0, 0);
  };

  const handlePrevProject = () => {
    const currentIndex = PROPERTIES.findIndex((p) => p.id === property.id);
    const prevIndex = (currentIndex - 1 + PROPERTIES.length) % PROPERTIES.length;
    navigate(`/projects/${PROPERTIES[prevIndex].id}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="pt-24 pb-24 bg-white min-h-screen">
      
      {/* Top Breadcrumb & Navigation Bar */}
      <div className="bg-slate-50 border-b border-slate-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/projects" className="hover:text-slate-900 transition-colors">Ventures</Link>
            <span>/</span>
            <span className="text-slate-900 font-bold truncate">{property.title}</span>
          </div>

          <div className="flex items-center gap-3 text-xs font-bold">
            <button
              onClick={handlePrevProject}
              className="flex items-center gap-1 text-slate-600 hover:text-slate-900 px-2.5 py-1 rounded-lg hover:bg-slate-200"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Previous</span>
            </button>
            <span className="text-slate-300">|</span>
            <button
              onClick={handleNextProject}
              className="flex items-center gap-1 text-slate-600 hover:text-slate-900 px-2.5 py-1 rounded-lg hover:bg-slate-200"
            >
              <span className="hidden sm:inline">Next Venture</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Project Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-50 text-amber-900 border border-amber-200">
                {property.tag}
              </span>
              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
                {property.status === 'ongoing' ? 'Active Ongoing' : 'Delivered Benchmark'}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              {property.title}
            </h1>

            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 mt-2">
              <MapPin className="w-4 h-4 text-[#d99600]" />
              <span className="font-semibold">{property.location}</span>
              <span className="text-slate-300">•</span>
              <span>{property.enclave}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left sm:text-right">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Investment Pricing</span>
              <div className="text-2xl font-extrabold text-slate-900">
                {formatCurrencyValue(property.priceINR, 'INR')}
              </div>
              <span className="text-[10px] text-slate-500 font-medium block">Starting from {property.plotSize}</span>
            </div>

            <button
              onClick={() => onOpenVisitModal(property)}
              className="px-6 py-4 rounded-xl bg-[#FDB813] hover:bg-[#e6a50e] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md whitespace-nowrap"
            >
              Schedule Free Site Visit
            </button>
          </div>
        </div>
      </div>

      {/* Media Gallery Viewer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="rounded-3xl overflow-hidden bg-slate-900 relative aspect-[16/9] sm:aspect-[21/9] shadow-2xl border border-slate-200">
          <img
            src={property.images[selectedPhoto]}
            alt={property.title}
            className="w-full h-full object-cover transition-all duration-500"
          />

          {property.images.length > 1 && (
            <>
              <button
                onClick={() => setSelectedPhoto((prev) => (prev - 1 + property.images.length) % property.images.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-[#FDB813] hover:text-slate-950 text-white backdrop-blur-sm transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setSelectedPhoto((prev) => (prev + 1) % property.images.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-[#FDB813] hover:text-slate-950 text-white backdrop-blur-sm transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-lg bg-black/70 text-white text-xs backdrop-blur-sm">
            Photo {selectedPhoto + 1} of {property.images.length}
          </div>
        </div>

        {/* Thumbnails Row */}
        <div className="flex items-center gap-3 overflow-x-auto pt-4 pb-2">
          {property.images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedPhoto(idx)}
              className={`relative flex-shrink-0 w-28 h-16 sm:h-20 rounded-xl overflow-hidden border-2 transition-all ${
                selectedPhoto === idx ? 'border-[#FDB813] scale-105 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img src={img} alt="Thumb" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Two-Column Project Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column (8 cols): Description, Layout CAD, Amenities, Legal */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* 1. Overview */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">Project Overview</h2>
              <p className="text-slate-700 text-base leading-relaxed">
                {property.description}
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200 mt-6 text-center">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Plot Dimensions</span>
                  <div className="text-base font-extrabold text-slate-900 mt-0.5">{property.plotSize}</div>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Total Land Extent</span>
                  <div className="text-base font-extrabold text-slate-900 mt-0.5">{property.landExtent}</div>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Legal Approval</span>
                  <div className="text-xs font-extrabold text-emerald-800 mt-1 truncate">{property.approval}</div>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">5Y Growth Est.</span>
                  <div className="text-base font-extrabold text-[#d99600] mt-0.5">{property.appreciation5Y}</div>
                </div>
              </div>
            </section>

            {/* 2. Master Layout CAD Plan */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Master Layout CAD Blueprint</h2>
                  <p className="text-xs text-slate-500 mt-0.5">Demarcated plots, road widths, open parks, and Vaastu alignments.</p>
                </div>
                {property.brochurePdf && (
                  <a
                    href={property.brochurePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-300 hover:border-amber-500 text-xs font-bold text-slate-700 hover:text-amber-800 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download CAD PDF</span>
                  </a>
                )}
              </div>

              {property.layoutImage ? (
                <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 p-4 shadow-sm">
                  <img
                    src={property.layoutImage}
                    alt={`${property.title} Layout`}
                    className="w-full h-auto max-h-[600px] object-contain mx-auto"
                  />
                </div>
              ) : (
                <div className="p-8 sm:p-12 rounded-2xl border border-dashed border-slate-300 text-center bg-slate-50">
                  <Layers className="w-10 h-10 text-slate-400 mx-auto mb-2" />
                  <h4 className="text-base font-bold text-slate-800">Demarcated CAD Blueprint Available</h4>
                  <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
                    Layout plan with plot boundaries, water connectivity, road networks, and sub-registrar survey sketch is available upon request.
                  </p>
                  <button
                    onClick={() => onOpenVisitModal && onOpenVisitModal(property)}
                    className="mt-4 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-[#FDB813] hover:text-slate-950 text-white font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center gap-1.5 shadow-sm"
                  >
                    <span>Request CAD Demarcation Blueprint</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Interactive Layout Studio Callout */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 text-white border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#FDB813] block">
                    Interactive Plot Blueprint & Vaastu Tool
                  </span>
                  <div className="text-sm font-extrabold text-white mt-0.5">
                    Explore individual plot numbers, Ishanya/East facings, & dimensions
                  </div>
                </div>
                <Link
                  to="/interactive-studio"
                  className="px-5 py-2.5 rounded-xl bg-[#FDB813] hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all whitespace-nowrap text-center shadow-md shadow-[#FDB813]/20"
                >
                  Launch Plot Explorer &rarr;
                </Link>
              </div>
            </section>

            {/* 3. Amenities & Infrastructure */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">Amenities & Infrastructure</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {property.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-800 font-semibold">{feat}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. Financials & Title Due Diligence */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">Legal Due Diligence & Tax Perks</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] uppercase font-bold text-slate-400">Cap Rate</span>
                  <div className="text-2xl font-extrabold text-emerald-800 mt-1">{property.capRate}</div>
                  <span className="text-[10px] text-slate-500">Agricultural lease yield</span>
                </div>
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] uppercase font-bold text-slate-400">Projected Yield</span>
                  <div className="text-2xl font-extrabold text-slate-900 mt-1">{property.projectedYield}</div>
                  <span className="text-[10px] text-slate-500">Compounding cash flow</span>
                </div>
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] uppercase font-bold text-slate-400">5Y Growth Record</span>
                  <div className="text-2xl font-extrabold text-[#d99600] mt-1">{property.appreciation5Y}</div>
                  <span className="text-[10px] text-slate-500">Corridor benchmark</span>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed text-slate-800">
                  <strong className="block text-slate-900 mb-1">Clear 30-Year Title Search & Immediate Spot Registration</strong>
                  {property.residencyBenefit}. Eligible for Section 54F Capital Gain tax exemptions and 100% tax-free agricultural income under Section 10(1) of the Income Tax Act.
                </div>
              </div>
            </section>

          </div>

          {/* Right Column (4 cols): Sticky Action Desk */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              
              {/* Card 1: Direct Site Visit Scheduler */}
              <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-5">
                <div className="flex items-center gap-3">
                  <img src="/assets/abhista/abhista-icon.png" alt="Abhista Infras" className="w-10 h-10 object-contain rounded-full bg-white p-1" />
                  <div>
                    <h3 className="text-base font-bold text-white">Inspect {property.title}</h3>
                    <p className="text-xs text-amber-400 font-semibold">Free Company AC Cab Pickup</p>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Join our weekend site tour. Company vehicle pickup and return arranged from anywhere in Hyderabad with zero obligation.
                </p>

                <div className="space-y-3 pt-2">
                  <button
                    onClick={() => onOpenVisitModal(property)}
                    className="w-full py-3.5 rounded-xl bg-[#FDB813] hover:bg-[#e6a50e] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Free Site Visit</span>
                  </button>

                  {property.brochurePdf && (
                    <a
                      href={property.brochurePdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 rounded-xl border border-slate-700 hover:bg-slate-800 text-white font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                    >
                      <Download className="w-4 h-4 text-[#FDB813]" />
                      <span>Download PDF Brochure</span>
                    </a>
                  )}

                  <a
                    href={`https://wa.me/918185898089?text=Hello%20Abhista,%20I%20am%20interested%20in%20${encodeURIComponent(property.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl border border-emerald-600/40 hover:bg-emerald-950 text-emerald-400 font-semibold text-xs tracking-wide flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>

                <div className="border-t border-slate-800 pt-4 text-[11px] text-slate-400 text-center">
                  Direct Coordinator: <a href="tel:+918185898089" className="text-white font-bold hover:underline">+91 818 5898 089</a>
                </div>
              </div>

              {/* Card 2: Developer Trust Summary */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3 text-xs text-slate-700">
                <h4 className="font-bold text-slate-900 text-sm">Abhista Guarantee</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>30-Year Link Document Scrutiny</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>100% Vedic Vaastu Compliant</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>Bank Loan Approved Project</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>Company-Owned Machinery (No Delays)</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
