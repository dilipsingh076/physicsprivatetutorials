  import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React from 'react'

const Contactform = () => {
  return (
    <>
      <Box sx={{ height:"100px",width:"100%",display:"flex",flexDirection:"column",gap:"40px",color:"#000" }}>
        <Box sx={{display:"flex",width:"100%",justifyContent:"space-between"}}> 

      <TextField sx={{width:"40%"}} id="standard-basic" label="First Name" variant="standard" />
      <TextField sx={{width:"40%"}} id="standard-basic1" label="Last Name" variant="standard" />

        </Box>
        <Box  sx={{display:"flex",width:"100%",justifyContent:"space-between"}}>

        <TextField sx={{width:"40%"}} id="standard-basic" label="Email" variant="standard" />
      <TextField sx={{width:"40%"}} id="standard-basic1" label="Phone Number" variant="standard" />
       

        {/* <Image src='/bigellips.jpg'  width={450} height={10} /> */}
        </Box>
 <Box>

   

    <FormControl>
      <Typography  >Select Subject ?</Typography>
      <RadioGroup
      sx={{fontSize:"20px"}}
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel sx={{fontSize:"20px"}} value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="other"
        />
      </RadioGroup>
    </FormControl>
 </Box>

 <Box  sx={{display:"flex",width:"100%",justifyContent:"space-between"}}>

<TextField sx={{width:"100%"}} placeholder='Write your message..' id="standard-basic" label="Message" variant="standard" />



</Box>
 <Box  sx={{display:"flex",width:"100%",justifyContent:"space-between"}}>
<Button style={{background:'red'}} sx={{background:"red",textTransform:"capitalize",color:"#fff" }}>Send Message</Button>


</Box>
        </Box>  
    </>
  )
}

export default Contactform