import React from 'react'
import {NavLink} from "react-router-dom"
import '../App.css'

export default function NavBar () {

    return (
        <div className='navbar'>
            <NavLink className='navItem' to='/'> Home </NavLink>
            <NavLink className='navItem' to='/farmhouse'> Farmhouse </NavLink>
            <NavLink className='navItem' to='/sweetwaters'> Sweetwaters </NavLink>
            <NavLink className='navItem' to='/leunigsbistro'> Leunigs </NavLink>
            <NavLink className='navItem' to='/pennycluse'> Penny Cluse </NavLink>
            <NavLink className='navItem' to='/honeyroad'> Honey Road </NavLink>
        </div>
    )
}