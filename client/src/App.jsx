import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Register from './Components/User/Register/Register'
import VendorRegister from './Components/Vendor/Register/VendorRegister'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <div className='app'>
          {/* <Header /> */}
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <Link to="/user/register">User Register</Link>
                  <br />
                  <Link to="/vendor/register">Vendor Register</Link>
                </>
              }
            />
            <Route path='/user/register' element={<Register />} />
            <Route path='/vendor/register' element={<VendorRegister />} />
            <Route path='/about' element={<h1>About</h1>} />
            <Route path='/contact' element={<h1>Contact</h1>} />
          </Routes>
          {/* <Footer /> */}
        </div>
      </BrowserRouter>

    </>
  )
}

export default App
