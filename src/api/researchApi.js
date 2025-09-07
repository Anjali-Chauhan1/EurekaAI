// Fetch live web search results from backend (SerpAPI)
export async function fetchWebSearchResults(query) {
  try {
    const res = await axios.get('http://localhost:5000/api/search', { params: { q: query } });
    return res.data.results;
  } catch (err) {
    return [];
  }
}

import axios from 'axios';

const API_BASE = 'http://localhost:5000/api/research';


export async function fetchResearchData(topic) {
  try {
    const res = await axios.get(API_BASE);
    
    let data = res.data;
    if (topic) {
      data = data.filter(item => item.query && item.query.toLowerCase().includes(topic.toLowerCase()));
    }
    
    return {
      summary: data.map(item => ({
        title: item.query,
        content: item.summary,
        source: (item.sources && item.sources[0]) ? {
          name: item.sources[0].title || '',
          link: item.sources[0].url || ''
        } : { name: '', link: '' }
      })),
      sources: data.flatMap(item => item.sources || [])
    };
  } catch (err) {
    return { summary: [], sources: [], error: err.message };
  }
}


export async function postResearchData({ query, summary, sources }) {
  try {
    const res = await axios.post(API_BASE, { query, summary, sources });
    return res.data;
  } catch (err) {
    throw err;
  }
}
