import React, { useState } from "react";
import TweetComponent from "./TweetComponent";

const TwitterSectionDisplay = () => {
  const [isCollapsed, setIsCollapsed] = useState(false); // State to toggle visibility

  return (
    <div style={styles.container}>
        <div style={styles.twitterDisplay}>         
          <TweetComponent/>
        </div>
    </div>
  );
};

const styles = {
  container: {
    flex: "1",
    color: "white",
    height: "100vh",
    backgroundColor: "#1c2833",
    border: "1px solid #566573",
    borderRadius: "4px",
    padding: "0px",
  },
  twitterDisplay: {
    marginTop: "0px", // Add margin below the button for spacing
  },
  collapseButton: {
    position: "relative",
    padding: "4px 6px",
    backgroundColor: "#1DA1F2",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",

  },
};

export default TwitterSectionDisplay;
