import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Sparkles, Layers } from 'lucide-react';
import { Github } from './BrandIcons';

export default function ProjectCard({ project, index = 0 }) {
  const hasGithub = Boolean(project.githubUrl && project.githubUrl.trim() !== "");
  const hasLive = Boolean(project.liveUrl && project.liveUrl.trim() !== "");
  const isPersonalInDev = project.id === 'rideshare-connect';
  const isLive = project.isDeployed && hasLive;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col bg-white rounded-2xl border border-[#D1FAE5] overflow-hidden hover:border-[#10B981] transition-all duration-300 hover:shadow-xl hover:shadow-emerald-900/5 hover:-translate-y-1"
    >
      {/* Thumbnail Banner */}
      <div className="relative aspect-[16/10] bg-slate-50 overflow-hidden border-b border-[#D1FAE5]/60">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Category Pill */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-white/95 text-[#064E3B] backdrop-blur-sm shadow-sm border border-[#D1FAE5]">
            <Layers className="w-3 h-3 text-[#10B981]" />
            {project.category}
          </span>
        </div>

        {/* Status Pill */}
        <div className="absolute top-3 right-3">
          {isPersonalInDev ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-800 border border-amber-200 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              In Development
            </span>
          ) : isLive ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Live
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              {project.status.includes('Completed') ? 'Completed' : 'Prototype'}
            </span>
          )}
        </div>

        {/* Special showcase badge if interactive */}
        {project.showcaseType === 'interactive-animated' && (
          <div className="absolute bottom-3 left-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-[#064E3B] text-emerald-200 shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              Interactive UI Showcase
            </span>
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-[#064E3B] group-hover:text-[#10B981] transition-colors leading-snug">
            <Link to={`/projects/${project.id}`}>
              {project.title}
            </Link>
          </h3>

          <p className="mt-2.5 text-sm text-[#64748B] leading-relaxed line-clamp-3">
            {project.shortDescription}
          </p>

          {/* Tech Badges */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 5).map((tech, i) => (
              <span
                key={i}
                className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-[#ECFDF5] text-[#064E3B] border border-[#D1FAE5]"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-2 py-0.5 rounded-md text-xs font-medium text-slate-500 bg-slate-100">
                +{project.technologies.length - 5} more
              </span>
            )}
          </div>
        </div>

        {/* Footer actions */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-3">
          {/* View Live Project button — shown only when a live URL is available */}
          {hasLive && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl text-sm font-bold bg-[#064E3B] text-white hover:bg-[#065F46] transition-colors shadow-sm"
            >
              <ExternalLink className="w-4 h-4 shrink-0" />
              View Live Project
            </a>
          )}

          <div className="flex items-center justify-between gap-3">
            <Link
              to={`/projects/${project.id}`}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#064E3B] hover:text-[#10B981] transition-colors group/link"
            >
              <span>View Full Details</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
            </Link>

            <div className="flex items-center gap-2">
              {hasGithub && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View source repository"
                  className="p-2 rounded-lg text-slate-600 hover:text-[#064E3B] hover:bg-[#ECFDF5] transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
