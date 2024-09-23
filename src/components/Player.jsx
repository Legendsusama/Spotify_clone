import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const Player = () => {


  const {time, track, seekBg, seekBar, play, pause, playStatus, previousSong, nextSong, seekSong} = useContext(PlayerContext)

  const getShorDescription = (desc) => {
    const wordArray = desc.split(" ");

    if (wordArray.length > 4) {
      return wordArray.slice(0, 4).join(" ") + " ...";
    }

    return desc;
  }

  return (
    <div className=' h-[10%] bg-[#121212] flex items-center justify-betwenn px-4 text-white'>

      <div className='hidden items-center gap-4 lg:flex'>
        <img className='w-12' src={track.image} alt="" />

        <div>
          <p>{track.name}</p>
          <p>{getShorDescription(track.desc)}</p>
        </div>

      </div>



      <div className='flex flex-col items-center gap-1 m-auto'>
        <div className='flex gap-4'>
          <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="" />
          <img onClick={previousSong} className='w-4 cursor-pointer' src={assets.prev_icon} alt="" />
          {
            playStatus 
            ? <img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt="" /> 
            : <img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt="" />
          
          }
          
          <img onClick={nextSong} className='w-4 cursor-pointer' src={assets.next_icon} alt="" />
          <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="" />
        </div>

        <div className='flex items-center gap-5'>
          <p>{time.currentTime.minute}:{time.currentTime.second}</p>


          <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
            <hr ref={seekBar} className='border-none h-1 w-[0] bg-green-800 rounded-full' />
          </div>
          <p>{time.totalTime.minute}:{time.totalTime.second}</p>

        </div>
      </div>


      <div className='hidden items-center gap-2 lg:flex'>

        <img src={assets.plays_icon} alt="" className="w-4 cursor-pointer" />
        <img src={assets.mic_icon} alt="" className="w-4 cursor-pointer" />
        <img src={assets.queue_icon} alt="" className="w-4 cursor-pointer" />
        <img src={assets.speaker_icon} alt="" className="w-4 cursor-pointer" />
        <img src={assets.volume_icon} alt="" className="w-4 cursor-pointer" />
        <div className='h-1 w-20 bg-slate-50 rounded'>
        </div>
        <img src={assets.mini_player_icon} alt="" className="w-4 cursor-pointer" />
        <img src={assets.zoom_icon} alt="" className="w-4 cursor-pointer" />

      </div>


    </div>
  )
}

export default Player
