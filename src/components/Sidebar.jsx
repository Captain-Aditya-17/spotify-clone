import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='w-[8%] h-full rounded-lg flex flex-col gap-y-3 overflow-hidden'>
      <div className='w-full p-5 flex items-center justify-center flex-col gap-y-5 rounded-lg bg-[#181818]'>
       <Link to='/'><img className='w-[60%] cursor-pointer' src={assets.home_icon} alt="" /></Link>
        <Link to='/search'><img className='w-[60%] cursor-pointer' src={assets.search_icon} alt="" /></Link>
      </div>
      <div className='w-full h-full rounded-lg bg-[#181818]'></div>
    </div>
  )
}

export default Sidebar