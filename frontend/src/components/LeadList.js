import React from 'react';

function LeadList({ leads, onSelectLead }) {
  return (
    <div className="lead-list">
      <h2>Leads</h2>
      {leads.length === 0 ? (
        <p>No leads available</p>
      ) : (
        <ul>
          {leads.map((lead) => (
            <li key={lead._id} onClick={() => onSelectLead(lead)}>
              {lead.fullName || lead.ip} - Visits: {lead.visitCount}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LeadList;