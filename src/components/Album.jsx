import React from 'react';
import { useNavigate } from 'react-router-dom';

const Album = ({ image, name, id }) => {

  const navigate = useNavigate()
  return (
    <div key={id} onClick={()=> navigate(`album/${id}`)} className='p-2 transition-all hover:bg-zinc-800 cursor-pointer'>
      <div className='w-full h-[11vw] rounded-md overflow-hidden'>
        <img className='w-full h-full object-cover' src={image} alt={name} />
      </div>
      <h1 className='text-xl font-semibold mt-2'>{name}</h1>
    </div>
  );
};

export default Album;
