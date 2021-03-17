import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Filter() {
  return (
    <form>
      <div>
        <h4>Város</h4>
        <select
          //value={status}
          className="btn border-dark"
          //onChange={handleInputChange}
          name="filterWorkSheetByStatus"
        >
          <option>Szeged</option>
          <option>Budapest</option>
        </select>
      </div>
      <div>
        <h4>Irányítószám</h4>
        <select
          //value={status}
          className="btn border-dark"
          //onChange={handleInputChange}
          name="filterWorkSheetByStatus"
        >
          <option>6765</option>
          <option>6978</option>
        </select>
      </div>
      <div className="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios1"
          value="option1"
          checked
        />
        <label class="form-check-label" for="exampleRadios1">
          Lakossági
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios1"
          value="option1"
          checked
        />
        <label class="form-check-label" for="exampleRadios1">
          Közösségi
        </label>
      </div>
    </form>
  );
}

export default Filter;
