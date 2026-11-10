import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Cloud,
  Database,
  Calendar,
  Layers,
  FileCheck
} from 'lucide-react';
import { Github } from '../components/BrandIcons';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { internshipExperience } from '../data/experience';

export default function Experience() {
  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Work &amp; Experience"
          title="Internship Projects &amp; Practical Training"
          subtitle="Practical engineering assignments completed during my Software Development internship series at CodeAlpha, focusing on cloud management systems, database security, and data integrity."
        />

        {/* Company Header Card */}
        <div className="my-10 bg-white rounded-3xl border-2 border-[#D1FAE5] p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#064E3B] text-white flex items-center justify-center font-extrabold text-xl shadow-md shrink-0">
                CA
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-bold text-[#064E3B]">
                    {internshipExperience.organization}
                  </h3>
                  <span className="text-xs font-bold text-emerald-800 bg-[#ECFDF5] px-2.5 py-0.5 rounded-full border border-[#D1FAE5]">
                    {internshipExperience.period}
                  </span>
                </div>
                <p className="text-sm font-semibold text-slate-700 mt-0.5">
                  Domain: {internshipExperience.domain}
                </p>
                <p className="text-xs text-slate-500 mt-1 max-w-2xl leading-relaxed">
                  {internshipExperience.description}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 self-start md:self-center">
              <Button
                to="/certifications"
                variant="secondary"
                size="sm"
                icon={FileCheck}
              >
                View Certificate
              </Button>
            </div>
          </div>

          {/* 3 Internship Projects Detailed Cards */}
          <div className="space-y-8 mt-8">
            {internshipExperience.projects.map((proj, idx) => (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-slate-50/70 rounded-2xl border border-slate-200 p-6 sm:p-7 hover:border-[#10B981] hover:bg-white transition-all hover:shadow-md"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded">
                        Internship Project 0{idx + 1}
                      </span>
                      <h4 className="text-xl font-bold text-[#064E3B]">{proj.title}</h4>
                    </div>
                  </div>

                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-[#ECFDF5] text-xs font-bold text-[#064E3B] hover:text-[#10B981] border border-slate-200 hover:border-[#10B981] transition-colors self-start sm:self-auto"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </a>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed mt-4">
                  {proj.description}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 my-4">
                  {proj.technologies.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white text-[#064E3B] border border-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <div className="space-y-2 mt-4 pt-4 border-t border-slate-200/60">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                    Key Technical Implementations:
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-700">
                    {proj.highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Learnings Note */}
                <div className="mt-4 p-3 rounded-xl bg-[#ECFDF5] border border-[#A7F3D0] text-xs text-[#064E3B]">
                  <strong>Competency Acquired:</strong> {proj.keyLearnings}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
