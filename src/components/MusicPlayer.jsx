import React, { useContext } from 'react'
import '../App.css'
import { PlayerContext } from '../contaxt/PlayerContext'
const MusicPlayer = () => {
  const { track, musicPlayer } = useContext(PlayerContext)
  return (
    <div ref={musicPlayer} className='display w-[40%] h-full rounded-lg overflow-y-scroll bg-[#181818] p-3'>
        <h1 className='text-2xl text-white font-bold my-3'>PLaylist name</h1>
        <div className='w-full h-[50vh] mb-5 bg-red-500 rounded-[10px] overflow-hidden'>
            <img className='w-full h-full object-cover' src={track.image} alt="" />
        </div>
        <h1 className='text-4xl font-bold text-white '>{track.name}</h1>
        <h1 className='text-2xl font-bold text-zinc-500 mb-3'>Artist name</h1>
        <div className='w-full h-[80vh] bg-red-500'></div>
    </div>
  )
}

export default MusicPlayer