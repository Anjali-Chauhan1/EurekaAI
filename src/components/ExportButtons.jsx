import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default function ExportButtons({ data, topic, geminiPoints, webResults }) {
  const handleExportPDF = async () => {
    try {
      const pdf = new jsPDF();
      const pageWidth = pdf.internal.pageSize.getWidth();
      const margin = 20;
      let yPosition = margin;

      pdf.setFontSize(20);
      pdf.setFont(undefined, 'bold');
      pdf.text(`Research Report: ${topic}`, margin, yPosition);
      yPosition += 20;

      if (geminiPoints) {
        pdf.setFontSize(16);
        pdf.setFont(undefined, 'bold');
        pdf.text('AI Research Points', margin, yPosition);
        yPosition += 10;
        
        pdf.setFontSize(12);
        pdf.setFont(undefined, 'normal');
        const cleanText = geminiPoints.replace(/<[^>]*>/g, '').replace(/&[^;]*;/g, '');
        const splitText = pdf.splitTextToSize(cleanText, pageWidth - 2 * margin);
        pdf.text(splitText, margin, yPosition);
        yPosition += splitText.length * 6 + 15;
      }

      if (webResults && webResults.length > 0) {
        pdf.setFontSize(16);
        pdf.setFont(undefined, 'bold');
        pdf.text('Sources', margin, yPosition);
        yPosition += 10;
        
        pdf.setFontSize(12);
        pdf.setFont(undefined, 'normal');
        
        webResults.forEach((result, index) => {
          if (yPosition > pdf.internal.pageSize.getHeight() - 30) {
            pdf.addPage();
            yPosition = margin;
          }
          pdf.text(`${index + 1}. ${result.title}`, margin, yPosition);
          yPosition += 6;
          if (result.link) {
            pdf.setTextColor(0, 0, 255);
            pdf.text(`   ${result.link}`, margin, yPosition);
            pdf.setTextColor(0, 0, 0);
            yPosition += 8;
          }
        });
      }

      pdf.save(`${topic}-research-report.pdf`);
      alert("PDF exported successfully!");
    } catch (error) {
      console.error('Error exporting PDF:', error);
      alert("Error exporting PDF. Please try again.");
    }
  };

  const handleExportMD = () => {
    try {
      let markdownContent = `# Research Report: ${topic}\n\n`;
      
      if (geminiPoints) {
        markdownContent += `## AI Research Points\n\n`;
        const cleanText = geminiPoints.replace(/<[^>]*>/g, '').replace(/&[^;]*;/g, '');
        markdownContent += `${cleanText}\n\n`;
      }
      
      if (webResults && webResults.length > 0) {
        markdownContent += `## Sources\n\n`;
        webResults.forEach((result, index) => {
          markdownContent += `${index + 1}. [${result.title}](${result.link})\n`;
        });
      }
      
      const blob = new Blob([markdownContent], { type: 'text/markdown' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${topic}-research-report.md`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      alert("Markdown exported successfully!");
    } catch (error) {
      console.error('Error exporting Markdown:', error);
      alert("Error exporting Markdown. Please try again.");
    }
  };
  return (
    <div className="flex gap-4 mt-6">
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
