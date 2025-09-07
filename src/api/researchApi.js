import axios from 'axios';

export async function fetchGeminiPoints(query, webResults, tone = "Technical") {
  try {
    console.log('Calling Gemini API with:', { query, webResults: webResults.length, tone });
    const res = await axios.post('http://localhost:5000/api/gemini', { query, webResults, tone });
    console.log('Gemini API response:', res.data);
    return res.data.points;
  } catch (err) {
    console.error('Gemini API error:', err.response?.data || err.message);
    throw err;
  }
}

export async function fetchWebSearchResults(query) {
  try {
    console.log('Fetching web search results for:', query);
    const res = await axios.get('http://localhost:5000/api/search', { params: { q: query } });
    console.log('Web search results:', res.data.results?.length || 0, 'results found');
    return res.data.results;
  } catch (err) {
    console.error('Web search error:', err.response?.data || err.message);
    return [];
  }
}

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
