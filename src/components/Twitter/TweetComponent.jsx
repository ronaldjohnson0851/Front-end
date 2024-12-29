import React, { useState } from 'react';


// ################# Tweet threads ############## //
/* Stores the thread tweets
   Input for the new tweet
   Static user label for demonstration (can be dynamic)
*/
const ThreadDiscussion = () => {
  const [tweets, setTweets] = useState([]);
  const [tweetText, setTweetText] = useState('');
  const userLabel = 'User1';

  // Handle adding a new tweet
  const addTweet = () => {
    if (tweetText.trim() !== '') {
      // Add the new tweet with the user label
      setTweets([...tweets, { user: userLabel, text: tweetText }]);
      setTweetText(''); // Clear input
    }
  };

  return (
    <div style={styles.container}>
      {/* Existing Tweets in the Thread */}
      <div style={styles.tweetsContainer}>
        {tweets.map((tweet, index) => (
          <div key={index} style={styles.tweet}>
            <div style={styles.tweetContent}>
              <div style={styles.userLabel}>{tweet.user}</div>
              <div style={styles.tweetText}>{tweet.text}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Input and Button for Adding New Tweet */}
      <div style={styles.tweetInputContainer}>
        <input
          type="text"
          placeholder="Write your tweet..."
          value={tweetText}
          onChange={(e) => setTweetText(e.target.value)}
          style={styles.tweetInput}
        />
        <button onClick={addTweet} style={styles.tweetButton}>
          Tweet
        </button>
      </div>
    </div>
  );
};

// Styles for the component
const styles = {
  container: {
    border: '1px #566573',
    borderRadius: '2px',
    padding: '16px',
    margin: '16px auto',
    maxWidth: '600px',
    backgroundColor: '#1c2833',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  tweetsContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    gap: '5px',
    overflowY: 'auto',
    maxHeight: '400px', // Scrollable if the thread gets long
    padding: '8px 0',
  },
  tweet: {
    background: '#1c2833',
    border: '1px solid #566573',
    borderRadius: '8px',
    padding: '12px',
    fontSize: '14px',
    lineHeight: '1.5',
    wordWrap: 'break-word',
  },
  tweetContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  userLabel: {
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#1DA1F2',
  },
  tweetText: {
    color: '#ffffff',
  },
  tweetInputContainer: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    gap: '8px',
    paddingTop: '12px',
    borderTop: '1px solid #566573',
  },
  tweetInput: {
    flex: 1,
    padding: '8px',
    border: '1px solid #ddd',
    borderRadius: '4px',
  },
  tweetButton: {
    padding: '8px 16px',
    background: '#1DA1F2',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default ThreadDiscussion;
