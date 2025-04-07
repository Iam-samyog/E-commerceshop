import React from 'react'

import { Routes, Route } from 'react-router-dom'
import Innerpage from './Innerpage/Innerpage'
import Home from './Home'

function App() {
  return (
    <>
  
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Innerpage />}/>
      </Routes>
     
    </>
  )
}

export default App

