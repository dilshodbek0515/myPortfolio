import React from 'react'
import img from '../../assets/images/bg.jpg'
const Home = () => {
  return (
    <div className='w-full h-screen relative'>
      <img className='w-full h-screen bg-cover max-md:bg-conic' src={img} alt='bg' />
      <div
        className='w-full h-full absolute name flex items-center justify-center'
        style={{ left: '50%', top: '50%' }}
      >
        <div className='flex items-center justify-center flex-col gap-8'>
          <h2 className='text-8xl text-white font-bold max-xl:text-5xl max-sm:text-3xl'>
            Dilshodbek Hasanov
          </h2>
          <p className='text-3xl text-white max-sm:text-2xl'>I am a Frontend Developer</p>
        </div>
      </div>
    </div>
  )
}

export default Home
