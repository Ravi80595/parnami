import React from 'react'
import Home from '../Pages/Home'
import {Routes,Route} from 'react-router-dom'
import Landing from '../Pages/Landing'
import About from '../Pages/About'


const AllRoute = () => {


return (
  <>
    <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/about" element={<About/>}></Route>
    </Routes>
    </>
  )
}

export default AllRoute