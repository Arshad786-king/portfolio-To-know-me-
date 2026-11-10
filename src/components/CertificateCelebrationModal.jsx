import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X, Award, Sparkles, CheckCircle2, Download, ExternalLink, FileText, Server } from 'lucide-react';

// Generates an authentic falling mini-server rack unit
function MiniServer({ accentColor = "#10B981", size = 26, isBlade = false }) {
  const width = size * 1.35;
  const height = size * 0.85;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 34 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-md"
    >
      {/* Outer server chassis */}
      <rect
        x="1.5"
        y="1.5"
        width="31"
        height="19"
        rx="2.5"
        fill="#064E3B"
        stroke={accentColor}
        strokeWidth="1.4"
      />

      {/* Top unit rack bay */}
      <rect x="4" y="4" width="26" height="5.5" rx="1" fill="#032D22" />
      {/* Status LED lights */}
      <circle cx="7" cy="6.7" r="1.1" fill="#10B981" />
      <circle cx="10.5" cy="6.7" r="1.1" fill={accentColor} />
      <circle cx="14" cy="6.7" r="1.1" fill="#F59E0B" />
      {/* Server Drive Bays / Vents */}
      <rect x="18" y="5.5" width="4" height="2.5" rx="0.5" fill="#A7F3D0" opacity="0.9" />
      <rect x="23" y="5.5" width="4" height="2.5" rx="0.5" fill="#A7F3D0" opacity="0.9" />

      {/* Bottom unit rack bay */}
      <rect x="4" y="12" width="26" height="5.5" rx="1" fill="#032D22" />
      {/* Lower LEDs */}
      <circle cx="7" cy="14.7" r="1.1" fill="#10B981" />
      <circle cx="10.5" cy="14.7" r="1.1" fill="#38BDF8" />
      <circle cx="14" cy="14.7" r="1.1" fill="#34D399" />
      {/* Lower Drive Bays / Vents */}
      <rect x="18" y="13.5" width="4" height="2.5" rx="0.5" fill="#A7F3D0" opacity="0.9" />
      <rect x="23" y="13.5" width="4" height="2.5" rx="0.5" fill="#A7F3D0" opacity="0.9" />

      {/* Rack Ears / Mounting Brackets */}
      <rect x="0.5" y="4" width="1.5" height="4" rx="0.5" fill="#6EE7B7" />
      <rect x="32" y="4" width="1.5" height="4" rx="0.5" fill="#6EE7B7" />
    </svg>
  );
}

// Generates a falling cloud server node
function MiniCloudServer({ color = "#10B981", size = 24 }) {
  return (
    <svg
      width={size * 1.25}
      height={size}
      viewBox="0 0 30 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-xs"
    >
      {/* Cloud Bubble */}
      <path
        d="M8.5 13C6.567 13 5 11.433 5 9.5C5 7.64 6.446 6.118 8.275 6.012C8.948 3.69 11.082 2 13.625 2C16.657 2 19.141 4.254 19.563 7.189C21.467 7.472 22.917 9.102 22.917 11.083C22.917 13.246 21.163 15 19 15H8.5"
        fill="#ECFDF5"
        stroke={color}
        strokeWidth="1.5"
      />
      {/* Mini Server Box at bottom */}
      <rect
        x="6"
        y="14"
        width="18"
        height="8"
        rx="2"
        fill="#064E3B"
        stroke={color}
        strokeWidth="1.2"
      />
      <circle cx="9" cy="18" r="1" fill="#34D399" />
      <circle cx="12" cy="18" r="1" fill="#F59E0B" />
      <rect x="15" y="16.5" width="6" height="3" rx="0.5" fill="#A7F3D0" />
    </svg>
  );
}

// Generates ribbon tech confetti
function ConfettiRibbon({ color, width = 12, height = 5 }) {
  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: color,
        borderRadius: '2px',
      }}
    />
  );
}

// Sparkle Star Component
function SparkleStar({ delay = 0, x = 0, y = 0, size = 18 }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0, rotate: 0 }}
      animate={{
        scale: [0, 1.2, 0.9, 0],
        opacity: [0, 1, 0.8, 0],
        rotate: [0, 45, 90, 135],
      }}
      transition={{
        duration: 1.8,
        delay,
        ease: 'easeOut',
      }}
      style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
      className="absolute pointer-events-none z-30"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
          fill="#F59E0B"
        />
        <circle cx="12" cy="12" r="3" fill="#FFFFFF" />
      </svg>
    </motion.div>
  );
}

