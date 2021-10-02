export const addMovies = (Movie) => {
  return {
    type: "ADD_MOVIES",
    payload: Movie,
  };
};

export const remove = (id) => {
  return {
    type: "REMOVE",
    payload: id,
  };
};
