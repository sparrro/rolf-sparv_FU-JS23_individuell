import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Menu from './pages/Menu'
import About from './pages/About'
import Cart from './pages/Cart'
import Status from './pages/Status'
import Profile from './pages/Profile'
import RootLayout from './RootLayout'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Landing />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/about' element={<About />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/status' element={<Status />} />
      <Route path='/profile' element={<Profile />} />
    </Route>
  )
)


function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
