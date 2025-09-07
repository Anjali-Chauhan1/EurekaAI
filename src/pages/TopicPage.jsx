
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchResearchData, fetchWebSearchResults, fetchGeminiPoints } from "../api/researchApi";
import SummaryCard from "../components/SummaryCard";
import SourceList from "../components/SourceList";
import ToneSelector from "../components/ToneSelector";
import ChatInterface from "../components/ChatInterface";
import ExportButtons from "../components/ExportButtons";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function TopicPage() {
  const { topicName } = useParams();
  const [showAllWebResults, setShowAllWebResults] = useState(false);
  const [geminiPoints, setGeminiPoints] = useState('');
  const [geminiLoading, setGeminiLoading] = useState(false);
  const [geminiError, setGeminiError] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tone, setTone] = useState("Technical");
  const [webResults, setWebResults] = useState([]);
  const [webLoading, setWebLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetchResearchData(topicName).then((res) => {
      setData(res);
      setLoading(false);
    });
    setWebLoading(true);
    fetchWebSearchResults(topicName).then((results) => {
      setWebResults(results);
      setWebLoading(false);
      setGeminiLoading(true);
      setGeminiError('');
      fetchGeminiPoints(topicName, results, tone)
        .then((points) => {
          setGeminiPoints(points);
          if (!points) {
            setGeminiError('No summary returned.');
          }
        })
        .catch((err) => {
          setGeminiError('Error fetching summary: ' + (err?.message || err));
        })
        .finally(() => {
          setGeminiLoading(false);
        });
    });
  }, [topicName]);

  useEffect(() => {
    if (webResults.length > 0 && tone) {
      setGeminiLoading(true);
      setGeminiError('');
      fetchGeminiPoints(topicName, webResults, tone)
        .then((points) => {
          setGeminiPoints(points);
          if (!points) {
            setGeminiError('No summary returned.');
          }
        })
        .catch((err) => {
          setGeminiError('Error fetching summary: ' + (err?.message || err));
        })
        .finally(() => {
          setGeminiLoading(false);
        });
    }
  }, [tone, webResults, topicName]);

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

        <div className="flex justify-center">
          <ToneSelector tone={tone} setTone={setTone} />
        </div>

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

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900/40 backdrop-blur-md rounded-2xl shadow-lg p-6"
        >
          <h3 className="text-xl font-semibold mb-4 text-violet-400">
            AI Research Points
          </h3>
          {geminiLoading ? (
            <p className="text-gray-400">Loading research points...</p>
          ) : geminiError ? (
            <p className="text-red-400 italic">{geminiError}</p>
          ) : geminiPoints ? (
            <div className="text-gray-200 whitespace-pre-line" dangerouslySetInnerHTML={{ __html: geminiPoints }} />
          ) : (
            <p className="text-gray-500 italic">No Summary available.</p>
          )}
        </motion.div>

        <ChatInterface 
          topic={topicName}
          webResults={webResults}
          isVisible={tone === "Conversational"}
        />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900/40 backdrop-blur-md rounded-2xl shadow-lg p-6"
        >
          <h3 className="text-xl font-semibold mb-4 text-blue-400">
            Live Web Search Results
          </h3>
          {webLoading ? (
            <p className="text-gray-400">Loading web results...</p>
          ) : (
            <>
              <ul className="space-y-3">
                {(showAllWebResults ? webResults : webResults.slice(0, 5)).map((item, idx) => (
                  <li key={idx} className="border-b border-gray-700 pb-2">
                    <div className="font-medium text-blue-300 mb-1 flex flex-col md:flex-row md:items-center md:gap-2">
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {item.title}
                      </a>
                      <span className="text-xs text-gray-400 md:ml-2">{item.displayed_link || item.link}</span>
                    </div>
                    <div className="text-gray-300 text-sm mt-1">
                      {item.snippet ? (
                        <>
                          <strong>Summary:</strong> {item.snippet}
                        </>
                      ) : (
                        <span className="italic text-gray-500">No summary available.</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              {webResults.length > 5 && (
                <button
                  className="mt-4 px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded shadow"
                  onClick={() => setShowAllWebResults(v => !v)}
                >
                  {showAllWebResults ? 'Show Less' : 'Show More'}
                </button>
              )}
            </>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900/40 backdrop-blur-md rounded-2xl shadow-lg p-6"
        >
          <h3 className="text-xl font-semibold mb-4 text-cyan-400">
            Sources
          </h3>
          <SourceList sources={[
            ...(data.sources || []),
            ...webResults.map(item => ({
              name: item.title,
              link: item.link
            }))
          ]} />
        </motion.div>

        <div className="flex justify-center">
          <ExportButtons 
            data={data} 
            topic={topicName} 
            geminiPoints={geminiPoints}
            webResults={webResults}
          />
        </div>
      </div>
    </>
  );
}
