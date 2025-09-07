const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

router.get('/', async (req, res) => {
  const query = req.query.q;
  if (!query) return res.status(400).json({ error: 'Missing query parameter' });

  try {
    const serpApiUrl = `https://serpapi.com/search.json?q=${encodeURIComponent(query)}&api_key=${process.env.SERPAPI_KEY}&num=10`;
    const response = await axios.get(serpApiUrl);
    const results = (response.data.organic_results || []).slice(0, 10).map(r => ({
      title: r.title,
      link: r.link,
      snippet: r.snippet || '',
      displayed_link: r.displayed_link || '',
      source: r.source || ''
    }));
    res.json({ results });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
