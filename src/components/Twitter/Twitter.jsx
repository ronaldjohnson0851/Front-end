import React, { useState } from "react";
import TweetComponent from "./TweetComponent";

const TwitterSectionDisplay = () => {
  //********* This is only to test tweet display based on movieId being passed as a prop ******/
  const movieId = ""; // Replace with dynamic logic or static value as needed

  return (
    <div style={styles.container}>
        <div style={styles.twitterDisplay}>         
          <TweetComponent movieId={movieId} />
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

};

export default TwitterSectionDisplay;
