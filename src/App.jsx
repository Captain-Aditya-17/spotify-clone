import React, { useContext } from 'react'
import Container from './components/Container'
import FullCon from './components/FullCon'
import { PlayerContext } from './contaxt/PlayerContext'

const App = () => {
  const {track,audioRef} = useContext(PlayerContext)
  return (
    <div>
      <FullCon/>
      <audio ref={audioRef} src={track.song} preload='auto'></audio>
    </div>
  )
}

export default App