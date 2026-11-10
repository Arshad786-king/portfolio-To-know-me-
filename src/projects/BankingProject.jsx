import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Building2,
  TrendingDown,
  TrendingUp,
  Sliders,
  ShieldAlert,
  CheckCircle2,
  Layers,
  Sparkles,
  AlertCircle,
  BarChart,
  PieChart,
  Briefcase
} from 'lucide-react';
import Button from '../components/Button';
import ProjectLinks from '../components/ProjectLinks';
import { projects } from '../data/projects';

export default function BankingProject() {
  const project = projects.find((p) => p.id === 'banking-credit-risk');

  // Interactive prototype simulator state
  const [dtiRatio, setDtiRatio] = useState(24);
  const [creditUtilization, setCreditUtilization] = useState(22);
  const [delinquencies, setDelinquencies] = useState(0);

  if (!project) return null;

  // Calculative model rule demonstration (honest prototype logic)
  const defaultProbability = Math.min(
    Math.max(
      Math.round((dtiRatio * 0.35 + creditUtilization * 0.25 + delinquencies * 15) * 10) / 10,
      3.2
    ),
    95.0
  );

  const riskTier =
    defaultProbability < 20
      ? { label: "LOW DEFAULT RISK", color: "text-emerald-700", bg: "bg-emerald-50", border: "border-emerald-300" }
      : defaultProbability < 45
      ? { label: "MODERATE RISK", color: "text-amber-700", bg: "bg-amber-50", border: "border-amber-300" }
      : { label: "HIGH RISK / COLLATERAL REQUIRED", color: "text-red-700", bg: "bg-red-50", border: "border-red-300" };

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
              <Building2 className="w-3.5 h-3.5 text-[#10B981]" />
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
              showConfigurationGuide={true}
              statusNotice="IBM Case Study Prototype. Code repository and report links can be configured in src/data/projects.js."
            />
          </div>
        </div>

        {/* Visual Preview Screenshot Mockup */}
        <div className="my-10 rounded-3xl overflow-hidden border-2 border-[#D1FAE5] shadow-xl bg-slate-50">
          <div className="bg-[#064E3B] px-6 py-3 text-white flex items-center justify-between text-xs">
            <span className="font-bold">Risk Scoring Gauge &amp; Product Cross-Sell Matrix</span>
            <span className="text-emerald-300 font-mono">IBM Case Study Demonstration</span>
          </div>
          <img
            src={project.thumbnail}
            alt="Banking Credit Risk Screenshot"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Interactive Case Study Risk Simulator */}
        <div className="my-10 bg-white rounded-3xl border-2 border-[#D1FAE5] p-6 sm:p-8 space-y-6 shadow-md">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-xs uppercase font-bold text-emerald-700 tracking-wider">
              Prototype Demonstration
            </span>
            <h3 className="text-2xl font-bold text-[#064E3B] mt-1">
              Interactive Risk Scoring &amp; Cross-Sell Simulator
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Adjust borrower underwriting metrics to observe how default risk shifts and triggers personalized banking recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Input Sliders */}
            <div className="space-y-4 bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Borrower Credit Metrics
              </h4>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-slate-700">Debt-to-Income (DTI) Ratio:</span>
                  <span className="text-[#064E3B] font-mono font-bold">{dtiRatio}%</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="65"
                  value={dtiRatio}
                  onChange={(e) => setDtiRatio(Number(e.target.value))}
                  className="w-full accent-[#10B981] cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-slate-700">Credit Revolving Utilization:</span>
                  <span className="text-[#064E3B] font-mono font-bold">{creditUtilization}%</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="95"
                  value={creditUtilization}
                  onChange={(e) => setCreditUtilization(Number(e.target.value))}
                  className="w-full accent-[#10B981] cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-slate-700">Delinquencies in Past 2 Years:</span>
                  <span className="text-[#064E3B] font-mono font-bold">{delinquencies}</span>
                </div>
                <div className="flex gap-2">
                  {[0, 1, 2, 3].map((val) => (
                    <button
                      key={val}
                      onClick={() => setDelinquencies(val)}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-colors ${
                        delinquencies === val
                          ? 'bg-[#064E3B] text-white'
                          : 'bg-white text-slate-700 border border-slate-200'
                      }`}
                    >
                      {val}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Simulated Score Outcome Card */}
            <div className={`p-6 rounded-2xl border-2 ${riskTier.border} ${riskTier.bg} space-y-4`}>
              <span className="text-xs font-bold uppercase tracking-wider block text-slate-500">
                Calculated Risk Assessment
              </span>

              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-extrabold text-[#064E3B] font-mono">
                  {defaultProbability}%
                </span>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${riskTier.bg} ${riskTier.color} border ${riskTier.border}`}>
                  {riskTier.label}
                </span>
              </div>

              <div className="pt-3 border-t border-slate-200/80 space-y-2">
                <span className="text-xs font-bold text-[#064E3B] block">
                  Dynamically Matched Banking Products:
                </span>
                {defaultProbability < 25 ? (
                  <div className="space-y-1.5 text-xs text-slate-700">
                    <p className="font-semibold text-emerald-800">✓ Platinum Wealth Cashback Credit Card (Eligible)</p>
                    <p className="font-semibold text-emerald-800">✓ Pre-Approved Low-Interest Auto Loan (Tier 1 Rate)</p>
                  </div>
                ) : defaultProbability < 50 ? (
                  <div className="space-y-1.5 text-xs text-slate-700">
                    <p className="font-semibold text-amber-800">✓ Standard Fixed-Rate Secured Loan (Collateral: 20%)</p>
                    <p className="text-slate-500">✕ Premium Unsecured Cards Restricted</p>
                  </div>
                ) : (
                  <div className="space-y-1.5 text-xs text-slate-700">
                    <p className="font-semibold text-red-800">✕ Standard Lending Ineligible</p>
                    <p className="text-slate-600">✓ Credit Builder Account / Debt Counseling Referral</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Problem Statement & Project Objective */}
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
              <h3 className="font-bold text-lg">Project Objective</h3>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              {project.projectObjective}
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="my-10 space-y-6">
          <div className="border-b border-slate-100 pb-3">
            <span className="text-xs uppercase font-bold text-emerald-700 tracking-wider">
              Prototype Capabilities
            </span>
            <h3 className="text-2xl font-bold text-[#064E3B] mt-1">
              Core Engine Features
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
            to="/projects/ai-emergency-route-planning"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#064E3B] hover:text-[#10B981] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous: AI Emergency Route Planning</span>
          </Link>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#064E3B] hover:text-[#10B981] transition-colors"
          >
            <span>All Projects Catalog</span>
            <Building2 className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

