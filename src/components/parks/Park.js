import React, { useContext, useEffect } from 'react';
import NPSContext from '../../context/nps/npsContext';
import Loading from '../layout/Loading';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Paper,
  Typography,
  Grid,
  Card,
  CardActions,
  CardContent
} from '@material-ui/core';

const Park = ({ match }) => {
  const npsContext = useContext(NPSContext);
  const { loading, getPark, park } = npsContext;

  useEffect(() => {
    getPark(match.params.parkCode);
  }, []);

  const {
    contacts,
    activities,
    entranceFees,
    url,
    directionsInfo,
    topics,
    description,
    fullName,
    name,
    addresses,
    states,
    images,
    parkCode
  } = park;

  const classes = useStyles();

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div>
        <Link to='/'>
          <Button variant='contained' color='primary'>
            Back to Parks
          </Button>
        </Link>
        <Grid container direction='row' spacing={2}>
          <Grid item xs={12} sm={8}>
            <Paper>
              <Typography variant='h4' gutterBottom>
                {fullName}
              </Typography>
              <Typography variant='h6' gutterBottom>
                {description}
              </Typography>
              <Button href={url} color='primary'>
                Visit Official Park Website
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>
                <Typography>Available Activities:</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography>Images go here</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16)
    }
  }
}));

export default Park;
