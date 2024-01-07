import { Button } from '@mui/material'
import React from 'react'

const Bluebtn = ({Buttontitle}) => {
  return (
    <>


     <Button sx={{width:"100%",fontFamily:"Loto" ,borderRadius:'10px',color:"#fff",background:"#063995",padding:"10px",textTransform:"capitalize"}}>
        {Buttontitle}
        </Button>   

    </>
  )
}

export default Bluebtn