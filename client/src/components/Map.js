import { MapContainer, TileLayer, Marker, Popup,} from "react-leaflet";
import React from 'react'
import '../App.css'

function Map() {

  return (
    <div className='mapContainer'>

{/*Creating Map with markers for each restaurant */}

       <MapContainer
        center={[44.4782651, -73.2122868]}
        zoom={16}
        scrollWheelZoom={false}
        style={{ height: "50vh", width: "50vw", margin:'auto'}}
      >
        <TileLayer
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        />
        <Marker className='marker' position={[44.478528761862194, -73.21325550421733,]}>
          <Popup>
           <a href='http://localhost:3000/farmhouse'>The Farmhouse Tap and Grill</a>
          </Popup>
        </Marker>
        <Marker className='marker' position={[44.47714738621725, -73.21242040200704]}>
          <Popup>
            <a href='http://localhost:3000/sweetwaters'>Sweetwaters</a>
          </Popup>
        </Marker>
        <Marker className='marker' position={[44.47742855147082, -73.21282057317147]}>
          <Popup>
            <a href='http://localhost:3000/leunigsbistro'>Leunig's Bistro</a>
          </Popup>
        </Marker>
        <Marker className='marker' position={[44.47942569619375, -73.2113495731714]}>
          <Popup>
            <a href='http://localhost:3000/pennycluse'>Penny Cluse</a>
          </Popup>
        </Marker>
        <Marker className='marker' position={[44.47629091038532, -73.21227635967806]}>
          <Popup>
            <a href='http://localhost:3000/honeyroad'>Honey Road</a>
          </Popup>
        </Marker>
    </MapContainer>
    <br></br>
    </div>
  );
}

export default Map;