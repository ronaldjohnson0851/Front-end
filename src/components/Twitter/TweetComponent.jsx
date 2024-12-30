import React, { useState, useEffect } from "react";

const ThreadDiscussion = () => {
  const [tweets, setTweets] = useState([]); // State to store tweets
  const [tweetText, setTweetText] = useState(""); // State for new tweet input
  const userLabel = "User1"; // Static user label (could be dynamic)

  // Fetch existing tweets from the database when the component loads
  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await fetch("/api/tweets"); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch tweets");
        }
        const data = await response.json();
        setTweets(data); // Update state with fetched tweets
      } catch (error) {
        console.error("Error fetching tweets:", error);
      }
    };

    fetchTweets();
  }, []);

  // Add a new tweet to the database and update the UI
  const addTweet = async () => {
    if (tweetText.trim() !== "") {
      const newTweet = { user: userLabel, text: tweetText };

      try {
        const response = await fetch("/api/tweets", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTweet),
        });

        if (!response.ok) {
          throw new Error("Failed to add tweet");
        }

        const savedTweet = await response.json(); // Get the saved tweet from the response
        setTweets([...tweets, savedTweet]); // Update the UI with the new tweet
        setTweetText(""); // Clear the input field
      } catch (error) {
        console.error("Error adding tweet:", error);
      }
    }
  };

  return (
    <div style={styles.container}>
      {/* Existing Tweets */}
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
    alignItems: "center",
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
    height: "100%",
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
};

export default ThreadDiscussion;
