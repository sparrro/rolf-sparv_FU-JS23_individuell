import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing/Landing'
import Menu from './pages/Menu/Menu'
import About from './pages/About/About'
import Status from './pages/Status/Status'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Landing />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/about' element={<About />} />
      <Route path='/status' element={<Status />} />
    </>
  )
)


function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
