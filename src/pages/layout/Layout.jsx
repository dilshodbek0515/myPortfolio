import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/sidebar/Sidebar'
import { IoMenu } from 'react-icons/io5'
const Layout = () => {
  const [open, setOpen] = useState(true)

  const toggleDrawer = newOpen => () => {
    setOpen(newOpen)
  }
  return (
    <div className='flex relative'>
      <Sidebar open={open} toggleDrawer={toggleDrawer} />
      <main className='flex-1'>
        <Outlet />
      </main>
      <IoMenu
        className='w-20 h-20 fixed top-2 right-2 text-black bg-blue-300 rounded-full'
        style={{ padding: '20px' }}
        onClick={toggleDrawer(true)}
      />
    </div>
  )
}

export default Layout
