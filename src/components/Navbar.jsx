import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Download, FileText, ArrowRight } from 'lucide-react';
import Button from './Button';
import { personalInfo } from '../data/personalInfo';

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > 20);

      // Scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((currentScroll / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Education', path: '/education' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#D1FAE5]'
            : 'bg-white/80 backdrop-blur-sm border-b border-transparent'
        }`}
      >
        {/* Scroll Progress Bar */}
        <div
          className="h-1 bg-gradient-to-r from-[#10B981] via-[#34D399] to-[#064E3B] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* ARSHAD Personal Brand Logo */}
            <Link
              to="/"
              className="group flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#10B981] rounded-xl p-1"
              aria-label="Shaik Arshad - Home"
            >
              <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-[#064E3B] to-[#043d2e] text-white font-extrabold text-xl shadow-md group-hover:scale-105 transition-transform border border-emerald-500/30">
                <span className="tracking-tight text-emerald-400">A</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] absolute top-2 right-2 animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-[#064E3B] group-hover:text-[#10B981] transition-colors leading-none">
                  ARSHAD
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#64748B] mt-1 leading-none">
                  Software Engineer
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? 'text-[#064E3B] bg-[#ECFDF5] border border-[#A7F3D0]'
                        : 'text-[#1F2937] hover:text-[#064E3B] hover:bg-[#ECFDF5]/60'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Resume Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#064E3B] hover:text-[#10B981] hover:bg-[#ECFDF5] rounded-xl transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Preview</span>
              </button>

              <Button
                href={personalInfo.resumeUrl}
                download="Shaik_Arshad_Resume.pdf"
                variant="primary"
                size="sm"
                icon={Download}
              >
                Download Resume
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex xl:hidden items-center gap-2">
              <Button
                href={personalInfo.resumeUrl}
                download="Shaik_Arshad_Resume.pdf"
                variant="primary"
                size="sm"
                className="hidden sm:inline-flex md:hidden"
                icon={Download}
              >
                Resume
              </Button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl text-[#064E3B] hover:bg-[#ECFDF5] focus:outline-none focus:ring-2 focus:ring-[#10B981] transition-colors cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 xl:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed top-20 left-0 right-0 bg-white border-b border-[#D1FAE5] shadow-2xl p-6 transition-transform">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                      isActive
                        ? 'text-[#064E3B] bg-[#ECFDF5] border border-[#A7F3D0]'
                        : 'text-[#1F2937] hover:text-[#064E3B] hover:bg-[#ECFDF5]/60'
                    }`
                  }
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </NavLink>
              ))}

              <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-2.5">
                <Button
                  href={personalInfo.resumeUrl}
                  download="Shaik_Arshad_Resume.pdf"
                  variant="primary"
                  size="md"
                  icon={Download}
                  className="w-full"
                >
                  Download Resume PDF
                </Button>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full py-2.5 text-center text-sm font-semibold text-[#064E3B] hover:bg-[#ECFDF5] rounded-xl transition-colors cursor-pointer"
                >
                  Preview Resume Document
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

