import React, { useContext } from 'react'
import { PlayerContext } from '../contaxt/PlayerContext';
import { FaPlay } from "react-icons/fa6";

const Search = () => {
  const { filteredSongs, value, playWithId } = useContext(PlayerContext);
  const firstItem = filteredSongs.length > 0 ? filteredSongs[0] : null;
  const restItems = filteredSongs.length > 1 ? filteredSongs.slice(1) : [];

  return (
    <div className='relative w-full h-full p-5 gap-5 flex overflow-scroll display'>
      {
        value.length > 0 && firstItem ? (
          <div className='w-[70vw] player rounded-xl flex px-[1vw] gap-y-5 items-center justify-between bg-zinc-800 h-[18vw]'>
            <div>
              <div className='w-[7vw] h-[7vw] rounded-md overflow-hidden bg-red-500'>
                <img src={firstItem.image} alt={firstItem.name} />
              </div>
              <h1 className='text-2xl font-bold capitalize'>{firstItem.name}</h1>
            </div>
            <div className='mx-[2vw]'>
              <h3
                onClick={() => playWithId(firstItem.id)}
                className='bg-green-600 p-5 opacity-0 transition-all text-2xl rounded-full text-black'>
                <FaPlay />
              </h3>
            </div>
          </div>
        ) : (
          value.length > 0 && filteredSongs.length === 0 && (
            <div className='w-full h-full rounded-md overflow-hidden'>
              <img className='opacity-[.3] w-full h-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmxWuJuLiWvLn6LiDoq8kSnoAg8Q7iVuOrig&s" alt="No match" />
              <h1 className='text-2xl text-zinc-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold capitalize'>Song not match</h1>
            </div>
          )
        )
      }
      <div className='flex w-full flex-col gap-5'>
        {
          value.length > 0 && restItems.length > 0 && restItems.map((song, index) => (
            <div key={index} onClick={() => playWithId(song.id)} className='w-full h-[10vh] flex gap-5 items-center bg-zinc-800 rounded cursor-pointer transition-all hover:bg-zinc-700 justify-between'>
              <div className='flex items-center gap-5'>
                <div className='w-[5vw] h-[5vw] rounded overflow-hidden'>
                  <img className='w-full h-full object-cover' src={song.image} alt={song.name} />
                </div>
                <h1 className='text-xl font-bold capitalize'>{song.name}</h1>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Search;
