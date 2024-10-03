import React, { useContext } from 'react';
import { PlayerContext } from '../contaxt/PlayerContext';
import { assets } from '../assets/assets';

const Player = () => {
  const { track, play, seekbg, seekcolor, pause, next, playstatus, prev, time, seekSong } = useContext(PlayerContext);
  return (
    <div className='w-full h-[13%] flex items-center justify-between px-2'>
      <div className='flex items-center gap-5'>
        <div className='w-[4vw] h-[4vw] text-white bg-red-50 rounded-md overflow-hidden'>
          <img className='w-full h-full object-cover' src={track.image} alt="" />
        </div>
        <h1 className='text-xl text-white font-bold capitalize'>{track.name}</h1>
      </div>
      <div className='flex items-center justify-center gap-y-4 flex-col w-[40%]'>
        <div className='flex gap-5 items-center justify-center'>
          <img onClick={prev} className='w-[10%] cursor-pointer' src={assets.prev_icon} alt="" />
          {playstatus ? <img onClick={pause} className='w-[10%] cursor-pointer' src={assets.pause_icon} alt="" /> :
            <img onClick={play} className='w-[10%] cursor-pointer' src={assets.play_icon} alt="" />}
          <img onClick={next} className='w-[10%] cursor-pointer' src={assets.next_icon} alt="" />
        </div>
        <div className='flex items-center justify-center gap-y-4 gap-4 w-full text-white'>
          <h1>{time.currentTime.minute}:{time.currentTime.second}</h1>
          <div onClick={seekSong} ref={seekbg} className='w-full h-[4px] cursor-pointer bg-zinc-700 rounded'>
            <div ref={seekcolor} className='w-0 transition-all h-full rounded bg-white'></div>
          </div>
          <h1>{time.totalTime.minute}:{time.totalTime.second}</h1>
        </div>
      </div>
      <div className='flex'>
        {
          [assets.mini_player_icon].map((item, index) => {
            return <img className='w-[50%] cursor-pointer' src={item} alt="" />
          })
        }
      </div>
    </div>
  );
}

export default Player;
