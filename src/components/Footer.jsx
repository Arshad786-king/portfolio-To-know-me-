import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Heart, Code2, ArrowUpRight } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { personalInfo } from '../data/personalInfo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = {
    explore: [
      { name: 'Home', path: '/' },
      { name: 'About Me', path: '/about' },
      { name: 'Technical Skills', path: '/skills' },
      { name: 'Projects Portfolio', path: '/projects' },
      { name: 'Internship Experience', path: '/experience' },
      { name: 'Education Timeline', path: '/education' },
      { name: 'Certifications', path: '/certifications' },
      { name: 'Contact Me', path: '/contact' },
    ],
    projects: [
      { name: 'Employee Leave Management (ELMS)', path: '/projects/elms' },
      { name: 'RideShare Connect (Showcase)', path: '/projects/rideshare-connect' },
      { name: 'AI Emergency Route Planning', path: '/projects/ai-emergency-route-planning' },
      { name: 'Banking Credit Default Risk Engine', path: '/projects/banking-credit-risk' },
    ]
  };

  return (
    <footer className="bg-[#064E3B] text-white pt-16 pb-12 border-t border-emerald-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-emerald-800/80">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-500 text-[#064E3B] font-extrabold text-xl shadow-md">
                A
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-white">
                ARSHAD
              </span>
            </Link>

            <p className="text-emerald-100/80 text-sm leading-relaxed max-w-sm">
              {personalInfo.title}. Building reliable full-stack applications, scalable databases, and algorithm-backed systems with clean code and modern engineering standards.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-emerald-200/90">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{personalInfo.phone}</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-emerald-900/60 hover:bg-emerald-600 text-emerald-200 hover:text-white transition-all duration-200 border border-emerald-700/50"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-emerald-900/60 hover:bg-emerald-600 text-emerald-200 hover:text-white transition-all duration-200 border border-emerald-700/50"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email Shaik Arshad"
                className="p-2.5 rounded-xl bg-emerald-900/60 hover:bg-emerald-600 text-emerald-200 hover:text-white transition-all duration-200 border border-emerald-700/50"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-300 mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-emerald-100/80">
              {navigation.explore.slice(0, 4).map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="hover:text-emerald-300 transition-colors inline-flex items-center gap-1"
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
              {navigation.explore.slice(4).map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="hover:text-emerald-300 transition-colors inline-flex items-center gap-1"
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Projects */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-300 mb-4">
              Featured Projects
            </h4>
            <ul className="space-y-2.5 text-sm text-emerald-100/80">
              {navigation.projects.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="hover:text-emerald-300 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 rounded-xl bg-emerald-900/40 border border-emerald-700/60 text-xs text-emerald-200">
              <p className="font-semibold text-white">Anil Neerukonda Institute of Technology &amp; Sciences</p>
              <p className="mt-1">B.Tech IT • 3rd Year • CGPA 8.08 • Expected 2028</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-200/70">
          <p>© {currentYear} Shaik Mitaigiri Mahmmad Arshad. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Built with React, Vite, Tailwind CSS &amp; Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
