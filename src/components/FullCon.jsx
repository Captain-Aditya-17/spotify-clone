import React from 'react'
import Container from './Container'
import Player from './Player'

const FullCon = () => {
  return (
    <div className='w-full flex flex-col h-screen bg-black'>
        <Container/>
        <Player/>
    </div>
  )
}

export default FullCon