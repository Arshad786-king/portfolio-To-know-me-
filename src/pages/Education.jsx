import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  CheckCircle2,
  Compass
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { educationHistory } from '../data/education';

export default function Education() {
  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Academic Milestone"
          title="Educational Journey"
          subtitle="A chronologically structured timeline of my formal academic qualifications from secondary schooling through my ongoing B.Tech program at ANITS."
        />

        {/* Timeline Container */}
        <div className="relative my-12">
          {/* Vertical Timeline Rule */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-[#D1FAE5] -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            {educationHistory.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Icon */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-10 hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-[#064E3B] text-white border-4 border-white shadow-md">
                    <GraduationCap className="w-5 h-5 text-emerald-400" />
                  </div>

                  {/* Content Card (Left or Right on desktop) */}
                  <div className="w-full sm:w-[calc(50%-2.5rem)]">
                    <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#D1FAE5] hover:border-[#10B981] transition-all hover:shadow-xl space-y-4">
                      {/* Status & Period */}
                      <div className="flex items-center justify-between gap-2 pb-2 border-b border-slate-100">
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-[#ECFDF5] px-2.5 py-0.5 rounded-full border border-[#D1FAE5]">
                          {item.status}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                          <Calendar className="w-3.5 h-3.5 text-[#10B981]" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      {/* Degree & Institution */}
                      <div>
                        <h3 className="text-xl font-bold text-[#064E3B]">{item.degree}</h3>
                        <h4 className="text-sm font-semibold text-slate-700 mt-1">{item.institution}</h4>
                        <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          <span>{item.location}</span>
                        </div>
                      </div>

                      {/* Score Highlight Badge */}
                      <div className="p-3 rounded-xl bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-between">
                        <span className="text-xs font-bold text-[#064E3B] uppercase tracking-wider">
                          Academic Score ({item.scoreLabel})
                        </span>
                        <span className="text-base font-extrabold text-[#064E3B] font-mono">
                          {item.score}
                        </span>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.details}
                      </p>

                      {/* Key Coursework */}
                      <div className="pt-3 border-t border-slate-100">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                          Key Areas &amp; Coursework:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {item.keyCoursework.map((cw, cIdx) => (
                            <span
                              key={cIdx}
                              className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-50 text-slate-700 border border-slate-200"
                            >
                              {cw}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Engineering Philosophy Card */}
        <div className="mt-16 p-8 rounded-3xl bg-[#ECFDF5] border border-[#A7F3D0] text-center space-y-3">
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
            Continuous Learning Ethos
          </span>
          <h3 className="text-xl font-bold text-[#064E3B]">
            Classroom Theory Meets Practical Implementation
          </h3>
          <p className="text-sm text-slate-700 max-w-2xl mx-auto leading-relaxed">
            While maintaining an 8.08 CGPA across core computing subjects, I channel academic principles into concrete software systems—solving coding challenges on LeetCode and shipping full-stack projects.
          </p>
        </div>
      </div>
    </div>
  );
}

