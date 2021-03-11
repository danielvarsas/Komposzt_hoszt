import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <ul>
      <li>
        <NavLink activeClassName="active" exact to="/">
          Az oldalról
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" exact to="/info">
          Komposztinfó
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/gyik">
          Gy.I.K.
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" exact to="/map">
          Komposzt Térkép
        </NavLink>
      </li>
    </ul>
  );
}

export default Menu;
