import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LeadList from './components/LeadList';
import LeadDetail from './components/LeadDetail';
import './App.css';

function App() {
  const [leads, setLeads] = useState([]);
  const [selectedLead, setSelectedLead] = useState(null);

  useEffect(() => {
    fetchLeads();
    collectLead();
  }, []);

  const fetchLeads = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/leads');
      console.log('Fetched leads:', response.data);
      setLeads(response.data);
    } catch (error) {
      console.error('Error fetching leads:', error);
    }
  };

  const collectLead = async () => {
    try {
      const ip = await fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => data.ip);

      const response = await axios.post('http://localhost:3000/api/leads/collect', { ip });
      console.log('Collected lead:', response.data);
      fetchLeads();
    } catch (error) {
      console.error('Error collecting lead:', error);
    }
  };

  return (
    <div className="App">
      <h1>Identity Pixel Dashboard</h1>
      <button className="refresh-button" onClick={fetchLeads}>Refresh Leads</button>
      <div className="dashboard">
        <LeadList leads={leads} onSelectLead={setSelectedLead} />
        {selectedLead && <LeadDetail lead={selectedLead} />}
      </div>
    </div>
  );
}

export default App;