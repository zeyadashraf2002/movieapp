const initialState = {
  items: []
};

function favoriteReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_FAV":
      const exists = state.items.find((movie) => movie.id === action.payload.id);
      if (exists) {
        return state;
      }
      return {
        ...state,
        items: [...state.items, action.payload]
      };

    case "REMOVE_FROM_FAV":
      return {
        ...state,
        items: state.items.filter((movie) => movie.id !== action.payload)
      };

    default:
      return state;
  }
}

export default favoriteReducer;
