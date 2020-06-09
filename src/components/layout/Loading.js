import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress size='6rem' />
    </div>
  );
};

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Loading;
