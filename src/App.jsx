 
import { Box } from '@mui/material'
import './App.css'
import CombineRouter from './Routes/CombineRouter'
import MyFooter from './components/Footer/MyFooter'
import Navbar from './components/Navbar/Navbar'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return (
    <>
    <Navbar/>
    <Box sx={{m:"80px 0px"}}>
      <CombineRouter/>
    </Box>
    <MyFooter/>
    </>
  )
}

export default App
