import React from 'react';

const TwittersectionDisplay = () => {
  return (
    <div style={TwitterDisplayStyle}>
      <h2>TwitterDisplay</h2>
      <p>This is the Twitter content Display.</p>
    </div>
  );
};

const TwitterDisplayStyle = {
    flex: '1', // Occupies 1 part of the row
    height: '600px',
    backgroundColor: '#f9f9f9',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };
export default TwittersectionDisplay;
