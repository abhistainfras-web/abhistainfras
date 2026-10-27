import React, { useState } from 'react';
import { Compass, CheckCircle2, MapPin, Eye, Info, Sparkles, Filter, Phone, Calendar, ArrowRight } from 'lucide-react';

// Authentic Plot Layout Simulation for Abhista Flagship Ventures
const VENTURE_LAYOUTS = {
  arrjava: {
    id: 'arrjava',
    name: 'Arrjava Farms (Exit 3 ORR, Patancheru)',
    road: '40 Ft & 33 Ft BT Roads with Avenue Plantation',
    totalPlots: 48,
    availableCount: 14,
    baseRate: '₹14,500 / sq.yd',
    plots: [
      { id: 'P-01', number: '01', facing: 'East', size: 267, dimensions: '40\' x 60\'', status: 'available', price: '₹38.7 Lakhs', vaastu: 'Ishanya (North-East corner road), Maximum Solar Energy', type: 'Premium Corner' },
      { id: 'P-02', number: '02', facing: 'East', size: 200, dimensions: '30\' x 60\'', status: 'available', price: '₹29.0 Lakhs', vaastu: 'Pure East Facing, Auspicious Sun Entry', type: 'Standard Farmland' },
      { id: 'P-03', number: '03', facing: 'East', size: 200, dimensions: '30\' x 60\'', status: 'sold', price: '₹29.0 Lakhs', vaastu: 'Pure East Facing', type: 'Standard Farmland' },
      { id: 'P-04', number: '04', facing: 'North', size: 300, dimensions: '45\' x 60\'', status: 'available', price: '₹43.5 Lakhs', vaastu: 'North Facing (Kubera Wealth Direction)', type: 'Clubhouse View' },
      { id: 'P-05', number: '05', facing: 'North', size: 250, dimensions: '37.5\' x 60\'', status: 'reserved', price: '₹36.2 Lakhs', vaastu: 'North Facing, High Air Circulation', type: 'Standard Farmland' },
      { id: 'P-06', number: '06', facing: 'North', size: 267, dimensions: '40\' x 60\'', status: 'available', price: '₹38.7 Lakhs', vaastu: 'North-East Corner, High Prosperity', type: 'Park Facing' },
      { id: 'P-07', number: '07', facing: 'West', size: 200, dimensions: '30\' x 60\'', status: 'sold', price: '₹29.0 Lakhs', vaastu: 'West Facing with Wide Road Frontage', type: 'Standard Farmland' },
      { id: 'P-08', number: '08', facing: 'West', size: 200, dimensions: '30\' x 60\'', status: 'available', price: '₹29.0 Lakhs', vaastu: 'West Facing with Fruit Grove Buffer', type: 'Standard Farmland' },
      { id: 'P-09', number: '09', facing: 'West', size: 250, dimensions: '37.5\' x 60\'', status: 'available', price: '₹36.2 Lakhs', vaastu: 'West Facing, Peaceful Sunset Vista', type: 'Standard Farmland' },
      { id: 'P-10', number: '10', facing: 'North', size: 350, dimensions: '52.5\' x 60\'', status: 'available', price: '₹50.7 Lakhs', vaastu: 'North Facing Grand Estate Lot', type: 'Estate Parcel' },
      { id: 'P-11', number: '11', facing: 'North', size: 267, dimensions: '40\' x 60\'', status: 'sold', price: '₹38.7 Lakhs', vaastu: 'North Facing', type: 'Standard Farmland' },
      { id: 'P-12', number: '12', facing: 'East', size: 400, dimensions: '60\' x 60\'', status: 'available', price: '₹58.0 Lakhs', vaastu: 'East Facing Premium Double Frontage', type: 'Executive Lot' },
      { id: 'P-13', number: '13', facing: 'East', size: 200, dimensions: '30\' x 60\'', status: 'available', price: '₹29.0 Lakhs', vaastu: 'Pure East Facing, Direct Sunrise', type: 'Standard Farmland' },
      { id: 'P-14', number: '14', facing: 'East', size: 200, dimensions: '30\' x 60\'', status: 'sold', price: '₹29.0 Lakhs', vaastu: 'Pure East Facing', type: 'Standard Farmland' },
      { id: 'P-15', number: '15', facing: 'West', size: 267, dimensions: '40\' x 60\'', status: 'reserved', price: '₹38.7 Lakhs', vaastu: 'West Facing with Private Teak Plantation', type: 'Standard Farmland' },
      { id: 'P-16', number: '16', facing: 'West', size: 200, dimensions: '30\' x 60\'', status: 'available', price: '₹29.0 Lakhs', vaastu: 'West Facing, 100% Vaastu Graded', type: 'Standard Farmland' },
      { id: 'P-17', number: '17', facing: 'North-East', size: 450, dimensions: '60\' x 67.5\'', status: 'available', price: '₹65.2 Lakhs', vaastu: 'Prime Ishanya Corner, Supreme Vaastu Rating', type: 'Flagship Corner' },
      { id: 'P-18', number: '18', facing: 'North', size: 200, dimensions: '30\' x 60\'', status: 'available', price: '₹29.0 Lakhs', vaastu: 'North Facing, Kubera Sthanam', type: 'Standard Farmland' },
      { id: 'P-19', number: '19', facing: 'North', size: 200, dimensions: '30\' x 60\'', status: 'sold', price: '₹29.0 Lakhs', vaastu: 'North Facing', type: 'Standard Farmland' },
      { id: 'P-20', number: '20', facing: 'East', size: 300, dimensions: '45\' x 60\'', status: 'available', price: '₹43.5 Lakhs', vaastu: 'East Facing, Overlooking Gazebo Park', type: 'Park View' },
    ]
  },
  orchid: {
    id: 'orchid',
    name: 'Orchid Bloom (NH-44 Bengaluru Highway, Kothur)',
    road: 'HMDA Norms, 40\' Main Boulevard & Underground Drainage',
    totalPlots: 62,
    availableCount: 18,
    baseRate: '₹19,000 / sq.yd',
    plots: [
      { id: 'OB-01', number: '01', facing: 'East', size: 165, dimensions: '33\' x 45\'', status: 'available', price: '₹31.3 Lakhs', vaastu: 'Pure East Facing, Direct Morning Sunlight', type: 'Villa Plot' },
      { id: 'OB-02', number: '02', facing: 'East', size: 165, dimensions: '33\' x 45\'', status: 'sold', price: '₹31.3 Lakhs', vaastu: 'Pure East Facing', type: 'Villa Plot' },
      { id: 'OB-03', number: '03', facing: 'North', size: 200, dimensions: '36\' x 50\'', status: 'available', price: '₹38.0 Lakhs', vaastu: 'North Facing, Commercial Corridor Proximity', type: 'Prime Plotted' },
      { id: 'OB-04', number: '04', facing: 'North-East', size: 240, dimensions: '40\' x 54\'', status: 'available', price: '₹45.6 Lakhs', vaastu: 'Ishanya Corner, Premier Vaastu Rating', type: 'Grand Corner' },
      { id: 'OB-05', number: '05', facing: 'West', size: 150, dimensions: '30\' x 45\'', status: 'available', price: '₹28.5 Lakhs', vaastu: 'West Facing with Park Buffer', type: 'Villa Plot' },
      { id: 'OB-06', number: '06', facing: 'West', size: 150, dimensions: '30\' x 45\'', status: 'sold', price: '₹28.5 Lakhs', vaastu: 'West Facing', type: 'Villa Plot' },
      { id: 'OB-07', number: '07', facing: 'North', size: 180, dimensions: '36\' x 45\'', status: 'reserved', price: '₹34.2 Lakhs', vaastu: 'North Facing (Kubera Wealth Alignment)', type: 'Villa Plot' },
      { id: 'OB-08', number: '08', facing: 'East', size: 220, dimensions: '40\' x 49.5\'', status: 'available', price: '₹41.8 Lakhs', vaastu: 'East Facing, 40-Ft Main Road Frontage', type: 'Boulevard Plot' },
      { id: 'OB-09', number: '09', facing: 'East', size: 165, dimensions: '33\' x 45\'', status: 'available', price: '₹31.3 Lakhs', vaastu: 'Pure East Facing, Peaceful Sector', type: 'Villa Plot' },
      { id: 'OB-10', number: '10', facing: 'West', size: 200, dimensions: '36\' x 50\'', status: 'sold', price: '₹38.0 Lakhs', vaastu: 'West Facing', type: 'Prime Plotted' },
      { id: 'OB-11', number: '11', facing: 'North', size: 250, dimensions: '45\' x 50\'', status: 'available', price: '₹47.5 Lakhs', vaastu: 'North Facing Adjacent to Children Park', type: 'Park View' },
      { id: 'OB-12', number: '12', facing: 'North-East', size: 300, dimensions: '50\' x 54\'', status: 'available', price: '₹57.0 Lakhs', vaastu: 'Grand Ishanya Corner, Twin Road Access', type: 'Estate Villa Lot' },
    ]
  },
  oaktree: {
    id: 'oaktree',
    name: 'Oak Tree Farms (Shamirpet / Muduchinthalapally)',
    road: 'Nature Integrated Farmland with Drip Irrigation',
    totalPlots: 40,
    availableCount: 11,
    baseRate: '₹12,500 / sq.yd',
    plots: [
      { id: 'OT-01', number: '01', facing: 'North', size: 605, dimensions: '60\' x 90.7\'', status: 'available', price: '₹75.6 Lakhs', vaastu: 'North Facing Half-Acre Gated Estate', type: 'Resort Farmland' },
      { id: 'OT-02', number: '02', facing: 'East', size: 300, dimensions: '45\' x 60\'', status: 'available', price: '₹37.5 Lakhs', vaastu: 'East Facing with Mature Sandalwood Trees', type: 'Agro Plot' },
      { id: 'OT-03', number: '03', facing: 'East', size: 300, dimensions: '45\' x 60\'', status: 'sold', price: '₹37.5 Lakhs', vaastu: 'East Facing', type: 'Agro Plot' },
      { id: 'OT-04', number: '04', facing: 'North-East', size: 450, dimensions: '60\' x 67.5\'', status: 'available', price: '₹56.2 Lakhs', vaastu: 'Supreme Ishanya Corner, High Energy Flow', type: 'Corner Retreat' },
      { id: 'OT-05', number: '05', facing: 'West', size: 300, dimensions: '45\' x 60\'', status: 'sold', price: '₹37.5 Lakhs', vaastu: 'West Facing', type: 'Agro Plot' },
      { id: 'OT-06', number: '06', facing: 'North', size: 350, dimensions: '50\' x 63\'', status: 'available', price: '₹43.7 Lakhs', vaastu: 'North Facing, Organic Fruit Orchard View', type: 'Estate Plot' },
      { id: 'OT-07', number: '07', facing: 'East', size: 300, dimensions: '45\' x 60\'', status: 'available', price: '₹37.5 Lakhs', vaastu: 'East Facing, 33-Ft Blacktop Access', type: 'Agro Plot' },
      { id: 'OT-08', number: '08', facing: 'West', size: 300, dimensions: '45\' x 60\'', status: 'available', price: '₹37.5 Lakhs', vaastu: 'West Facing, Surrounded by Green Canopy', type: 'Agro Plot' },
    ]
  }
};

