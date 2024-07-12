import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import NavBar from './NavBar'
import Spinner from './Spinner'

const Root = () => {
  const { state } = useNavigation();

  return (
    <div className=''>
      <Header />
      <NavBar />

      <main className=''>
        {
          state === 'loading' ? <Spinner /> : <Outlet />
        }
      </main>

      <Footer />
    </div>
  )
}

export default Root