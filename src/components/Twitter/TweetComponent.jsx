import React, { useState, useEffect } from "react";
import EmojiPicker from "emoji-picker-react"; // Install with `npm install emoji-picker-react`

const ThreadDiscussion = () => {
  const [tweets, setTweets] = useState([]); // State to store tweets
  const [tweetText, setTweetText] = useState(""); // State for new tweet input
  const [showEmojiPicker, setShowEmojiPicker] = useState(false); // Toggle emoji picker
  const userId = "Deepti"; // Static user ID
  const movieId = "1"; // Static movie ID

  // Fetch existing tweets from the database when the component loads
  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await fetch(`http://localhost:8080/getTweet?movieId=${movieId}`); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch tweets");
        }
        const data = await response.json();
        setTweets(data.tweets); // Update state with fetched tweets
      } catch (error) {
        console.error("Error fetching tweets:", error);
      }
    };

    fetchTweets();
  }, [movieId]);

  // Add a new tweet to the database and update the UI
  const addTweet = async () => {
    if (tweetText.trim() !== "") {
      const newTweet = {
        userId,
        movieId,
        tweets: [tweetText],
      };

      try {
        const response = await fetch("http://localhost:8080/saveTweet", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTweet),
        });

        if (!response.ok) {
          throw new Error("Failed to add tweet");
        }

        setTweets([...tweets, tweetText]); // Append the new tweet to the UI
        setTweetText(""); // Clear the input field
      } catch (error) {
        console.error("Error adding tweet:", error);
      }
    }
  };

  const handleEmojiClick = (emojiObject) => {
    setTweetText((prevText) => prevText + emojiObject.emoji);
    setShowEmojiPicker(false); // Close the emoji picker
  };

  return (
    <div style={styles.container}>
      {/* Existing Tweets */}
      <div style={styles.tweetsContainer}>
        {tweets.map((tweet, index) => (
          <div key={index} style={styles.tweet}>
            <div style={styles.tweetContent}>
              <div style={styles.userLabel}>{userId}</div>
              <div style={styles.tweetText}>{tweet}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Input and Button for Adding New Tweet */}
      <div style={styles.tweetInputContainer}>
        <button
          onClick={() => setShowEmojiPicker((prev) => !prev)}
          style={styles.emojiButton}
        >
          😊
        </button>
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
        {showEmojiPicker && (
          <div style={styles.emojiPickerContainer}>
            <EmojiPicker onEmojiClick={handleEmojiClick} />
          </div>
        )}
      </div>
    </div>
  );
};

// Styles for the component
const styles = {
  container: {
    border: "1px #566573",
    borderRadius: "2px",
    padding: "16px",
    margin: "16px auto",
    maxWidth: "600px",
    backgroundColor: "#1c2833",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  tweetsContainer: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    height: "100vh",
    gap: "5px",
    overflowY: "auto",
    maxHeight: "400px",
    padding: "8px 0",
  },
  tweet: {
    background: "#1c2833",
    border: "1px solid #566573",
    borderRadius: "8px",
    padding: "12px",
    fontSize: "14px",
    lineHeight: "1.5",
    wordWrap: "break-word",
  },
  tweetContent: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  userLabel: {
    fontSize: "12px",
    fontWeight: "bold",
    color: "#1DA1F2",
  },
  tweetText: {
    color: "#ffffff",
  },
  tweetInputContainer: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    paddingTop: "12px",
    borderTop: "1px solid #566573",
  },
  tweetInput: {
    flex: 1,
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px",
  },
  tweetButton: {
    padding: "8px 16px",
    background: "#1DA1F2",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  emojiButton: {
    background: "none",
    border: "none",
    fontSize: "20px",
    cursor: "pointer",
  },
    emojiPickerContainer: {
      position: "absolute",
      bottom: "40px", // Adjust the value as needed to position it above the button

      zIndex: 10,
      backgroundColor: "#fff", // Optional: Ensure the emoji picker has a background
      borderRadius: "8px", // Optional: Add rounded corners for better visuals
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Optional: Add a subtle shadow for better appearance
    },

};

export default ThreadDiscussion;
