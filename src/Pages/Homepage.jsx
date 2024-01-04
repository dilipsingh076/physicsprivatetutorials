import { Box } from '@mui/system'
import React from 'react'
import { PlayButton, homeModel } from '../utils'
import { Typography } from '@mui/material'

const Homepage = () => {
  return (
    <>
      <Box
        // className={'flex justify-around'}
        sx={{
          // border: '1px solid red',
          width: "100%",
          bgcolor: "#dde9ff",
          color: "#2D2D2Dck",
          marginTop: '-100px',
          height: '650px',
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        {/* left box */}
        <Box
          // className={'flex justify-around items-center '}
          sx={{
            border: '1px solid blue',
            width: "50%",
            bgcolor: "#dde9ff",
            color: "#2D2D2Dck",
            marginTop: '65px'
          }}
        >

          <Box
            sx={{
              border: '1px solid pink',
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'

            }}>
            <Typography
              sx={{
                border: '1px solid red',
                color: '#063995',
                fontSize: "48px",
                fontWeight: '700',
                wordWrap: 'break-word',
                width: '60%'
              }}
            >
              Grow up your skills by online courses with onlearning
            </Typography>

          </Box>
        </Box>
        {/* right box */}
        <Box
          className={'flex justify-around align-center'}
          sx={{
            border: '1px solid red',
            width: '50%',
            bgcolor: "#dde9ff",
            color: "#2D2D2Dck",
            marginTop: '65px'
          }}
        >
          <img src={homeModel} alt="Brand Logo" style={{ height: '580px' }} />
        </Box>

      </Box>
      <Box
        sx={{
          border: "1px solid red",
          display: 'flex',
          justifyContent: 'center',
        }}>
        <div style={{ width: '10%', height: '80px', background: '#B1CDFD', borderRadius: 9999, display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '80%', height: '100%', background: '#063995', borderRadius: 9999, display: 'flex', justifyContent: 'center' }} >
            <img src={PlayButton} />
          </div>
        </div>

      </Box>
    </>
  )
}

export default Homepage