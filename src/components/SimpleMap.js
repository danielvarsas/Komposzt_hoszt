import React from "react";
import GoogleMapReact from "google-map-react";
import Card from "./Card";
//import { centerpoz } from "./Filter";

let person1name = "Garabolyos";
let person1addr = "Some street 123\n";
let person1info = "Only krumplihéj";

let person2name = "Kovács István";
let person2addr = "Neverending sqr 3\n";
let person2info = "Only weekends";

let person3name = "Teszt Elek";
let person3addr = "Short str 523258\n";
let person3info = "Only BIO please";

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
        <Card
          lat={46.25107150656922}
          lng={20.140593630994307}
          name={person1name}
          address={person1addr}
          info={person1info}
        />
        <Card
          lat={46.25631278974291}
          lng={20.14699657159912}
          name={person2name}
          address={person2addr}
          info={person2info}
        />
        <Card
          lat={46.26409319220389}
          lng={20.13288486424085}
          name={person3name}
          address={person3addr}
          info={person3info}
        />
      </GoogleMapReact>
    );
  }
}

export default SimpleMap;
