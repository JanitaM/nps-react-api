import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.aboutContainer}>
      <h1>National Parks Service API App</h1>
      <p>An app to search for national parks and available activities.</p>
    </div>
  );
};

const useStyles = makeStyles({
  aboutContainer: {
    margin: '5rem',
    textAlign: 'center'
  }
});

export default About;
