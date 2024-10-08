

import React from 'react'
import { albumsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import SongsItem from './SongsItem'
import { songsData } from '../assets/assets'

const DisplayHome = () => {
    return (

        <>

            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl '>Featured Chart</h1>
                <div className='flex overflow-auto'>
                {
                    albumsData.map((item, index) => (
                        <AlbumItem key={index} image={item.image} name={item.name} desc={item.desc} id={item.id} />
                    ))
                }
                </div>
            </div>

            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl '>Todays biggest hits</h1>
                <div className='flex overflow-auto'>
                {
                    songsData.map((item, index) => (
                        <SongsItem key={index} image={item.image} name={item.name} desc={item.desc} id={item.id} />
                    ))
                }
                </div>
            </div>
        </>
    )
}

export default DisplayHome
