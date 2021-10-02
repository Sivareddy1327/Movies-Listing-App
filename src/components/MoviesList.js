import React from "react";
import MoviesCard from "./MoviesCard";
import { useSelector } from "react-redux";

const MoviesList = (props) => {
  const movies = useSelector((state) => {
    return state.moviesname;
  });

  return (
    <div>
      {movies.length == 0 ? <h1>Add your first movie</h1> : <MoviesCard />}
    </div>
  );
};

export default MoviesList;
