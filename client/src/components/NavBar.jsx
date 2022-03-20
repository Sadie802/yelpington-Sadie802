import React from 'react'
import {NavLink} from "react-router-dom"

export default function NavBar () {
    return (
        <div>
            <NavLink to='/home'> Home </NavLink>
            <NavLink to='/farmhouse'>Farmhouse</NavLink>
            <NavLink to='/sweetwaters'>Sweetwaters</NavLink>
            <NavLink to='/leunigsbistro'>Leunigs</NavLink>
            <NavLink to='/pennycluse'>Penny Cluse</NavLink>
            <NavLink to='/honeyroad'>Honey Road</NavLink>
        </div>
    )
}