import React, { useContext } from 'react';
import NPSContext from '../../context/nps/npsContext';
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
  park: { fullName, name, addresses, description, images }
}) => {
  const npsContext = useContext(NPSContext);
  const { park } = npsContext;

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={images[0].url}
          title={images[0].title}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {fullName}
          </Typography>
          <Typography gutterBottom variant='h5' component='h2'>
            {addresses[0]['city']}, {addresses[0]['stateCode']}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ alignSelf: 'flexEnd' }}>
        <Link to={`/park/${name}`} park={park} size='small' color='primary'>
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

ParkItem.propTypes = {
  park: PropTypes.object.isRequired
};

export default ParkItem;
