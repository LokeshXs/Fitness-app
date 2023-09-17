import { Card, CardActions, CardContent, CardMedia, Chip, Stack, Typography, useMediaQuery } from "@mui/material"
import { Link } from "react-router-dom"


const ExerciseCard = ({ imageUrl, ExerciseName, target, bodyPart, id,linkto }) => {


  return (<Link to={linkto}>
    <Card sx={{ maxWidth: "100%" }} >
      <CardMedia
        sx={{ height: 300, objectFit: 'contain', objectPosition: 'center' }}
        image={imageUrl}
        title={ExerciseName}
        component="img"

      />
      <CardContent>
        <Typography fontSize="2rem" textAlign="center" gutterBottom variant="h5" component="div">
          {ExerciseName}
        </Typography>
        <Stack flexDirection="row" gap="1rem" mt="1rem">
          <Chip label={target} size="medium" sx={{ backgroundColor: '#000000', color: '#FCA311', fontSize: '1.2rem', fontWeight: '700' }} />
          <Chip label={bodyPart} size="medium" variant="outlined" sx={{ fontSize: '1.2rem', fontWeight: '700', borderColor: '#FCA311' }} />
        </Stack>
      </CardContent>
    </Card>
  </Link>
  )
}

export default ExerciseCard