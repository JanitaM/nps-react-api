import React, { useState, useContext, useEffect } from 'react';
import NPSContext from '../../context/nps/npsContext';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const Filter = () => {
  const npsContext = useContext(NPSContext);
  const { parks, searchParks } = npsContext;

  const [filterText, setFilterText] = useState('');

  let filteredParks = [];
  for (let park of parks) {
    park.activities.filter((activity) => {
      if (activity.name === filterText) {
        filteredParks.push(park);
      }
      return filteredParks;
    });
  }
  console.log(filteredParks);

  useEffect(() => {
    setFilterText(filterText);
  }, [filterText]);

  const onChange = (e) => setFilterText(e.target.value);

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography className={classes.intro}>
        Filter parks by activities
      </Typography>
      <TextField
        id='standard-basic'
        placeholder='Enter Activity'
        type='text'
        name='text'
        value={filterText}
        onChange={onChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>
          )
        }}
      />
    </div>
  );
};

const useStyles = makeStyles({
  container: {
    margin: '3rem auto'
  },
  intro: {
    marginBottom: '1rem'
  }
});

export default Filter;
