import React, { useState, useEffect, useRef } from "react";
import EmojiPicker from "emoji-picker-react";
import SearchByText from "./SearchByText";
import SearchByHashtag from "./SearchByHashtag";

const ThreadDiscussion = ({ movieId }) => {
  const [tweets, setTweets] = useState([]);
  const [filteredTweets, setFilteredTweets] = useState([]);
  const [tweetText, setTweetText] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const userId = "Deepti Mishra";
  const tweetListRef = useRef(null);

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await fetch(`http://localhost:8080/getTweet?movieId=${movieId}`);
        if (!response.ok) throw new Error("Failed to fetch tweets");
        const data = await response.json();
        setTweets(data.tweets);
        setFilteredTweets(data.tweets);
      } catch (error) {
        console.error("Error fetching tweets:", error);
      }
    };

    fetchTweets();
  }, [movieId]);

  useEffect(() => {
    if (tweetListRef.current) {
      tweetListRef.current.scrollTop = tweetListRef.current.scrollHeight;
    }
  }, [filteredTweets]);

  const fetchSuggestions = async (term) => {
    try {
      const response = await fetch(`http://localhost:8080/getHashtagSuggestions?term=${term}`);
      if (!response.ok) throw new Error("Failed to fetch suggestions");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      return [];
    }
  };

  const handleTweetInputChange = (e) => {
    const value = e.target.value;
    setTweetText(value);
    handleHashtagInput(value);
  };

  const handleHashtagInput = (text) => {
    if (text.match(/#\w+$/)) {
      const term = text.split("#").pop();
      if (term.length > 1) {
        fetchSuggestions(term).then((suggestedHashtags) => setSuggestions(suggestedHashtags));
      } else {
        setSuggestions([]);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (hashtag) => {
    const updatedText = tweetText.replace(/#\w*$/, `#${hashtag}`);
    setTweetText(updatedText);
    setSuggestions([]);
  };

  const handleSearchByText = (searchText) => {
    const filtered = tweets.filter((tweet) =>
      tweet.tweet.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredTweets(filtered);
  };

  const addTweet = async () => {
    if (tweetText.trim() !== "") {
      const newTweet = {
        userId,
        tweet: tweetText,
      };

      try {
        const response = await fetch(`http://localhost:8080/saveTweet?movieId=${movieId}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTweet),
        });

        if (!response.ok) throw new Error("Failed to add tweet");

        const updatedTweets = [...tweets, { ...newTweet, movieId }];
        setTweets(updatedTweets);
        setFilteredTweets(updatedTweets);
        setTweetText("");
      } catch (error) {
        console.error("Error adding tweet:", error);
      }
    }
  };

  return (
    <div style={styles.container}>
      {/* Search By Text */}
      <SearchByText onSearch={handleSearchByText} />

      <div style={styles.tweetList} ref={tweetListRef}>
        {filteredTweets.map((tweet, index) => (
          <div key={index} style={styles.tweet}>
            <div style={styles.tweetContent}>
              <div style={styles.userLabel}>{tweet.userId}</div>
              <div style={styles.tweetText}>{tweet.tweet}</div>
            </div>
          </div>
        ))}
      </div>

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
          onChange={handleTweetInputChange}
          style={styles.tweetInput}
        />
       <SearchByHashtag
         fetchSuggestions={fetchSuggestions}
         text={tweetText}
         setText={setTweetText}
       />
        <button onClick={addTweet} style={styles.tweetButton}>
          Send
        </button>
        {showEmojiPicker && (
          <div style={styles.emojiPickerContainer}>
            <EmojiPicker onEmojiClick={(emojiObject) => setTweetText((prev) => prev + emojiObject.emoji)} />
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
    position: "relative", // For search to position correctly
    display: "flex",
    flexDirection: "column",
    minHeight: "600px", /* Ensure it doesn't get too small */
    maxHeight: "1200px", /* Ensure it doesn't get too big */
    height: "90vh", /* Use this height */
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
