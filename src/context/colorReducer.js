import { FILTER_COLORS, CLEAR_FILTER, SORT_ALPHA, SORT_RGB } from "./types";

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
    case SORT_ALPHA:
      if (state.sortedByAlpha) {
        state.colors.sort((a, b) => (a.color > b.color ? 1 : -1)).reverse();
        if (state.filtered !== null) {
          state.filtered.sort((a, b) => (a.color > b.color ? 1 : -1)).reverse();
        }
      } else {
        state.colors.sort((a, b) => (a.color > b.color ? 1 : -1));
        if (state.filtered !== null) {
          state.filtered.sort((a, b) => (a.color > b.color ? 1 : -1));
        }
      }

      return {
        ...state,
        colors: state.colors,
        sortedByAlpha: !state.sortedByAlpha,
        filtered: state.filtered
      };

    case SORT_RGB:
      if (state.filtered !== null) {
        state.filtered.sort((a, b) =>
          a.rgb[0] > b.rgb[0]
            ? 1
            : a.rgb[0] === b.rgb[0]
            ? a.rgb[1] > b.rgb[1]
              ? 1
              : a.rgb[1] === b.rgb[1]
              ? a.rgb[2] > b.rgb[2]
                ? 1
                : -1
              : -1
            : -1
        );
      }
      state.colors.sort((a, b) =>
        a.rgb[0] > b.rgb[0]
          ? 1
          : a.rgb[0] === b.rgb[0]
          ? a.rgb[1] > b.rgb[1]
            ? 1
            : a.rgb[1] === b.rgb[1]
            ? a.rgb[2] > b.rgb[2]
              ? 1
              : -1
            : -1
          : -1
      );
      if (state.sortedByRGB) {
        state.colors.reverse();
        if (state.filtered !== null) {
          state.filtered.reverse();
        }
      }
      return {
        ...state,
        colors: state.colors,
        filtered: state.filtered,
        sortedByAlpha: false,
        sortedByRGB: !state.sortedByRGB
      };
    default:
      return {
        ...state
      };
  }
};
