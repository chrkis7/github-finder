import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function About() {
  return (
    <Box>
      <Typography variant='h2' component='h1' marginTop={5}>
        Github Finder
      </Typography>
      <Typography variant='body1' component='p'>
        A React app to search GitHub profiles and see profile details. 
      </Typography>
    </Box>
  )
}

export default About
