import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Search from '../layout/Search';
import Parks from '../parks/Parks';

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Search />
      <Parks />
    </div>
  );
};

const useStyles = makeStyles({
  container: {
    textAlign: 'center'
  }
});

export default Home;
