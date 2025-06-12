import { useState } from 'react'

import './App.css'
import './bootstrap.min.css'

import Landing from './pages/Landing'
import Details from './pages/Details'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import Header from './components/Header'
import Footer from './components/Footer'

import { Route,Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
      <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/det/:id' element={<Details/>}/>
          <Route path='/wish' element={<Wishlist/>}/>
          <Route path='/cart' element={<Cart/>}/>
      </Routes>
    <Footer/>

    </>
  )
}

export default App
