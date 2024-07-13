
import { Outlet, useNavigation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import NavBar from './NavBar'
import Spinner from './Spinner'

const Root = () => {
  const { state } = useNavigation();

  return (
    <div className='grid grid-rows-[auto_1fr_auto] min-h-screen'>
      <header className=''>
        <Header />
        <NavBar />
      </header>


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