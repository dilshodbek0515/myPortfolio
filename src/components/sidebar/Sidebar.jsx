import React from 'react'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
// sidebar
import user from '../../assets/images/user3.jpg'
import { Link } from 'react-router-dom'
import { IoHome } from 'react-icons/io5'
import { MdTypeSpecimen } from 'react-icons/md'
import {
  FaChalkboardTeacher,
  FaProjectDiagram,
  FaRegAddressCard
} from 'react-icons/fa'
import { BiSolidPhoneCall } from 'react-icons/bi'
import { Drawer } from '@mui/material'
const Sidebar = ({ open, toggleDrawer }) => {
  const DrawerList = (
    <Box sx={{ width: 320 }}>
      <div className='w-full h-screen bg-gray-700'>
        <img
          className='w-full h-96 object-cover'
          src={user}
          alt='Dilshodbek Hasanov'
        />
        <h2
          className='w-full text-3xl bg-blue-300 text-center font-bold'
          style={{ padding: '10px' }}
        >
          Dilshodbek Hasanov
        </h2>
        <nav className='w-full' style={{ marginTop: '20px' }}>
          <ul className='w-full flex items-start flex-col'>
            <li
              onClick={toggleDrawer(false)}
              className='w-full h-full text-2xl text-white hover:bg-blue-300 duration-300'
              style={{ paddingLeft: '45px', paddingBlock: '14px' }}
            >
              <Link to={'/'} className='flex gap-4 items-center w-full'>
                <IoHome />
                <span>Home</span>
              </Link>
            </li>
            <Divider className='cursor-pointer w-full bg-white' />
            <li
              onClick={toggleDrawer(false)}
              className='w-full h-full text-2xl text-white hover:bg-blue-300 duration-300'
              style={{ paddingLeft: '45px', paddingBlock: '14px' }}
            >
              <Link to={'/about'} className='flex gap-4 items-center w-full'>
                <MdTypeSpecimen />
                <span>About</span>
              </Link>
            </li>
            <Divider className='cursor-pointer w-full bg-white' />
            <li
              onClick={toggleDrawer(false)}
              className='w-full h-full text-2xl text-white hover:bg-blue-300 duration-300'
              style={{ paddingLeft: '45px', paddingBlock: '14px' }}
            >
              <Link to={'/resume'} className='flex gap-4 items-center w-full'>
                <FaRegAddressCard />
                <span>Rezyume</span>
              </Link>
            </li>
            <Divider className='cursor-pointer w-full bg-white' />
            <li
              onClick={toggleDrawer(false)}
              className='w-full h-full text-2xl text-white hover:bg-blue-300 duration-300'
              style={{ paddingLeft: '45px', paddingBlock: '14px' }}
            >
              <Link
                to={'/portfolio'}
                className='flex gap-4 items-center w-full'
              >
                <FaProjectDiagram />
                <span>Portfolio</span>
              </Link>
            </li>
            <Divider className='cursor-pointer w-full bg-white' />
            <li
              onClick={toggleDrawer(false)}
              className='w-full h-full text-2xl text-white hover:bg-blue-300 duration-300'
              style={{ paddingLeft: '45px', paddingBlock: '14px' }}
            >
              <Link to={'/teachers'} className='flex gap-4 items-center w-full'>
                <FaChalkboardTeacher />
                <span>Teachers</span>
              </Link>
            </li>
            <Divider className='cursor-pointer w-full bg-white' />
            <li
              onClick={toggleDrawer(false)}
              className='w-full h-full text-2xl text-white hover:bg-blue-300 duration-300'
              style={{ paddingLeft: '45px', paddingBlock: '14px' }}
            >
              <Link to={'/contact'} className='flex gap-4 items-center w-full'>
                <BiSolidPhoneCall />
                <span>Contact</span>
              </Link>
            </li>
            <Divider className='cursor-pointer w-full bg-white' />
          </ul>
        </nav>
      </div>
    </Box>
  )

  return (
    <div className='flex'>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  )
}

export default Sidebar
