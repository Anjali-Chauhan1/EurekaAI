import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-black to-black text-gray-300 relative">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        <div>
          <h2 className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Research Assistant
          </h2>
          <p className="mt-4 text-gray-400 leading-relaxed">
            Empowering researchers with AI-driven insights. Get comprehensive
            summaries, reliable sources, and data visualizations for any
            research topic.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-cyan-400 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Documentation</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Help Center</a></li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-xl font-semibold text-cyan-400 mb-4">Features</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">AI-Powered Summaries</a></li>
            <li><a href="#" className="hover:text-white transition">Source Verification</a></li>
            <li><a href="#" className="hover:text-white transition">Export Tools</a></li>
            <li><a href="#" className="hover:text-white transition">Multi-tone Support</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 py-6 text-center text-sm text-gray-500">
        <p className="flex items-center justify-center gap-2">
          Made with <Heart className="text-red-500 w-4 h-4" /> by the EurekaAI Team
        </p>
        <p className="mt-2">© 2025 AI Research Assistant. All rights reserved.</p>
      </div>
    </footer>
  );
}
