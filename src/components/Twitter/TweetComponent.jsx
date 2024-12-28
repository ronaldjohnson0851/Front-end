import React, { useState } from 'react';

const TweetComponent = ({ tweetText }) => {
  const [replies, setReplies] = useState([]);
  const [replyText, setReplyText] = useState('');

  // Handle adding a reply
  const addReply = () => {
    if (replyText.trim() !== '') {
      setReplies([...replies, replyText]);
      setReplyText(''); // Clear input
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.tweet}>
        <p style={styles.tweetText}>{tweetText}</p>
      </div>
      <div style={styles.replies}>
        {replies.map((reply, index) => (
          <div key={index} style={styles.reply}>
            {reply}
          </div>
        ))}
      </div>
      <div style={styles.replyInputContainer}>
        <input
          type="text"
          placeholder="Write a reply..."
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
          style={styles.replyInput}
        />
        <button onClick={addReply} style={styles.replyButton}>
          Reply
        </button>
      </div>
    </div>
  );
};

// Styles for the component
const styles = {
  container: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px 0',
    maxWidth: '500px',
  },
  tweet: {
    padding: '8px 0',
  },
  tweetText: {
    fontSize: '16px',
    fontWeight: 'bold',
  },
  replies: {
    marginTop: '16px',
  },
  reply: {
    background: '#f4f4f4',
    borderRadius: '4px',
    padding: '8px',
    margin: '4px 0',
  },
  replyInputContainer: {
    marginTop: '16px',
    display: 'flex',
    gap: '8px',
  },
  replyInput: {
    flex: 1,
    padding: '8px',
    border: '1px solid #ddd',
    borderRadius: '4px',
  },
  replyButton: {
    padding: '8px 16px',
    background: '#1DA1F2',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default TweetComponent;
