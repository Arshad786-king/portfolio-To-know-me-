import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'left',
  download,
  target,
  rel,
  disabled = false,
  type = 'button'
}) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2 shadow-sm",
    lg: "px-6 py-3.5 text-base gap-2.5 shadow-md",
  };

  const variants = {
    primary: "bg-[#10B981] hover:bg-[#059669] text-white focus:ring-[#10B981] shadow-emerald-500/20 active:scale-[0.98]",
    secondary: "bg-white hover:bg-[#ECFDF5] text-[#064E3B] border border-[#D1FAE5] hover:border-[#10B981] focus:ring-[#10B981]",
    deep: "bg-[#064E3B] hover:bg-[#043d2e] text-white focus:ring-[#064E3B] shadow-deep-green/20 active:scale-[0.98]",
    outline: "bg-transparent text-[#064E3B] border-2 border-[#10B981] hover:bg-[#10B981] hover:text-white focus:ring-[#10B981]",
    ghost: "bg-transparent text-[#1F2937] hover:bg-[#ECFDF5] hover:text-[#064E3B] focus:ring-[#10B981]",
    subtle: "bg-[#ECFDF5] text-[#064E3B] hover:bg-[#D1FAE5] border border-[#A7F3D0] focus:ring-[#10B981]"
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variants[variant] || variants.primary} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        download={download}
        target={target || (download ? undefined : "_blank")}
        rel={rel || (download ? undefined : "noopener noreferrer")}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      {content}
    </button>
  );
}

