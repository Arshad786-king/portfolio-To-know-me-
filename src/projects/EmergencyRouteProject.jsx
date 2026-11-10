import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Compass,
  MapPin,
  Hospital,
  Activity,
  Layers,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Cpu,
  BarChart3,
  Network
} from 'lucide-react';
import Button from '../components/Button';
import ProjectLinks from '../components/ProjectLinks';
import { projects } from '../data/projects';

export default function EmergencyRouteProject() {
  const project = projects.find((p) => p.id === 'ai-emergency-route-planning');
  const [selectedHospital, setSelectedHospital] = useState("Care Hospitals, Ramnagar");
  const [activeRouteTab, setActiveRouteTab] = useState("route1"); // 'route1' | 'route2'

  if (!project) return null;

  const sampleHospitals = [
    { name: "Care Hospitals, Ramnagar", distance: "11.4 km", time1: "17 min", time2: "22 min", overlap: "18%" },
    { name: "Apollo Hospitals, Health City", distance: "14.2 km", time1: "21 min", time2: "28 min", overlap: "12%" },
    { name: "King George Hospital (KGH)", distance: "8.6 km", time1: "13 min", time2: "19 min", overlap: "24%" },
    { name: "SevenHills Hospital, Waltair", distance: "10.1 km", time1: "15 min", time2: "20 min", overlap: "15%" },
  ];

  const currentHospitalData = sampleHospitals.find(h => h.name === selectedHospital) || sampleHospitals[0];

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#064E3B] hover:text-[#10B981] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Project Header */}
        <div className="bg-white rounded-3xl border border-[#D1FAE5] p-6 sm:p-8 md:p-10 shadow-sm space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#ECFDF5] text-[#064E3B] border border-[#A7F3D0]">
              <Compass className="w-3.5 h-3.5 text-[#10B981]" />
              {project.category}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-900">
              <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              {project.status}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#064E3B] tracking-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-4xl">
            {project.shortDescription}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-xl text-xs font-bold bg-[#ECFDF5] text-[#064E3B] border border-[#D1FAE5]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links Bar */}
          <div className="pt-4 border-t border-slate-100">
            <ProjectLinks
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              isDeployed={project.isDeployed}
            />
          </div>
        </div>

        {/* Visual Preview / Screenshot Mockup */}
        <div className="my-10 rounded-3xl overflow-hidden border-2 border-[#D1FAE5] shadow-xl bg-slate-50">
          <div className="bg-[#064E3B] px-6 py-3 text-white flex items-center justify-between text-xs">
            <span className="font-bold">Dual-Corridor OpenStreetMap Graph Architecture • Visakhapatnam</span>
            <span className="text-emerald-300 font-mono">12,133 Nodes | 31,666 Edges</span>
          </div>
          <img
            src={project.thumbnail}
            alt="Emergency Route Planning Screenshot"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Interactive Dual-Corridor Hospital Route Simulator */}
        <div className="my-10 bg-white rounded-3xl border-2 border-[#D1FAE5] p-6 sm:p-8 space-y-6 shadow-md">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs uppercase font-bold text-emerald-700 tracking-wider">
                Interactive Demonstration
              </span>
              <h3 className="text-2xl font-bold text-[#064E3B] mt-1">
                Dual Distinct Road Corridors Simulator
              </h3>
            </div>
            <div className="text-xs text-slate-500 font-medium">
              Verified OpenStreetMap Algorithm Heuristic
            </div>
          </div>

          {/* Hospital Picker */}
          <div>
            <label className="text-xs font-bold text-slate-700 block mb-2">
              Select Destination Medical Facility (from 250 verified hospitals in Visakhapatnam):
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              {sampleHospitals.map((hosp) => (
                <button
                  key={hosp.name}
                  onClick={() => setSelectedHospital(hosp.name)}
                  className={`p-3 rounded-xl text-left text-xs font-semibold transition-all cursor-pointer ${
                    selectedHospital === hosp.name
                      ? 'bg-[#064E3B] text-white shadow-sm ring-2 ring-emerald-500/30'
                      : 'bg-slate-50 hover:bg-[#ECFDF5] text-slate-700 border border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <Hospital className={`w-3.5 h-3.5 ${selectedHospital === hosp.name ? 'text-emerald-300' : 'text-[#10B981]'}`} />
                    <span className="truncate">{hosp.name}</span>
                  </div>
                  <span className="text-[11px] block mt-1 opacity-80">
                    Est. {hosp.time1} optimal
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Dual Route KPI Comparison Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Route 1: Optimal (Green) */}
            <div
              onClick={() => setActiveRouteTab("route1")}
              className={`p-6 rounded-2xl border-2 transition-all cursor-pointer ${
                activeRouteTab === "route1"
                  ? 'border-[#10B981] bg-[#F0FDF4] shadow-md'
                  : 'border-slate-200 bg-white hover:border-emerald-300'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#ECFDF5] text-emerald-800 border border-emerald-300">
                  ROUTE 1 — RECOMMENDED OPTIMAL
                </span>
                <span className="text-xs font-bold text-emerald-700">Dijkstra / A*</span>
              </div>

              <div className="text-3xl font-extrabold text-[#064E3B] font-mono">
                {currentHospitalData.time1}
                <span className="text-sm font-normal text-slate-500 ml-2">({currentHospitalData.distance})</span>
              </div>

              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Minimizes estimated road travel time via primary arterial corridors. Admissible heuristic search guarantees optimal travel duration.
              </p>

              <div className="mt-4 pt-3 border-t border-emerald-200/60 flex items-center justify-between text-xs text-emerald-900 font-semibold">
                <span>Corridor: NH16 Main Corridor</span>
                <span>Active Corridor Highlighted</span>
              </div>
            </div>

            {/* Route 2: Alternative Bypass (Purple) */}
            <div
              onClick={() => setActiveRouteTab("route2")}
              className={`p-6 rounded-2xl border-2 transition-all cursor-pointer ${
                activeRouteTab === "route2"
                  ? 'border-purple-500 bg-purple-50/50 shadow-md'
                  : 'border-slate-200 bg-white hover:border-purple-300'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-900 border border-purple-200">
                  ROUTE 2 — DISTINCT BYPASS CORRIDOR
                </span>
                <span className="text-xs font-bold text-purple-700">Edge-Penalty Heuristic</span>
              </div>

              <div className="text-3xl font-extrabold text-purple-950 font-mono">
                {currentHospitalData.time2}
                <span className="text-sm font-normal text-slate-500 ml-2">
                  (Overlap: only {currentHospitalData.overlap})
                </span>
              </div>

              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                A secondary, genuinely distinct road corridor bypassing primary highway segments. Uses progressive edge-penalties and Yen's algorithm to avoid traffic choke points.
              </p>

              <div className="mt-4 pt-3 border-t border-purple-200 flex items-center justify-between text-xs text-purple-900 font-semibold">
                <span>Corridor: Coastal Port Bypass Arterial</span>
                <span>Alternative Selected</span>
              </div>
            </div>
          </div>
        </div>

        {/* Problem Statement & Academic Objective */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
          <div className="bg-white rounded-2xl border border-[#D1FAE5] p-6 space-y-3">
            <div className="flex items-center gap-2 text-[#064E3B]">
              <AlertCircle className="w-5 h-5 text-amber-500" />
              <h3 className="font-bold text-lg">Problem Statement</h3>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              {project.problemStatement}
            </p>
          </div>

          <div className="bg-[#ECFDF5] rounded-2xl border border-[#A7F3D0] p-6 space-y-3">
            <div className="flex items-center gap-2 text-[#064E3B]">
              <Sparkles className="w-5 h-5 text-[#10B981]" />
              <h3 className="font-bold text-lg">Academic Objective</h3>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              {project.projectObjective}
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="my-10 space-y-6">
          <div className="border-b border-slate-100 pb-3">
            <span className="text-xs uppercase font-bold text-emerald-700 tracking-wider">
              Verification &amp; Capabilities
            </span>
            <h3 className="text-2xl font-bold text-[#064E3B] mt-1">
              Verified Project Features
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.features.map((feat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#D1FAE5] p-5 hover:border-[#10B981] transition-all hover:shadow-md"
              >
                <div className="flex items-center gap-2 text-[#064E3B] font-bold text-sm mb-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>{feat.title}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* My Contribution */}
        <div className="my-10 bg-white rounded-3xl border border-[#D1FAE5] p-6 sm:p-8 space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <span className="text-xs uppercase font-bold text-emerald-700 tracking-wider">
              Implementation
            </span>
            <h3 className="text-2xl font-bold text-[#064E3B] mt-1">
              My Specific Contribution
            </h3>
          </div>

          <ul className="space-y-3 pt-2">
            {project.myContribution.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                <span className="w-6 h-6 rounded-full bg-[#ECFDF5] text-[#064E3B] font-bold text-xs flex items-center justify-center shrink-0 border border-[#A7F3D0] mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/projects/rideshare-connect"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#064E3B] hover:text-[#10B981] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous: RideShare Connect</span>
          </Link>

          <Link
            to="/projects/banking-credit-risk"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#064E3B] hover:text-[#10B981] transition-colors"
          >
            <span>Next: Banking Credit Risk Engine</span>
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

