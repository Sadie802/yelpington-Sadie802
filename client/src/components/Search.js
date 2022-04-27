import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Search(props){
    let searchedItemDisplay
let searchedItem = props.restaurants.filter(
    (oneRest) => 
    oneRest.name.includes(props.search) ||
    oneRest.cuisine.includes(props.search)
);
console.log(searchedItem)
if (searchedItem){
    searchedItemDisplay = searchedItem.map((searchedItem, index) => {
        return(
            <div className="container">
            <h1>{searchedItem.name}</h1>
            <h4>{searchedItem.cuisine}</h4>
            <section searchedItem="about">
              <h3>{searchedItem.about}</h3>
            </section>
            <section className="details">
              <p>{searchedItem.hours}</p>
              <p>{searchedItem.phoneNumber}</p>
              <p>{searchedItem.address}</p>
            </section>
            <MapContainer
              center={[searchedItem.latitude, searchedItem.longitude]}
              zoom={19}
              scrollWheelZoom={false}
              style={{ height: "50vh", width: "50vw", margin: "auto" }}
            >
              <TileLayer
                url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
              />
              <Marker className="marker" position={[searchedItem.latitude, searchedItem.longitude]}>
                <Popup>
                 {searchedItem.name}
                </Popup>
              </Marker>
            </MapContainer>
          </div> 
    )
    })
}
    return(
        searchedItemDisplay
    )
}
