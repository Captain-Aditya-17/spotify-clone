import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import Search from './Search'
import Details from './Details'

const Display = () => {
  return (
    <div className='w-full h-full rounded-lg overflow-hidden text-white bg-[#181818]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/album/:id' element={<Details />} />
      </Routes>
    </div>
  )
}

export default Display