import React from "react";

const ColorItem = props => {
  const { color, hex, rgb } = props.color;
  return (
    <div
      className="color col-xs-12 col-sm-6 col-md-4 col-lg-2 text-center"
      key={color.color}
      style={{
        backgroundColor: color
      }}
    >
      <div className="container info pt-4">
        <h2> {color} </h2>
        <h2> {hex} </h2>
        <h2>
          ({rgb[0]},{rgb[1]},{rgb[2]})
        </h2>
      </div>
    </div>
  );
};

export default ColorItem;
