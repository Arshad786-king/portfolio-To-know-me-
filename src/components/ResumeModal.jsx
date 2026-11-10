import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, FileText } from 'lucide-react';
import Button from './Button';
import { personalInfo } from '../data/personalInfo';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-[#D1FAE5] z-10"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#064E3B] text-white">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-600/30 rounded-lg">
                <FileText className="w-5 h-5 text-emerald-300" />
              </div>
              <div>
                <h3 className="font-bold text-lg leading-tight">Shaik Mahmmad Arshad — Resume</h3>
                <p className="text-xs text-emerald-200">Authoritative B.Tech IT Profile &amp; Project Summary</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                href={personalInfo.resumeUrl}
                download="Shaik_Arshad_Resume.pdf"
                variant="primary"
                size="sm"
                icon={Download}
              >
                Download PDF
              </Button>
              <button
                onClick={onClose}
                className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Body: Embedded PDF viewer */}
          <div className="flex-1 bg-slate-100 p-2 overflow-hidden h-[75vh]">
            <iframe
              src={`${personalInfo.resumeUrl}#toolbar=0`}
              title="Resume Preview"
              className="w-full h-full rounded-xl border border-slate-200 bg-white"
            />
          </div>

          {/* Modal Footer */}
          <div className="px-6 py-3 bg-[#ECFDF5] border-t border-[#D1FAE5] flex flex-wrap items-center justify-between gap-3 text-xs text-[#064E3B]">
            <span>Need an updated copy or specific format? Contact directly at <strong className="font-semibold">{personalInfo.email}</strong></span>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold hover:text-[#10B981] transition-colors"
            >
              Open in new tab <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

