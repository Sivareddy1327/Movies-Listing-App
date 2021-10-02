import React from "react";
import MoviesForm from "./MoviesForm";
import MoviesList from "./MoviesList";
import MoviesStats from "./MoviesStats";

const MoviesContainer = (props) => {
  return (
    <div>
      <MoviesList />
      <MoviesForm />
      <MoviesStats />
    </div>
  );
};

export default MoviesContainer;
