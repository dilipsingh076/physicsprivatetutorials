import { Box } from '@mui/system'
import React from 'react'
import { Course1, PlayButton, Vector1, homeModel } from '../utils'
import { Button, Card, CardActionArea, CardContent, CardHeader, Divider, Paper, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';



const ProgramItem = ({ title, background, border }) => {
  return (
    <Paper
      sx={{
        paddingLeft: 2,
        paddingRight: 2,
        paddingTop: 1,
        paddingBottom: 1,
        borderRadius: 1,
        background: background || 'transparent',
        border: border || 'none',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 1,
        display: 'flex',
      }}
    >
      <Typography sx={{ color: background ? 'white' : '#818C96', fontSize: 12, fontFamily: 'Raleway', fontWeight: '500', textTransform: 'capitalize', wordWrap: 'break-word' }}>
        {title}
      </Typography>
    </Paper>
  );
};



const Homepage = () => {
  const navigate = useNavigate();

  const handleEnrollNow = () => {
    // Redirect to "/contact" when the button is clicked
    navigate('/contact');
  };

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
            // border: '1px solid blue',
            width: "50%",
            bgcolor: "#dde9ff",
            color: "#2D2D2Dck",
            marginTop: '65px'
          }}
        >

          <Box
            sx={{
              // border: '1px solid pink',
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'

            }}>
            <Typography
              sx={{
                // border: '1px solid red',
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
            // border: '1px solid red',
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
          // border: "1px solid red",
          display: 'flex',
          justifyContent: 'center',
        }}>
        <div style={{ width: '10%', height: '180px', background: '#B1CDFD', borderRadius: 9999, display: 'flex', justifyContent: 'center', marginTop: '-85px', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'relative', width: '60%', height: '60%', background: '#063995', borderRadius: 9999, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
            <img style={{ height: '40px' }} src={PlayButton} />
          </div>
        </div>

      </Box>
      <Box
        sx={{
          // border: '1px solid blue',
          marginTop: '30px',
        }}
        width="100%"
        height="100%"
      >
        <Box width="100%" height="100%" display={'flex'} justifyContent="center">
          <Paper
            sx={{
              // border: '1px solid red',
              // width: 397.83,
              // height: 70.32,
              // // left: 274,
              // top: 0,
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography
              sx={{
                position: 'relative',
                textAlign: 'center',
                color: '#063995',
                fontSize: 48,
                fontFamily: 'Inter',
                fontWeight: '700',
                lineHeight: '62.40px',
                wordWrap: 'break-word',
              }}
            >
              Popular Courses
            </Typography>
            <Box sx={{
              // border: '1px solid red',
              display: 'flex',
              flexDirection: 'row-reverse',
              width: '100%'
            }}>
              <img src={Vector1} />
            </Box>
          </Paper>

        </Box>
        <Box width="100%" height="100%" display='flex' justifyContent="center" alignItems="center">
          <Paper sx={{ width: '50%', height: 144, position: 'relative', boxShadow: 'none' }}>
            <Box
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 2,

              }}
            >
              <ProgramItem title="All Program" background="#063995" />
              <ProgramItem title="UI/UX Design" border="1px #C4C4C4 solid" />
              <ProgramItem title="Program Design" border="1px #C4C4C4 solid" />
              <ProgramItem title="Program Design" border="1px #C4C4C4 solid" />
              <ProgramItem title="Program Design" border="1px #C4C4C4 solid" />
              <ProgramItem title="Program Design" border="1px #C4C4C4 solid" />
            </Box>
          </Paper>
        </Box>

      </Box >

      <Box
        sx={{
          // border: '1px solid blue',
          marginTop: '30px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '30px auto 0px auto',
          gap: '20px',

        }}
        width="80%"
        height="100%"

      >
        {[1, 2, 3, 4].map((index) => (
          <Card key={index} style={{  marginBottom: '16px', height: '550px', }}>
            {/* Image */}
            <img
              src={Course1}
              alt={`Image ${index}`}
              style={{ width: '100%', height: '40%', objectFit: 'cover' }}
            />
            {/* Header */}
            <CardHeader
              title="Product Management Basic Courses"
              sx={{ textAlign: 'center' }}
            />
            {/* Course Description */}
            <CardContent>
              <Typography variant="body2" color="textSecondary">
                Course description goes here. You can provide information about the course content,
                duration, and any other relevant details.
              </Typography>

            </CardContent>
            <CardActionArea sx={{
              width: '90%',
              margin: 'auto'
            }}>
              <Button variant="contained" color="primary" onClick={handleEnrollNow} style={{ marginTop: '10px', float: 'right' }}>
                Enroll Now
              </Button>
            </CardActionArea>
          </Card>
        ))}
      </Box>

    </>
  )
}

export default Homepage