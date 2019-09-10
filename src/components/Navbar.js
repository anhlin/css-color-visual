import React, { useContext, useRef } from "react";
import ColorContext from "../context/colorContext";

const Navbar = () => {
  const colorContext = useContext(ColorContext);
  const {
    filterColors,
    clearFilter,
    filtered,
    sort_alpha_filtered,
    sort_alpha,
    sort_rgb
  } = colorContext;
  const filter = useRef("");

  const onChange = event => {
    if (filter.current.value !== "") {
      filterColors(event.target.value);
    } else {
      clearFilter();
    }
  };

  const sortAlpha = () => {
    sort_alpha();
  };

  const sortRGB = event => {
    sort_rgb();
  };

  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark pl-5">
        <a className="navbar-brand" href="/">
          <i className="fas fa-fill-drip pr-2"></i>
          CSS Color Visualizer
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                id="navbarDropdown"
                role="button"
                data-toggle="collapse"
                data-target=".multi-collapse"
                aria-haspopup="true"
                aria-expanded="false"
                aria-controls="sortOpt1 sortOpt2"
              >
                Sort
              </a>
            </li>
            <div className="collapse multi-collapse" id="sortOpt1">
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={sortAlpha}>
                  Alphabetically
                </a>
              </li>
            </div>
            <div className="collapse multi-collapse" id="sortOpt2">
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={sortRGB}>
                  RGB
                </a>
              </li>
            </div>
            <div className="collapse multi-collapse" id="sortOpt3">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Something else here
                </a>
              </li>
            </div>
          </ul>

          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              ref={filter}
              placeholder="Filter Colors!"
              aria-label="Search"
              onChange={onChange}
            />
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
