import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => (
  <div
    style={{
      color: "black",
      background: "lightgreen",
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
    zoom: 13,
  };

  render() {
    const MapApi = "AIzaSyC-ElJ4eqtnKX5ufH3OXSgCeolthMzqJuw";
    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: MapApi }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent lat={46.25} lng={20.15} text={"Hello Map"} />
      </GoogleMapReact>
    );
  }
}

export default SimpleMap;
