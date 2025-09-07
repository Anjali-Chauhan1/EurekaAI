import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchBar({ placeholder = "Enter research topic...", query, setQuery }) {
  const [localQuery, setLocalQuery] = useState('');
  const navigate = useNavigate();

  // Use controlled props if provided, otherwise use local state
  const currentQuery = query !== undefined ? query : localQuery;
  const currentSetQuery = setQuery !== undefined ? setQuery : setLocalQuery;

  const handleSearch = () => {
    if(currentQuery.trim() !== '') {
      navigate(`/topic/${encodeURIComponent(currentQuery)}`);
    }
  };

  const handleKeyPress = (e) => {
    if(e.key === 'Enter') handleSearch();
  }

  return (
    <div className="flex justify-center mt-10 w-full px-4">
  <input
    type="text"
    value={currentQuery}
    onChange={(e) => currentSetQuery(e.target.value)}
    onKeyDown={handleKeyPress}
    placeholder={placeholder}
    className="w-2/3 md:w-1/2 p-4 rounded-l-xl 
      bg-gray-900/60 backdrop-blur-md 
      text-white placeholder-gray-400
      border border-gray-600 focus:border-blue-500 
      focus:ring-2 focus:ring-blue-500/50
      transition duration-300"
  />
  <button
    onClick={handleSearch}
    className="bg-gradient-to-r from-blue-500 to-purple-600 
      hover:from-purple-600 hover:to-pink-500
      text-white px-8 rounded-r-xl font-semibold 
      transition-all duration-500 ease-in-out 
      transform hover:scale-105 hover:shadow-[0_0_15px_rgba(139,92,246,0.6)]"
  >
    Search
  </button>
</div>
  );
}
