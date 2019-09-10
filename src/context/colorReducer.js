import { FILTER_COLORS, CLEAR_FILTER } from "./types";

export default (state, action) => {
  switch (action.type) {
    case FILTER_COLORS:
      return {
        ...state,
        filtered: state.colors.filter(color => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return color.color.match(regex);
        })
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      };
    default:
      return {
        ...state
      };
  }
};
