import React from 'react';
import TweetComponent from './TweetComponent';

const TwittersectionDisplay = () => {
  return (
    <div style={TwitterDisplayStyle}>
      <h2>Tweet Your Views</h2>
      {/* Add TweetComponent here */}
      {/* <TweetComponent tweetText="Exploring React components with tweets!" /> */}
      <TweetComponent tweetText="This is an awesome movie!!!!" />
    </div>
  );
};

const TwitterDisplayStyle = {
  flex: '1', // Occupies 1 part of the row
  height: '100%',
  backgroundColor: '#f9f9f9',
  border: '1px solid #ccc',
  borderRadius: '4px',
  padding: '16px', // Add padding for better layout
};

export default TwittersectionDisplay;
