import React from 'react'
import Sidebar from './Sidebar'
import MusicPlayer from './MusicPlayer'
import Display from './Display'

const Container = () => {
  return (
    <div className='w-full h-[90vh] bg-black gap-3 flex p-3'>
        <Sidebar/>
        <Display/>
        <MusicPlayer/>
    </div>
  )
}

export default Container