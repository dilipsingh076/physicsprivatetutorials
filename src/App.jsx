import { useState } from 'react'
import './App.css'
import Footer from './components/Footer/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex justify-between' >
        Hello
        <Footer/>
      </div>
    </>
  )
}

export default App
