

import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'



const SongsItem = ({name, image, desc, id}) => {
  const { playWithId } = useContext(PlayerContext)

  return (
    <div onClick={()=>playWithId(id)} className=' min-w-[180px] p-2 px-3 cursor-pointer rounded hover:bg-[#242424]'>
      <img className='rounded' src={image} alt="" />
      <p className='font-bold text-2xl mt-2 mb-1 text-white'>{name}</p>
      <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default SongsItem
