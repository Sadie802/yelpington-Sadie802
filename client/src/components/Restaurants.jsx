import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import NavBar from "./NavBar";
import "../App.css";

export default function Restaurants() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState();
  const [newCenter, setNewCenter] = useState();

  //using useEffect to fetch data each time param (id) of url changes
useEffect(() => {
    async function restaurants() {
      const response = await fetch(`http://localhost:5001/${id}`);
      setRestaurant(await response.json());
    }
    restaurants();
  }, [id]);

  useEffect(()=>{
      if (restaurant && id){
      let location = [restaurant.latitude, restaurant.longitude]
      setNewCenter(location)
      }
      if (newCenter){
        window.location.reload()
    }
  }, [restaurant])

  return (
    <div>
        
      <NavBar /> {restaurant && newCenter ?
      <div className="container">
        <h1>{restaurant.name}</h1>
        <h4>{restaurant.cuisine}</h4>
        <section className="about">
          <h3>{restaurant.about}</h3>
        </section>
        <section className="details">
          <p>{restaurant.hours}</p>
          <p>{restaurant.phoneNumber}</p>
          <p>{restaurant.address}</p>
        </section>
        <MapContainer
          center={newCenter}
          zoom={19}
          scrollWheelZoom={false}
          style={{ height: "50vh", width: "50vw", margin: "auto" }}
        >
          <TileLayer
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          />
          <Marker className="marker" position={newCenter}>
            <Popup>
             {restaurant.name}
            </Popup>
          </Marker>
        </MapContainer>
      </div> 
      : <div>hi</div> } {/* CHANGE TO ACTUAL ERROR*/}
    </div>
   
  );
}
