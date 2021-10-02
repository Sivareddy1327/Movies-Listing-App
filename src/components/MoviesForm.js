import { useState } from "react";
import React from "react";
import { useDispatch } from "react-redux";
import { addMovies } from "../Actions/moviesActions";

const MoviesForm = (props) => {
  const dispatch = useDispatch();

  const [moviename, setMovieName] = useState("");
  const [rank, setRank] = useState("");

  const handleChangemoviename = (e) => {
    setMovieName(e.target.value);
  };

  const handleChangerank = (e) => {
    setRank(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      id: Number(new Date()),
      moviename: moviename,
      rank: rank,
    };
    dispatch(addMovies(data));
    setMovieName("");
    setRank("");
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>Add Movie</h2>
      <form onSubmit={handleSubmit} style={{ margin: "10px" }}>
        <input
          type="text"
          value={moviename}
          placeholder="Enter movie name"
          onChange={handleChangemoviename}
        />
        <br />
        <input
          type="text"
          value={rank}
          placeholder="IMDB Ranking"
          onChange={handleChangerank}
        />
        <br />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default MoviesForm;
