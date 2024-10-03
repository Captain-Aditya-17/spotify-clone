import React, { useContext } from 'react'
import Album from './Album'
import { albumsData } from '../assets/assets'
import { songsData } from '../assets/assets'
import '../App.css'
import Song from './Song'
import Banner from './Banner'
import { PlayerContext } from '../contaxt/PlayerContext'

const Home = () => {
  const {track} = useContext(PlayerContext)
  return (
    <div className='w-full display h-[90vh] overflow-y-scroll py-5 px-2' style={{ backgroundImage: `linear-gradient(to top, transparent,${track.bgColor}, ${track.bgColor})` }}>
      <Banner/>
      <h1 className='text-3xl font-bold ml-4 mt-2'>Popular Playlists</h1>
      <div className='w-full  gap-4 flex  items-start '>
        {
          albumsData.map((item, index) => {
            return <Album image={item.image} name={item.name} id={item.id} bg={item.bgColor}/>
          })
        }
      </div>
      <h1 className='text-3xl font-bold ml-4 mt-2'>Popular songs</h1>
      <div className='p-2 pb-[8vw] flex flex-wrap gap-4'>
        {
          songsData.map((item, index) => {
            return <Song image={item.image} name={item.name} id={item.id}/>
          })
        }
      </div>
    </div>
  )
}

export default Home