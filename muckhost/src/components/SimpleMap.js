import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => (
  <div
    style={{
      color: "white",
      background: "grey",
      padding: "15px 10px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "10px",
      transform: "translate(-50%, -50%)",
    }}
  >
    {text}
  </div>
);

class SimpleMap extends React.Component {
  static defaultProps = {
    center: { lat: 46.25, lng: 20.15 },
    zoom: 11,
  };

  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text={"Kreyser Avrora"}
        />
      </GoogleMapReact>
    );
  }
}

export default SimpleMap;
