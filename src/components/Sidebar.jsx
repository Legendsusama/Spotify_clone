

import React from 'react'
import { assets } from '../assets/assets.js'

const Sidebar = () => {
  return (
    <div className='w-[25%] flex-col h-full p-2  gap-2   text-white hidden lg:flex'>

      <div className='bg-[#121212] rounded h-[20%] flex flex-col justify-around'>
        <div className='flex items-center h-[50%] gap-3 pl-8 cursor-pointer hover:bg-[#3F3F3F] rounded'>
          <img className='w-6' src={assets.home_icon} alt="" />
          <p className='font-bold'>Home</p>
        </div>

        <div className='flex  pl-8 h-[50%] items-center cursor-pointer gap-3 hover:bg-[#3F3F3F] rounded'>
          <img className='w-6' src={assets.search_icon} alt="" />
          <p className='font-bold'>Search</p>
        </div>
      </div>

      <div className='bg-[#121212] h-[80%] rounded p-2 flex flex-col gap-3'>

        <div className='flex items-center justify-between py-2'>

          <div className="flex gap-3 cursor-pointer items-center">
            <img className='w-8' src={assets.stack_icon} alt="" />
            <p className='text-white font-semibold'>Library</p>
          </div>

          <div className='flex gap-3 items-center'>
            <img className='w-5 cursor-pointer' src={assets.arrow_icon} alt="" />
            <img className="w-5 cursor-pointer" src={assets.plus_icon} alt="" />
          </div>

        </div>

        <div className='bg-[#242424] p-4 rounded '>

          <h2 className='font-bold'>Create your first playlist</h2>
          <p className='font-light'>Its easy we will help you</p>

          <button className='bg-white font-semibold text-sm mt-4 text-black py-2 px-4 rounded-full'>Create Playlist</button>

        </div>

        <div className='bg-[#242424] p-3 rounded '>

          <h2 className='font-bold'>Lets find some podcasts to follow</h2>
          <p className='font-light'>we'll keep you updated on new episodes</p>

          <button className='bg-white font-semibold text-sm mt-4 text-black py-2 px-4 rounded-full'>Browse podcasts</button>

        </div>



      </div>



    </div>
  )
}

export default Sidebar
