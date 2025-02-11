import React, { useEffect } from 'react'
import { FaRegAddressCard } from 'react-icons/fa'

const Rezyume = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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
          className='w-full h-auto grid grid-cols-3 gap-5 max-2xl:grid-cols-2 max-lg:grid-cols-1 max-sm:gap-20'
          style={{ marginTop: '100px' }}
        >
          <div
            className='h-96 flex flex-col items-start justify-center gap-5 shadow-2xl bg-gray-900 rounded-2xl hover:scale-105 transition-transform duration-300'
            style={{ padding: '20px' }}
          >
            <p
              className='text-white text-4xl whitespace-nowrap max-sm:text-2xl'
              style={{ marginBottom: '30px' }}
            >
              2014 ------------ 2025
            </p>
            <h4 className='text-white text-4xl font-bold'>School Student</h4>
            <p className='text-2xl text-white'>
              Ishtixon, Samarqand, Uzbekistan
            </p>
            <p className='text-xl text-white'>High school student</p>
          </div>
          <div
            className='h-96 flex flex-col items-start justify-center gap-5 shadow-2xl bg-gray-900 rounded-2xl hover:scale-105 transition-transform duration-300'
            style={{ padding: '20px' }}
          >
            <p
              className='text-white text-4xl whitespace-nowrap max-sm:text-2xl'
              style={{ marginBottom: '30px' }}
            >
              2023 ------------ 2024
            </p>
            <h4 className='text-white text-4xl font-bold'>
              Ishtixon It Academy
            </h4>
            <p className='text-2xl text-white'>
              Ishtixon, Samarqand, Uzbekistan
            </p>
            <p className='text-xl text-white'>Frontend Developer</p>
          </div>
          <div
            className='h-96 flex flex-col items-start justify-center gap-5 shadow-2xl bg-gray-900 rounded-2xl hover:scale-105 transition-transform duration-300'
            style={{ padding: '20px' }}
          >
            <p
              className='text-white text-4xl whitespace-nowrap max-sm:text-2xl'
              style={{ marginBottom: '30px' }}
            >
              2024 ------------ 2025
            </p>
            <h4 className='text-white text-4xl font-bold'>Najot Ta'lim</h4>
            <p className='text-2xl text-white'>
              Chilonzor, Toshkent, Uzbekistan
            </p>
            <p className='text-xl text-white'>Frontend Developer</p>
          </div>
          <div
            className='h-96 flex flex-col items-start justify-center gap-5 shadow-2xl bg-gray-900 rounded-2xl hover:scale-105 transition-transform duration-300'
            style={{ padding: '20px' }}
          >
            <p
              className='text-white text-4xl whitespace-nowrap'
              style={{ marginBottom: '10px' }}
            >
              HARD SKILLS
            </p>
            <p className='text-xl text-white'>HTML, CSS, SCSS</p>
            <p className='text-xl text-white'>TAILWIND, BOOTSTRAP</p>
            <p className='text-xl text-white'>JAVA SCRIPT, TYPE SCRIPT</p>
            <p className='text-xl text-white'>REACT JS, NEXT JS</p>
            <p className='text-xl text-white'>REDUX, CONTEXT API</p>
            <p className='text-xl text-white'>GIT HUB, MUI</p>
          </div>
          <div
            className='h-96 flex flex-col items-start justify-center gap-5 shadow-2xl bg-gray-900 rounded-2xl hover:scale-105 transition-transform duration-300'
            style={{ padding: '20px' }}
          >
            <p
              className='text-white text-4xl whitespace-nowrap'
              style={{ marginBottom: '10px' }}
            >
              SOFT SKILLS
            </p>
            <p className='text-xl text-white'>NETWORKING</p>
            <p className='text-xl text-white'>TIME MANAGEMENT</p>
            <p className='text-xl text-white'>RESPONSIBILITY</p>
            <p className='text-xl text-white'>LEADERSHIP SKILLS</p>
            <p className='text-xl text-white'>PROBLEM-SOLVING</p>
            <p className='text-xl text-white'>ADAPTABILITY</p>
          </div>
          <div
            className='h-96 flex flex-col items-start justify-start gap-5 shadow-2xl bg-gray-900 rounded-2xl hover:scale-105 transition-transform duration-300'
            style={{ padding: '20px' }}
          >
            <p
              className='text-white text-4xl whitespace-nowrap'
              style={{ marginBottom: '10px' }}
            >
              WORK
            </p>
            <p className='text-2xl text-white'>
              I'm currently looking for an internship.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rezyume
