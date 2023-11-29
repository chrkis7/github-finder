import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import HouseIcon from '@mui/icons-material/House';

function NotFound() {
  return (
    <Box textAlign='center'>
      <Typography variant='h1' component='h1' marginY={3}>
        Oops!
      </Typography>
      <Typography variant='h4' component='h2' marginY={2}>
        404 - Page not found!
      </Typography>
      <Button variant='outlined' color='primary'>
        <Link href='/' color='#fff' underline='none'>
        <HouseIcon sx={{mr: 1}}/>
          Back To Home
        </Link>
      </Button>
  </Box>
  )
}

export default NotFound
