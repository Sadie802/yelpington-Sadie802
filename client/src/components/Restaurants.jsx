import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import Map from './Map'
import NavBar from './NavBar'
import '../App.css'

export default function Restaurants () {
    const {id} = useParams()
    const [name, setName] = useState([])

//using useEffect to fetch data each time param (id) of url changes
    useEffect(() => {
        names()
    }, [id])

    //fetching data from server depending on the id of url
    const names = async () => {
        const response = await fetch(`http://localhost:5001/${id}`)
        setName(await response.json())
    }

    return(
        <div>
            <NavBar />
            <div className='container'>
                <h1>{name.name}</h1>
                <h4>{name.cuisine}</h4>
                <section className='about'>
                    <h3>{name.about}</h3>
                </section>
                <section className='details'>
                    <p>{name.hours}</p>
                    <p>{name.phoneNumber}</p>
                    <p>{name.address}</p>
                </section>
            <Map center={[name.longitude, name.latitude]}/>
            </div>
  
        </div>
    )
}

