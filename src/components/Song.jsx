import React, { useContext } from 'react'
import { PlayerContext } from '../contaxt/PlayerContext'

const Song = ({ image, name,id }) => {
  const { playWithId } = useContext(PlayerContext)
  return (
    <div onClick={() => playWithId(id)} key={id} className='p-2 transition-all rounded-md hover:bg-zinc-800 cursor-pointer'>
      <div className='w-[14vw] h-[14vw] rounded-md overflow-hidden '>
        <img className='w-full h-full object-cover' src={image} alt="" />
      </div>
      <h1 className='text-xl font-semibold mt-2 capitalize'>{name}</h1>
    </div>
  )
}

export default Song