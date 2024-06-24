import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"

export const LoginPage = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight:'100vh', backgroundColor: 'primary.main', pr: 4}}
      >
        <Grid item
        classname='box-shadow'
        sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2}}
        xs={3}>
          <Typography variant='h5' sx={{mb:1}}>Login</Typography>
        <form>
          <Grid container>
            <Grid item xs={ 12} sx={{mt: 2}}>
              <TextField 
              label="Correo" 
              type="email" 
              fullWidth></TextField>
            </Grid>
            <Grid item xs={ 12} sx={{mt: 2}}>
              <TextField 
              label="Contraseña" 
              type="password" 
              fullWidth></TextField>
            </Grid>
            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={ 12 } sm={6}>
                <Button variant='contained' fullWidth>
                  Login
                </Button>
              </Grid>
              <Grid item xs={ 12 } sm={6}>
                <Button variant='contained' fullWidth>
                  <Google/>
                  <Typography sx={{ml: 1}}>Google</Typography>
                </Button>
              </Grid>
            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Link colr='inherit' to='/auth/register'>
              Crear una cuenta
              </Link>
            </Grid>
          </Grid>
        </form>
        </Grid>
    </Grid>
  )
}
