import React, { useState } from 'react';
import { X, Trees, Maximize2, MapPin, Shield, Check, Calendar, Download, FileText, ChevronLeft, ChevronRight, Layers, ArrowRight } from 'lucide-react';
import { formatCurrencyValue } from './PropertyCard';

export default function PropertyModal({ property, currency = 'INR', onClose, onOpenViewingModal }) {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'amenities' | 'financials' | 'layout'
  const [selectedPhoto, setSelectedPhoto] = useState(0);

  if (!property) return null;

  const formattedPrice = formatCurrencyValue(property.priceINR, currency);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      
      {/* Modal Dialog Container */}
      <div className="relative w-full max-w-5xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Header with Title and Close */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-200 bg-slate-50 z-20">
          <div>
            <div className="flex items-center gap-2 text-xs text-emerald-800 uppercase tracking-widest font-bold">
              <Shield className="w-3.5 h-3.5" />
              <span>{property.tag}</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-600 font-medium">{property.enclave}</span>
            </div>
            <h2 className="text-xl sm:text-2xl text-slate-900 font-bold mt-0.5">
              {property.title}
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Investment From</span>
              <div className="text-xl font-bold text-slate-900">
                {formattedPrice}
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 transition-colors"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-4 sm:p-8 space-y-6 flex-grow">
          
          {/* High-Resolution Media Viewer */}
          <div className="space-y-3">
            <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
              <img
                src={property.images[selectedPhoto]}
                alt={property.title}
                className="w-full h-full object-cover transition-all duration-500"
              />
              
              {/* Photo arrows */}
              {property.images.length > 1 && (
                <>
                  <button
                    onClick={() => setSelectedPhoto((prev) => (prev - 1 + property.images.length) % property.images.length)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setSelectedPhoto((prev) => (prev + 1) % property.images.length)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails row */}
            <div className="flex items-center gap-3 overflow-x-auto pb-1">
              {property.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedPhoto(idx)}
                  className={`relative flex-shrink-0 w-24 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                    selectedPhoto === idx ? 'border-emerald-700 scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Thumb" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Specifications Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Plot Dimensions</span>
              <div className="text-base font-bold text-slate-900 mt-0.5">{property.plotSize}</div>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Project Extent</span>
              <div className="text-base font-bold text-slate-900 mt-0.5">{property.landExtent}</div>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Approval Type</span>
              <div className="text-xs font-bold text-emerald-800 mt-1 truncate">{property.approval}</div>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">5Y Growth Est.</span>
              <div className="text-base font-bold text-amber-700 mt-0.5">{property.appreciation5Y}</div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 border-b border-slate-200 pb-3 text-xs uppercase tracking-wider">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-2 px-3 transition-colors relative font-bold ${
                activeTab === 'overview' ? 'text-emerald-800' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Project Overview
              {activeTab === 'overview' && <span className="absolute bottom-[-13px] left-0 right-0 h-[2px] bg-emerald-800" />}
            </button>

            <button
              onClick={() => setActiveTab('amenities')}
              className={`pb-2 px-3 transition-colors relative font-bold ${
                activeTab === 'amenities' ? 'text-emerald-800' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Amenities & Infrastructure
              {activeTab === 'amenities' && <span className="absolute bottom-[-13px] left-0 right-0 h-[2px] bg-emerald-800" />}
            </button>

            <button
              onClick={() => setActiveTab('financials')}
              className={`pb-2 px-3 transition-colors relative font-bold ${
                activeTab === 'financials' ? 'text-emerald-800' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Legal & ROI
              {activeTab === 'financials' && <span className="absolute bottom-[-13px] left-0 right-0 h-[2px] bg-emerald-800" />}
            </button>

            <button
              onClick={() => setActiveTab('layout')}
              className={`pb-2 px-3 transition-colors relative font-bold ${
                activeTab === 'layout' ? 'text-emerald-800' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Master Layout CAD
              {activeTab === 'layout' && <span className="absolute bottom-[-13px] left-0 right-0 h-[2px] bg-emerald-800" />}
            </button>
          </div>

          {/* Tab Content Panels */}
          {activeTab === 'overview' && (
            <div className="space-y-4 animate-fade-in">
              <p className="text-slate-700 text-sm leading-relaxed">
                {property.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100 text-xs">
                <div>
                  <span className="text-slate-400 uppercase tracking-wider text-[10px] font-semibold">Developer</span>
                  <div className="text-slate-900 font-semibold mt-0.5">Abhista Infra Developers (Est. 2006)</div>
                </div>
                <div>
                  <span className="text-slate-400 uppercase tracking-wider text-[10px] font-semibold">Location</span>
                  <div className="text-slate-900 font-semibold mt-0.5">{property.location}</div>
                </div>
                <div>
                  <span className="text-slate-400 uppercase tracking-wider text-[10px] font-semibold">Internal Roads</span>
                  <div className="text-slate-900 font-semibold mt-0.5">33-Foot & 40-Foot Wide Blacktop / BT Roads</div>
                </div>
                <div>
                  <span className="text-slate-400 uppercase tracking-wider text-[10px] font-semibold">Registration Status</span>
                  <div className="text-emerald-800 font-semibold mt-0.5">Immediate Spot Registration Available</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'amenities' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 animate-fade-in">
              {property.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-xs text-slate-800 font-medium">{feat}</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'financials' && (
            <div className="space-y-5 animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Cap Rate</span>
                  <div className="text-2xl font-bold text-emerald-800 mt-1">{property.capRate}</div>
                  <span className="text-[10px] text-slate-500">Horticulture & yield potential</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Projected Yield</span>
                  <div className="text-2xl font-bold text-slate-900 mt-1">{property.projectedYield}</div>
                  <span className="text-[10px] text-slate-500">Compounding cash flow</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">5Y Growth Record</span>
                  <div className="text-2xl font-bold text-amber-700 mt-1">{property.appreciation5Y}</div>
                  <span className="text-[10px] text-slate-500">Corridor appreciation record</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
                <Shield className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-emerald-900 uppercase tracking-wider block mb-1">
                    Clear Title & Tax Incentives
                  </span>
                  <p className="text-slate-700">
                    {property.residencyBenefit}. Section 54F Capital Gain reinvestment compatible. 100% Tax-Exempt agricultural income.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'layout' && (
            <div className="space-y-4 animate-fade-in">
              {property.layoutImage ? (
                <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 p-3">
                  <img
                    src={property.layoutImage}
                    alt={`${property.title} Master Layout`}
                    className="w-full h-auto max-h-[500px] object-contain mx-auto"
                  />
                </div>
              ) : (
                <div className="p-8 rounded-2xl border border-dashed border-slate-300 text-center bg-slate-50">
                  <Layers className="w-8 h-8 text-emerald-700 mx-auto mb-2 opacity-80" />
                  <h4 className="text-base font-bold text-slate-900">Master Layout CAD Blueprint</h4>
                  <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
                    Layout plan with plot demarcations, road widths, and open spaces is available upon request.
                  </p>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Modal Footer CTAs */}
        <div className="p-4 sm:p-6 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500 flex items-center gap-2">
            {property.brochurePdf && (
              <a
                href={property.brochurePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 text-xs font-semibold transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-emerald-700" />
                <span>Download Official Brochure (PDF)</span>
              </a>
            )}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onOpenViewingModal(property);
              }}
              className="flex-1 sm:flex-none py-3 px-6 rounded-xl bg-[#FDB813] hover:bg-[#e6a50e] text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Site Visit</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
