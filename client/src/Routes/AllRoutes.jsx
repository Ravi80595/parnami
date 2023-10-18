import React from 'react'
import Home from '../Pages/Home'
import {Routes,Route} from 'react-router-dom'
import Landing from '../Pages/Landing'


const AllRoute = () => {


return (
  <>
    <Routes>
        <Route path="/" element={<Landing/>}></Route>
        
    </Routes>
    </>
  )
}

export default AllRoute