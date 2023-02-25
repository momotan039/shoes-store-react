import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import AdminDashboard from './components/admin/dashboard/AdminDashboard'
import Home from './components/home/Home'
import Root from './components/Root'
import Shoes from './components/shoes/Shoes'
import ManageShoes from './components/admin/manage shoes/ManageShoes'
import EditShoe from './components/admin/controls/EditShoe'
import AddShoe from './components/admin/controls/AddShoe'
import ShoeDeitals from './components/details Shoe/ShoeDetails'
import Login from './components/admin/login/Login'
import { useEffect, useState } from 'react'
import {  isLogginUser, rootRefs, Users } from './utils/local.mjs'
import Footer from './components/footer/Footer'

function App() {
  debugger
  const [logginUser,setLogginUser]=useState(isLogginUser())
  rootRefs.logOut=()=>{
    localStorage.removeItem('user')
    setLogginUser(undefined)
  }
  debugger
  const router=buildTheRouter()
  useEffect(()=>{
    rootRefs.currentUser=logginUser
  })
  
 function buildTheRouter(){
  const routs=[
      {
        path:'/',
        element:<Root/>,
        children:[
            {
              path:'/',
              element:<Home/>
            },
            {
              path:'/store',
              element:<Shoes/>
            },
            {
              path:'/shoe-details/:name',
              element:<ShoeDeitals/>
            },
        ]
      },
      {
        path:'*',
        element:(<h1>not found page 404</h1>)
      }
  ]

  const manageRout={
      path:'/admin-dashboard',
      element:<AdminDashboard/>,
      children:[
        {
          path: "manage-shoes",
          element: <ManageShoes/>,
        },
        {
          path: "edit",
          element:<EditShoe/>,
        },
        {
          path: "add",
          element: <AddShoe />,
        },
      ]
    }
    
    if(logginUser&&logginUser.isAdmin)
  routs[0].children.push(manageRout)

  return createBrowserRouter(routs)
}

  return (
    <div className="App">
      {
        logginUser?<RouterProvider router={router} />:
        <>
        <Login setUser={setLogginUser} />
        <Footer/>
        </>
      }
    </div>
  )
}

export default App
