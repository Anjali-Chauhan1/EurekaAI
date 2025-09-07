const express = require('express');
const router = express.Router();
const Research = require('../models/Research');

router.get('/', async (req, res) => {
  try {
    const research = await Research.find().sort({ createdAt: -1 });
    res.json(research);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { query, summary, sources } = req.body;
    const newResearch = new Research({ query, summary, sources });
    await newResearch.save();
    res.status(201).json(newResearch);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