export default function CertificateCelebrationModal({
  certificate,
  isOpen,
  onClose,
}) {
  const shouldReduceMotion = useReducedMotion();
  const [showTrophyEntrance, setShowTrophyEntrance] = useState(true);

  // Keyboard Escape listener
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Trophy entrance timing: center stage for ~2.3 seconds, then settles into header
  useEffect(() => {
    if (isOpen) {
      setShowTrophyEntrance(true);
      const timer = setTimeout(() => {
        setShowTrophyEntrance(false);
      }, 2400);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Generate falling mini-servers, cloud server nodes, and tech confetti
  const particles = useMemo(() => {
    const colors = [
      '#10B981', // Emerald green
      '#34D399', // Mint green
      '#F59E0B', // Golden amber
      '#38BDF8', // Cyan cloud blue
      '#6EE7B7', // Soft emerald
      '#FBBF24', // Yellow gold
      '#A7F3D0', // Soft mint
      '#FFFFFF', // White
    ];

    const items = [];
    const count = 44; // density for vibrant effect

    for (let i = 0; i < count; i++) {
      // 50% mini-servers and cloud servers, 50% tech confetti & data ribbons
      const type =
        i % 4 === 0
          ? 'miniserver'
          : i % 4 === 1
          ? 'cloudserver'
          : i % 4 === 2
          ? 'ribbon'
          : 'datanode';

      const color = colors[i % colors.length];
      const startX = Math.random() * 100; // 0% to 100% viewport width
      const driftX = (Math.random() - 0.5) * 180; // horizontal sway drift px
      const duration = 2.4 + Math.random() * 1.6; // 2.4s - 4.0s
      const delay = Math.random() * 0.8; // staggered drop
      const rotation = Math.random() * 720 - 360; // rotational spin
      const size =
        type === 'miniserver'
          ? 22 + Math.random() * 10
          : type === 'cloudserver'
          ? 20 + Math.random() * 8
          : 8 + Math.random() * 8;

      items.push({
        id: i,
        type,
        color,
        startX,
        driftX,
        duration,
        delay,
        rotation,
        size,
      });
    }
    return items;
  }, [isOpen]);

  if (!isOpen || !certificate) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="certificate-modal-title"
      >
        {/* Backdrop (clicking outside closes modal) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#064E3B]/70 backdrop-blur-md cursor-pointer z-10"
        />

        {/* ============================================================ */}
        {/* CELEBRATION LAYER: Falling Mini-Servers & Cloud Confetti */}
        {/* ============================================================ */}
        {!shouldReduceMotion && (
          <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
            {particles.map((p) => (
              <motion.div
                key={p.id}
                initial={{
                  x: `${p.startX}vw`,
                  y: '-10vh',
                  opacity: 0,
                  rotate: 0,
                  scale: 0.7,
                }}
                animate={{
                  y: '105vh',
                  x: `calc(${p.startX}vw + ${p.driftX}px)`,
                  opacity: [0, 1, 1, 0.9, 0],
                  rotate: p.rotation,
                  scale: [0.7, 1.1, 1, 0.9],
                }}
                transition={{
                  duration: p.duration,
                  delay: p.delay,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="absolute top-0 left-0"
              >
                {p.type === 'miniserver' ? (
                  <MiniServer size={p.size} accentColor={p.color} />
                ) : p.type === 'cloudserver' ? (
                  <MiniCloudServer size={p.size} color={p.color} />
                ) : p.type === 'ribbon' ? (
                  <ConfettiRibbon
                    color={p.color}
                    width={p.size}
                    height={p.size * 0.45}
                  />
                ) : (
                  <div
                    style={{
                      width: `${p.size * 0.7}px`,
                      height: `${p.size * 0.7}px`,
                      backgroundColor: p.color,
                      borderRadius: '50%',
                    }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        )}

        {/* ============================================================ */}
        {/* CELEBRATION LAYER: Centered Trophy Entrance Popup */}
        {/* ============================================================ */}
        <AnimatePresence>
          {showTrophyEntrance && (
            <motion.div
              initial={{ scale: 0.2, opacity: 0, y: 30 }}
              animate={{
                scale: shouldReduceMotion ? 1 : [0.2, 1.18, 1],
                opacity: 1,
                y: 0,
              }}
              exit={{
                scale: 0.85,
                opacity: 0,
                y: -40,
                transition: { duration: 0.35, ease: 'easeInOut' },
              }}
              transition={{
                duration: 0.6,
                ease: [0.175, 0.885, 0.32, 1.275],
              }}
              className="fixed z-50 flex flex-col items-center justify-center pointer-events-none"
            >
              <div className="relative flex flex-col items-center">
                {/* Radiant Glow Ring */}
                <div className="absolute -inset-10 bg-gradient-to-r from-emerald-400/40 via-amber-300/50 to-emerald-400/40 rounded-full blur-2xl animate-pulse" />

                {/* Animated Sparkles around the Trophy */}
                {!shouldReduceMotion && (
                  <>
                    <SparkleStar delay={0.1} x={-80} y={-70} size={22} />
                    <SparkleStar delay={0.3} x={85} y={-60} size={20} />
                    <SparkleStar delay={0.5} x={-95} y={15} size={24} />
                    <SparkleStar delay={0.2} x={90} y={30} size={22} />
                    <SparkleStar delay={0.4} x={-40} y={-110} size={18} />
                    <SparkleStar delay={0.6} x={45} y={-105} size={20} />
                  </>
                )}

                {/* Golden Trophy Container */}
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-3xl bg-gradient-to-br from-[#064E3B] via-[#047857] to-[#064E3B] p-4 flex items-center justify-center border-4 border-[#FBBF24] shadow-2xl">
                  {/* Detailed Golden Trophy SVG */}
                  <svg
                    viewBox="0 0 100 100"
                    className="w-24 h-24 drop-shadow-md"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Laurel Wreath */}
                    <path
                      d="M20 62C16 52 18 36 28 26M80 62C84 52 82 36 72 26"
                      stroke="#FDE68A"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <circle cx="21" cy="40" r="3" fill="#F59E0B" />
                    <circle cx="26" cy="30" r="3" fill="#F59E0B" />
                    <circle cx="79" cy="40" r="3" fill="#F59E0B" />
                    <circle cx="74" cy="30" r="3" fill="#F59E0B" />

                    {/* Trophy Cup */}
                    <path
                      d="M32 20H68V42C68 52 60 60 50 60C40 60 32 52 32 42V20Z"
                      fill="url(#trophyGold)"
                      stroke="#D97706"
                      strokeWidth="2"
                    />
                    {/* Trophy Handles */}
                    <path
                      d="M32 28C24 28 22 38 32 44"
                      stroke="#F59E0B"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    <path
                      d="M68 28C76 28 78 38 68 44"
                      stroke="#F59E0B"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    {/* Stem & Base */}
                    <path
                      d="M46 60H54V74H46V60Z"
                      fill="#D97706"
                    />
                    <path
                      d="M34 74H66L70 86H30L34 74Z"
                      fill="url(#trophyBase)"
                      stroke="#78350F"
                      strokeWidth="1.5"
                    />
                    {/* Trophy Star Emblem */}
                    <path
                      d="M50 30L52 36L58 37L53.5 41L55 47L50 43.5L45 47L46.5 41L42 37L48 36L50 30Z"
                      fill="#FFFFFF"
                    />

                    <defs>
                      <linearGradient id="trophyGold" x1="32" y1="20" x2="68" y2="60" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FDE68A" />
                        <stop offset="0.5" stopColor="#F59E0B" />
                        <stop offset="1" stopColor="#D97706" />
                      </linearGradient>
                      <linearGradient id="trophyBase" x1="30" y1="74" x2="70" y2="86" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F59E0B" />
                        <stop offset="1" stopColor="#92400E" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Celebratory Banner Tag */}
                <div className="mt-3 px-4 py-1.5 rounded-full bg-[#064E3B] text-white border-2 border-emerald-400 shadow-xl flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-300 animate-spin" />
                  <span className="text-xs sm:text-sm font-extrabold tracking-wide uppercase">
                    Achievement Unlocked!
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ============================================================ */}
        {/* MAIN CERTIFICATE PREVIEW MODAL */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="relative w-full max-w-4xl bg-white rounded-3xl border-2 border-[#D1FAE5] shadow-2xl overflow-hidden z-20 my-auto flex flex-col"
        >
          {/* Modal Header */}
          <div className="bg-[#064E3B] text-white px-5 sm:px-7 py-4.5 flex items-center justify-between gap-4 border-b border-emerald-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300 block">
                  Official Verified Credential
                </span>
                <h3
                  id="certificate-modal-title"
                  className="font-bold text-base sm:text-lg text-white leading-tight line-clamp-1"
                >
                  {certificate.title}
                </h3>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-400"
              aria-label="Close certificate modal (or press Escape)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Certificate Viewport */}
          <div className="p-4 sm:p-6 md:p-8 bg-slate-50 flex items-center justify-center min-h-[380px] max-h-[75vh] overflow-auto">
            {certificate.image ? (
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#D1FAE5] bg-white shadow-lg max-w-full">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-auto max-h-[65vh] object-contain block"
                />
              </div>
            ) : (
              <div className="w-full max-w-lg bg-white rounded-2xl p-8 border-2 border-dashed border-[#A7F3D0] text-center space-y-4 shadow-sm">
                <div className="w-16 h-16 rounded-2xl bg-[#ECFDF5] text-[#064E3B] mx-auto flex items-center justify-center border border-[#A7F3D0]">
                  <FileText className="w-8 h-8 text-[#10B981]" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-[#ECFDF5] px-3 py-1 rounded-full border border-[#D1FAE5]">
                    {certificate.badge}
                  </span>
                  <h4 className="text-xl font-bold text-[#064E3B] mt-3">
                    {certificate.title}
                  </h4>
                  <p className="text-xs font-semibold text-[#10B981] mt-1">
                    Issuer: {certificate.issuer} • {certificate.date}
                  </p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {certificate.description}
                </p>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="bg-white px-5 sm:px-7 py-3.5 border-t border-[#D1FAE5] flex flex-wrap items-center justify-between gap-3 text-xs text-[#64748B]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
              <span>{certificate.verificationNote || "Verified Achievement"}</span>
            </div>

            <div className="flex items-center gap-3">
              {certificate.image && (
                <a
                  href={certificate.image}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-[#064E3B] bg-[#ECFDF5] hover:bg-[#D1FAE5] border border-[#A7F3D0] transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download File</span>
                </a>
              )}
              <button
                onClick={onClose}
                className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
