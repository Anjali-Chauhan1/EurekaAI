const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

router.post('/', async (req, res) => {
  const { query, webResults, tone = "Technical" } = req.body;
  if (!query || !webResults) {
    console.error('Missing query or webResults in request', req.body);
    return res.status(400).json({ error: 'Missing query or webResults' });
  }

  try {
    const toneInstructions = {
      "Technical": "Use precise technical language, include detailed specifications, focus on technical aspects, and use industry-specific terminology. Provide technical details and specifications where relevant.",
      "Simplified": "Use simple, easy-to-understand language. Avoid jargon and technical terms. Explain concepts in a way that a beginner could understand. Use analogies and examples when helpful.",
      "Conversational": "Act like a friendly AI chatbot having a conversation with the user. Use a warm, engaging tone with phrases like 'Hey there!', 'You know what's interesting?', 'Let me tell you about...', 'Here's what I found fascinating...'. Ask rhetorical questions, use emojis occasionally, and make the content feel like a personal chat. Include interactive elements like 'What do you think?' or 'Isn't that amazing?' Make it feel like you're genuinely excited to share this information with a friend."
    };

    const prompt = tone === "Conversational" 
      ? `Hey! I'm your friendly AI research assistant, and I'm super excited to share what I found about "${query}"! 🤖

Here's what I discovered from my research:
${webResults.map((r, i) => `${i + 1}. ${r.title}: ${r.snippet}`).join('\n')}

Let me break this down for you in a fun, chatty way:

**🔍 What's Really Cool About ${query}:**
(Share the most interesting discoveries like you're telling a friend)

**🆕 What's Happening Right Now:**
(Talk about recent developments like breaking news to a buddy)

**📚 Some Background Story:**
(Give context like you're explaining the history to someone curious)

**💡 Fun Facts & Cool Details:**
(Share the most fascinating tidbits that would make someone go "wow!")

Remember to:
- Use "you" to directly address the reader
- Ask engaging questions like "Can you believe that?" or "Isn't that fascinating?"
- Use casual expressions and emojis where appropriate
- Make it feel like a personal conversation
- Show genuine excitement about the topic
- End with something like "What would you like to know more about?" or "Pretty amazing stuff, right?"

Write as if you're chatting with a curious friend who asked you about this topic!`
      : `You are a research analyst. Based on the topic "${query}" and the following web search results, provide a comprehensive research summary.

WRITING STYLE: ${toneInstructions[tone] || toneInstructions["Technical"]}

Web Search Results:
${webResults.map((r, i) => `${i + 1}. Title: ${r.title}\n   Summary: ${r.snippet}`).join('\n\n')}

Please provide a detailed analysis with the following structure:

**Key Findings:**
- Summarize the main discoveries and facts about ${query}
- Include important statistics, dates, or numbers when available

**Current Developments:**
- Recent news, updates, or changes related to ${query}
- Ongoing projects or future plans

**Background Information:**
- Historical context or foundational information
- Key players, organizations, or entities involved

**Notable Details:**
- Interesting facts or unique aspects
- Technical specifications or features (if applicable)

Format your response with clear headings and bullet points for easy reading. Make the summary comprehensive but concise, focusing on the most valuable insights from the search results. Remember to maintain the ${tone.toLowerCase()} tone throughout your response.`;

    const geminiApiUrl = 'https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=' + process.env.GEMINI_API_KEY;
    console.log('Calling Gemini API with prompt:', prompt);
    const response = await axios.post(geminiApiUrl, {
      contents: [{ parts: [{ text: prompt }] }]
    });
    console.log('Full Gemini API response:', JSON.stringify(response.data, null, 2));
    let text = response.data.candidates?.[0]?.content?.parts?.[0]?.text || '';
    if (!text) {
      console.warn('No summary text returned from API. Response:', JSON.stringify(response.data));
    }
    text = text.replace(/\*+\s*\*\*(.*?)\*\*/g, '<b>• $1</b>');
    text = text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
    res.json({ points: text });
  } catch (err) {
    if (err.response) {
      console.error('API error response:', JSON.stringify(err.response.data, null, 2));
    } else {
      console.error('API error:', err.message);
    }
    res.status(500).json({ error: err.response?.data?.error?.message || err.message });
  }
});

module.exports = router;
