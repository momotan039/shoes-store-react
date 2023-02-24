import React, { useState } from 'react'
import  './Header.css'
import { NavLink } from 'react-router-dom'
import {FiLogOut, FiMenu} from 'react-icons/fi'
import MobileNav from '../mobile nav/MobileNav'
export default function Header() {
    const[showMobileNav,setShowMobileNav]=useState(false)

    return (
        <header>
            <button onClick={()=>setShowMobileNav(true)} className='btn-mobile-menu'><FiMenu/></button>
            <h3><NavLink to='/'>SHOSEY</NavLink></h3>
            <nav className='menu'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/store'>Store</NavLink>
                <NavLink to='/admin-dashboard'>Admin Dashboard</NavLink>
            </nav>
            <MobileNav isShow={showMobileNav} showMe={setShowMobileNav}/>
            <div className="user">
                <h3>hello User</h3>
                <button><FiLogOut/></button>
            </div>
        </header>
    )
}
