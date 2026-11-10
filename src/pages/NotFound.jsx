import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';
import Button from '../components/Button';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center pt-28 pb-20 px-4">
      <div className="max-w-lg w-full text-center space-y-6 bg-white p-8 md:p-12 rounded-3xl border-2 border-[#D1FAE5] shadow-xl">
        <div className="w-20 h-20 rounded-full bg-[#ECFDF5] text-[#064E3B] mx-auto flex items-center justify-center font-extrabold text-3xl border border-[#A7F3D0]">
          404
        </div>

        <h1 className="text-3xl font-extrabold text-[#064E3B] tracking-tight">
          Page Not Found
        </h1>

        <p className="text-sm text-slate-600 leading-relaxed">
          The page or route you requested does not exist or may have moved. Please check the URL or use the navigation below to return.
        </p>

        <div className="pt-4 flex flex-wrap justify-center gap-3">
          <Button to="/" variant="primary" size="md" icon={Home}>
            Return Home
          </Button>
          <Button to="/projects" variant="secondary" size="md">
            View Projects
          </Button>
        </div>
      </div>
    </div>
  );
}

