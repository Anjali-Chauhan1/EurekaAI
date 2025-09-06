
import React from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { motion } from "framer-motion";
import { Search, BarChart3, FileText, Share2 } from "lucide-react";

export default function Home() {
  const nav = useNavigate();

  const features = [
   {
    title: "Smart Search",
    desc: "Enter any topic and instantly get curated, high-quality insights.",
    color: "from-cyan-500/30 to-blue-600/30",
    icon: <Search className="text-cyan-300 w-7 h-7" />,
  },
  {
    title: "Trend Intelligence",
    desc: "Compare past vs present findings to discover hidden patterns.",
    color: "from-purple-500/30 to-pink-600/30",
    icon: <BarChart3 className="text-purple-300 w-7 h-7" />,
  },
  {
    title: "Clean Summaries",
    desc: "Get concise reports with key points, pros & cons, and citations.",
    color: "from-green-500/30 to-emerald-600/30",
    icon: <FileText className="text-green-300 w-7 h-7" />,
  },
  {
    title: "One-Click Export",
    desc: "Download your research as PDF or Markdown instantly.",
    color: "from-orange-500/30 to-red-600/30",
    icon: <Share2 className="text-orange-300 w-7 h-7" />,
  },
  ];

  return (
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory">
     
      <section className="h-screen flex flex-col items-center justify-center 
        bg-gradient-to-br from-black via-gray-900 to-gray-800 text-center px-6 snap-start">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1
            className="text-6xl md:text-7xl font-bold pb-2
            text-transparent bg-clip-text 
            bg-gradient-to-r from-blue-300 via-indigo-400 to-purple-500
            tracking-tight leading-tight drop-shadow-sm"
          >
            EurekaAI
          </h1>

          <p className="mt-6 text-gray-300 text-xl md:text-2xl leading-relaxed font-light">
            Discover insights faster — summarize research, track trends, 
            and explore knowledge evolution over time ✨
          </p>

          <div className="mt-10 w-full max-w-3xl mx-auto">
            <SearchBar />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="mt-16 flex flex-wrap gap-6 justify-center"
        >
          <span className="px-5 py-3 rounded-2xl text-xl 
            bg-blue-500/20 backdrop-blur-md text-white font-medium 
            border border-blue-400/40 hover:bg-blue-500/30 
            cursor-pointer transition [text-shadow:0_0_10px_#3b82f6]">
            Quantum Computing
          </span>

          <span className="px-5 py-3 rounded-2xl text-xl 
            bg-purple-500/20 backdrop-blur-md text-white font-medium 
            border border-purple-400/40 hover:bg-purple-500/30 
            cursor-pointer transition [text-shadow:0_0_10px_#a855f7]">
            Alzheimer’s Research
          </span>

          <span className="px-5 py-3 rounded-2xl text-xl 
            bg-green-500/20 backdrop-blur-md text-white font-medium 
            border border-green-400/40 hover:bg-green-500/30 
            cursor-pointer transition [text-shadow:0_0_10px_#22c55e]">
            AI Ethics
          </span>
        </motion.div>
      </section>

      
      <section className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center snap-start px-6 py-20">
  
  <motion.h2
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-5xl md:text-6xl font-extrabold mb-6 text-center bg-gradient-to-r from-blue-300 via-indigo-400 to-purple-500
            tracking-tight leading-tight drop-shadow-sm bg-clip-text text-transparent"
  >
    Explore Our Features
  </motion.h2>


  <p className="mt-2 text-gray-400 text-lg md:text-xl text-center max-w-2xl mb-16">
    Discover how AI empowers your research journey with smarter insights,
    cleaner summaries, and futuristic tools.
  </p>

 
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl w-full">
    {features.map((f, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.2, duration: 0.6 }}
        whileHover={{ scale: 1.08 }}
        className="relative group rounded-3xl shadow-xl p-8 bg-white/10 backdrop-blur-lg border border-cyan-400/40 cursor-pointer overflow-hidden"
      >
       
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 1 }}
          className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-500/30 border border-cyan-300/50 mb-6 shadow-lg"
        >
          {f.icon}
        </motion.div>

        
        <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent mb-3">
          {f.title}
        </h3>

       
        <p className="text-gray-300 text-base leading-relaxed">{f.desc}</p>

      
        <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition duration-500 bg-gradient-to-r from-cyan-400/40 to-transparent rounded-3xl blur-2xl"></div>
      </motion.div>
    ))}
  </div>
</section>



      
    </div>
  );
}