export default function InteractivePlotExplorer({ onOpenVisitModal }) {
  const [selectedVenture, setSelectedVenture] = useState('arrjava');
  const [selectedFacing, setSelectedFacing] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedPlot, setSelectedPlot] = useState(VENTURE_LAYOUTS.arrjava.plots[0]);

  const currentVenture = VENTURE_LAYOUTS[selectedVenture];

  // Filtering plots
  const filteredPlots = currentVenture.plots.filter((p) => {
    const matchesFacing = selectedFacing === 'all' || p.facing.toLowerCase().includes(selectedFacing.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || p.status === selectedStatus;
    return matchesFacing && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'available':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40 hover:border-emerald-400';
      case 'reserved':
        return 'bg-amber-500/20 text-amber-400 border-amber-500/40 hover:border-amber-400';
      case 'sold':
        return 'bg-slate-700/40 text-slate-400 border-slate-700 cursor-not-allowed opacity-50';
      default:
        return 'bg-slate-800 text-white';
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'available':
        return <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-600 border border-emerald-200">Available</span>;
      case 'reserved':
        return <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-700 border border-amber-200">Fast Selling</span>;
      case 'sold':
        return <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-500 border border-slate-200">Sold Out</span>;
      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden" id="plot-explorer">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-[#FDB813]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDB813]/10 border border-[#FDB813]/30 text-[#FDB813] text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5 text-[#FDB813]" />
            <span>Interactive Layout Studio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Choose Your Plot on the Master Plan
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Explore authentic plotted boundaries, Vaastu facings, road dimensions, and live pricing. Click any plot to view its structural blueprint dossier.
          </p>
        </div>

        {/* Venture Switcher Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
          {Object.entries(VENTURE_LAYOUTS).map(([key, v]) => (
            <button
              key={key}
              onClick={() => {
                setSelectedVenture(key);
                setSelectedPlot(VENTURE_LAYOUTS[key].plots[0]);
              }}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                selectedVenture === key
                  ? 'bg-[#FDB813] text-slate-950 shadow-lg shadow-[#FDB813]/20 scale-105'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>{v.name.split('(')[0].trim()}</span>
            </button>
          ))}
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 mb-8 backdrop-blur-md flex flex-wrap items-center justify-between gap-4">
          
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider">
              <Filter className="w-3.5 h-3.5 text-[#FDB813]" />
              <span>Facing:</span>
            </div>
            {['all', 'East', 'North', 'North-East', 'West'].map((facing) => (
              <button
                key={facing}
                onClick={() => setSelectedFacing(facing)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedFacing === facing
                    ? 'bg-slate-700 text-white border border-[#FDB813]/50'
                    : 'bg-slate-800/60 text-slate-400 hover:text-white border border-transparent'
                }`}
              >
                {facing === 'all' ? 'All Facings' : facing}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm bg-emerald-500 inline-block"></span>
              <span className="text-slate-300">Available</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm bg-amber-500 inline-block"></span>
              <span className="text-slate-300">Fast Selling</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm bg-slate-600 inline-block"></span>
              <span className="text-slate-400">Sold</span>
            </div>
          </div>

        </div>

        {/* Main Interactive Grid & Detail Dossier Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Interactive Layout Blueprint Visualizer (8 cols) */}
          <div className="lg:col-span-7 xl:col-span-8 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
            
            {/* Blueprint Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-2 mb-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#FDB813]">
                  {currentVenture.name}
                </span>
                <p className="text-xs text-slate-400 mt-0.5">
                  Road Width: <span className="text-white font-medium">{currentVenture.road}</span>
                </p>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400">Starting from: </span>
                <span className="text-sm font-extrabold text-[#FDB813]">{currentVenture.baseRate}</span>
              </div>
            </div>

            {/* Compass Rose Indicator */}
            <div className="absolute top-8 right-8 pointer-events-none opacity-20 hidden sm:block">
              <div className="w-16 h-16 border-2 border-dashed border-[#FDB813] rounded-full flex items-center justify-center font-bold text-xs text-[#FDB813]">
                N ↑
              </div>
            </div>

            {/* Simulated Layout Road Grid & Plots */}
            <div className="space-y-6">
              
              {/* Grand Entry Road Banner */}
              <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl py-2 px-3 sm:px-4 text-center text-[10px] sm:text-[11px] font-bold text-slate-300 uppercase tracking-wider sm:tracking-widest flex items-center justify-center gap-1.5">
                <span>◀ 40-Ft Main Entrance Boulevard • Security Gate ▶</span>
              </div>

              {/* Plot Parcels Interactive Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {filteredPlots.map((plot) => {
                  const isSelected = selectedPlot?.id === plot.id;
                  const isSold = plot.status === 'sold';
                  
                  return (
                    <button
                      key={plot.id}
                      disabled={isSold}
                      onClick={() => setSelectedPlot(plot)}
                      className={`p-3.5 rounded-2xl border text-left transition-all relative flex flex-col justify-between h-28 group ${
                        isSelected
                          ? 'border-[#FDB813] bg-gradient-to-br from-[#FDB813]/20 via-slate-800 to-slate-900 shadow-lg shadow-[#FDB813]/20 scale-[1.03]'
                          : getStatusColor(plot.status)
                      }`}
                    >
                      <div className="flex items-start justify-between w-full">
                        <span className="text-xs font-black text-white group-hover:text-[#FDB813]">
                          #{plot.number}
                        </span>
                        <span className="text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded bg-black/40 text-slate-300">
                          {plot.facing}
                        </span>
                      </div>

                      <div>
                        <div className="text-sm font-extrabold text-white">
                          {plot.size} <span className="text-[10px] font-normal text-slate-400">Sq.Yds</span>
                        </div>
                        <div className="text-[10px] text-slate-400 truncate">
                          {plot.dimensions}
                        </div>
                      </div>

                      {isSelected && (
                        <div className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#FDB813] text-slate-950 flex items-center justify-center text-[9px] font-black">
                          ✓
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Central Green Buffer & Amenity Spine */}
              <div className="bg-emerald-950/40 border border-emerald-800/40 rounded-xl p-3 text-center text-xs text-emerald-300 flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Central Green Park • Organic Avenue Plantation • Underground Drip Network</span>
              </div>

              {filteredPlots.length === 0 && (
                <div className="py-12 text-center text-slate-400 text-xs">
                  No plots match the selected facing. Try clearing filters above.
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
              <span>* Cadastral layout dimensions verified against master survey.</span>
              <span className="text-[#FDB813]">100% Clear Title & Spot Registration</span>
            </div>

          </div>

          {/* Selected Plot Dossier Card (4 cols) */}
          <div className="lg:col-span-5 xl:col-span-4 bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold text-[#d99600] uppercase tracking-wider block">
                  Plot Blueprint Dossier
                </span>
                <h3 className="text-2xl font-black text-slate-900 mt-0.5">
                  Plot #{selectedPlot?.number || '01'}
                </h3>
              </div>
              {getStatusBadge(selectedPlot?.status)}
            </div>

            <div className="py-6 space-y-4">
              
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                  Investment Value
                </span>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                  {selectedPlot?.price}
                </div>
                <p className="text-[11px] text-emerald-700 font-semibold mt-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Includes Land, Demarcation & Avenue Plantation
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-slate-500 block text-[10px] uppercase font-bold">Plot Area</span>
                  <span className="font-extrabold text-slate-900 text-sm mt-0.5 block">{selectedPlot?.size} Sq. Yds</span>
                  <span className="text-[10px] text-slate-400">({Math.round(selectedPlot?.size * 9)} Sq. Ft)</span>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-slate-500 block text-[10px] uppercase font-bold">Dimensions</span>
                  <span className="font-extrabold text-slate-900 text-sm mt-0.5 block">{selectedPlot?.dimensions}</span>
                  <span className="text-[10px] text-slate-400">Length x Breadth</span>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-slate-500 block text-[10px] uppercase font-bold">Orientation</span>
                  <span className="font-extrabold text-[#d99600] text-sm mt-0.5 block">{selectedPlot?.facing} Facing</span>
                  <span className="text-[10px] text-slate-400">Direct Road Access</span>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-slate-500 block text-[10px] uppercase font-bold">Plot Classification</span>
                  <span className="font-extrabold text-slate-900 text-sm mt-0.5 block">{selectedPlot?.type}</span>
                  <span className="text-[10px] text-slate-400">Clear Demarcation</span>
                </div>
              </div>

              {/* Vaastu Energy Analysis */}
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>Vaastu Energy Alignment</span>
                </div>
                <p className="text-xs text-amber-950 font-medium leading-relaxed">
                  {selectedPlot?.vaastu}
                </p>
              </div>

              {/* Included Perks */}
              <div className="space-y-2 text-xs text-slate-600 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Individual boundary stones & fenced boundary</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>24/7 Gated security & CCTV surveillance network</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>3-Tier legal audit report + spot registration</span>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-2">
              <button
                onClick={() => onOpenVisitModal && onOpenVisitModal({
                  title: `${currentVenture.name} - Plot #${selectedPlot?.number}`,
                  location: selectedPlot?.facing + ' Facing'
                })}
                className="w-full py-3.5 px-6 rounded-xl bg-[#FDB813] hover:bg-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#FDB813]/30 flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve or Enquire for Plot #{selectedPlot?.number}</span>
              </button>

              <a
                href="tel:+918185898089"
                className="w-full py-3 px-6 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#d99600]" />
                <span>Call Expert: +91 818 5898 089</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
