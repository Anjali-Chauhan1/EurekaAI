import React from 'react';

export default function ExportButtons({ data, topic }) {
  const handleExportPDF = () => {
    alert("PDF Exported !"); 
  };
  const handleExportMD = () => {
    alert("Markdown Exported !");
  };
  return (
    <div className="flex gap-4 mt-6">
  {/* Export PDF Button */}
  <button
    onClick={handleExportPDF}
    className="px-6 py-3 rounded-full font-semibold text-white 
      bg-purple-500/80 backdrop-blur-sm 
      shadow-md shadow-purple-500/30 
      hover:bg-purple-500/90 hover:shadow-lg hover:shadow-purple-500/50 
      transition-all duration-300"
  >
    Export PDF
  </button>

  {/* Export Markdown Button */}
  <button
    onClick={handleExportMD}
    className="px-6 py-3 rounded-full font-semibold text-white 
      bg-green-500/80 backdrop-blur-sm 
      shadow-md shadow-green-400/30 
      hover:bg-green-500/90 hover:shadow-lg hover:shadow-green-400/50 
      transition-all duration-300"
  >
    Export Markdown
  </button>
</div>
  );
}
