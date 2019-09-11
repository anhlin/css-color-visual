import React, { useContext, Fragment } from "react";
import ColorItem from "./ColorItem";

import ColorContext from "../context/colorContext";

const Home = () => {
  const colorContext = useContext(ColorContext);

  const { colors, filtered } = colorContext;

  return (
    <Fragment>
      <div className="row w-100 m-0">
        {filtered !== null
          ? filtered.map(color => (
              <ColorItem key={color.color} color={color}></ColorItem>
            ))
          : colors.map(color => (
              <ColorItem key={color.color} color={color}></ColorItem>
            ))}
      </div>
    </Fragment>
  );
};

export default Home;
