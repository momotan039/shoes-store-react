import { NavLink } from "react-router-dom";
import './MobileNav.css'
export default function MobileNav({showMe,isShow}) {
    const hideMe=()=>{
        showMe(false)
    }
    return (
        <div className={isShow?'mobile-nav opened':'mobile-nav'}>
            <nav>
                <NavLink onClick={hideMe} to='/'>Home</NavLink>
                <NavLink onClick={hideMe} to='/store'>Store</NavLink>
                <NavLink onClick={hideMe} to='/admin-dashboard'>Admin Dashboard</NavLink>
            </nav>
        </div>
    )
}
