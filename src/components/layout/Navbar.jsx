import PropTypes from 'prop-types'
import Link from '@mui/material/Link'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import GitHubIcon from '@mui/icons-material/GitHub'

const navItems = ['Home', 'About'];

function Navbar({ title }) {
  return (
    <AppBar component='nav'>
      <Toolbar>
        <GitHubIcon />
        <Typography
          variant='h6'
          component='div'
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          marginLeft={1}
        >
          <Link href='/' color='#fff' underline='none'>
          {title}
          </Link>
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Button>
            <Link href='/' color='#fff' underline='none'>
              {navItems[0]}
            </Link>
          </Button>
          <Button>
            <Link href='/about' color='#fff' underline='none'>
              {navItems[1]}
            </Link>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

Navbar.defaultProps = {
  title: 'Github Finder'
}

Navbar.propTypes = {
  title: PropTypes.string
}

export default Navbar