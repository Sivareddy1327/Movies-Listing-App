import React from "react";
import { useSelector } from "react-redux";

const MoviesStats = (props) => {
  const movies = useSelector((state) => {
    return state.moviesname;
  });

  const Toprank = () => {
    let rank = 100;
    let moviename = "";
    movies.map((ele) => {
      if (ele.rank < rank) {
        rank = ele.rank;
        moviename = ele.moviename;
      } else {
        return ele;
      }
    });
    return moviename;
  };

  return (
    <div
      style={{
        border: "5px solid gray",
        margin: "10px",
        padding: "20px",
        width: "70%",
      }}
    >
      <h1>Movies Stats</h1>
      <h1>Total Movies-{movies.length}</h1>
      {movies.length != 0 && <h1># Top Ranked Movie -{Toprank()}</h1>}
    </div>
  );
};

export default MoviesStats;
