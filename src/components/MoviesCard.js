import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../Actions/moviesActions";

const MoviesCard = (props) => {
  const [keypress, setKeyPress] = useState("");
  const [searchdata, setSearchData] = useState([]);
  const [sort, setSort] = useState("");
  const dispatch = useDispatch();

  const movies = useSelector((state) => {
    return state.moviesname;
  });

  const handleremove = (id) => {
    dispatch(remove(id));
  };

  const handleChangekeypress = (e) => {
    setKeyPress(e.target.value);

    const result = movies.filter((ele) => {
      if (ele.moviename.includes(keypress)) {
        return ele;
      }
    });

    setSearchData(result);
  };

  const handleChangeSort = (e) => {
    setSort(e.target.value);
    if (e.target.value == "Movie name") {
      const result = movies.sort(function (a, b) {
        if (a.moviename.toLowerCase() < b.moviename.toLowerCase()) return -1;
        if (a.moviename.toLowerCase() > b.moviename.toLowerCase()) return 1;
        return 0;
      });
    } else if (e.target.value == "Rank") {
      const result1 = movies.sort(function (a, b) {
        return a.rank - b.rank;
      });
    }
  };

  return (
    <div style={{ display: "inline-block" }}>
      <input
        type="text"
        value={keypress}
        placeholder="search by moviename"
        onChange={handleChangekeypress}
      />
      <select onChange={handleChangeSort} style={{ marginLeft: "20px" }}>
        <option value="">Sort By</option>
        <option value="Movie name">Movie name</option>
        <option value="Rank">Rank</option>
      </select>

      {keypress
        ? searchdata.map((ele) => {
            return (
              <h1
                key={ele.id}
                style={{
                  border: "20px solid red ",
                  backgroundColor: "green",
                  color: "white",
                  width: "100%",
                  margin: "10px",
                  padding: "25px",
                }}
              >
                Name - {ele.moviename} <br />
                <b>Rank - #{ele.rank} </b>
                <button
                  onClick={() => {
                    handleremove(ele.id);
                  }}
                  style={{ borderRadius: "5px" }}
                >
                  delete
                </button>
              </h1>
            );
          })
        : movies.map((ele) => {
            return (
              <h1
                key={ele.id}
                style={{
                  border: "20px solid red ",
                  backgroundColor: "green",
                  color: "white",
                  width: "100%",
                  margin: "10px",
                  padding: "25px",
                }}
              >
                Name - {ele.moviename} <br />
                <b>Rank - #{ele.rank} </b>
                <button
                  onClick={() => {
                    handleremove(ele.id);
                  }}
                  style={{ borderRadius: "5px" }}
                >
                  delete
                </button>
              </h1>
            );
          })}
    </div>
  );
};

export default MoviesCard;
