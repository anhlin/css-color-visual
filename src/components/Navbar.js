import React, { useContext, useRef } from "react";
import ColorContext from "../context/colorContext";

const Navbar = () => {
  const colorContext = useContext(ColorContext);
  const { filterColors, clearFilter } = colorContext;
  const filter = useRef("");

  const onChange = event => {
    if (filter.current.value !== "") {
      filterColors(event.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light pl-5">
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

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Sort By
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/">
                  Action
                </a>
                <a className="dropdown-item" href="/">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/">
                  Something else here
                </a>
              </div>
            </li>
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
