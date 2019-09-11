import React from "react";

const ColorItem = props => {
  const { color, hex, rgb } = props.color;
  return (
    <div
      className="color-item color col-xs-12 col-sm-6 col-md-4 col-xl-2 text-center"
      key={color.color}
      style={{
        backgroundColor: color
      }}
    >
      <div className="container info pt-4">
        <h4> {color} </h4>
        <h3> {hex} </h3>
        <h4>
          ({rgb[0]},{rgb[1]},{rgb[2]})
        </h4>
      </div>
    </div>
  );
};

export default ColorItem;
