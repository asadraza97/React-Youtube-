import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import { RouterProvider, createBrowserRouter, } from 'react-router-dom'
import Body from './components/Body'
import Watch from './components/Watch'

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <Body/>,
    children:[
      {
        path:"/",
        element:<Feed/> 
      },
      {
        path:"/watch",
        element:<Watch/> 
      }
    ]
  }
])
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    < Navbar/>
    < RouterProvider router={appRouter} />
    </>
  )
}

export default App
