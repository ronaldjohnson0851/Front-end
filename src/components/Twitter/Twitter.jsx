import React from 'react';
import TweetComponent from './TweetComponent';

const TwittersectionDisplay = () => {
  return (
    <div style={TwitterDisplayStyle}>
       <h4>See What people are saying... </h4>
      {/* Add TweetComponent here */}
        <TweetComponent tweetText="This is an awesome movie!!!!" />
    </div>
  );
};

const TwitterDisplayStyle = {
  flex: '1', // Occupies 1 part of the row
  color: 'white',
  height: '100%',
  backgroundColor: '#1c2833',
  border: '1px solid #566573',
  borderRadius: '4px',
  padding: '16px', // Add padding for better layout

};

export default TwittersectionDisplay;
