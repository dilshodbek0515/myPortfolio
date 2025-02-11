import React from 'react'
import { BiSolidPhoneCall } from 'react-icons/bi'

const Contact = () => {
  return (
    <div className='w-[95%] h-full' style={{ padding: '20px' }}>
      <div
        className='container flex items-center flex-col gap-10'
        style={{ marginInline: 'auto', marginTop: '20px' }}
      >
        <div className='w-full flex items-center justify-between gap-5 borderred'>
          <h2 className='text-7xl text-red-600 max-sm:text-4xl'>Me Contact</h2>
          <BiSolidPhoneCall className='text-7xl text-red-600 max-sm:text-4xl' />
        </div>
        <form
          className='w-full h-auto flex flex-col items-center gap-20'
          style={{ marginTop: '60px' }}
        >
          <h4 className='text-7xl text-white'>Let's Talk</h4>
          <div className='w-full flex items-center gap-10'>
            <input
              className='w-full h-20 border-2 border-white rounded-2xl outline-none text-white indent-3 text-2xl'
              placeholder='Name'
              type='text'
              required
            />
            <input
              className='w-full h-20 border-2 border-white rounded-2xl outline-none text-white indent-3 text-2xl'
              placeholder='Phone Number'
              type='number'
              required
            />
          </div>
          <textarea
            className='w-full min-h-96 border-2 border-white rounded-2xl outline-none text-white text-2xl'
            style={{ padding: '20px' }}
            placeholder='Please contact if you have any suggestions !!!'
          ></textarea>
          <button className='w-[50%] h-24 border-2 duration-300 cursor-pointer border-white rounded-2xl text-white text-3xl hover:bg-white hover:text-black'>
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
