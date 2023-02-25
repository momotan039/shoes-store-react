import React, { useState } from 'react'
import  './Header.css'
import { Link, NavLink } from 'react-router-dom'
import {FiLogOut, FiMenu, FiShoppingCart} from 'react-icons/fi'
import MobileNav from '../mobile nav/MobileNav'
import { rootRefs } from '../../utils/local.mjs'
export default function Header() {
    const[showMobileNav,setShowMobileNav]=useState(false)

    return (
        <header>
            <button onClick={()=>setShowMobileNav(true)} className='btn-mobile-menu'><FiMenu/></button>
            <h3><NavLink to='/'>SHOSEY</NavLink></h3>
            <nav className='menu'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/store'>Store</NavLink>
                {
                    rootRefs.currentUser.isAdmin&&
                <NavLink to='/admin-dashboard'>Admin Dashboard</NavLink>
                }
            </nav>
            <MobileNav isShow={showMobileNav} showMe={setShowMobileNav}/>
            <div className="user">
                <h3>Hi {rootRefs.currentUser.name}</h3>
                <button><Link to={'/cart'}><FiShoppingCart/></Link></button>
                <button onClick={()=>rootRefs.logOut()}><FiLogOut/></button>
            </div>
        </header>
    )
}
