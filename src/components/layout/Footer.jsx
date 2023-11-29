import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography' 

function Footer() {
  const footerYear = new Date().getFullYear()

  return (
    <Container maxWidth="sm" >
      <Typography 
        align='center' 
        style={{color: "#455a64", bottom: 0, position: "fixed"}}
      >
        Copyright &copy; {footerYear} All rights are reserved
      </Typography>
    </Container>
  )
}

export default Footer
