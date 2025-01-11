import React, { useState } from "react";
import PostsComponent from "./PostsComponent";
import selectedMovie from "../NetflixMainScreen/NetflixMovieScroll";

const PostSectionDisplay = ({ movieId }) => {
  //********* This is only to test tweet display based on movieId being passed as a prop ******/
 // const movieId = ""; // Replace with dynamic logic or static value as needed

  return (
    <div style={styles.container}>
        <div style={styles.postsDisplay}>
           <PostsComponent movieId={movieId}/>
{/*            movieId={selectedMovie.movieId} />  */}

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
  postsDisplay: {
    marginTop: "0px", // Add margin below the button for spacing
  },

};

export default PostSectionDisplay;
