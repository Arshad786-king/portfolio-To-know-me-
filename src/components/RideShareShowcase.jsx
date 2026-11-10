import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Car,
  Search,
  PlusCircle,
  MapPin,
  Calendar,
  Users,
  CreditCard,
  ShieldCheck,
  ChevronRight,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  Info,
  CheckCircle2,
  Navigation,
  ArrowRight,
  Sliders,
  DollarSign,
  AlertTriangle
} from 'lucide-react';

export default function RideShareShowcase() {
  const [activeScene, setActiveScene] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  // Interactive Fare Calculator State (Using authentic app.py logic)
  const [distanceKm, setDistanceKm] = useState(18);
  const [vehicleType, setVehicleType] = useState('car');
  const [passengerCount, setPassengerCount] = useState(1);
  const [isPeakHour, setIsPeakHour] = useState(false);

  // Booking Workflow State
  const [selectedRideId, setSelectedRideId] = useState('ride-1');
  const [bookedSeats, setBookedSeats] = useState(1);
  const [bookingStep, setBookingStep] = useState(1); // 1: select, 2: summary, 3: confirmed

  // Autoplay functionality
  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setActiveScene((prev) => (prev >= 6 ? 1 : prev + 1));
      }, 7000);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  // Authentic Fare Calculation from actual ride_sharing_app app.py
  // base_fare = 30.0, car = 9.0/km, bike = 4.5/km
  const baseFare = 30.0;
  const ratePerKm = vehicleType === 'car' ? 9.0 : 4.5;
  const peakMultiplier = isPeakHour ? 1.25 : 1.0;
  
  // Passenger group discount: 2 seats = 5%, 3+ seats = 10%
  const discountPct = passengerCount === 2 ? 5 : passengerCount >= 3 ? 10 : 0;
  const rawFare = (baseFare + (distanceKm * ratePerKm)) * peakMultiplier;
  const discountAmount = rawFare * (discountPct / 100);
  const totalFare = Math.max(Math.round((rawFare - discountAmount) * 100) / 100, 30.0);
  
  // Cancellation settlement: Passenger Refund 90%, Driver Comp 10%
  const cancellationRefund = Math.round(totalFare * 0.90 * 100) / 100;
  const cancellationComp = Math.round(totalFare * 0.10 * 100) / 100;

  const scenes = [
    { id: 1, title: '1. Landing Page', subtitle: 'Hero & Discovery UI' },
    { id: 2, title: '2. Driver Dashboard', subtitle: 'Post & Manage Capacity' },
    { id: 3, title: '3. Passenger Search', subtitle: 'Corridor & Seat Matching' },
    { id: 4, title: '4. Booking Workflow', subtitle: 'Seat Reservation & Slip' },
    { id: 5, title: '5. Route Overlap Map', subtitle: 'Geospatial Preview' },
    { id: 6, title: '6. Fare Calculator', subtitle: 'Authentic Project Formula' },
  ];

  return (
    <div className="w-full bg-white rounded-3xl border-2 border-[#D1FAE5] shadow-2xl overflow-hidden my-8">
      {/* Top Header / Bar */}
      <div className="bg-[#064E3B] text-white px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-emerald-800">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-emerald-500 text-[#064E3B]">
            <Car className="w-5 h-5 font-bold" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg tracking-tight">RideShare Connect</span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-400 text-amber-950 uppercase tracking-wider">
                Personal Project • In Development
              </span>
            </div>
            <p className="text-xs text-emerald-200">
              Interactive Frontend &amp; System Flow Demonstration
            </p>
          </div>
        </div>

        {/* Scene playback controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600/60 hover:bg-emerald-600 text-white text-xs font-semibold transition-colors cursor-pointer"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{isPlaying ? 'Pause Autoplay' : 'Autoplay Tour'}</span>
          </button>
          <button
            onClick={() => {
              setActiveScene(1);
              setBookingStep(1);
            }}
            className="p-1.5 rounded-xl bg-emerald-900/60 hover:bg-emerald-700 text-emerald-200 hover:text-white transition-colors cursor-pointer"
            title="Reset Showcase"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Accuracy & Demonstration Notice Bar */}
      <div className="bg-[#ECFDF5] border-b border-[#D1FAE5] px-6 py-2.5 flex items-center justify-between text-xs text-[#064E3B]">
        <div className="flex items-center gap-2">
          <Info className="w-4 h-4 text-[#10B981] shrink-0" />
          <span>
            <strong>Visual UI Simulation:</strong> Demonstrating planned application views, route matching, and fare algorithms. Not an active production deployment.
          </span>
        </div>
        <span className="hidden md:inline font-mono text-[11px] text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
          Python Flask + MySQL Architecture
        </span>
      </div>

      {/* Scene Navigation Tabs */}
      <div className="bg-slate-50 border-b border-[#D1FAE5] px-4 md:px-6 py-3 overflow-x-auto scrollbar-none">
        <div className="flex items-center gap-2 min-w-max">
          {scenes.map((scene) => (
            <button
              key={scene.id}
              onClick={() => setActiveScene(scene.id)}
              className={`flex flex-col text-left px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeScene === scene.id
                  ? 'bg-[#064E3B] text-white shadow-sm ring-2 ring-emerald-500/30'
                  : 'bg-white hover:bg-emerald-50 text-slate-700 border border-slate-200'
              }`}
            >
              <span className={activeScene === scene.id ? 'text-emerald-300' : 'text-slate-500'}>
                {scene.title}
              </span>
              <span className="text-[11px] font-normal truncate mt-0.5">
                {scene.subtitle}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Animated Scene Showcase Viewport */}
      <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-b from-white to-slate-50 min-h-[520px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          {/* ============================================================ */}
          {/* SCENE 1: LANDING PAGE MOCKUP */}
          {/* ============================================================ */}
          {activeScene === 1 && (
            <motion.div
              key="scene-1"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-4xl bg-white rounded-2xl border border-[#D1FAE5] shadow-xl overflow-hidden"
            >
              {/* Mock Browser Header */}
              <div className="bg-slate-100 px-4 py-2 border-b border-slate-200 flex items-center gap-2 text-xs text-slate-500">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
                <span className="ml-2 font-mono text-[11px] bg-white px-3 py-0.5 rounded border border-slate-200 text-slate-600">
                  http://localhost:5000/ — RideShare Connect
                </span>
              </div>

              {/* Mock App Navbar */}
              <div className="px-6 py-3.5 bg-white border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#064E3B] text-white flex items-center justify-center font-bold text-sm">
                    RC
                  </div>
                  <span className="font-extrabold text-[#064E3B] text-base">RideShare Connect</span>
                </div>
                <div className="hidden sm:flex items-center gap-4 text-xs font-semibold text-slate-600">
                  <span className="text-[#10B981]">Find a Ride</span>
                  <span>Offer a Ride</span>
                  <span>How It Works</span>
                  <span>Login / Register</span>
                </div>
              </div>

              {/* Hero Banner inside App */}
              <div className="px-6 py-10 bg-gradient-to-br from-[#ECFDF5] via-white to-[#D1FAE5]/40 text-center relative overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white text-[#064E3B] border border-[#D1FAE5] shadow-xs mb-3"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Smarter, Greener Daily Travel</span>
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl sm:text-3xl font-extrabold text-[#064E3B] tracking-tight"
                >
                  Share Journeys. Split Fuel. Travel Together.
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-2 text-sm text-[#64748B] max-w-xl mx-auto"
                >
                  Connect with verified commuters along your daily route. Save money, reduce traffic congestion, and travel conveniently.
                </motion.p>

                {/* Simulated Quick Action Search Box */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-6 max-w-2xl mx-auto bg-white p-3 rounded-2xl border border-[#D1FAE5] shadow-lg grid grid-cols-1 sm:grid-cols-3 gap-2"
                >
                  <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 border border-slate-100 text-left">
                    <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase font-bold">Leaving from</span>
                      <span className="text-xs font-semibold text-slate-800">Visakhapatnam (RTC)</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 border border-slate-100 text-left">
                    <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase font-bold">Going to</span>
                      <span className="text-xs font-semibold text-slate-800">Madhurawada IT SEZ</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveScene(3)}
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white text-xs font-bold transition-all shadow-md cursor-pointer"
                  >
                    <Search className="w-4 h-4" />
                    <span>Search Rides</span>
                  </button>
                </motion.div>

                {/* Sub-actions */}
                <div className="mt-4 flex items-center justify-center gap-4 text-xs">
                  <button
                    onClick={() => setActiveScene(2)}
                    className="inline-flex items-center gap-1.5 font-bold text-[#064E3B] hover:text-[#10B981] transition-colors cursor-pointer"
                  >
                    <PlusCircle className="w-4 h-4 text-[#10B981]" />
                    <span>Or Offer a Ride as Driver</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* ============================================================ */}
          {/* SCENE 2: DRIVER DASHBOARD */}
          {/* ============================================================ */}
          {activeScene === 2 && (
            <motion.div
              key="scene-2"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-4xl bg-white rounded-2xl border border-[#D1FAE5] shadow-xl overflow-hidden p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-xl font-bold text-[#064E3B]">Driver Dashboard</h4>
                    <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-100 text-[#064E3B]">
                      Verified Driver
                    </span>
                  </div>
                  <p className="text-xs text-[#64748B]">Manage published rides, vehicle capacity, and pending bookings</p>
                </div>

                <button
                  onClick={() => alert("Simulation: In actual project, opens Flask /create_ride modal.")}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  <PlusCircle className="w-4 h-4" />
                  <span>Post New Ride</span>
                </button>
              </div>

              {/* Driver Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-4">
                <div className="p-3 rounded-xl bg-[#ECFDF5] border border-[#A7F3D0]">
                  <span className="text-[11px] text-[#064E3B] font-medium block">Active Rides</span>
                  <span className="text-xl font-extrabold text-[#064E3B]">2 Scheduled</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[11px] text-slate-500 font-medium block">Total Bookings</span>
                  <span className="text-xl font-extrabold text-slate-800">14 Passengers</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[11px] text-slate-500 font-medium block">Simulated Wallet</span>
                  <span className="text-xl font-extrabold text-[#10B981]">₹1,840</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[11px] text-slate-500 font-medium block">Rating</span>
                  <span className="text-xl font-extrabold text-amber-500">4.9 ★</span>
                </div>
              </div>

              {/* Ride Management Card */}
              <div className="space-y-3">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">Current Active Ride</h5>
                <div className="p-4 rounded-xl border-2 border-[#10B981] bg-[#F0FDF4] flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-[#064E3B]">Hyundai i20 (White) • AP 39 CG 8812</span>
                      <span className="text-xs bg-white text-[#064E3B] px-2 py-0.5 rounded border border-[#D1FAE5] font-semibold">
                        Today @ 8:15 AM
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-slate-600">
                      <span>🟢 MVP Colony</span>
                      <span>➔</span>
                      <span>🔴 Gajuwaka Steel Plant Gate</span>
                      <span className="font-semibold text-emerald-700 font-mono">(24.5 km)</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <span className="text-xs text-slate-500 block">Capacity</span>
                      <span className="text-sm font-bold text-[#064E3B]">3 of 4 Booked</span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-emerald-200 flex items-center justify-center font-bold text-xs text-[#064E3B]">
                      1 Left
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ============================================================ */}
          {/* SCENE 3: PASSENGER SEARCH & MATCH */}
          {/* ============================================================ */}
          {activeScene === 3 && (
            <motion.div
              key="scene-3"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-4xl bg-white rounded-2xl border border-[#D1FAE5] shadow-xl overflow-hidden p-6"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                  <h4 className="text-lg font-bold text-[#064E3B]">Matching Rides Found</h4>
                  <p className="text-xs text-[#64748B]">Showing verified routes overlapping your departure corridor</p>
                </div>
                <div className="text-xs text-[#064E3B] font-semibold bg-[#ECFDF5] px-3 py-1 rounded-full border border-[#D1FAE5]">
                  Search: RTC Complex ➔ Madhurawada (16 km)
                </div>
              </div>

              {/* Ride List */}
              <div className="space-y-3 mt-4">
                {/* Result 1 */}
                <div
                  onClick={() => {
                    setSelectedRideId('ride-1');
                    setActiveScene(4);
                  }}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    selectedRideId === 'ride-1'
                      ? 'border-[#10B981] bg-[#F0FDF4] shadow-sm'
                      : 'border-slate-200 hover:border-[#10B981] bg-white'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#064E3B] text-white flex items-center justify-center font-bold text-sm shrink-0">
                        AK
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm text-[#064E3B]">Anil Kumar</span>
                          <span className="text-[11px] text-amber-600 bg-amber-50 px-1.5 py-0.2 rounded font-semibold">
                            4.9 ★ (42 rides)
                          </span>
                          <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">
                            94% CORRIDOR OVERLAP
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5">Maruti Swift • AC • Luggage Allowed</p>
                        <div className="flex items-center gap-3 text-xs text-slate-700 mt-2 font-medium">
                          <span>Departure: <strong>08:45 AM</strong></span>
                          <span>•</span>
                          <span>Pickup: <strong>Gurudwara Junction</strong></span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right sm:border-l sm:border-slate-200 sm:pl-4 flex sm:flex-col items-center sm:items-end justify-between">
                      <div>
                        <span className="text-xl font-extrabold text-[#064E3B]">₹135</span>
                        <span className="text-xs text-slate-500 block">per seat</span>
                      </div>
                      <span className="text-xs font-semibold text-emerald-700 mt-1">2 seats open</span>
                    </div>
                  </div>
                </div>

                {/* Result 2 */}
                <div
                  onClick={() => {
                    setSelectedRideId('ride-2');
                    setActiveScene(4);
                  }}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    selectedRideId === 'ride-2'
                      ? 'border-[#10B981] bg-[#F0FDF4] shadow-sm'
                      : 'border-slate-200 hover:border-[#10B981] bg-white'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-700 text-white flex items-center justify-center font-bold text-sm shrink-0">
                        SR
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm text-[#064E3B]">Suresh Rao</span>
                          <span className="text-[11px] text-amber-600 bg-amber-50 px-1.5 py-0.2 rounded font-semibold">
                            4.8 ★ (18 rides)
                          </span>
                          <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">
                            88% OVERLAP
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5">Honda City • Premium Sedans</p>
                        <div className="flex items-center gap-3 text-xs text-slate-700 mt-2 font-medium">
                          <span>Departure: <strong>09:10 AM</strong></span>
                          <span>•</span>
                          <span>Pickup: <strong>Satyam Junction</strong></span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right sm:border-l sm:border-slate-200 sm:pl-4 flex sm:flex-col items-center sm:items-end justify-between">
                      <div>
                        <span className="text-xl font-extrabold text-[#064E3B]">₹150</span>
                        <span className="text-xs text-slate-500 block">per seat</span>
                      </div>
                      <span className="text-xs font-semibold text-emerald-700 mt-1">3 seats open</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-center">
                <button
                  onClick={() => setActiveScene(4)}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#10B981] hover:text-[#059669] transition-colors"
                >
                  <span>Select a ride above to test Booking Workflow</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          )}

          {/* ============================================================ */}
          {/* SCENE 4: BOOKING WORKFLOW */}
          {/* ============================================================ */}
          {activeScene === 4 && (
            <motion.div
              key="scene-4"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-4xl bg-white rounded-2xl border border-[#D1FAE5] shadow-xl overflow-hidden p-6"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                  <h4 className="text-lg font-bold text-[#064E3B]">Seat Booking Simulation</h4>
                  <p className="text-xs text-[#64748B]">Step-by-step reservation demonstration with calculated breakdown</p>
                </div>
                <div className="flex items-center gap-1">
                  <span className={`w-2.5 h-2.5 rounded-full ${bookingStep >= 1 ? 'bg-[#10B981]' : 'bg-slate-200'}`} />
                  <span className={`w-6 h-0.5 ${bookingStep >= 2 ? 'bg-[#10B981]' : 'bg-slate-200'}`} />
                  <span className={`w-2.5 h-2.5 rounded-full ${bookingStep >= 2 ? 'bg-[#10B981]' : 'bg-slate-200'}`} />
                  <span className={`w-6 h-0.5 ${bookingStep >= 3 ? 'bg-[#10B981]' : 'bg-slate-200'}`} />
                  <span className={`w-2.5 h-2.5 rounded-full ${bookingStep >= 3 ? 'bg-[#10B981]' : 'bg-slate-200'}`} />
                </div>
              </div>

              {bookingStep === 1 && (
                <div className="mt-4 space-y-4">
                  <div className="p-4 rounded-xl bg-[#ECFDF5] border border-[#A7F3D0]">
                    <span className="text-xs font-bold text-[#064E3B] uppercase">Selected Ride</span>
                    <h5 className="font-bold text-base text-[#064E3B] mt-1">Anil Kumar (Maruti Swift) • ₹135 / seat</h5>
                    <p className="text-xs text-slate-600">Gurudwara Junction ➔ Madhurawada IT SEZ • Today 8:45 AM</p>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Select Number of Seats to Reserve:
                    </label>
                    <div className="flex items-center gap-3">
                      {[1, 2].map((num) => (
                        <button
                          key={num}
                          onClick={() => setBookedSeats(num)}
                          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                            bookedSeats === num
                              ? 'bg-[#064E3B] text-white shadow-sm'
                              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                          }`}
                        >
                          {num} {num === 1 ? 'Seat' : 'Seats'}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      onClick={() => setBookingStep(2)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white text-xs font-bold transition-colors cursor-pointer"
                    >
                      <span>Proceed to Summary</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {bookingStep === 2 && (
                <div className="mt-4 space-y-4">
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2 text-xs">
                    <div className="flex justify-between py-1 border-b border-slate-200 text-slate-600">
                      <span>Base Fare ({bookedSeats} seat × ₹135)</span>
                      <span className="font-mono font-semibold">₹{bookedSeats * 135}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200 text-slate-600">
                      <span>Platform Convenience Fee</span>
                      <span className="font-mono font-semibold">₹0.00 (Carpool Model)</span>
                    </div>
                    <div className="flex justify-between py-1.5 text-sm font-extrabold text-[#064E3B]">
                      <span>Total Booking Amount</span>
                      <span className="font-mono">₹{bookedSeats * 135}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      onClick={() => setBookingStep(1)}
                      className="text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setBookingStep(3)}
                      className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white text-xs font-bold transition-colors cursor-pointer"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Confirm Simulated Booking</span>
                    </button>
                  </div>
                </div>
              )}

              {bookingStep === 3 && (
                <div className="mt-4 py-6 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#ECFDF5] text-[#10B981] mx-auto flex items-center justify-center border border-[#A7F3D0]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h5 className="text-lg font-extrabold text-[#064E3B]">Simulated Reservation Confirmed!</h5>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Booking Reference <code className="font-mono text-emerald-800 bg-emerald-50 px-1 py-0.5 rounded">#RC-2026-9041</code> has been logged in prototype state. Driver Anil Kumar notified.
                  </p>
                  <div className="pt-2 flex justify-center gap-3">
                    <button
                      onClick={() => setBookingStep(1)}
                      className="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-[#064E3B] bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
                    >
                      Test Again
                    </button>
                    <button
                      onClick={() => setActiveScene(5)}
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-[#064E3B] text-white text-xs font-semibold hover:bg-emerald-900 transition-colors cursor-pointer"
                    >
                      <span>Next: Route Overlap Map</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* ============================================================ */}
          {/* SCENE 5: GOOGLE MAPS AND ROUTE MATCHING */}
          {/* ============================================================ */}
          {activeScene === 5 && (
            <motion.div
              key="scene-5"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-4xl bg-white rounded-2xl border border-[#D1FAE5] shadow-xl overflow-hidden p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
                <div>
                  <h4 className="text-lg font-bold text-[#064E3B]">Geospatial Route Overlap Engine</h4>
                  <p className="text-xs text-[#64748B]">
                    Google Maps API integration preview: comparing driver route path against passenger pickup corridor
                  </p>
                </div>
                <span className="text-[11px] font-bold bg-[#ECFDF5] text-emerald-800 px-2.5 py-1 rounded-full border border-emerald-200">
                  92% Verified Overlap
                </span>
              </div>

              {/* Map Preview Graphic */}
              <div className="relative aspect-[16/9] w-full rounded-xl bg-slate-100 border border-slate-200 overflow-hidden my-4">
                <svg className="w-full h-full" viewBox="0 0 600 320" fill="none">
                  {/* Background Grid */}
                  <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#E2E8F0" strokeWidth="1" />
                  </pattern>
                  <rect width="600" height="320" fill="url(#grid)" />

                  {/* Roads */}
                  <path d="M0 160 H600" stroke="#CBD5E1" strokeWidth="6" />
                  <path d="M220 0 V320" stroke="#CBD5E1" strokeWidth="4" />
                  <path d="M420 0 V320" stroke="#CBD5E1" strokeWidth="4" />

                  {/* Driver Route (Green thick corridor) */}
                  <path
                    d="M 60 220 Q 200 200 260 160 T 540 80"
                    stroke="#10B981"
                    strokeWidth="8"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.85"
                  />

                  {/* Passenger Segment (Dashed dark green line) */}
                  <path
                    d="M 160 190 Q 220 170 260 160 T 460 100"
                    stroke="#064E3B"
                    strokeWidth="4"
                    strokeDasharray="6 4"
                    strokeLinecap="round"
                    fill="none"
                  />

                  {/* Driver Origin */}
                  <circle cx="60" cy="220" r="8" fill="#10B981" stroke="#FFFFFF" strokeWidth="2" />
                  <text x="50" y="245" fill="#064E3B" fontSize="10" fontWeight="bold">Driver Start</text>

                  {/* Passenger Pickup */}
                  <circle cx="160" cy="190" r="7" fill="#064E3B" stroke="#FFFFFF" strokeWidth="2" />
                  <text x="140" y="175" fill="#064E3B" fontSize="10" fontWeight="bold">Pickup (Pin)</text>

                  {/* Passenger Drop */}
                  <circle cx="460" cy="100" r="7" fill="#064E3B" stroke="#FFFFFF" strokeWidth="2" />
                  <text x="440" y="85" fill="#064E3B" fontSize="10" fontWeight="bold">Drop (Pin)</text>

                  {/* Driver Destination */}
                  <circle cx="540" cy="80" r="8" fill="#DC2626" stroke="#FFFFFF" strokeWidth="2" />
                  <text x="510" y="65" fill="#DC2626" fontSize="10" fontWeight="bold">Driver End</text>
                </svg>

                {/* Floating Map Legend Overlay */}
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs p-3 rounded-xl border border-[#D1FAE5] shadow-md text-xs space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-1.5 bg-[#10B981] rounded-full inline-block" />
                    <span className="text-slate-700">Driver Entire Route (32 km)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-1 bg-[#064E3B] border-b border-dashed inline-block" />
                    <span className="text-slate-700">Passenger Trip Segment (18 km)</span>
                  </div>
                  <div className="text-[10px] text-emerald-800 font-mono pt-1">
                    Tolerance Radius: 5.0 km • Haversine Corridors
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-amber-50 text-amber-900 border border-amber-200 text-xs flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <p>
                  <strong>API Notice:</strong> Full Google Maps Directions and Distance Matrix rendering occurs in local development when verified Google API credentials are provided. This interactive preview reflects the tested route geometry.
                </p>
              </div>
            </motion.div>
          )}

          {/* ============================================================ */}
          {/* SCENE 6: FARE CALCULATION ENGINE */}
          {/* ============================================================ */}
          {activeScene === 6 && (
            <motion.div
              key="scene-6"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-4xl bg-white rounded-2xl border border-[#D1FAE5] shadow-xl overflow-hidden p-6"
            >
              <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-bold text-[#064E3B]">Authentic Dynamic Fare Calculation</h4>
                  <p className="text-xs text-[#64748B]">
                    Live formula directly from <code className="font-mono bg-emerald-50 text-emerald-800 px-1 py-0.5 rounded">app.py:calculate_fare()</code>
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#064E3B] bg-[#ECFDF5] px-3 py-1 rounded-full border border-[#D1FAE5]">
                  <DollarSign className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Fair Transit Pricing</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
                {/* Interactive Sliders & Inputs */}
                <div className="space-y-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Adjust Ride Parameters
                  </h5>

                  {/* Distance Slider */}
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-slate-700">Trip Distance:</span>
                      <span className="text-[#064E3B] font-mono font-bold">{distanceKm} km</span>
                    </div>
                    <input
                      type="range"
                      min="2"
                      max="60"
                      value={distanceKm}
                      onChange={(e) => setDistanceKm(Number(e.target.value))}
                      className="w-full accent-[#10B981] cursor-pointer"
                    />
                  </div>

                  {/* Vehicle Type */}
                  <div>
                    <span className="text-xs font-semibold text-slate-700 block mb-1">Vehicle Type:</span>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setVehicleType('car')}
                        className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          vehicleType === 'car'
                            ? 'bg-[#064E3B] text-white'
                            : 'bg-white text-slate-700 border border-slate-200'
                        }`}
                      >
                        Car (₹9.0/km)
                      </button>
                      <button
                        onClick={() => setVehicleType('bike')}
                        className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          vehicleType === 'bike'
                            ? 'bg-[#064E3B] text-white'
                            : 'bg-white text-slate-700 border border-slate-200'
                        }`}
                      >
                        Bike (₹4.5/km)
                      </button>
                    </div>
                  </div>

                  {/* Passenger Group Count */}
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-slate-700">Passenger Group:</span>
                      <span className="text-[#064E3B] font-mono font-bold">
                        {passengerCount} {passengerCount === 1 ? 'Person' : 'People'}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4].map((count) => (
                        <button
                          key={count}
                          onClick={() => setPassengerCount(count)}
                          className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                            passengerCount === count
                              ? 'bg-[#10B981] text-white'
                              : 'bg-white text-slate-700 border border-slate-200'
                          }`}
                        >
                          {count}
                        </button>
                      ))}
                    </div>
                    {discountPct > 0 && (
                      <span className="text-[11px] text-emerald-700 font-semibold block mt-1">
                        ✓ {discountPct}% Group passenger discount applied!
                      </span>
                    )}
                  </div>

                  {/* Peak Multiplier Toggle */}
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs font-semibold text-slate-700">Peak Hour Surge (1.25x):</span>
                    <button
                      onClick={() => setIsPeakHour(!isPeakHour)}
                      className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                        isPeakHour
                          ? 'bg-amber-500 text-white'
                          : 'bg-slate-200 text-slate-600'
                      }`}
                    >
                      {isPeakHour ? 'Active' : 'Off-Peak'}
                    </button>
                  </div>
                </div>

                {/* Real-time Fare Breakdown Card */}
                <div className="flex flex-col justify-between p-5 rounded-xl bg-[#ECFDF5] border border-[#A7F3D0]">
                  <div>
                    <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
                      Computed Fare Breakdown
                    </span>
                    <div className="mt-3 space-y-2 text-xs text-slate-700">
                      <div className="flex justify-between">
                        <span>Base Fare:</span>
                        <span className="font-mono font-semibold">₹{baseFare.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Distance Charge ({distanceKm} km × ₹{ratePerKm}):</span>
                        <span className="font-mono font-semibold">₹{(distanceKm * ratePerKm).toFixed(2)}</span>
                      </div>
                      {isPeakHour && (
                        <div className="flex justify-between text-amber-700">
                          <span>Peak Surge Multiplier:</span>
                          <span className="font-mono font-semibold">1.25x</span>
                        </div>
                      )}
                      {discountPct > 0 && (
                        <div className="flex justify-between text-emerald-700 font-semibold">
                          <span>Group Discount ({discountPct}%):</span>
                          <span className="font-mono">-₹{discountAmount.toFixed(2)}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#A7F3D0] mt-4">
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm font-bold text-[#064E3B]">Total Estimated Fare:</span>
                      <span className="text-3xl font-extrabold text-[#064E3B] font-mono">
                        ₹{totalFare.toFixed(2)}
                      </span>
                    </div>

                    {/* Cancellation Settlement Formula */}
                    <div className="mt-3 p-2.5 rounded-lg bg-white/80 border border-[#A7F3D0] text-[11px] text-slate-600 space-y-1">
                      <span className="font-bold text-[#064E3B] block">Cancellation Settlement Policy:</span>
                      <div className="flex justify-between">
                        <span>Passenger Refund (90%):</span>
                        <span className="font-mono font-semibold">₹{cancellationRefund.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Driver Compensation (10%):</span>
                        <span className="font-mono font-semibold">₹{cancellationComp.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Info & Tech Summary */}
      <div className="px-6 py-4 bg-slate-50 border-t border-[#D1FAE5] flex flex-wrap items-center justify-between gap-3 text-xs text-[#64748B]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#10B981]" />
          <span>Built with Python 3.12, Flask, MySQL, JavaScript &amp; Google Maps API</span>
        </div>
        <div className="flex items-center gap-2">
          <span>Sole Developer: <strong>Shaik Mahmmad Arshad</strong></span>
        </div>
      </div>
    </div>
  );
}

