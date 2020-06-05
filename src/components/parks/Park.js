import React, { useContext, useEffect } from 'react';
import NPSContext from '../../context/nps/npsContext';
import Loading from '../layout/Loading';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Typography,
  Grid,
  Card,
  CardContent,
  Divider
} from '@material-ui/core';
import ImageGridList from './ImageGridList';

const Park = ({ match }) => {
  const npsContext = useContext(NPSContext);
  const { loading, getPark, park } = npsContext;

  useEffect(() => {
    getPark(match.params.parkCode);
  }, []);

  const {
    activities,
    entranceFees,
    entrancePasses,
    url,
    directionsInfo,
    description,
    fullName,
    images,
    id
  } = park;

  const classes = useStyles();

  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <Grid
          container
          direction='row'
          className={classes.container}
          justify='space-around'
          alignItems='stretch'
        >
          <Grid
            container
            direction='row'
            item
            spacing={2}
            xs={12}
            sm={8}
            justify='space-around'
            alignItems='stretch'
          >
            <Grid item sm={12} key={id}>
              <Card className={classes.itemContainer}>
                <Typography variant='h4' gutterBottom>
                  {fullName}
                </Typography>
                <Divider />
                <Typography
                  variant='body1'
                  gutterBottom
                  className={classes.item}
                >
                  {description}
                </Typography>
                <Typography variant='body1' gutterBottom>
                  <strong>Entrance Fees:</strong>
                </Typography>
                {entranceFees &&
                  entranceFees.map((fee) => (
                    <div key={fee.cost}>
                      <Typography variant='body1'>
                        {fee.title}: ${fee.cost.slice(0, 5)}
                      </Typography>
                      <Typography variant='body2' gutterBottom>
                        {fee.description}
                      </Typography>
                    </div>
                  ))}
                <Typography variant='body1' gutterBottom>
                  <strong>Entrance Passes:</strong>
                </Typography>
                {entrancePasses &&
                  entrancePasses.map((pass) => (
                    <div key={pass.cost}>
                      <Typography variant='body1'>
                        {pass.title}: ${pass.cost.slice(0, 5)}
                      </Typography>
                      <Typography variant='body2' gutterBottom>
                        {pass.description}
                      </Typography>
                    </div>
                  ))}
                <Typography variant='body1' gutterBottom>
                  <strong>Directions:</strong>
                </Typography>
                <Typography variant='body1' gutterBottom>
                  {directionsInfo}
                </Typography>
                <Divider />
                <Button href={url} className={classes.visitBtn}>
                  Visit Official Park Website
                </Button>
              </Card>
            </Grid>
            <Grid item sm={12}>
              <ImageGridList />
            </Grid>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>
                <Typography variant='h6' gutterBottom>
                  <strong> Available Activities:</strong>{' '}
                </Typography>
                <Divider />
                <div className={classes.item}>
                  {activities &&
                    activities.map((activity) => (
                      <Typography key={activity.id} gutterBottom>
                        {activity.name}
                      </Typography>
                    ))}
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Link to='/'>
          <Button variant='contained' color='primary'>
            Back to Parks
          </Button>
        </Link>
      </>
    );
  }
};

const useStyles = makeStyles((theme) => ({
  container: {
    margin: '2rem 0'
  },
  itemContainer: {
    padding: '1rem'
  },
  item: {
    padding: '1rem 0'
  },
  visitBtn: {
    backgroundColor: '#03A678',
    margin: '1rem 0',
    '&:hover': {
      backgroundColor: '#02735E'
    },
    padding: '0.5rem 1rem'
  }
}));

export default Park;
