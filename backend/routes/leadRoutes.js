const express = require('express');
const router = express.Router();
const ipService = require('../services/ipService');
const dataService = require('../services/dataService');
const Lead = require('../models/Lead');

router.post('/collect', async (req, res) => {
  console.log('Received IP:', req.body.ip);
  const { ip } = req.body;
  
  try {
    let lead = await Lead.findOne({ ip });
    
    if (lead) {
      console.log('Existing lead found:', lead);
      lead.visitCount += 1;
      await lead.save();
    } else {
      console.log('Creating new lead');
      const ipInfo = await ipService.getIpInfo(ip);
      const leadData = await dataService.getLeadData(ip);
      
      lead = new Lead({
        ip,
        ...ipInfo,
        ...leadData,
      });
      
      await lead.save();
    }
    
    console.log('Sending lead:', lead);
    res.json(lead);
  } catch (error) {
    console.error('Error in /collect:', error);
    res.status(500).json({ error: 'An error occurred while processing the request' });
  }
});

router.get('/', async (req, res) => {
  try {
    const leads = await Lead.find();
    console.log('Fetched leads:', leads);
    res.json(leads);
  } catch (error) {
    console.error('Error fetching leads:', error);
    res.status(500).json({ error: 'An error occurred while fetching leads' });
  }
});
module.exports = router;