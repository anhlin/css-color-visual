import React, { useReducer } from "react";
import ColorContext from "./colorContext";
import ColorReducer from "./colorReducer";
import { FILTER_COLORS, CLEAR_FILTER, SORT_ALPHA, SORT_RGB } from "./types";

const ColorState = props => {
  const hex_json = require("../data/colors-hex.json");
  const rgb_json = require("../data/colors-rgb.json");

  var color_array_rgb = [];
  var color_array = [];

  //eslint-disable-next-line
  for (const [key, value] of Object.entries(hex_json)) {
    var color_obj = {
      color: key,
      hex: value
    };
    color_array.push(color_obj);
  }

  //eslint-disable-next-line
  for (const [key, value] of Object.entries(rgb_json)) {
    color_obj = {
      color: key,
      rgb: value
    };
    color_array_rgb.push(color_obj);
  }

  /*
    [{color, rgb, hex}, ...]
  */

  for (var i = 0; i < color_array.length; i++) {
    for (var j = 0; j < color_array.length; j++) {
      if (color_array[i].color === color_array_rgb[j].color) {
        color_array[i].rgb = color_array_rgb[j].rgb;
      }
    }
  }

  const initialState = {
    colors: color_array,
    filtered: null,
    sortedByAlpha: true
  };
  const [state, dispatch] = useReducer(ColorReducer, initialState);

  const filterColors = text => {
    dispatch({ type: FILTER_COLORS, payload: text });
  };

  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  const sort_alpha = () => {
    dispatch({ type: SORT_ALPHA });
  };

  const sort_rgb = () => {
    dispatch({ type: SORT_RGB, payload: "rgb" });
  };

  return (
    <ColorContext.Provider
      value={{
        colors: state.colors,
        filtered: state.filtered,
        sorted: state.sorted,
        sortedByAlpha: state.sortedByAlpha,
        filterColors,
        clearFilter,
        sort_alpha,
        sort_rgb
      }}
    >
      {props.children}
    </ColorContext.Provider>
  );
};

export default ColorState;
