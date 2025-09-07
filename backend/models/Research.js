const mongoose = require('mongoose');

const ResearchSchema = new mongoose.Schema({
  query: { type: String, required: true },
  summary: { type: String, required: true },
  sources: [
    {
      title: String,
      url: String,
      date: String,
      author: String
    }
  ],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Research', ResearchSchema);
