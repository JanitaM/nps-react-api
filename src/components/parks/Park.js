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
  CardContent,
  Divider
} from '@material-ui/core';

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
      <div>
        <Grid container direction='row' spacing={2}>
          <Grid item xs={12} sm={8} key={id}>
            <Paper>
              <Typography variant='h4' gutterBottom>
                {fullName}
              </Typography>
              <Divider />
              <Typography variant='body1' gutterBottom>
                {description}
              </Typography>
              <Typography variant='body1' gutterBottom>
                <strong>Entrance Fees:</strong>
              </Typography>
              {entranceFees &&
                entranceFees.map((fee) => (
                  <div key={fee.cost} style={{ marginBottom: '10px' }}>
                    <Typography variant='body1'>
                      {fee.title}: ${fee.cost.slice(0, 5)}
                    </Typography>
                    <Typography variant='body2'>{fee.description}</Typography>
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
                    <Typography variant='body2'>{pass.description}</Typography>
                  </div>
                ))}

              <Typography variant='body1' gutterBottom>
                <strong>Directions:</strong> {directionsInfo}
              </Typography>

              <Button href={url} color='primary'>
                Visit Official Park Website For More Information
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>
                <Typography variant='h6'>
                  <strong> Available Activities:</strong>{' '}
                </Typography>
                <Divider />
                {activities &&
                  activities.map((activity) => (
                    <Typography key={activity.id}>{activity.name}</Typography>
                  ))}
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
        <Link to='/'>
          <Button variant='contained' color='primary'>
            Back to Parks
          </Button>
        </Link>
      </div>
    );
  }
};

// change styles here
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
