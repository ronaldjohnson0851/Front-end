import React, { useState, useEffect, useRef } from "react";
import EmojiPicker from "emoji-picker-react";
import SearchTweets from "./SearchTweets";

const ThreadDiscussion = () => {
  const [tweets, setTweets] = useState([]); // Original list of tweets
  const [filteredTweets, setFilteredTweets] = useState([]); // Displayed tweets
  const [tweetText, setTweetText] = useState(""); // Input for new tweet
  const [showEmojiPicker, setShowEmojiPicker] = useState(false); // Emoji picker visibility
  const userId = "Deepti";
  const movieId = "1";
  const tweetListRef = useRef(null);

  // Fetch tweets when the component mounts
  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await fetch(`http://localhost:8080/getTweet?movieId=${movieId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch tweets");
        }
        const data = await response.json();
        setTweets(data.tweets);
        setFilteredTweets(data.tweets); // Initialize filtered tweets
      } catch (error) {
        console.error("Error fetching tweets:", error);
      }
    };

    fetchTweets();
  }, [movieId]);

  // Scroll to bottom when tweets are updated
  useEffect(() => {
    if (tweetListRef.current) {
      tweetListRef.current.scrollTop = tweetListRef.current.scrollHeight;
    }
  }, [filteredTweets]);

  // Add new tweet
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

        const updatedTweets = [...tweets, tweetText];
        setTweets(updatedTweets); // Update the original tweet list
        setFilteredTweets(updatedTweets); // Update the displayed tweets
        setTweetText(""); // Clear input
      } catch (error) {
        console.error("Error adding tweet:", error);
      }
    }
  };

  // Emoji picker handler
  const handleEmojiClick = (emojiObject) => {
    setTweetText((prevText) => prevText + emojiObject.emoji);
    setShowEmojiPicker(false); // Close picker
  };

  // Filter and reorder tweets based on hashtag search
  const highlightHashtags = (searchTerm) => {
    if (searchTerm) {
      const regex = new RegExp(`#${searchTerm}`, "i"); // Case-insensitive search
      const matchingTweets = tweets.filter((tweet) => regex.test(tweet)); // Get all matching tweets
      setFilteredTweets(matchingTweets); // Display only matching tweets
    } else {
      setFilteredTweets(tweets); // Reset to original tweets
    }
  };

  return (
    <div style={styles.container}>
      {/* Search Component */}
      <SearchTweets onSearch={highlightHashtags} />

      {/* Tweets Display */}
      <div style={styles.tweetList} ref={tweetListRef}>
        {filteredTweets.map((tweet, index) => (
          <div key={index} style={styles.tweet}>
            <div style={styles.tweetContent}>
              <div style={styles.userLabel}>{userId}</div>
               <div style={styles.tweetText}>{tweet}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Input Section */}
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
          maxLength={255}
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

// Styles
const styles = {
  container: {
      display: "flex",
      flexDirection: "column",
      height: "600px", // Fixed height for the container
      minHeight: "600px", /* Ensure it doesn't get too small */
      maxHeight: "1200px", /* Ensure it doesn't get too big */
      height: "90vh", /* Default height as a percentage of the viewport */
      backgroundColor: "#000000",
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
      background: "#282829",
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
      backgroundColor: "#000000",
      borderTop: "1px solid #000000",
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
      bottom: "100px",
      zIndex: 10,
      backgroundColor: "#fff",
      borderRadius: "6px",
      boxShadow: "1px 4px 6px rgba(0, 0, 0, 0.1)",
    },
};

export default ThreadDiscussion;
