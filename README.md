# 🔬 NovaSearch - AI Research Assistant

NovaSearch is a powerful AI-powered research assistant that revolutionizes how you discover, analyze, and synthesize information. Built with modern web technologies and powered by Google Gemini AI, it helps researchers, students, professionals, and curious minds save time while conducting thorough research.

![NovaSearch Banner](https://img.shields.io/badge/NovaSearch-AI%20Research%20Assistant-blue?style=for-the-badge&logo=react)

## ✨ Features

### 🔍 **Smart Search & Analysis**
- **Intelligent Topic Search**: Enter any research topic and get comprehensive, AI-generated summaries
- **Multi-tone Summaries**: Choose from Technical, Simplified, or Conversational writing styles
- **Web Integration**: Automatically fetches and analyzes relevant web sources
- **Trend Analysis**: Compare past vs present findings to discover patterns and evolution

### 💬 **Interactive Chat Interface**
- **Follow-up Questions**: Ask detailed questions about your research topic
- **Context-Aware Responses**: AI remembers your research context for meaningful conversations
- **Real-time Processing**: Get instant responses with typing indicators

### 📄 **Export & Documentation**
- **PDF Export**: Generate professional research reports with proper formatting
- **Markdown Export**: Export findings in developer-friendly markdown format
- **Source Citations**: Automatic source linking and reference management
- **Research History**: Save and retrieve past research sessions

### 🎨 **Modern User Experience**
- **Dark Theme Interface**: Eye-friendly design for extended research sessions
- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Smooth Animations**: Framer Motion powered transitions and interactions
- **Intuitive Navigation**: Clean, organized layout with easy-to-use controls

## 🛠 Tech Stack

### **Frontend**
- **React 19** - Latest React with modern hooks and functional components
- **Vite** - Fast build tool and development server
- **Tailwind CSS 4** - Utility-first CSS framework for styling
- **Framer Motion** - Smooth animations and transitions
- **React Router DOM** - Client-side routing
- **Lucide React** - Beautiful, customizable icons
- **Chart.js** - Data visualization capabilities
- **Axios** - HTTP client for API requests

### **Backend**
- **Node.js & Express** - Server runtime and web framework
- **MongoDB & Mongoose** - Database and ODM for data persistence
- **Google Gemini API** - AI-powered content generation
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### **Export & PDF Generation**
- **jsPDF** - Client-side PDF generation
- **html2canvas** - HTML to canvas conversion for PDF exports

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB database
- Google Gemini API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Anjali-Chauhan1/NovaSearch.git
   cd NovaSearch
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

4. **Environment Setup**
   Create a `.env` file in the backend directory:
   ```env
   MONGO_URI=your_mongodb_connection_string
   GEMINI_API_KEY=your_gemini_api_key
   PORT=5000
   ```

5. **Start the development servers**
   
   Backend (from `/backend` directory):
   ```bash
   node app.js
   ```
   
   Frontend (from root directory):
   ```bash
   npm run dev
   ```

6. **Access the application**
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:5000`

## 📁 Project Structure

```
NovaSearch/
├── src/                          # Frontend source code
│   ├── components/               # Reusable React components
│   │   ├── ChatInterface.jsx     # AI chat functionality
│   │   ├── ExportButtons.jsx     # PDF/Markdown export
│   │   ├── SearchBar.jsx         # Search input component
│   │   └── ...
│   ├── pages/                    # Route pages
│   │   ├── Home.jsx              # Landing page
│   │   ├── About.jsx             # About page
│   │   └── TopicPage.jsx         # Research results page
│   ├── hooks/                    # Custom React hooks
│   ├── api/                      # API integration
│   └── App.jsx                   # Main application component
├── backend/                      # Backend server code
│   ├── models/                   # MongoDB models
│   │   └── Research.js           # Research data schema
│   ├── routes/                   # API routes
│   │   ├── research.js           # Research CRUD operations
│   │   ├── gemini.js             # AI content generation
│   │   ├── chat.js               # Chat functionality
│   │   └── search.js             # Search operations
│   └── app.js                    # Express server setup
├── public/                       # Static assets
├── package.json                  # Frontend dependencies
└── README.md                     # Project documentation
```

## 🔧 API Endpoints

### Research Operations
- `GET /api/research` - Retrieve research history
- `POST /api/research` - Save new research

### AI Integration
- `POST /api/gemini` - Generate AI summaries with tone selection
- `POST /api/chat` - Interactive chat with AI about research topics

### Search
- `POST /api/search` - Perform web searches for research topics

## 🎯 Usage Examples

### Basic Research Query
1. Enter a topic like "Quantum Computing" in the search bar
2. Select your preferred tone (Technical/Simplified/Conversational)
3. Review the AI-generated summary and sources
4. Use the chat interface for follow-up questions
5. Export your findings as PDF or Markdown

### Advanced Features
- **Trend Analysis**: Compare historical vs current information
- **Source Verification**: Review and validate all cited sources
- **Custom Queries**: Ask specific questions about your research topic

## 🌟 Key Benefits

- **Time Efficiency**: Reduce research time from hours to minutes
- **Comprehensive Coverage**: Get insights from multiple sources automatically
- **Professional Output**: Generate publication-ready research reports
- **Interactive Learning**: Engage with AI for deeper understanding
- **Organized Workflow**: Keep track of all your research in one place

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙋‍♂️ Support

If you encounter any issues or have questions:
- Open an issue on GitHub
- Check the documentation
- Review the API endpoints section

## 🚀 Deployment

The backend is currently deployed on Render at: `https://novasearch-7x59.onrender.com`

For production deployment:
1. Set up environment variables on your hosting platform
2. Configure MongoDB connection
3. Deploy backend and frontend separately or use a full-stack hosting solution

---

**Built with ❤️ by the NovaSearch Team**

*Empowering researchers with AI-driven insights and intelligent automation.*
