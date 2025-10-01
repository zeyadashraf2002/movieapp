const INITIAL_STATE = {
  loader: false, // يبدأ واقف
};

export default function LoaderReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "LOADER_ACTION":
      return {
        ...state,
        loader: action.payload,
      };
    default:
      return state;
  }
}
