import React from 'react'
import { PiShoppingBagOpen } from 'react-icons/pi'
import portfolio1 from '../../assets/images/p1.png'
import portfolio2 from '../../assets/images/p2.png'
import portfolio3 from '../../assets/images/p3.png'
import portfolio4 from '../../assets/images/p4.png'
import portfolio5 from '../../assets/images/p5.png'
import portfolio6 from '../../assets/images/p6.png'
import portfolio7 from '../../assets/images/p7.png'
import portfolio8 from '../../assets/images/p8.png'
const projects = [
  {
    id: 1,
    title: 'NORALIGHT',
    link: 'https://react-n8.vercel.app',
    img: portfolio1
  },
  {
    id: 2,
    title: 'CINEMA',
    link: 'https://cinema-one-zeta.vercel.app',
    img: portfolio2
  },
  {
    id: 3,
    title: 'WEATHER',
    link: 'https://weather-blue-five.vercel.app',
    img: portfolio3
  },
  {
    id: 4,
    title: 'PORTFOLIO',
    link: 'https://portfolio-phi-gules-15.vercel.app',
    img: portfolio4
  },
  {
    id: 5,
    title: 'ONLINE SHOP',
    link: 'https://final-chi-three.vercel.app',
    img: portfolio5
  },
  {
    id: 6,
    title: 'SEGWAY',
    link: 'https://segway-nu.vercel.app',
    img: portfolio6
  },
  {
    id: 7,
    title: 'PORTFOLIO 2',
    link: 'https://my-portfolio-orcin-eight-10.vercel.app',
    img: portfolio7
  },
  {
    id: 8,
    title: 'TTB',
    link: 'https://ishtixon-ttb-seven.vercel.app/',
    img: portfolio8
  }
]
const Portfolio = () => {
  return (
    <div className='w-[95%] h-full' style={{ padding: '20px' }}>
      <div
        className='container flex items-center flex-col gap-10'
        style={{ marginInline: 'auto', marginTop: '20px' }}
      >
        <div className='w-full flex items-center justify-between gap-5 borderred'>
          <h2 className='text-7xl text-red-600 max-sm:text-4xl'>Portfolio</h2>
          <PiShoppingBagOpen className='text-7xl text-red-600 max-sm:text-4xl' />
        </div>

        <div
          className='w-full grid grid-cols-3 gap-10'
          style={{ marginTop: '60px' }}
        >
          {projects.map(project => (
            <div
              key={project.id}
              className='bg-gray-700 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 relative'
            >
              <a href={project.link} className='w-full h-full'>
                <img
                  src={project.img}
                  alt={project.title}
                  className='w-full h-full object-cover border-2 rounded-2xl'
                />
              </a>
              <div className='p-4'>
                <h3 className='text-lg font-semibold text-gray-900 absolute left-5 z-10 w-full h-10 opacity-70'>
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
