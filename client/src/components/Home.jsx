import React from 'react'
import NavBar from './NavBar'
import Map from './Map'

export default function Home () {
    return (
    <div> 
        <h1>Yelpington</h1>
        <NavBar />
        < Map center={[44.4782651,-73.2122868]}/>
    </div>
    )
}