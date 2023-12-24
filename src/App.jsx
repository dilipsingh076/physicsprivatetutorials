 
import { Box } from '@mui/material'
import './App.css'
import CombineRouter from './Routes/CombineRouter'
import MyFooter from './components/Footer/MyFooter'
import Navbar from './components/Navbar/Navbar'

function App() {
  
  return (
    <>
    <Navbar/>
    <Box sx={{m:"100px 0px"}}>

      <CombineRouter/>
    </Box>
       <MyFooter/>
    </>
  )
}

export default App
