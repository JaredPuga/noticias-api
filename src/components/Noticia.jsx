import { Card, CardActions, CardContent, CardMedia, Grid, Link, Typography } from "@mui/material"

export const Noticia = ({noticia}) => {

  const { urlToImage, url, title, description, source } = noticia

  return (
    <Grid item md={6} lg={4}>
      <Card>
        {urlToImage && (
          <CardMedia 
          component='img'
          alt={`Imagen de la noticia ${title}`}
          image={urlToImage}
          height={'250'}
          />
        )}

        <CardContent>
          <Typography variant="body1" color='error'>
            {source.name}
          </Typography>
          <Typography variant="h5" component='div'>
            {title}
          </Typography>
          <Typography variant="body2" component='div'>
            {description}
          </Typography>
        </CardContent>

        <CardActions>
          <Link
            href={url}
            target='_blank'
            variant="button"
            color='error'
            width='100%'
            textAlign='center'
            sx={{
              textDecoration: 'none'
            }}
          >
            Leer noticia
          </Link>
        </CardActions>
      </Card>
    </Grid>
  )
}
