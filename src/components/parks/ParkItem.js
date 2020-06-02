import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const ParkItem = ({
  park: { description, fullName, addresses, images, parkCode }
}) => {
  const classes = useStyles();

  if (addresses.length === 0) return null;

  return (
    <Card className={classes.root}>
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
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {fullName}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ alignSelf: 'flexEnd' }}>
        <Link to={`/park/${parkCode}`} size='small' color='primary'>
          Learn More
        </Link>
      </CardActions>
    </Card>
  );
};

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    margin: '1rem'
  },
  media: {
    height: 140
  }
});

// ParkItem.propTypes = {
//   park: PropTypes.object.isRequired
// };

export default ParkItem;
