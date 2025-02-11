import React, { useEffect } from 'react'
import { FaChalkboardTeacher } from 'react-icons/fa'
import tech1 from '../../assets/images/teacher1.png'
import tech2 from '../../assets/images/teacher2.png'
import tech3 from '../../assets/images/teacher3.jpg'
const Teachers = () => {
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
          <h2 className='text-7xl text-red-600 max-sm:text-4xl'>Me Teachers</h2>
          <FaChalkboardTeacher className='text-7xl text-red-600 max-sm:text-4xl' />
        </div>
        <div
          className='w-full h-auto grid grid-cols-3 gap-10 max-xl:grid-cols-2 max-xl:gap-20 max-md:grid-cols-1'
          style={{ marginTop: '100px' }}
        >
          <div className='flex flex-col items-center justify-center gap-5'>
            <div className='h-96 rounded-full bg-gray-500  overflow-hidden max-xl:h-80'>
              <img
                className='w-full h-full object-cover rounded-2xl duration-300 hover:scale-110'
                src={tech1}
                alt='img'
              />
            </div>
            <a
              href='https://t.me/otabekcoding'
              className='text-white text-4xl text-center rounded-2xl bg-gray-900 whitespace-nowrap max-2xl:text-3xl max-xl:text-xl'
              style={{ paddingInline: '40px', paddingBlock: '20px' }}
            >
              Otabek Hasanov
            </a>
          </div>
          <div className='flex flex-col items-center justify-center gap-5'>
            <div className='h-96 rounded-full bg-gray-500  overflow-hidden max-xl:h-80'>
              <img
                className='w-full h-full object-cover rounded-2xl duration-300 hover:scale-110'
                src={tech2}
                alt='img'
              />
            </div>
            <a
              href='https://t.me/shakhruzcoder'
              className='text-white text-4xl text-center rounded-2xl bg-gray-900 whitespace-nowrap max-2xl:text-3xl max-xl:text-xl'
              style={{ paddingInline: '40px', paddingBlock: '20px' }}
            >
              Shaxruz Ismoilov
            </a>
          </div>

          <div className='flex flex-col items-center justify-center gap-5'>
            <div className='h-96 rounded-full bg-gray-500  overflow-hidden max-xl:h-80'>
              <img
                className='w-full h-full object-cover rounded-2xl duration-300 hover:scale-110'
                src={tech3}
                alt='img'
              />
            </div>
            <a
              href='https://t.me/boburmirzo_brm'
              className='text-white text-4xl text-center rounded-2xl bg-gray-900 whitespace-nowrap max-2xl:text-3xl max-xl:text-xl'
              style={{ paddingInline: '40px', paddingBlock: '20px' }}
            >
              Boburmirzo Rasulov
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Teachers
