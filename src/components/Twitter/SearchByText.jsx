import React, { useState } from "react";

const SearchByText = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
    onSearch(value); // Trigger search with the entered text
  };

  return (
    <div style={styles.searchContainer}>
      <input
        type="text"
        value={searchText}
        onChange={handleSearchChange}
        placeholder="Search tweets..."
        style={styles.searchInput}
      />
    </div>
  );
};

const styles = {
  searchContainer: {
    padding: "8px",
    backgroundColor: "#000",
  },
  searchInput: {
    width: "95%",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ddd",
    color: "#fff",
    backgroundColor: "#000",
  },
};

export default SearchByText;