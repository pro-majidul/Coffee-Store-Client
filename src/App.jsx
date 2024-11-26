
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Banner from './components/Banner'

function App() {

  return (
    <>
      <nav className='mt-1'>
        <Navbar></Navbar>
      </nav>
      <main>
        <section >
          <Outlet></Outlet>
        </section>
      </main>
      <footer>
        <Footer></Footer>
      </footer>

    </>
  )
}

export default App
