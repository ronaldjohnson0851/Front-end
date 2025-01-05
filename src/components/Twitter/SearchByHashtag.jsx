import React, { useState } from "react";

const SearchByHashtag = ({ onSearch, fetchSuggestions }) => {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchText(value);

    if (value.startsWith("#")) {
      const term = value.slice(1); // Remove the #
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
    setSearchText(`#${hashtag}`);
    onSearch(hashtag); // Trigger search with the selected hashtag
    setSuggestions([]); // Clear suggestions
  };

  return (
    <div style={styles.searchContainer}>
      <input
        type="text"
        value={searchText}
        onChange={handleSearchChange}
        placeholder="Search tweets with #hashtags..."
        style={styles.searchInput}
      />
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
    </div>
  );
};

const styles = {
  searchContainer: {
    padding: "8px",
    backgroundColor: "#000",
  },
  searchInput: {
    width: "100%",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ddd",
    color: "#fff",
    backgroundColor: "#000",
  },
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
