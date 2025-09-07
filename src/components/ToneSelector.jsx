
import React from 'react';

export default function ToneSelector({ tone, setTone }) {
  const options = [
    { name: "Technical", description: "Detailed, precise, technical language" },
    { name: "Simplified", description: "Easy to understand, beginner-friendly" },
    { name: "Conversational", description: "Interactive chatbot-style with questions and engaging dialogue" }
  ];

  return (
    <div className="my-6">
      <h4 className="text-lg font-semibold text-gray-300 mb-3">Summary Tone</h4>
      <div className="flex flex-wrap gap-3">
        {options.map((opt) => {
          const isActive = tone === opt.name;
          return (
            <button
              key={opt.name}
              onClick={() => setTone(opt.name)}
              title={opt.description}
              className={`px-4 py-2.5 rounded-full font-medium transition-all duration-500 shadow-md text-sm
              ${isActive ? 'bg-gradient-to-r from-cyan-400 to-blue-600 text-white shadow-[0_0_20px_rgba(34,211,238,0.6)] scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.8)] hover:scale-110'
              : 'bg-gray-900/50 backdrop-blur-md text-gray-300 hover:bg-gray-800/70 hover:text-cyan-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:scale-105'
              }`}  >
              {opt.name}
            </button>
          );
        })}
      </div>
      {tone && (
        <p className="text-sm text-gray-400 mt-2 italic">
          {options.find(opt => opt.name === tone)?.description}
        </p>
      )}
    </div>
  );
}
