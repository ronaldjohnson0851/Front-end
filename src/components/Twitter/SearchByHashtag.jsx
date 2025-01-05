import React, { useState } from "react";

const SearchByHashtag = ({ fetchSuggestions, onHashtagSelect }) => {
  const [suggestions, setSuggestions] = useState([]);

  const handleHashtagInputChange = (text) => {
    if (text.startsWith("#")) {
      const term = text.slice(1); // Remove the #
      if (term.length > 1) {
        fetchSuggestions(term).then((suggestedHashtags) => {
          setSuggestions(suggestedHashtags);
        });
      } else {
        setSuggestions([]);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (hashtag) => {
    onHashtagSelect(hashtag); // Callback to notify parent of the selection
    setSuggestions([]); // Clear suggestions
  };

  return (
    <ul style={styles.suggestionsList}>
      {suggestions.map((suggestion, index) => (
        <li
          key={index}
          style={styles.suggestionItem}
          onClick={() => handleSuggestionClick(suggestion)}
        >
          #{suggestion}
        </li>
      ))}
    </ul>
  );
};

const styles = {
  suggestionsList: {
    margin: "0",
    padding: "0",
    listStyleType: "none",
    backgroundColor: "#000",
    color: "#fff",
    borderRadius: "4px",
    border: "1px solid #ddd",
  },
  suggestionItem: {
    padding: "8px",
    cursor: "pointer",
  },
};

export default SearchByHashtag;
