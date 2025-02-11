import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { BiSolidPhoneCall } from 'react-icons/bi'
import { FaFacebook, FaGithub, FaInstagram, FaTelegram } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { RiVercelFill } from 'react-icons/ri'
const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [bot, setBot] = useState({
    name: '',
    phone: '',
    message: ''
  })
  const BOT_TOKEN = '7663778517:AAHLTijMCfFznDWG_1RuAK8YxoRBhYsWPe4'
  const CHAT_ID = '6891591255'

  const handleChange = e => {
    setBot({ ...bot, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const message = `
    📨 New Message:
      👤  Name: ${bot.name}
      📞  Phone: ${bot.phone}
      💬  Message: ${bot.message}
    `

    try {
      await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/SendMessage`, {
        chat_id: CHAT_ID,
        text: message
      })
      toast.success('Malumotlar telegram botga yborildi'),
        setBot({
          name: '',
          phone: '',
          message: ''
        })
    } catch (error) {
      toast.error('Malumotlar telegram botga yuborilmadi, qayta urinib ko‘ring')
    }
  }
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
          onSubmit={handleSubmit}
          className='w-full h-auto flex flex-col items-center gap-20'
          style={{ marginTop: '60px' }}
        >
          <h4 className='text-7xl text-white max-sm:text-4xl'>Let's Talk</h4>
          <div className='w-full flex items-center gap-10 max-xl:flex-col'>
            <input
              className='w-full h-20 border-2 border-white rounded-2xl outline-none text-white indent-3 text-2xl max-sm:text-sm'
              placeholder='Name'
              type='text'
              required
              onChange={handleChange}
              name='name'
              value={bot.name}
            />
            <input
              className='w-full h-20 border-2 border-white rounded-2xl outline-none text-white indent-3 text-2xl max-sm:text-sm'
              placeholder='Phone Number'
              type='text'
              required
              onChange={handleChange}
              name='phone'
              value={bot.phone}
            />
          </div>
          <textarea
            className='w-full min-h-96 border-2 border-white rounded-2xl outline-none text-white text-2xl max-sm:text-sm'
            style={{ padding: '20px' }}
            placeholder='Please contact if you have any suggestions !!!'
            onChange={handleChange}
            name='message'
            value={bot.message}
          ></textarea>
          <button className='w-[50%] h-24 border-2 duration-300 cursor-pointer border-white rounded-2xl text-white text-3xl hover:bg-white hover:text-black max-xl:w-full'>
            Send Message
          </button>
        </form>

        <div
          className='w-full h-auto grid grid-cols-3 gap-20 max-sm:grid-cols-2'
          style={{ marginBlock: '100px' }}
        >
          <a
            href='https://t.me/dilshodbek0515'
            className='flex flex-col items-center justify-center gap-5 h-auto text-white text-2xl'
          >
            <FaTelegram className='text-6xl' />
            Telegram
          </a>
          <a
            href='https://www.instagram.com/dilshodbek__0515__'
            className='flex flex-col items-center justify-center gap-5 h-auto text-white text-2xl'
          >
            <FaInstagram className='text-6xl' />
            Instagram
          </a>
          <a
            href='https://www.facebook.com/profile.php?id=61565774353475'
            className='flex flex-col items-center justify-center gap-5 h-auto text-white text-2xl'
          >
            <FaFacebook className='text-6xl' />
            Facebook
          </a>
          <a
            href='https://github.com/dilshodbek0515'
            className='flex flex-col items-center justify-center gap-5 h-auto text-white text-2xl'
          >
            <FaGithub className='text-6xl' />
            Git Hub
          </a>
          <a
            href='mailto:dilshodx516@gmail.com'
            className='flex flex-col items-center justify-center gap-5 h-auto text-white text-2xl'
          >
            <MdEmail className='text-6xl' />
            Email
          </a>
          <a
            href='https://vercel.com/dilshodbeks-projects-50922e37'
            className='flex flex-col items-center justify-center gap-5 h-auto text-white text-2xl'
          >
            <RiVercelFill className='text-6xl' />
            Vercel
          </a>
        </div>
      </div>
      <Toaster position='top-center' reverseOrder={false} />
    </div>
  )
}

export default Contact
