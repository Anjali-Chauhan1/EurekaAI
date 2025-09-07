import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';
import axios from 'axios';

export default function ChatInterface({ topic, webResults, isVisible }) {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: `Hey there! 👋 I'm your AI research assistant. I've already analyzed "${topic}" for you. Feel free to ask me anything about this topic - I can explain things differently, dive deeper into specific aspects, or answer any questions you have! What would you like to know?`,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      console.log('Sending chat message:', { inputMessage, topic, webResults: webResults?.length });
      
      const response = await axios.post('https://novasearch-7x59.onrender.com/api/chat', {
        message: inputMessage,
        topic: topic,
        webResults: webResults,
        chatHistory: messages
      });

      console.log('Received chat response:', response.data);

      const botMessage = {
        type: 'bot',
        content: response.data.response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Chat error details:', error.response?.data || error.message);
      const errorMessage = {
        type: 'bot',
        content: `Sorry, I'm having trouble responding right now. Error: ${error.response?.data?.error || error.message}`,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!isVisible) return null;

  return (
    <div className="bg-gray-900/40 backdrop-blur-md rounded-2xl shadow-lg p-6 mt-6">
      <h3 className="text-xl font-semibold mb-4 text-violet-400 flex items-center gap-2">
        <Bot size={24} />
        Chat with AI about {topic}
      </h3>
      
      <div className="h-96 overflow-y-auto mb-4 space-y-4 p-4 bg-gray-800/30 rounded-lg">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex gap-3 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                message.type === 'user' ? 'bg-blue-500' : 'bg-violet-500'
              }`}>
                {message.type === 'user' ? <User size={16} /> : <Bot size={16} />}
              </div>
              <div className={`p-3 rounded-lg ${
                message.type === 'user' 
                  ? 'bg-blue-500/20 text-blue-100' 
                  : 'bg-gray-700/50 text-gray-200'
              }`}>
                <div className="whitespace-pre-line" dangerouslySetInnerHTML={{ __html: message.content }} />
                <div className="text-xs opacity-60 mt-1">
                  {message.timestamp.toLocaleTimeString()}
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-violet-500 flex items-center justify-center">
                <Bot size={16} />
              </div>
              <div className="bg-gray-700/50 text-gray-200 p-3 rounded-lg">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-violet-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-violet-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-violet-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      <div className="flex gap-2">
        <textarea
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask me anything about this topic..."
          className="flex-1 p-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 resize-none"
          rows="2"
          disabled={isLoading}
        />
        <button
          onClick={sendMessage}
          disabled={isLoading || !inputMessage.trim()}
          className="px-4 py-2 bg-violet-500 hover:bg-violet-600 disabled:bg-gray-600 text-white rounded-lg transition-colors flex items-center justify-center"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
}
