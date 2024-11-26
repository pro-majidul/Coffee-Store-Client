
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <>
     <nav className='mt-1'>
    <Navbar></Navbar>
     </nav>
     <main className='w-11/12 mx-auto my-5 py-5'>
     <Outlet></Outlet>
     </main>
     <footer>
      <Footer></Footer>
     </footer>
    
    </>
  )
}

export default App
