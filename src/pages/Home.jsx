import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Download,
  ArrowRight,
  Mail,
  Code2,
  Database,
  Cloud,
  Terminal,
  ExternalLink,
  Sparkles,
  ChevronDown,
  GraduationCap,
  ShieldCheck,
  Briefcase
} from 'lucide-react';
import { Github, Linkedin } from '../components/BrandIcons';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { personalInfo } from '../data/personalInfo';
import { skillCategories } from '../data/skills';
import { projects } from '../data/projects';
import { internshipExperience } from '../data/experience';

export default function Home({ onOpenResume }) {
  const [photoError, setPhotoError] = useState(false);

  // Animated rotating titles
  const titles = [
    "Aspiring Software Engineer",
    "Database(SQL)",
    " B.Tech IT Undergrad"
  ];
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      {/* ============================================================ */}
      {/* HERO SECTION */}
      {/* ============================================================ */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden bg-gradient-to-b from-[#ECFDF5]/60 via-white to-white">
        {/* Subtle decorative background gradient circles */}
        <div className="absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-[#10B981]/10 blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 rounded-full bg-[#064E3B]/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Text & CTA */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
            >
              {/* Eyebrow greeting */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ECFDF5] text-[#064E3B] border border-[#A7F3D0] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
                <span>Hello, I'm</span>
              </div>

              {/* Full Name */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#064E3B] tracking-tight leading-[1.1]">
                Shaik Mitaigiri <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-[#064E3B] via-[#047857] to-[#10B981] bg-clip-text text-transparent">
                  Mahmmad Arshad
                </span>
              </h1>

              {/* Animated Cycling Title */}
              <div className="h-10 flex items-center justify-center lg:justify-start">
                <span className="text-xl sm:text-2xl font-bold text-[#10B981] transition-all duration-300">
                  {titles[titleIndex]}
                </span>
              </div>

              {/* Hero Tagline & Description */}
              <div className="space-y-3">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-lg sm:text-xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#064E3B] via-[#047857] to-[#10B981] max-w-2xl mx-auto lg:mx-0"
                >
                  Learn. Experiment. Build. Innovate.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.45 }}
                  className="text-base sm:text-lg text-[#1F2937]/85 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal"
                >
                  Passionate about learning new technologies, understanding the concepts behind them, and applying theoretical knowledge and creative ideas to build practical applications. Always curious to explore, experiment, and turn innovative ideas into reality.
                </motion.p>
              </div>

              {/* Key Quick Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-white text-[#064E3B] border border-[#D1FAE5] shadow-xs">
                  <GraduationCap className="w-3.5 h-3.5 text-[#10B981]" />
                  ANITS IT (Pursuing)
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-white text-[#064E3B] border border-[#D1FAE5] shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#10B981]" />
                  CGPA: 8.08
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-white text-[#064E3B] border border-[#D1FAE5] shadow-xs">
                  <Briefcase className="w-3.5 h-3.5 text-[#10B981]" />
                  3 Internship Projects
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-4">
                <Button
                  to="/projects"
                  variant="primary"
                  size="lg"
                  icon={ArrowRight}
                  iconPosition="right"
                >
                  Explore My Projects
                </Button>

                <Button
                  href={personalInfo.resumeUrl}
                  download="Shaik_Arshad_Resume.pdf"
                  variant="secondary"
                  size="lg"
                  icon={Download}
                >
                  Download Resume
                </Button>
              </div>

              {/* Social Connect Links */}
              <div className="pt-4 flex items-center justify-center lg:justify-start gap-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                  Connect with me:
                </span>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-xl bg-white hover:bg-[#ECFDF5] text-[#064E3B] hover:text-[#10B981] border border-[#D1FAE5] hover:border-[#10B981] transition-all shadow-xs"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-xl bg-white hover:bg-[#ECFDF5] text-[#064E3B] hover:text-[#10B981] border border-[#D1FAE5] hover:border-[#10B981] transition-all shadow-xs"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Send Email"
                  className="p-2.5 rounded-xl bg-white hover:bg-[#ECFDF5] text-[#064E3B] hover:text-[#10B981] border border-[#D1FAE5] hover:border-[#10B981] transition-all shadow-xs"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Right Column: Hero Visual & Interactive Profile Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="relative w-72 sm:w-80 md:w-96">
                {/* Decorative border frame */}
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#10B981] via-[#34D399] to-[#064E3B] opacity-30 blur-lg" />

                {/* Card Container */}
                <div className="relative bg-white rounded-3xl p-5 border-2 border-[#D1FAE5] shadow-2xl overflow-hidden">
                  {/* Photo or Styled Avatar */}
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#ECFDF5] border border-[#D1FAE5]">
                    {!photoError ? (
                      <img
                        src={personalInfo.photoUrl}
                        alt={personalInfo.fullName}
                        onError={() => setPhotoError(true)}
                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#ECFDF5] to-[#D1FAE5] text-[#064E3B] p-6 text-center">
                        <div className="w-24 h-24 rounded-full bg-[#064E3B] text-white flex items-center justify-center font-extrabold text-3xl shadow-lg mb-4 border-2 border-emerald-400">
                          SA
                        </div>
                        <h4 className="font-extrabold text-lg">{personalInfo.preferredName}</h4>
                        <p className="text-xs text-[#064E3B] mt-1 font-semibold">{personalInfo.title}</p>
                      </div>
                    )}


                  </div>


                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FEATURED PROJECTS PREVIEW */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 bg-white border-t border-[#D1FAE5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <SectionTitle
              badge="Handcrafted Projects"
              title="Featured Engineering Work"
              subtitle="Production-grade full stack applications, interactive simulations, and algorithmic prototypes built with rigorous engineering standards."
              align="left"
              className="mb-0"
            />
            <Button
              to="/projects"
              variant="outline"
              size="md"
              icon={ArrowRight}
              iconPosition="right"
              className="self-start md:self-end"
            >
              View All 4 Projects
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SKILLS OVERVIEW */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 bg-[#ECFDF5]/50 border-t border-[#D1FAE5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Technical Repertoire"
            title="Core Skills & Technologies"
            subtitle="Verified technical abilities drawn directly from academic foundations and practical application builds. No inflated percentages or simulated expertise."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.slice(0, 6).map((cat, index) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white rounded-2xl p-6 border border-[#D1FAE5] hover:border-[#10B981] transition-all hover:shadow-lg"
              >
                <h3 className="text-lg font-bold text-[#064E3B] mb-2">{cat.title}</h3>
                <p className="text-xs text-[#64748B] mb-4 leading-relaxed">{cat.description}</p>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 rounded-lg text-xs font-semibold bg-[#ECFDF5] text-[#064E3B] border border-[#A7F3D0]"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button to="/skills" variant="primary" size="md" icon={ArrowRight} iconPosition="right">
              Explore Complete Skills Matrix
            </Button>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* INTERNSHIP PROJECTS PREVIEW */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 bg-white border-t border-[#D1FAE5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Industry Engagement"
            title="Internship Projects at CodeAlpha"
            subtitle="Hands-on software development internship completing three focused projects in cloud bus pass management, SQL injection security, and automated database deduplication."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {internshipExperience.projects.map((proj, pIdx) => (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: pIdx * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-[#D1FAE5] flex flex-col justify-between hover:border-[#10B981] transition-all hover:shadow-md"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-[#ECFDF5] px-2.5 py-0.5 rounded-full border border-[#A7F3D0]">
                    Project 0{pIdx + 1}
                  </span>
                  <h3 className="text-lg font-bold text-[#064E3B] mt-3">{proj.title}</h3>
                  <p className="text-xs text-[#64748B] mt-2 leading-relaxed">{proj.description}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {proj.technologies.slice(0, 2).map((t, idx) => (
                      <span key={idx} className="text-[10px] font-medium text-[#064E3B] bg-slate-100 px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#10B981] hover:text-[#059669]"
                  >
                    <span>Code</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button to="/experience" variant="secondary" size="md">
              View Detailed Internship Breakdown
            </Button>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CALL TO ACTION BANNER */}
      {/* ============================================================ */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#064E3B] to-[#043d2e] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-emerald-300 border border-emerald-400/30">
            Let's Collaborate
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Interested in building something practical together?
          </h2>
          <p className="text-emerald-100/90 text-base max-w-2xl mx-auto leading-relaxed">
            I am actively seeking software engineering internship opportunities. Feel free to reach out for project inquiries, technical discussions, or internship roles.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Button to="/contact" variant="primary" size="lg">
              Get In Touch
            </Button>
            <Button
              href={`mailto:${personalInfo.email}`}
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-white hover:text-[#064E3B]"
            >
              Send an Email
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
