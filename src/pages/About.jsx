
import React from "react";
import { motion } from "framer-motion";

export default function LandingPage() {
  const usp = [
    {
      title: "AI-Powered Summaries",
      desc: "Quickly condense long, complex papers into clear and useful insights.",
      color: "from-cyan-500/20 to-blue-600/20 border-cyan-400/40 [text-shadow:0_0_10px_#22d3ee]",
    },
    {
      title: "Source Validation",
      desc: "Built-in credibility check to verify information before you trust it.",
      color: "from-purple-500/20 to-pink-600/20 border-purple-400/40 [text-shadow:0_0_10px_#a855f7]",
    },
    {
      title: "Tone Flexibility",
      desc: "Choose how you want your summaries: Conversational, Simplified, or Technical.",
      color: "from-green-500/20 to-emerald-600/20 border-green-400/40 [text-shadow:0_0_10px_#22c55e]",
    },
    {
      title: "Smart Export Options",
      desc: "Save and share results instantly in multiple formats (PDF, DOCX, etc.).",
      color: "from-pink-500/20 to-yellow-500/20 border-pink-400/40 [text-shadow:0_0_10px_#f43f5e]",
    },
  ];

  return (
    <div className="h-screen  overflow-y-scroll snap-y snap-mandatory text-white">
      <section className="h-screen w-full snap-start flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-black via-gray-900 to-gray-800">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold pb-3 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg"
        >
          About EurekaAI
        </motion.h1>
        <p className=" mt-9 max-w-3xl  text-gray-300 text-xl md:text-2xl leading-relaxed font-light">
          AI Research Agent is a smart research assistant that automatically
          searches, summarizes, and tracks research trends for any topic.
        </p>
        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          className="mt-10 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold shadow-lg hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition"
        >
          Explore More
        </motion.a>
      </section>

      <section
        id="usp"
        className="h-screen snap-start flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 px-6"
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl pb-3 font-bold mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
        >
          What Makes Us Unique
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
          {usp.map((u, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.7 }}
              whileHover={{ scale: 1.05 }}
              className={`rounded-2xl p-6 backdrop-blur-md border ${u.color} shadow-xl transition cursor-pointer`}
            >
              <h3 className="text-2xl font-semibold mb-3">{u.title}</h3>
              <p className="text-gray-200">{u.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

<section className="h-screen snap-start flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 px-6">
  <motion.h2
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-300 via-indigo-400 to-purple-500
            tracking-tight leading-tight drop-shadow-sm bg-clip-text text-transparent"
  >
    How It Works
  </motion.h2>

  
  <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-7xl">
   
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex-1 bg-white/10 backdrop-blur-md border border-cyan-400/60 shadow-xl rounded-3xl p-8 text-center min-h-[250px] md:min-h-[300px]"
    >
      <h3 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">Step 1</h3>
      <p className="text-gray-200 text-lg">
        User enters a research topic or query.
      </p>
    </motion.div>

    <div className="hidden md:flex text-7xl font-extrabold mx-6 animate-pulse bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
      ➝
    </div>

    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex-1 bg-white/10 backdrop-blur-md border border-cyan-400/60 shadow-xl rounded-3xl p-8 text-center min-h-[250px] md:min-h-[300px"
    >
      <h3 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">Step 2</h3>
      <p className="text-gray-200 text-lg">
        The agent automatically fetches top articles and extracts key content.
      </p>
    </motion.div>

    <div className="hidden md:flex text-7xl font-extrabold mx-6 animate-pulse bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
      ➝
    </div>

   
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex-1 bg-white/10 backdrop-blur-md border border-cyan-400/60 shadow-xl rounded-3xl p-8 text-center min-h-[250px] md:min-h-[300px"
    >
      <h3 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">Step 3</h3>
      <p className="text-gray-200 text-lg">
        Summaries are generated with bullet points, pros/cons, and citation links.
      </p>
    </motion.div>

    <div className="hidden md:flex text-7xl font-extrabold mx-6 animate-pulse bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
      ➝
    </div>

  
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex-1 bg-white/10 backdrop-blur-md border border-cyan-400/60 shadow-xl rounded-3xl p-8 text-center min-h-[250px] md:min-h-[300px"
    >
      <h3 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">Step 4</h3>
      <p className="text-gray-200 text-lg">
        Export the report in PDF or Markdown format for offline use.
      </p>
    </motion.div>
  </div>
</section>



    </div>
  );
}
