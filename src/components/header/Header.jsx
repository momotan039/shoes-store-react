import React from 'react'
import  './Header.css'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/store'>Store</NavLink>
                <NavLink to='/admin-dashboard'>Admin Dashboard</NavLink>
            </nav>
        </header>
    )
}
