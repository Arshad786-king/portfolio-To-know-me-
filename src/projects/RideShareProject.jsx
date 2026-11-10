import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Car,
  AlertTriangle,
  MapPin,
  Sparkles,
  Layers,
  Cpu,
  Database,
  CheckCircle2,
  TrendingUp,
  Shield,
  Clock,
  Compass
} from 'lucide-react';
import { Github } from '../components/BrandIcons';
import RideShareShowcase from '../components/RideShareShowcase';
import Button from '../components/Button';
import ProjectLinks from '../components/ProjectLinks';
import { projects } from '../data/projects';

export default function RideShareProject() {
  const project = projects.find((p) => p.id === 'rideshare-connect');

  if (!project) return null;

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

        {/* Project Header Banner */}
        <div className="bg-white rounded-3xl border border-[#D1FAE5] p-6 sm:p-8 md:p-10 shadow-sm space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              {project.category}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
              {project.status}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#064E3B] tracking-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-4xl">
            {project.shortDescription}
          </p>

          {/* Technology Chips */}
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

          {/* Transparency / Development Status Notice */}
          <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs text-amber-950 space-y-2">
            <div className="flex items-center gap-2 font-bold text-amber-900">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Personal Project Notice &amp; AI Collaboration Disclosure</span>
            </div>
            <p className="leading-relaxed">
              {project.developmentNotice}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-slate-600 font-mono text-[11px] pt-1">
              <span>● Status: In Active Local Development</span>
              <span>● Deployment: Not yet deployed to production</span>
              <span>● Live Demo: Intentionally disabled per prompt standards</span>
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-2">
            <ProjectLinks
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              isDeployed={false}
              isPersonal={true}
            />
          </div>
        </div>

        {/* ============================================================ */}
        {/* SPECIAL FEATURE: ANIMATED PRODUCT SHOWCASE COMPONENT */}
        {/* ============================================================ */}
        <div className="my-12">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ECFDF5] text-[#064E3B] border border-[#A7F3D0] mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#10B981]" />
              Special Requirement Feature
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#064E3B]">
              RideShare Connect: Animated Product Showcase
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2">
              Interactive demonstration of the planned application views, driver management, route-overlap geometry, and authentic Python fare calculation algorithms.
            </p>
          </div>

          {/* Embedded Interactive Showcase */}
          <RideShareShowcase />
        </div>

        {/* Problem & Objective Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
          <div className="bg-white rounded-2xl border border-[#D1FAE5] p-6 space-y-3">
            <div className="flex items-center gap-2 text-[#064E3B]">
              <Compass className="w-5 h-5 text-emerald-600" />
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

        {/* Architecture & Engineering Stack */}
        <div className="my-10 bg-white rounded-3xl border border-[#D1FAE5] p-6 sm:p-8 space-y-6 shadow-xs">
          <div className="border-b border-slate-100 pb-3">
            <span className="text-xs uppercase font-bold text-emerald-700 tracking-wider">
              System Design
            </span>
            <h3 className="text-2xl font-bold text-[#064E3B] mt-1">
              Architecture &amp; Geospatial Engine
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="font-bold text-sm text-[#064E3B] block">Flask Server</span>
              <p className="text-xs text-slate-600 leading-relaxed">{project.architecture.backend}</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="font-bold text-sm text-[#064E3B] block">MySQL Relational DB</span>
              <p className="text-xs text-slate-600 leading-relaxed">{project.architecture.database}</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="font-bold text-sm text-[#064E3B] block">Google Maps APIs</span>
              <p className="text-xs text-slate-600 leading-relaxed">{project.architecture.geoServices}</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="font-bold text-sm text-[#064E3B] block">Business Rules</span>
              <p className="text-xs text-slate-600 leading-relaxed">{project.architecture.businessLogic}</p>
            </div>
          </div>
        </div>

        {/* Features List */}
        <div className="my-10 space-y-6">
          <div className="border-b border-slate-100 pb-3">
            <span className="text-xs uppercase font-bold text-emerald-700 tracking-wider">
              Capabilities
            </span>
            <h3 className="text-2xl font-bold text-[#064E3B] mt-1">
              Engineered Features
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

        {/* Development Challenges & Future Improvements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
          <div className="bg-white rounded-2xl border border-[#D1FAE5] p-6 space-y-4">
            <h4 className="font-bold text-lg text-[#064E3B]">Development Challenges</h4>
            {project.challengesAndSolutions.map((item, idx) => (
              <div key={idx} className="space-y-2 text-xs">
                <p className="font-semibold text-slate-800">● {item.challenge}</p>
                <p className="text-slate-600 pl-4 border-l-2 border-[#10B981]">{item.solution}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl border border-[#D1FAE5] p-6 space-y-4">
            <h4 className="font-bold text-lg text-[#064E3B]">Planned Future Roadmap</h4>
            <ul className="space-y-2.5 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <TrendingUp className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                <span>Live GPS location streaming with WebSockets for real-time driver ETA updates.</span>
              </li>
              <li className="flex items-start gap-2">
                <TrendingUp className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                <span>Integration with Razorpay sandbox for digital in-app escrow payments.</span>
              </li>
              <li className="flex items-start gap-2">
                <TrendingUp className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                <span>Government ID (Aadhaar / Driving License) verification workflow for rider trust.</span>
              </li>
              <li className="flex items-start gap-2">
                <TrendingUp className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                <span>Full Docker containerization and cloud deployment on AWS / Render with managed MySQL.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/projects/elms"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#064E3B] hover:text-[#10B981] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous: ELMS Project</span>
          </Link>

          <Link
            to="/projects/ai-emergency-route-planning"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#064E3B] hover:text-[#10B981] transition-colors"
          >
            <span>Next: AI Emergency Route Planning</span>
            <Compass className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
