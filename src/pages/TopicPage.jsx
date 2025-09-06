import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchResearchData } from "../api/researchApi";
import SummaryCard from "../components/SummaryCard";
import SourceList from "../components/SourceList";
import ToneSelector from "../components/ToneSelector";
import ExportButtons from "../components/ExportButtons";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";


export default function TopicPage() {
  const { topicName } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tone, setTone] = useState("Technical");

  useEffect(() => {
    setLoading(true);
    fetchResearchData(topicName).then((res) => {
      setData(res);
      setLoading(false);
    });
  }, [topicName]);

  if (loading)
    return (
      <div className="h-screen flex items-center justify-center bg-gray-950">
        <p className="animate-pulse text-gray-400 text-lg">
          🚀 Fetching research data...
        </p>
      </div>
    );

  return (
    <>
      <Navbar />
      <div className=" min-h-screen mx-auto px-15 pt-28 pb-16  space-y-12 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl pb-2 md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          Research Summary on{" "}
          <span className=" decoration-cyan-500/70">
            {topicName}
          </span>
        </motion.h2>

        {/* Tone Selector */}
        <div className="flex justify-center">
          <ToneSelector tone={tone} setTone={setTone} />
        </div>

        {/* Summary Section */}
        <div className="grid gap-6">
          {data.summary.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
            >
              <SummaryCard
                title={item.title}
                content={item.content}
                source={item.source}
              />
            </motion.div>
          ))}
        </div>

        {/* Sources */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900/40 backdrop-blur-md rounded-2xl shadow-lg p-6"
        >
          <h3 className="text-xl font-semibold mb-4 text-cyan-400">
            Sources
          </h3>
          <SourceList sources={data.sources} />
        </motion.div>



        {/* Export */}
        <div className="flex justify-center">
          <ExportButtons data={data} topic={topicName} />
        </div>
      </div>
      
    </>
  );
}
