import React from "react";
import SimpleMap from "../components/SimpleMap";
import Filter from "../components/Filter";

function Map() {
  return (
    <div className="flex-container">
      <div style={{ height: "95vh", width: "60vh" }}>
        <Filter />
      </div>
      <div style={{ width: "110vh" }}>
        <SimpleMap />
      </div>
    </div>
  );
}

export default Map;
