const express = require('express');
const router = express.Router();
const pixelService = require('../services/pixelService');

router.get('/generate', (req, res) => {
  const pixel = pixelService.generatePixel();
  res.json({ pixel });
});

module.exports = router;