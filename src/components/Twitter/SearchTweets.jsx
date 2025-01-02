import React, { useState } from "react";

const SearchTweets = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchText(value);

    // Trigger search for hashtags
    if (value.startsWith("#") && value.length > 1) {
      const searchTerm = value.slice(1); // Remove #
      onSearch(searchTerm); // Pass search term to parent
    } else {
      onSearch(""); // Clear search
    }
  };

  return (
    <div style={styles.searchContainer}>
      <input
        type="text"
        value={searchText}
        onChange={handleSearch}
        placeholder="Search tweets with #hashtags..."
        style={styles.searchInput}
      />
    </div>
  );
};

const styles = {
  searchContainer: {
    padding: "8px",
    backgroundColor: "#2c3e50",
  },
  searchInput: {
    width: "95%",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ddd",
    color: "#fff",
    backgroundColor: "#1c2833",
  },
};

export default SearchTweets;
