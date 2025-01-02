import React, { useState, useEffect, useRef } from "react";
import EmojiPicker from "emoji-picker-react"; // Install with `npm install emoji-picker-react`

const ThreadDiscussion = () => {
  const [tweets, setTweets] = useState([]); // State to store tweets
  const [tweetText, setTweetText] = useState(""); // State for new tweet input
  const [showEmojiPicker, setShowEmojiPicker] = useState(false); // Toggle emoji picker
  const userId = "Deepti"; // Static user ID
  const movieId = "1"; // Static movie ID
  const tweetListRef = useRef(null); // Reference to tweet list container

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

  // Scroll to bottom whenever tweets are updated
  useEffect(() => {
    if (tweetListRef.current) {
      tweetListRef.current.scrollTop = tweetListRef.current.scrollHeight;
    }
  }, [tweets]); // This runs every time `tweets` state changes

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
      {/* Scrollable Tweets */}
      <div style={styles.tweetList} ref={tweetListRef}>
        {tweets.map((tweet, index) => (
          <div key={index} style={styles.tweet}>
            <div style={styles.tweetContent}>
              <div style={styles.userLabel}>{userId}</div>
              <div style={styles.tweetText}>{tweet}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Input Section Fixed at Bottom */}
      <div style={styles.inputSection}>
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
          maxLength={255} // Sets the character limit
          onChange={(e) => setTweetText(e.target.value)}
          style={styles.tweetInput}
        />
        <button onClick={addTweet} style={styles.tweetButton}>
          Send
        </button>
        {showEmojiPicker && (
          <div style={styles.emojiPickerContainer}>
            <EmojiPicker onEmojiClick={handleEmojiClick} />
          </div>
        )}
      </div>
      <p style={styles.charCount}>{255 - tweetText.length} Characters left</p>
    </div>
  );
};

// Updated Styles
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "600px", // Fixed height for the container
    minHeight: "600px", /* Ensure it doesn't get too small */
    maxHeight: "1200px", /* Ensure it doesn't get too big */
    height: "90vh", /* Default height as a percentage of the viewport */
    backgroundColor: "#1c2833",
    border: "0px",
    borderRadius: "0px",
    overflow: "hidden", // Prevent horizontal overflow
    padding: "0px",
  },
  tweetList: {
    flex: 1, // Takes up all available space
    overflowY: "auto", // Enables scrolling for overflowing content
    padding: "8px",
  },
  tweet: {
    background: "#2c3e50",
    border: "0px",
    borderRadius: "8px",
    padding: "8px",
    fontSize: "14px",
    lineHeight: "1.5",
    wordWrap: "break-word",
    marginBottom: "4px",
  },
  tweetContent: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  userLabel: {
    fontSize: "12px",
    fontWeight: "bold",
    color: "#1DA1F2",
  },
  tweetText: {
    color: "#ffffff",
  },
  inputSection: {
    display: "flex",
    alignItems: "center",
    maxHeight: "100%",
    gap: "5px",
    padding: "5px",
    backgroundColor: "#1c2833",
    borderTop: "1px solid #566573",
  },
  tweetInput: {
    flex: 1,
    padding: "8px",
    marginTop: "5px",
    border: "1px solid #ddd",
    borderRadius: "4px",
  },
  tweetButton: {
    padding: "8px 8px",
    marginTop: "5px",
    background: "#1DA1F2",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  charCount: {
    color: "lightgrey",
    fontSize: "12px",
    margin: "10", // Remove extra space
    alignSelf: "flex-start", // Aligns text to the left
    padding: "5px",
  },
  emojiButton: {
    background: "none",
    padding: "0px",
    border: "none",
    fontSize: "20px",
    cursor: "pointer",
  },
  emojiPickerContainer: {
    position: "absolute",
    bottom: "60px",
    zIndex: 10,
    backgroundColor: "#fff",
    borderRadius: "6px",
    boxShadow: "1px 4px 6px rgba(0, 0, 0, 0.1)",
  },
};

export default ThreadDiscussion;
