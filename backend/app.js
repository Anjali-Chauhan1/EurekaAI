const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('AI Research Agent backend is running!');
});

app.use('/api/research', require('./routes/research'));
app.use('/api/search', require('./routes/search'));
app.use('/api/gemini', require('./routes/gemini'));
app.use('/api/chat', require('./routes/chat'));

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI ;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
});
