

import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const DisplayAlbum = () => {

  const {playWithId} = useContext(PlayerContext);

  const { id } = useParams();
  console.log("The id is : ", id)

  const albumData = albumsData[id];

  return (
    <>
      <div className='flex flex-col md:flex-row md:items-end mt-4 gap-8'>

        <img className='w-48 rounded' src={albumData.image} alt="" />
        <div>
          <p>Playlist</p>
          <h2 className='font-bold text-5xl mb-4 md:text-7xl'>{albumData.name}</h2>
          <h4>{albumData.desc}</h4>
          <p className='mt-1 text-sm text-slate-200' >
            <img className='inline-block w-5' src={assets.spotify_logo} alt="" /> <b>Spotify</b> 1,323,154 likes <b>50 songs</b> about <b>2</b> hour <b>30</b> mins</p>
        </div>

      </div>

      <div className='grid grid-cols-2 sm:grid-cols-4 text-[#a7a7a7] mt-10 mb-4 pl-2'>
        <p><b className='mr-4'>#</b> Title</p>
        <p className='hidden sm:block'>Album</p>
        <p className='hidden sm:block'>Date Added</p>
        <img className='w-4 m-auto' src={assets.clock_icon} alt="" />

      </div>

      <hr />

      <div className='my-4'>
        {
          songsData.map((item, index) => (
            <div onClick={()=>(playWithId(item.id))}  key={index} className='grid grid-cols-2 sm:grid-cols-4 items-center p-2 gap-2 text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer'>

              <p className=''>
                <b className='mr-4 text-[#a7a7a7]'>{index + 1}</b>
                <img className='inline w-10 mr-5' src={item.image} alt="" />
                {item.name}

              </p>

              <p className='hidden sm:flex text-[#a7a7a7]'>{albumData.name}</p>
              <p className='hidden sm:block text-[#a7a7a7]'>5 days ago</p>
              <p className='text-[#a7a7a7] text-center'>{item.duration}</p>

            </div>
          ))
        }
      </div>

    </>
  )
}

export default DisplayAlbum
