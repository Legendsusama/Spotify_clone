

import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();
    return (
        <>
            <div className='flex w-[100%] items-center justify-between font-semibold'>
                <div className='flex gap-2 items-center'>
                    <div onClick={()=>(navigate(-1))} className='bg-black w-8 h-8 rounded-full flex items-center justify-center cursor-pointer'>
                        <img  className='w-4' src={assets.arrow_left} alt="" />
                    </div>
                    <div onClick={()=>(navigate(1))} className='bg-black w-8 h-8 rounded-full flex items-center justify-center cursor-pointer'>
                        <img  className='w-4' src={assets.arrow_right} alt="" />
                    </div>
                </div>

                <div className='flex gap-3 items-center'>
                    <button className='py-2 px-4 text-black bg-white rounded-full hidden md:block '>Explore Premium</button>
                    <button className='py-2 px-4 bg-black text-white rounded-full'>Install App</button>
                    <div className='w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center cursor-pointer text-black'>
                        D
                    </div>

                </div>
            </div>

            <div className='flex gap-2 items-center mt-4'>
                <button className='text-black bg-white py-1 px-3 rounded-full'>All</button>
                <button className='text-white bg-black py-1 px-3 rounded-full'>Music</button>
                <button className='text-white bg-black py-1 px-3 rounded-full'>Podcasts</button>

            </div>
        </>
    )
}

export default Navbar
