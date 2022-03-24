import React from 'react'
import NavBar from './NavBar'
import Map from './Map'
import '../App.css'

export default function Home (props) {
    return (
    <div>
        <NavBar />
        <div className='container'> 
            <h1 id='homeTitle'>Restaurants of Burlington</h1>
            < Map center={props.center}/>
        </div>
    </div>
    )
}