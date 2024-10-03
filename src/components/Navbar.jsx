import React, { useContext, useState } from 'react'
import { assets, songsData } from '../assets/assets'
import { Link, useLocation } from 'react-router-dom'
import { PlayerContext } from '../contaxt/PlayerContext'
const Navbar = () => {
  const { handleInputChange } = useContext(PlayerContext)
  const [value, setvalue] = useState("")
  const Location = useLocation()

  return (
    <div className='w-full h-[10%] flex items-center justify-between'>
      <div className='flex items-center  '>
        <div className='flex items-center mx-4 '>
          <Link className='flex items-center' to='/'> <img className='w-[60%] bg-[#00000096] p-2 cursor-pointer rounded-full' src={assets.arrow_left} alt="" /></Link>
          <img className='w-[30%] bg-[#00000096] p-2 cursor-pointer rounded-full' src={assets.arrow_right} alt="" />
        </div>
        {
          Location.pathname === '/search' ?
            <input
              value={value}
              onChange={(e) => {
                const newValue = e.target.value;
                setvalue(newValue);
              }}
              onInput={handleInputChange}
              type='text'
              placeholder='What do you want to play?'
              className='px-4 py-2 text-[1vw] w-[30vw] text-white bg-zinc-800  rounded-full mx-5 transition-all'
            /> : <></>
        }
      </div>
      <div className='flex mr-8 items-center gap-5'>
        <button className='text-black bg-white text-[.9vw] font-bold px-4 py-[.4rem] rounded-full'>Explore Premium</button>
        <div className='text-xl font-bold uppercase bg-green-500 text-black px-4 py-2 rounded-full flex items-center justify-center'><span>a</span></div>
      </div>
    </div>
  )
}

export default Navbar