import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Map from "./Map";
import Search from "./Search";
import "../App.css";

export default function Home() {
  const [restaurants, setRestaurants] = useState();
  const [search, setSearch] = useState();
  const [searchSubmit, setSearchSubmit] = useState(false);

  useEffect(() => {
    async function getData() {
      let response = await fetch("http://localhost:5001");
      response = await response.json();
      setRestaurants(response);
    }
    getData();
  }, []);

  function handleSubmit() {
    setSearchSubmit(true);
  }

  return (
    <main>
      {searchSubmit ? (
        <div>
          <a href="/">Back</a>
          <Search
            restaurants={restaurants}
            search={search}
            searchSubmit={searchSubmit}
          />
        </div>
      ) : (
        <main>
          <NavBar />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search.."
              onChange={(e) => setSearch(e.target.value)}
            ></input>
            <button type="submit">Search</button>
          </form>

          <div className="container">
            <h1 id="homeTitle">Restaurants of Burlington</h1>
            <Map />
          </div>
        </main>
      )}
    </main>
  );
}
