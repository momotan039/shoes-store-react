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

function App() {
  const router=createBrowserRouter([
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
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
