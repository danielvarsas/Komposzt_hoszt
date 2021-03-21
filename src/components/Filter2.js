import React, { Fragment, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Select from "react-select";

class Filter2 extends React.Component {
  cityState = { selectedOption: "" };
  zipState = { selectedOption: "" };

  handleCityChange = (selectedOption) => {
    this.setCityState({ selectedOption });
    console.log(`Selected: ${selectedOption.label}`);
  };

  handleZipChange = (selectedOption) => {
    this.setZip({ selectedOption });
    console.log(`Selected: ${selectedOption.label}`);
  };

  render() {
    const { selectedOption } = this.cityState;
    const value = selectedOption && selectedOption.value;

    const cities = [
      { label: "Szeged", value: "szeged" },
      { label: "Budapest", value: "bp" },
    ];

    const zips = [
      { label: 6724, value: 6724 },
      { label: 6791, value: 6791 },
    ];

    return (
      <>
        <form>
          <h4>Város</h4>

          <Select
            options={cities}
            //className="btn border-dark"
            name="city"
            onChange={this.handleCityChange}
            value={value}
            //value={city}
            //defaultInputValue={{ label: "Szeged", value: "szeged" }}
          />

          <div>
            <br />
            <h4>Irányítószám</h4>
            <Select
              options={zips}
              value={value}
              onChange={this.handleChange}
              //className="btn border-dark"
              //onChange= city =
              name="filterWorkSheetByStatus"
            >
              <option>6765</option>
              <option>6978</option>
            </Select>
            <br />
          </div>
          <h4>Jelleg</h4>
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
              Üzleti
            </label>
          </div>
          <br />
          <h4>Fogad-e jelenleg?</h4>
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
              Igen
            </label>
          </div>
        </form>
        <br />
        <div>
          Backendre megy: <br /> Város:{selectedOption.label} <br />{" "}
          Irányítószám:
        </div>
      </>
    );
  }
}

export default Filter2;
