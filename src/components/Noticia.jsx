import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

const Noticia = ({ noticia }) => {
  console.log(noticia)
  const { urlToImage, url, title, description, source } = noticia

  const imageURL = isValidHttpUrl(urlToImage)
    ? urlToImage
    : `https://www.mibolsillo.com${urlToImage}`
  return (
    <Grid
      item
      md={6}
      lg={4}
    >
      <Card>
        {urlToImage && (
          <CardMedia
            component='img'
            alt={`Imagen de la Noticia ${title}`}
            image={imageURL}
            height={250}
          />
        )}
        <CardContent>
          <Typography
            variant='body1'
            color='error'
          >
            {source.noticia}
          </Typography>

          <Typography
            variant='h5'
            component='div'
          >
            {title}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

function isValidHttpUrl(string) {
  try {
    const url = new URL(string)
    return url.protocol === 'http:' || url.protocol === 'https:'
  } catch (err) {
    return false
  }
}

export default Noticia
