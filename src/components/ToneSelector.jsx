
import React from 'react';

export default function ToneSelector({ tone, setTone }) {
  const options = ["Technical", "Simplified", "Conversational"];

  return (
    <div className="flex flex-wrap gap-3 my-6">
      {options.map((opt) => {
        const isActive = tone === opt;
        return (
          <button
            key={opt}
            onClick={() => setTone(opt)}
            className={`px-5 py-2.5 rounded-full font-medium transition-all duration-500 shadow-md
            ${isActive ? 'bg-gradient-to-r from-cyan-400 to-blue-600 text-white shadow-[0_0_20px_rgba(34,211,238,0.6)] scale-110 hover:shadow-[0_0_30px_rgba(34,211,238,0.8)] hover:scale-115'
            : 'bg-gray-900/50 backdrop-blur-md text-gray-300 hover:bg-gray-800/70 hover:text-cyan-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)]'
  }`}

          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}
