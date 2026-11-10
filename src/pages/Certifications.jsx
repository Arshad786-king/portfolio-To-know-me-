import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  FileText,
  Image as ImageIcon,
  ShieldCheck,
  Code2,
  Layers,
  Upload
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import CertificateCelebrationModal from '../components/CertificateCelebrationModal';
import { certifications } from '../data/certifications';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  const handleOpenCertificate = (cert) => {
    // Only triggers on explicit user click, never on scroll or hover
    setSelectedCert(cert);
  };

  const handleCloseCertificate = () => {
    setSelectedCert(null);
  };

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Credentials &amp; Milestones"
          title="Certifications &amp; Achievements"
          subtitle="Documented technical credentials, competitive study plan completions, and hackathon prototypes. Authoritative records without fabricated badges."
        />

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          {certifications.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-3xl border-2 border-[#D1FAE5] overflow-hidden hover:border-[#10B981] transition-all hover:shadow-xl flex flex-col justify-between"
            >
              {/* Header inside card */}
              <div className="p-6 sm:p-7 space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-[#ECFDF5] px-3 py-1 rounded-full border border-[#D1FAE5]">
                    {item.badge}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    {item.date}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#064E3B] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#10B981] mt-1">
                    Issuer: {item.issuer}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                {/* Skills gained */}
                <div className="pt-2">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    Competencies Demonstrated:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.skillsGained.map((sk, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-[#ECFDF5] text-[#064E3B] border border-[#A7F3D0]"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Certificate Image or Attachment Placeholder */}
              <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-4">
                {item.image ? (
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleOpenCertificate(item)}
                      className="group/img relative w-20 h-14 rounded-xl overflow-hidden border border-slate-200 bg-white shadow-xs cursor-pointer hover:border-[#10B981] transition-all"
                      aria-label={`View certificate for ${item.title}`}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover/img:scale-105 transition-transform"
                      />
                      <div className="absolute inset-0 bg-black/25 group-hover/img:bg-emerald-950/20 transition-colors flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-amber-300 drop-shadow animate-pulse" />
                      </div>
                    </button>
                    <div>
                      <span className="text-xs font-bold text-[#064E3B] block">Official Certificate File</span>
                      <button
                        onClick={() => handleOpenCertificate(item)}
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#10B981] hover:text-[#059669] hover:underline cursor-pointer"
                      >
                        <Sparkles className="w-3 h-3" />
                        <span>Click to view &amp; celebrate</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleOpenCertificate(item)}
                      className="w-12 h-12 rounded-xl bg-[#ECFDF5] text-[#064E3B] flex items-center justify-center border border-[#A7F3D0] hover:bg-[#D1FAE5] transition-colors cursor-pointer shrink-0"
                      title="Click to view details & celebration animation"
                    >
                      <Award className="w-6 h-6 text-[#10B981]" />
                    </button>
                    <div>
                      <span className="font-semibold text-xs block text-slate-800">
                        {item.id === "codealpha-cloud"
                          ? "Awaiting Attached Certificate"
                          : "Project / Prototype Record"}
                      </span>
                      <button
                        onClick={() => handleOpenCertificate(item)}
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#10B981] hover:text-[#059669] hover:underline cursor-pointer"
                      >
                        <Sparkles className="w-3 h-3" />
                        <span>View verified details &amp; trophy</span>
                      </button>
                    </div>
                  </div>
                )}

                <span className="text-[11px] font-semibold text-emerald-800 bg-white px-2.5 py-1 rounded-full border border-emerald-200 shrink-0">
                  {item.verificationNote}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Trophy & Confetti Celebration Modal */}
      <CertificateCelebrationModal
        certificate={selectedCert}
        isOpen={Boolean(selectedCert)}
        onClose={handleCloseCertificate}
      />
    </div>
  );
}
