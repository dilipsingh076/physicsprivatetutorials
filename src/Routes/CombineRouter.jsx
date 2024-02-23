import { Route, Routes } from 'react-router-dom'
import Homepage from '../Pages/Homepage'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Courses from '../Pages/Courses'

const CombineRouter = () => {
  return (
    <>

        
        <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/courses' element={<Courses/>} />
        </Routes>

    </>
  )
}

export default CombineRouter