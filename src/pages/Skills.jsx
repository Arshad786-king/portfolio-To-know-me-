import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  FileCode,
  Database,
  Component,
  Zap,
  Layout,
  Palette,
  Server,
  Layers,
  Cpu,
  Network,
  HardDrive,
  Cloud,
  FileSpreadsheet,
  ShieldCheck,
  Lock,
  CloudSun,
  GitBranch,
  Terminal,
  AppWindow,
  Binary,
  Table,
  CheckCircle2,
  Info
} from 'lucide-react';
import { Github } from '../components/BrandIcons';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { skillCategories } from '../data/skills';

// Map icon strings to Lucide icon components
const iconMap = {
  Code,
  FileCode,
  Database,
  Component,
  Zap,
  Layout,
  Palette,
  Server,
  Layers,
  Cpu,
  Network,
  HardDrive,
  Cloud,
  FileSpreadsheet,
  ShieldCheck,
  Lock,
  CloudSun,
  GitBranch,
  Github,
  Terminal,
  AppWindow,
  Binary,
  Table
};

export default function Skills() {
  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Technical Competencies"
          title="Skills & Technical Arsenal"
          subtitle="Directly aligned with my verified resume and practical software builds. Categorized transparently with qualitative capability descriptors rather than fabricated percentage meters."
        />

        {/* Verification banner */}
        <div className="mb-10 p-4 rounded-2xl bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-between text-xs text-[#064E3B]">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-[#10B981] shrink-0" />
            <span>
              <strong>Integrity Pledge:</strong> Skills listed strictly match <code className="font-mono bg-emerald-100 text-emerald-800 px-1 py-0.5 rounded">Arshad_Resume.docx</code>. Every item has been used in academic or internship projects.
            </span>
          </div>
          <span className="hidden sm:inline font-semibold text-emerald-800">
            Source Verified
          </span>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIndex * 0.08 }}
              className="bg-white rounded-2xl border border-[#D1FAE5] p-6 flex flex-col justify-between hover:border-[#10B981] transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                  <h3 className="text-xl font-bold text-[#064E3B]">{category.title}</h3>
                  <span className="text-[11px] font-bold text-emerald-700 bg-[#ECFDF5] px-2.5 py-0.5 rounded-full border border-[#D1FAE5]">
                    {category.skills.length} Skills
                  </span>
                </div>

                <p className="text-xs text-[#64748B] mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill Items */}
                <div className="space-y-3">
                  {category.skills.map((skill, sIdx) => {
                    const IconComponent = iconMap[skill.icon] || Code;
                    return (
                      <div
                        key={sIdx}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50/80 hover:bg-[#ECFDF5] border border-slate-100 hover:border-[#A7F3D0] transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="p-1.5 rounded-lg bg-white text-[#064E3B] border border-slate-200">
                            <IconComponent className="w-4 h-4 text-[#10B981]" />
                          </div>
                          <span className="text-sm font-semibold text-slate-800">
                            {skill.name}
                          </span>
                        </div>

                        <span className="text-[11px] font-medium text-emerald-800 bg-white px-2 py-0.5 rounded border border-emerald-100">
                          {skill.level}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>Resume Authoritative</span>
                <span className="text-emerald-600 font-semibold">Active Practice</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CS Fundamentals Callout */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#064E3B] to-[#043d2e] text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2 space-y-3">
              <span className="text-xs uppercase font-bold tracking-wider text-emerald-300">
                Core Foundation
              </span>
              <h3 className="text-2xl font-bold">
                Computer Science &amp; Engineering Fundamentals
              </h3>
              <p className="text-sm text-emerald-100/90 leading-relaxed">
                Proficiency in programming languages is complemented by a rock-solid understanding of <strong>Data Structures and Algorithms (DSA)</strong> and <strong>Database Management Systems (DBMS)</strong>. Completed LeetCode SQL 50 study plan and practiced real-world algorithmic routing graph problems.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 justify-center">
              <Button to="/projects" variant="primary" size="md">
                See How I Apply These
              </Button>
              <Button to="/certifications" variant="secondary" size="md">
                View SQL 50 Certification
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
