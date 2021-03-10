import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <ul>
      <li>
        <NavLink activeClassName="active" exact to="/">
          Főoldal
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" exact to="/bemutatkozas">
          Bemutatkozás
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/blog">
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" exact to="/map">
          Térkép
        </NavLink>
      </li>
    </ul>
  );
}

export default Menu;
