import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO, PROPERTIES } from '../data/properties';
import { MapPin, Phone, Mail, Clock, Send, ShieldCheck, CheckCircle2, MessageSquare, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function ContactPage({ onOpenVisitModal }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    venture: 'Arrjava Farms, Patancheru',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.phone) return;
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-24 bg-slate-50 min-h-screen">
      
      {/* Breadcrumb & Header */}
      <div className="bg-white border-b border-slate-200 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-3">
            <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-800">Contact Developer Desk</span>
          </div>

          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest font-bold text-[#d99600] bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
              Get In Touch
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-3">
              Corporate Headquarters & Investor Desk
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
              Visit our Madhapur head office or connect directly with our senior land portfolio directors. Free weekend site tours with company cab transportation available.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column (5 cols): Office Details */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/abhista/abhista-logo.png"
                  alt="abhista infras"
                  className="h-12 sm:h-14 lg:h-16 w-auto object-contain"
                />
              </div>

              <div className="space-y-4 pt-2 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block text-xs font-bold mb-0.5">Corporate Headquarters</strong>
                    <span className="leading-relaxed">{COMPANY_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block text-xs font-bold mb-0.5">Direct Developer Line</strong>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="text-slate-900 hover:text-amber-600 font-bold block text-sm">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block text-xs font-bold mb-0.5">Official Email</strong>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-700 hover:text-amber-600 font-semibold">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block text-xs font-bold mb-0.5">Visiting Hours</strong>
                    <span>Monday – Saturday: 9:30 AM – 7:00 PM</span>
                    <span className="block text-emerald-700 font-semibold mt-0.5">Sunday Site Inspections Open by Appointment</span>
                  </div>
                </div>
              </div>

              {/* Official Social Media Profiles */}
              <div className="pt-3 border-t border-slate-200">
                <strong className="text-slate-900 block text-xs font-bold mb-2">Official Social Media Profiles</strong>
                <div className="grid grid-cols-3 gap-2">
                  <a
                    href={COMPANY_INFO.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-2 rounded-xl bg-slate-50 hover:bg-pink-50 hover:text-pink-600 hover:border-pink-200 text-slate-700 border border-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                    title="Follow Abhista Infras on Instagram"
                  >
                    <Instagram className="w-4 h-4 text-pink-600" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href={COMPANY_INFO.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-2 rounded-xl bg-slate-50 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 text-slate-700 border border-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                    title="Follow Abhista Infras on Facebook"
                  >
                    <Facebook className="w-4 h-4 text-blue-600" />
                    <span>Facebook</span>
                  </a>
                  <a
                    href={COMPANY_INFO.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-2 rounded-xl bg-slate-50 hover:bg-sky-50 hover:text-sky-700 hover:border-sky-200 text-slate-700 border border-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                    title="Connect with Abhista Infras on LinkedIn"
                  >
                    <Linkedin className="w-4 h-4 text-sky-700" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/917075528334?text=Hello%20Abhista%20Infra,%20I%20would%20like%20to%20connect%20with%20your%20team."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Connect on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Map Preview Card */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white p-2 shadow-sm">
              <iframe
                title="Abhista Infras Location"
                src="https://maps.google.com/maps?q=Kakatiya%20Hills,%20Madhapur,%20Hyderabad&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-56 rounded-2xl border-0"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

          </div>

          {/* Right Column (7 cols): Direct Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-1">Send a Direct Message</h2>
              <p className="text-xs text-slate-500 mb-6">
                Receive certified CAD layouts, legal encumbrance certificates, and pricing details.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Thank You!</h3>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Your request has been received. Our senior land advisor from Madhapur Head Office will reach you at <strong>{formData.phone}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', email: '', venture: 'Arrjava Farms, Patancheru', message: '' });
                    }}
                    className="mt-2 px-5 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="text-[10px] uppercase font-bold text-slate-500 block mb-1">
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        autoComplete="name"
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#FDB813] bg-slate-50"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="text-[10px] uppercase font-bold text-slate-500 block mb-1">
                        Phone Number *
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        autoComplete="tel"
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#FDB813] bg-slate-50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-email" className="text-[10px] uppercase font-bold text-slate-500 block mb-1">
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        autoComplete="email"
                        type="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#FDB813] bg-slate-50"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-venture" className="text-[10px] uppercase font-bold text-slate-500 block mb-1">
                        Interested Venture
                      </label>
                      <select
                        id="contact-venture"
                        name="venture"
                        value={formData.venture}
                        onChange={(e) => setFormData({ ...formData, venture: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#FDB813] bg-slate-50 cursor-pointer"
                      >
                        {PROPERTIES.map((p) => (
                          <option key={p.id} value={p.title}>{p.title} ({p.enclave})</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase font-bold text-slate-500 block mb-1">
                      Message / Specific Requirements
                    </label>
                    <textarea
                      rows="4"
                      placeholder="Tell us what size plot or budget you are considering..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs font-semibold text-slate-800 focus:outline-none focus:border-amber-500 bg-slate-50"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#FDB813] hover:bg-[#e6a50e] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry to Developer Desk</span>
                  </button>

                  <div className="text-center text-[11px] text-slate-400">
                    We respect your privacy. No spam. Only official brochure & link documents.
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
