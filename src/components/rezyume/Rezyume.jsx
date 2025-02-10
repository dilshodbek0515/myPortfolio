import React from 'react'
import { FaRegAddressCard } from 'react-icons/fa'

const Rezyume = () => {
  return (
    <div className='w-[95%] h-full' style={{ padding: '20px' }}>
      <div
        className='container flex items-center flex-col gap-10'
        style={{ marginInline: 'auto', marginTop: '20px' }}
      >
        <div className='w-full flex items-center justify-between gap-5 borderred'>
          <h2 className='text-7xl text-red-600 max-sm:text-4xl'>Me Resume</h2>
          <FaRegAddressCard className='text-7xl text-red-600 max-sm:text-4xl' />
        </div>

        <div
          className='w-full h-auto grid grid-cols-3'
          style={{ marginTop: '100px' }}
        >
          <div className='h-96 border-2 border-red-600'></div>
          <div className='h-96 border-2 border-red-600'></div>
          <div className='h-96 border-2 border-red-600'></div>
        </div>
      </div>
    </div>
  )
}

export default Rezyume
