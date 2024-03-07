import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing/Landing'
import Menu from './pages/Menu/Menu'
import About from './pages/About/About'
import Cart from './pages/Cart/Cart'
import Status from './pages/Status/Status'
import Profile from './pages/Profile/Profile'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Landing />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/about' element={<About />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/status' element={<Status />} />
      <Route path='/profile' element={<Profile />} />
    </>
  )
)


function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
