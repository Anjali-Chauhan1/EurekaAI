const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

router.post('/', async (req, res) => {
  const { message, topic, webResults, chatHistory } = req.body;
  
  if (!message || !topic) {
    console.error('Missing message or topic in chat request', req.body);
    return res.status(400).json({ error: 'Missing message or topic' });
  }

  try {
    const recentHistory = chatHistory?.slice(-6) || []; 
    const conversationContext = recentHistory
      .filter(msg => msg.type === 'user' || msg.type === 'bot')
      .map(msg => `${msg.type === 'user' ? 'User' : 'Assistant'}: ${msg.content}`)
      .join('\n');

    const prompt = `You are a friendly, enthusiastic AI research assistant having a conversation about "${topic}". 

CONTEXT: Here's what we know about ${topic}:
${webResults && webResults.length > 0 ? webResults.map((r, i) => `${i + 1}. ${r.title}: ${r.snippet}`).join('\n') : 'No additional context available.'}

RECENT CONVERSATION:
${conversationContext || 'This is the start of our conversation.'}

USER'S NEW MESSAGE: "${message}"

INSTRUCTIONS:
- Respond in a friendly, conversational chatbot style
- Use emojis occasionally to keep it engaging 😊
- Reference the research data when relevant
- If the user asks for clarification, explanations, or deeper insights about ${topic}, provide them
- If the user asks something unrelated to ${topic}, gently redirect back to the topic
- Keep responses concise but informative (2-4 sentences unless more detail is specifically requested)
- Use phrases like "Great question!", "That's interesting!", "Let me explain...", etc.
- Address the user directly with "you"
- Show enthusiasm about sharing knowledge

Respond as the AI assistant:`;

    console.log('Chat API: Sending prompt to Gemini:', prompt.substring(0, 200) + '...');
    
    const geminiApiUrl = 'https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=' + process.env.GEMINI_API_KEY;
    
    const response = await axios.post(geminiApiUrl, {
      contents: [{ parts: [{ text: prompt }] }]
    });

    console.log('Chat API: Received response from Gemini');
    
    let botResponse = response.data.candidates?.[0]?.content?.parts?.[0]?.text || 'I apologize, but I could not generate a response. Please try asking again!';
    
    botResponse = botResponse.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
    
    console.log('Chat API: Sending response to frontend');
    res.json({ response: botResponse });
    
  } catch (err) {
    console.error('Chat API error details:', {
      message: err.message,
      status: err.response?.status,
      data: err.response?.data
    });
    res.status(500).json({ 
      error: 'Sorry, I encountered an error while processing your message. Please try again!' 
    });
  }
});

module.exports = router;
