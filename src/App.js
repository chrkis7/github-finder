import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Tykpography from '@mui/material/Typography'
import Typography from '@mui/material/Typography'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Typography variant='h6' component='h1'>
        Hello World
      </Typography>
    </ThemeProvider>
  )
}

export default App;
