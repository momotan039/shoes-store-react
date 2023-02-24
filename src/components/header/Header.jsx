import React from 'react'
import  './Header.css'
import { NavLink } from 'react-router-dom'
import {FiLogOut} from 'react-icons/fi'
export default function Header() {
    return (
        <header>
            <h3 className='logo-f'>Shosey</h3>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/store'>Store</NavLink>
                <NavLink to='/admin-dashboard'>Admin Dashboard</NavLink>
            </nav>
            <div className="user">
                <h3>hello User</h3>
                <button><FiLogOut/></button>
            </div>
        </header>
    )
}
