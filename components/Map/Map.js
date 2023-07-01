import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";

import classes from "./Map.module.css";

const SetPosition = (coords) => {
  const map = useMap();
  map.setView(coords.coords);
};

function Map(props) {
  return (
    <div className={classes.container}>
      <MapContainer
        className={classes.map}
        center={props.coords}
        zoom={2}
        scrollWheelZoom={false}
      >
        <SetPosition coords={props.coords} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        ></TileLayer>
        <Marker position={props.coords} />
      </MapContainer>
    </div>
  );
}

export default Map;
