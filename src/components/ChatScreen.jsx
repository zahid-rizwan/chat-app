import React from 'react'
import boy from '../assets/boy.png'

const ChatScreen = ({userName}) => {
  return (
    <div className='sm:w-8/12 sm:h-screen bg-slate-700'>
      <div className='w-full  bg-[#222C32]'>
        <div className='flex py-2 px-4'>
        <img src={boy} className='w-12 rounded-full bg-white' alt="" />
          <p className='px-5 py-1 font-semibold text-white text-xl'>{userName}</p>
        </div>
      </div>
    </div>
  )
}

export default ChatScreen