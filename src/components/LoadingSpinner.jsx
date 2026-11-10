import React from 'react';

export default function LoadingSpinner() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-8">
      <div className="relative w-12 h-12">
        <div className="w-12 h-12 rounded-full border-4 border-[#D1FAE5] border-t-[#10B981] animate-spin" />
      </div>
      <span className="mt-4 text-xs font-semibold uppercase tracking-wider text-[#064E3B]">
        Loading Arshad's Portfolio...
      </span>
    </div>
  );
}

