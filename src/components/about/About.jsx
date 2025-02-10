import React from 'react'
import { IoPerson } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='w-[95%] h-full' style={{ padding: '20px' }}>
      <div
        className='container flex items-center flex-col gap-10'
        style={{ marginInline: 'auto', marginTop: '20px' }}
      >
        <div className='w-full flex items-center justify-between gap-5 borderred'>
          <h2 className='text-7xl text-red-600 max-sm:text-4xl'>About Me</h2>
          <IoPerson className='text-7xl text-red-600 max-sm:text-4xl' />
        </div>

        <div
          className='w-full flex justify-between gap-5 max-lg:flex-col max-lg:gap-32'
          style={{ marginTop: '100px' }}
        >
          <div className='flex flex-col items-start gap-10'>
            <h3 className='text-5xl text-white max-sm:text-3xl'>
              Frontend Developer
            </h3>
            <p className='text-white text-2xl max-w-4xl leading-10 max-sm:text-lg'>
              A Front-end Developer with a passion for technology, a strong
              focus on improving user experience, and a deep enthusiasm for
              building modern web applications. Committed to writing clean and
              efficient code, with expertise in responsive design and creating
              interactive user interfaces.
            </p>
          </div>
          <div className='flex flex-col items-start gap-10'>
            <h3 className='text-white text-5xl font-bold max-2xl:text-4xl'>
              Personal Information
            </h3>
            <p className='text-white text-3xl font-bold flex items-center gap-5 max-sm:text-2xl'>
              Name:
              <span className='text-2xl text-white max-sm:text-lg'>Dilshodbek Hasanov</span>
            </p>
            <p className='text-white text-3xl font-bold flex items-center gap-5 max-sm:text-2xl'>
              Age:<span className='text-2xl text-white max-sm:text-lg'>18</span>
            </p>
            <p className='text-white text-3xl font-bold flex items-center gap-5 max-sm:text-2xl'>
              Address:
              <span className='text-2xl text-white whitespace-nowrap max-sm:text-lg'>
                Samarqand Uzbekistan
              </span>
            </p>
            <p className='text-white text-3xl font-bold flex items-center gap-5 max-sm:text-2xl'>
              Email:{' '}
              <span className='text-2xl text-white max-sm:text-lg'>dilshodx516@gmail.com</span>
            </p>
            <p className='text-white text-3xl font-bold flex items-center gap-5 max-sm:text-2xl'>
              Phone:
              <span className='text-2xl text-white max-sm:text-lg'>+998 (97) 579 05 15</span>
            </p>
            <Link to={'/resume'} className='w-full h-16 max-sm:w-[70%]'>
              <button className='w-full h-full text-red-600 text-2xl border-2 duration-300 border-red-600 rounded-2xl hover:bg-red-600 hover:text-white'>
                My Resume
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
