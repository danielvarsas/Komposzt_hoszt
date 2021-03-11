import React from "react";
import SimpleMap from "../components/SimpleMap";

function Map() {
  return (
    <div className="flex-container">
      <div style={{ height: "95vh", width: "60vh" }}>Filters go here</div>
      <div style={{ width: "110vh" }}>
        <SimpleMap />
      </div>
    </div>
  );
}

export default Map;
