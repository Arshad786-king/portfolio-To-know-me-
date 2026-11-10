import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  MessageSquare,
  Clock
} from 'lucide-react';
import { Github, Linkedin } from '../components/BrandIcons';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { personalInfo } from '../data/personalInfo';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState(null); // null | 'success' | 'error'

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject line is required';
    if (!formData.message.trim()) {
      newErrors.message = 'Message content cannot be blank';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Please provide at least 15 characters for context';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    // Since this initial frontend does not have a live email gateway server connected,
    // we generate a pre-filled mailto intent and honestly inform the user rather than faking an HTTP 200 delivery.
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedStatus('success');

      // Trigger mailto intent with verified contents
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        `[Portfolio Inquiry] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Sender Name: ${formData.name}\nSender Email: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      window.location.href = mailtoUrl;
    }, 800);
  };

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Get In Touch"
          title="Let's Connect &amp; Collaborate"
          subtitle="Feel free to reach out for software engineering internships, technical collaborations, or questions about any of my featured projects."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 my-12 items-start">
          {/* Left Column: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl border-2 border-[#D1FAE5] p-6 sm:p-8 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-[#064E3B]">
                Direct Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                I am actively seeking software development internship opportunities and typically reply within 24 hours.
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 hover:bg-[#ECFDF5] border border-slate-200 hover:border-[#A7F3D0] transition-colors group"
                >
                  <div className="p-2.5 rounded-xl bg-white text-[#064E3B] border border-slate-200 group-hover:border-[#10B981] shadow-xs">
                    <Mail className="w-5 h-5 text-[#10B981]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Email Address
                    </span>
                    <span className="text-sm font-semibold text-slate-800 group-hover:text-[#064E3B]">
                      {personalInfo.email}
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="p-2.5 rounded-xl bg-white text-[#064E3B] border border-slate-200 shadow-xs">
                    <MapPin className="w-5 h-5 text-[#10B981]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Location
                    </span>
                    <span className="text-sm font-semibold text-slate-800">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="p-2.5 rounded-xl bg-white text-[#064E3B] border border-slate-200 shadow-xs">
                    <Phone className="w-5 h-5 text-[#10B981]" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Phone Number
                    </span>
                    <span className="text-sm font-semibold text-slate-800">
                      {personalInfo.phone}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                  Professional Profiles:
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#ECFDF5] hover:bg-[#D1FAE5] text-xs font-bold text-[#064E3B] border border-[#A7F3D0] transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#ECFDF5] hover:bg-[#D1FAE5] text-xs font-bold text-[#064E3B] border border-[#A7F3D0] transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Integration Notice Box */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1.5">
              <span className="font-bold text-slate-800 block">Email Gateway Transparency:</span>
              <p>
                This portfolio operates without an undisclosed backend email proxy. Submitting the form opens your preferred email client directly addressed to <strong>{personalInfo.email}</strong>, guaranteeing verifiable message dispatch.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border-2 border-[#D1FAE5] p-6 sm:p-8 md:p-10 shadow-lg">
              <h3 className="text-2xl font-bold text-[#064E3B] mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Fill in the details below to initiate direct email contact.
              </p>

              {submittedStatus === 'success' && (
                <div className="mb-6 p-4 rounded-2xl bg-[#ECFDF5] border border-[#10B981] flex items-start gap-3 text-xs text-[#064E3B]">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold block text-sm">Email Client Launched!</strong>
                    <span>Your mail client has been opened with your composed inquiry for {personalInfo.email}. If your browser blocked it, you can email directly at {personalInfo.email}.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g., Alex Johnson"
                    className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 border transition-all text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#10B981] ${
                      errors.name ? 'border-red-400 bg-red-50/50' : 'border-slate-200 focus:border-transparent'
                    }`}
                  />
                  {errors.name && (
                    <span className="text-[11px] text-red-500 mt-1 block font-medium">
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Your Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g., alex@company.com"
                    className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 border transition-all text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#10B981] ${
                      errors.email ? 'border-red-400 bg-red-50/50' : 'border-slate-200 focus:border-transparent'
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[11px] text-red-500 mt-1 block font-medium">
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g., Internship Opportunity / Project Collaboration"
                    className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 border transition-all text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#10B981] ${
                      errors.subject ? 'border-red-400 bg-red-50/50' : 'border-slate-200 focus:border-transparent'
                    }`}
                  />
                  {errors.subject && (
                    <span className="text-[11px] text-red-500 mt-1 block font-medium">
                      {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 border transition-all text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#10B981] ${
                      errors.message ? 'border-red-400 bg-red-50/50' : 'border-slate-200 focus:border-transparent'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[11px] text-red-500 mt-1 block font-medium">
                      {errors.message}
                    </span>
                  )}
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    icon={Send}
                    iconPosition="right"
                    className="w-full sm:w-auto"
                  >
                    {isSubmitting ? 'Preparing Inquiry...' : 'Send Inquiry Message'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
