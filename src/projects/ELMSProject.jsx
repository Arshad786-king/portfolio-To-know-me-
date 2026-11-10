import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ExternalLink,
  ShieldCheck,
  Server,
  Database,
  Users,
  CheckCircle2,
  Calendar,
  Layers,
  Sparkles,
  AlertCircle,
  FileCode,
  Lock,
  Clock
} from 'lucide-react';
import { Github } from '../components/BrandIcons';
import Button from '../components/Button';
import ProjectLinks from '../components/ProjectLinks';
import { projects } from '../data/projects';

export default function ELMSProject() {
  const project = projects.find((p) => p.id === 'elms');

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

        {/* Project Header */}
        <div className="bg-white rounded-3xl border border-[#D1FAE5] p-6 sm:p-8 md:p-10 shadow-sm space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#ECFDF5] text-[#064E3B] border border-[#A7F3D0]">
              <Layers className="w-3.5 h-3.5 text-[#10B981]" />
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

          {/* Technology Badges */}
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

        {/* Preview / Screenshot Mockup */}
        <div className="my-10 rounded-3xl overflow-hidden border-2 border-[#D1FAE5] shadow-xl bg-slate-50">
          <div className="bg-[#064E3B] px-6 py-3 text-white flex items-center justify-between text-xs">
            <span className="font-bold">Architectural UI Mockup &amp; Workflow Overview</span>
            <span className="text-emerald-300 font-mono">React 19 + Node.js REST API</span>
          </div>
          <img
            src={project.thumbnail}
            alt="ELMS Interface Screenshot"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Problem & Objective Grid */}
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

        {/* System Architecture Overview */}
        <div className="my-10 bg-white rounded-3xl border border-[#D1FAE5] p-6 sm:p-8 space-y-6 shadow-xs">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-xs uppercase font-bold text-emerald-700 tracking-wider">
              Technical Specification
            </span>
            <h3 className="text-2xl font-bold text-[#064E3B] mt-1">
              Architecture Overview
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-[#064E3B] font-bold text-sm">
                <FileCode className="w-4 h-4 text-[#10B981]" />
                <span>Frontend Layer</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {project.architecture.frontend}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-[#064E3B] font-bold text-sm">
                <Server className="w-4 h-4 text-[#10B981]" />
                <span>Backend Services</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {project.architecture.backend}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-[#064E3B] font-bold text-sm">
                <Database className="w-4 h-4 text-[#10B981]" />
                <span>Database Cloud</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {project.architecture.database}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-[#064E3B] font-bold text-sm">
                <Lock className="w-4 h-4 text-[#10B981]" />
                <span>Security &amp; RBAC</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {project.architecture.security}
              </p>
            </div>
          </div>
        </div>

        {/* Main Features */}
        <div className="my-10 space-y-6">
          <div className="border-b border-slate-100 pb-3">
            <span className="text-xs uppercase font-bold text-emerald-700 tracking-wider">
              Functional Highlights
            </span>
            <h3 className="text-2xl font-bold text-[#064E3B] mt-1">
              Core Application Features
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
              Engineering Ownership
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

        {/* Challenges & Solutions */}
        <div className="my-10 space-y-6">
          <div className="border-b border-slate-100 pb-3">
            <span className="text-xs uppercase font-bold text-emerald-700 tracking-wider">
              Problem Solving
            </span>
            <h3 className="text-2xl font-bold text-[#064E3B] mt-1">
              Engineering Challenges &amp; Solutions
            </h3>
          </div>

          <div className="space-y-4">
            {project.challengesAndSolutions.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#D1FAE5] p-6 space-y-3"
              >
                <div className="flex items-start gap-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 shrink-0">
                    Challenge
                  </span>
                  <p className="text-sm font-semibold text-slate-800">{item.challenge}</p>
                </div>
                <div className="flex items-start gap-2.5 pt-2 border-t border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 shrink-0">
                    Solution
                  </span>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#064E3B] hover:text-[#10B981] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </Link>

          <Link
            to="/projects/rideshare-connect"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#064E3B] hover:text-[#10B981] transition-colors"
          >
            <span>Next: RideShare Connect Showcase</span>
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
