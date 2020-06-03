import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import {
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core';

const ParkItem = ({
  park: { description, fullName, addresses, images, parkCode }
}) => {
  const classes = useStyles();

  if (addresses.length === 0) return null;

  return (
    <Grid item xs={12} sm={4} className={classes.gridContainer}>
      <Link to={`/park/${parkCode}`}>
        <Card className={classes.cardStyle}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={
                images[0]
                  ? images[0].url
                  : 'https://www.fcgov.com/parks/img/city-park.jpg'
              }
              title={images[0] ? images[0].title : 'No image available'}
            />
            <CardContent className={classes.content}>
              <Typography gutterBottom variant='h5' component='h2'>
                {fullName}
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link to={`/park/${parkCode}`} size='small' color='primary'>
              Learn More
            </Link>
          </CardActions>
        </Card>
      </Link>
    </Grid>
  );
};

const useStyles = makeStyles({
  gridContainer: {
    display: 'flex'
  },
  media: {
    height: '40vh'
  },
  cardStyle: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    width: '100%',
    height: '100%'
  }
});

export default ParkItem;
