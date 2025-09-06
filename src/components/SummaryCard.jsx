import React from "react";
import { ExternalLink } from "lucide-react";

export default function SummaryCard({ title, content, source }) {
  return (
    <div className="bg-gray-900/40 backdrop-blur-md rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
      {/* Title */}
      <h3 className="text-xl font-semibold text-cyan-400 mb-3">{title}</h3>

      {/* Content */}
      <p className="text-gray-300 mb-5 leading-relaxed">{content}</p>

      {/* Source Button */}
      {source && source.name && source.link && (
        <a
          href={source.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 transition"
        >
          <ExternalLink size={16} />
          {source.name}
        </a>
      )}
    </div>
  );
}
