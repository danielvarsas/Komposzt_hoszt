import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css";
import { Facebook, Telephone } from "react-bootstrap-icons";

function Card(props) {
  const { name, address, info } = props;

  return (
    <div className="flex-column" id="login-container">
      <div className="profile-img flex"></div>
      <h5>{props.name}</h5>
      <div class="description">
        {props.address}
        <br />
        {props.info}
      </div>
      <div class="social flex">
        <Facebook size={30} />
        <Telephone size={30} />
      </div>
    </div>
  );
}

export default Card;
