import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

export default function Restaurants () {
    const {id} = useParams()
    const [name, setName] = useState([])

    useEffect(() => {
        names()
    }, [id])

    const names = async () => {
        const response = await fetch(`http://localhost:5001/${id}`)
        setName(await response.text())
    }
    
    return(
        <div>
            {[name]}
        </div>
    )
}