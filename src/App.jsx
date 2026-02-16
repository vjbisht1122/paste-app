import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Paste from './components/Paste'
import Navbar from './components/Navbar'
import Home from './components/Home'
import ViewPaste from './components/ViewPaste'

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
        <Navbar />
        <Home />
      </div>
    },
      {
      path:"/pastes",
      element:
      <div>
        <Navbar />
        <Paste />

      </div>
    },
      {
      path:"/pastes/:id",
      element:
      <div>
        <Navbar />
        <ViewPaste />

      </div>
    },
  
  ]
)
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='border h-80 w-3xl flex items-center justify-center'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
