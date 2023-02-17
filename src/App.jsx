import { Container, Grid, Typography } from "@mui/material"
import { NoticiasProvider } from "./context/NoticiasProvider"
import { Formulario } from "./Formulario"

export const App = () => {
  return (
    <NoticiasProvider>
      <Container>
        <header>
          <Typography align="center" marginY={5} component='h1' variant="h3">
            Buscador de noticias
          </Typography>
        </header>

        <Grid 
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
        >
          <Grid item md={6} xs={12} lg={4}>
            <Formulario />
          </Grid>
        </Grid>
      </Container>
    </NoticiasProvider>
  )
}