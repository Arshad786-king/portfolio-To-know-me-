import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Award,
  Layers,
  Code2,
  Database,
  Cloud,
  Terminal,
  Heart,
  Compass,
  ArrowRight,
  Download,
  CheckCircle2,
  MapPin,
  Mail,
  Calendar
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { personalInfo } from '../data/personalInfo';
import { educationHistory } from '../data/education';

export default function About({ onOpenResume }) {
  const interestAreas = [
    {
      title: "Full-Stack Web Engineering",
      icon: Code2,
      desc: "Building clean, high-performance web applications using React, Vite, Node.js, Express, and Flask with modern component architecture and RESTful APIs."
    },
    {
      title: "Database Architecture & Optimization",
      icon: Database,
      desc: "Architecting relational schemas in MySQL and document structures in MongoDB. Writing complex SQL joins, indexing strategies, and maintaining data consistency."
    },
    {
      title: "Cloud Computing & AWS",
      icon: Cloud,
      desc: "Currently exploring Amazon Web Services (AWS) — building foundational knowledge of EC2, S3, IAM, and AMIs. Also experienced in deploying applications to Streamlit Cloud and Vercel, and implementing JWT-based security and role-based access control."
    },
    {
      title: "Algorithmic Problem Solving",
      icon: Terminal,
      desc: "Practicing Data Structures and Algorithms with a focus on graph traversal (Dijkstra, A*), dynamic programming, and clean analytical thinking."
    }
  ];

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="About Me"
          title="Background, Journey & Aspirations"
          subtitle="A deeper look at my academic foundation at ANITS, engineering focus, technical interests, and career objective."
        />

        {/* Top Overview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start my-12">
          {/* Left: Detailed Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-3xl bg-white border border-[#D1FAE5] shadow-sm space-y-4">
              <h3 className="text-2xl font-bold text-[#064E3B]">
                Passionate Information Technology Undergraduate
              </h3>

              {/* Paragraph 1 */}
              <p className="text-slate-700 leading-relaxed text-base">
                I am currently pursuing my B.Tech in{' '}
                <span className="font-semibold text-[#047857]">Information Technology</span>{' '}
                at <strong>Anil Neerukonda Institute of Technology &amp; Sciences (ANITS)</strong>, Visakhapatnam.
                I am curious about how data flows through applications and how different technologies work together.
                I enjoy learning new technologies, exploring new ideas, and discovering new places and experiences.
              </p>

              {/* Paragraph 2 — AWS / Cloud */}
              <p className="text-slate-700 leading-relaxed text-base">
                Currently, I am exploring{' '}
                <span className="font-semibold text-[#047857]">Cloud Computing</span>{' '}
                and learning{' '}
                <span className="font-semibold text-[#047857]">Amazon Web Services (AWS)</span>.
                So far, I have gained basic knowledge of AMIs, EC2, S3, and IAM.
                I am eager to explore more cloud technologies, strengthen my technical skills, and continuously learn new things.
              </p>

              {/* AWS Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {["Cloud Computing", "AWS", "EC2", "S3", "IAM", "AMIs"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg text-xs font-semibold bg-[#ECFDF5] text-[#064E3B] border border-[#D1FAE5]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-4">
                <Button
                  href={personalInfo.resumeUrl}
                  download="Shaik_Arshad_Resume.pdf"
                  variant="primary"
                  size="md"
                  icon={Download}
                >
                  Download Formal Resume
                </Button>
                <Button
                  to="/contact"
                  variant="secondary"
                  size="md"
                >
                  Contact Me
                </Button>
              </div>
            </div>

            {/* Career Objective Card */}
            <div className="p-6 rounded-2xl bg-[#ECFDF5] border border-[#A7F3D0]">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-[#064E3B] text-white rounded-xl">
                  <Compass className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#064E3B]">Career Objective</h4>
                  <p className="mt-1 text-sm text-slate-700 leading-relaxed">
                    {personalInfo.careerObjective}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Academic Snapshot & Personal Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 border-2 border-[#D1FAE5] shadow-lg space-y-5">
              <h4 className="font-bold text-lg text-[#064E3B] pb-3 border-b border-slate-100">
                Academic &amp; Profile Summary
              </h4>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 block font-bold uppercase">Degree</span>
                    <span className="font-semibold text-slate-800">{personalInfo.degree}</span>
                    <span className="text-xs text-slate-500 block">3rd Year Undergraduate</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 block font-bold uppercase">Institution &amp; CGPA</span>
                    <span className="font-semibold text-slate-800">{personalInfo.college}</span>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                        CGPA: {personalInfo.cgpa}
                      </span>
                      <span className="text-xs text-slate-500">Graduation: {personalInfo.expectedGraduation}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 block font-bold uppercase">Location</span>
                    <span className="font-semibold text-slate-800">{personalInfo.location}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 block font-bold uppercase">Email</span>
                    <a href={`mailto:${personalInfo.email}`} className="font-semibold text-[#10B981] hover:underline">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-slate-400 block font-bold uppercase">Languages</span>
                    <span className="font-semibold text-slate-800">{personalInfo.languages.join(", ")}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Strengths Card */}
            <div className="bg-white rounded-3xl p-6 border border-[#D1FAE5] shadow-xs">
              <h4 className="font-bold text-sm text-[#064E3B] uppercase tracking-wider mb-3">
                Core Engineering Strengths
              </h4>
              <ul className="space-y-2 text-xs text-slate-700">
                {personalInfo.coreStrengths.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Development Interests */}
        <div className="my-16">
          <SectionTitle
            badge="Engineering Focus"
            title="What I Enjoy Building"
            subtitle="My primary technical areas of curiosity and active development."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interestAreas.map((area, idx) => {
              const IconComp = area.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-white border border-[#D1FAE5] hover:border-[#10B981] hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#ECFDF5] text-[#064E3B] flex items-center justify-center mb-4 border border-[#A7F3D0]">
                    <IconComp className="w-6 h-6 text-[#10B981]" />
                  </div>
                  <h4 className="font-bold text-base text-[#064E3B] mb-2">{area.title}</h4>
                  <p className="text-xs text-[#64748B] leading-relaxed">{area.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

