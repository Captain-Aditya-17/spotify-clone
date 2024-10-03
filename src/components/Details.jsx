import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { albumsData, songsData } from '../assets/assets'
import { IoMdPlayCircle } from "react-icons/io";
import { IoPauseCircleSharp } from "react-icons/io5";
import { PlayerContext } from '../contaxt/PlayerContext';

const Details = () => {
    const { id } = useParams()
    const album = albumsData.find((item) => item.id === parseInt(id))
    const { playWithId, play, playstatus } = useContext(PlayerContext)

    return (
        <div className='w-full p-2 h-full overflow-scroll display rounded-xl' style={{ backgroundImage: `linear-gradient(to top, transparent,${album.bgColor}, ${album.bgColor})` }}>
            <div className='w-full p-2 flex items-center gap-5'>
                <div className='w-[15vw] h-[15vw] rounded-md overflow-hidden'>
                    <img className='w-full h-full object-cover' src={album.image} alt="" />
                </div>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-5xl font-bold'>{album.name}</h1>
                    <h1 className='text-2xl font-light'>{album.desc}</h1>
                </div>
            </div>
            <div className='w-full p-4 flex'>
                <i onClick={() => play()} className='text-green-500 text-7xl'>{playstatus ?  <IoPauseCircleSharp /> : <IoMdPlayCircle /> }</i>
            </div>
            <div className='w-full border-b-2 border-zinc-500 p-4 grid table-col justify-between'>
                <h1>#</h1>
                <h1>title</h1>
                <h1>time</h1>
            </div>
            <div className='w-full flex flex-col gap-3 p-2'>
                {
                    songsData.map((item, index) => {
                        return <div key={index} onClick={() => playWithId(item.id)} className='grid cursor-pointer items-center table-col'>
                            <h1>{index}</h1>
                            <div className='flex gap-3 items-center'>
                                <div className='w-[4vw] h-[4vw] rounded overflow-hidden'>
                                    <img className='w-full h-full object-cover' src={item.image} alt="" />
                                </div>
                                <h1 className='capitalize'>{item.name}</h1>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Details
