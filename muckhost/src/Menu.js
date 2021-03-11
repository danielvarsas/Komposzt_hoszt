import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <div className="d-flex justify-content-end">
      <NavLink activeClassName="active" exact to="/">
        Az oldalról
      </NavLink>

      <NavLink activeClassName="active" exact to="/info">
        Komposztinfó
      </NavLink>

      <NavLink activeClassName="active" to="/gyik">
        Gy.I.K.
      </NavLink>

      <NavLink activeClassName="active" exact to="/map">
        Komposzt Térkép
      </NavLink>
    </div>
  );
}

export default Menu;
