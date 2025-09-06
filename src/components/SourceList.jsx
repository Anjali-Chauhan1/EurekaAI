
import React from 'react';
import { ExternalLink } from "lucide-react";

export default function SourceList({ sources }) {
  if (!sources || sources.length === 0) {
    return <p className="text-gray-500">No sources available.</p>;
  }

  return (
    <div className="bg-gray-900/40 backdrop-blur-md p-6 rounded-2xl shadow-md mt-6">
      <h3 className="text-lg font-semibold text-cyan-400 mb-4">Sources</h3>
      <ul className="space-y-3">
        {sources.map((source, index) => (
          <li key={index}>
            {source.link ? (
              <a
                href={source.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700 text-cyan-300 hover:text-white transition shadow-sm"
              >
                <ExternalLink size={16} />
                {source.name || source.link}
              </a>
            ) : (
              <span className="text-gray-400">{source.name || "Unknown Source"}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
