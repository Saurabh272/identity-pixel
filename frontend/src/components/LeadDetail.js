import React from 'react';

function LeadDetail({ lead }) {
  if (!lead) return null;

  return (
    <div className="lead-detail">
      <h2>Lead Details</h2>
      <p><strong>IP:</strong> {lead.ip}</p>
      <p><strong>Full Name:</strong> {lead.fullName}</p>
      <p><strong>Email:</strong> {lead.email}</p>
      <p><strong>Address:</strong> {lead.address}</p>
      <p><strong>Phone Number:</strong> {lead.phoneNumber}</p>
      <p><strong>Visit Count:</strong> {lead.visitCount}</p>
      <p><strong>Confidence Score:</strong> {lead.confidenceScore}</p>
    </div>
  );
}

export default LeadDetail;