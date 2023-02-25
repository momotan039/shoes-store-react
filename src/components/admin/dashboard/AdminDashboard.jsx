import { useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import './AdminDashboard.css'
export default function AdminDashboard() {
  const nav=useNavigate()
  useEffect(()=>{
      nav('/admin-dashboard/manage-shoes')
  },[])
  return (
    <>
      <div className="controls-admin-dashboard">
      <Link to="/admin-dashboard/manage-shoes">
        <button>Show All Shoes</button>
      </Link>

      <Link to="/admin-dashboard/add">
        <button>Add New Shoe</button>
      </Link>
      </div>
      
      <Outlet />
    </>
  );
}
