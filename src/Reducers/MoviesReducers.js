const movieInitialState = [];

const moviesReducers = (state = movieInitialState, action) => {
  switch (action.type) {
    case "ADD_MOVIES": {
      return [...state, { ...action.payload }];
    }

    case "REMOVE": {
      return state.filter((ele) => {
        return ele.id != action.payload;
      });
    }

    default: {
      return [...state];
    }
  }
};

export default moviesReducers;
