import React, { useState } from 'react';
import { X, Calendar, ShieldCheck, CheckCircle2, Car, MapPin, Phone, User, Clock, ArrowRight } from 'lucide-react';
import { COMPANY_INFO, PROPERTIES } from '../data/properties';

export default function ViewingModal({
  isOpen = true,
  onClose,
  selectedProperty = null,
  targetProperty = null
}) {
  const property = selectedProperty || targetProperty;
  const [selectedVenture, setSelectedVenture] = useState(property?.title || 'Arrjava Farms, Patancheru');
  const [date, setDate] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [pickupOption, setPickupOption] = useState('company-cab'); // 'company-cab' | 'self-drive'
  const [pickupArea, setPickupArea] = useState('Madhapur / Hitec City');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (isOpen === false) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phone) return;
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden my-auto p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
          title="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="text-center mb-6">
              <img
                src="/assets/abhista/abhista-logo.png"
                alt="abhista infras"
                className="h-9 w-auto mx-auto mb-3 object-contain"
              />
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-200 bg-amber-50 text-amber-900 text-[10px] uppercase tracking-widest font-bold mb-2">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
                Complimentary Site Visit
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Book a Free Site Inspection
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Company AC cab pickup and drop included from any location in Hyderabad.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Venture Selection */}
              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  Select Venture
                </label>
                <select
                  value={selectedVenture}
                  onChange={(e) => setSelectedVenture(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-xs font-semibold focus:outline-none focus:border-emerald-600 bg-slate-50"
                >
                  {PROPERTIES.map((p) => (
                    <option key={p.id} value={p.title}>
                      {p.title} ({p.enclave})
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Mode */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-emerald-600 bg-slate-50"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Transport Preference
                  </label>
                  <select
                    value={pickupOption}
                    onChange={(e) => setPickupOption(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-slate-800 text-xs font-semibold focus:outline-none focus:border-emerald-600 bg-slate-50"
                  >
                    <option value="company-cab">Free AC Cab Pickup</option>
                    <option value="self-drive">Self-Drive / Direct Meet</option>
                  </select>
                </div>
              </div>

              {/* Pickup Area */}
              {pickupOption === 'company-cab' && (
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Pickup Location in Hyderabad
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Madhapur, Gachibowli, Kukatpally, Banjara Hills"
                    value={pickupArea}
                    onChange={(e) => setPickupArea(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-emerald-600 bg-slate-50"
                  />
                </div>
              )}

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-emerald-600 bg-slate-50"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-emerald-600 bg-slate-50"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#FDB813] hover:bg-[#e6a50e] text-slate-950 font-bold text-xs tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Confirm Free Site Visit</span>
                </button>
              </div>

              <div className="text-center text-[10px] text-slate-400">
                Direct coordinator assistance from Madhapur Head Office: <a href="tel:+918185898089" className="text-emerald-700 font-semibold">+91 818 5898 089</a>
              </div>

            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900">
              Site Visit Scheduled!
            </h3>

            <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
              Thank you, <strong>{fullName || 'Sir/Madam'}</strong>. Our site coordinator will call you at <strong>{phone}</strong> to confirm your vehicle pickup for <strong>{selectedVenture}</strong>.
            </p>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 text-left space-y-1">
              <div><strong>Venture:</strong> {selectedVenture}</div>
              <div><strong>Date:</strong> {date || 'Upcoming Weekend'}</div>
              <div><strong>Pickup:</strong> {pickupOption === 'company-cab' ? pickupArea : 'Self-Drive to Site'}</div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/918185898089?text=Hello%20Abhista,%20I%20have%20scheduled%20a%20site%20visit%20for%20${encodeURIComponent(selectedVenture)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-xs tracking-wider uppercase transition-colors text-center"
              >
                Send WhatsApp Confirmation
              </a>

              <button
                onClick={handleReset}
                className="flex-1 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 font-semibold text-xs tracking-wider uppercase transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
