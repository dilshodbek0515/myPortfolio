import React from 'react'
import { useRoutes } from 'react-router-dom'
import Layout from '../pages/layout/Layout'
import Home from '../pages/home_page/Home_page'
import About from '../pages/about_page/About_page'
import Resume from '../pages/rezyume_page/Rezyume_page'
import Portfolio from '../pages/portfolio_page/Portfolio_page'
import Teachers from '../pages/teachers_page/Teachers_page'
import Contact from '../pages/contact_page/Contact_page'
import Error from '../pages/error/Error_page'
const Router = () => {
  return (
    <div>
      {useRoutes([
        {
          path: '/',
          element: <Layout />,
          children: [
            {
              path: '/',
              element: <Home />
            },
            {
              path: '/about',
              element: <About />
            },
            {
              path: '/resume',
              element: <Resume />
            },
            {
              path: '/portfolio',
              element: <Portfolio />
            },
            {
              path: '/teachers',
              element: <Teachers />
            },
            {
              path: '/contact',
              element: <Contact />
            }
          ]
        },
        {
          path: '*',
          element: <Error />
        }
      ])}
    </div>
  )
}

export default Router
