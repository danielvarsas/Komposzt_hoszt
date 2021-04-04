import React, { Fragment, useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css";
import { Facebook, Telephone } from "react-bootstrap-icons";

function Card(props) {
  const { name, address, info, type } = props;
  const [visible, setVisible] = useToggle(false);

  function useToggle(initialValue = false) {
    return useReducer((state) => !state, initialValue);
  }

  return (
    <div className="flex-column" id="login-container">
      <div
        onClick={setVisible}
        className={`${
          type === "priv" ? "profile-img" : "profile-img-store"
        } flex`}
      ></div>
      <div className={`${!visible ? "nonevisible" : ""}`}>
        <h5>{props.name}</h5>
        <div class="description">
          {props.address}
          <br />
          {props.info}
        </div>
        <div className="social flex">
          <Facebook size={30} />
          <Telephone size={30} />
        </div>
      </div>
    </div>
  );
}

export default Card;
