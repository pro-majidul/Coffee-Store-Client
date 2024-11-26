
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
     <nav className='mt-1'>
    <Navbar></Navbar>
     </nav>
     <main className='w-11/12 mx-auto my-5 py-5'>
     <Outlet></Outlet>
     </main>
    
    </>
  )
}

export default App
