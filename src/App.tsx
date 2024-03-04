import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './components/pages/Landing'
import About from './components/pages/About'
import Cart from './components/pages/Cart'
import Status from './components/pages/Status'
import Profile from './components/pages/Profile'

function App() {

  return (
    <Router>
      <Routes>
        <Route index element={<Landing />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/status' element={<Status />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </Router>
  )
}

export default App
