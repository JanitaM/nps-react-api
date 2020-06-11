import React, { useState, useContext, useEffect } from 'react';
import NPSContext from '../../context/nps/npsContext';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  TextField,
  InputAdornment,
  Button
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Alert from './Alert';

const Filter = () => {
  const npsContext = useContext(NPSContext);
  const { parks, setAlert, filtered } = npsContext;

  const [filterText, setFilterText] = useState('');

  const filterParks = (filterText) => {
    let filteredParksArr = [];
    for (let park of parks) {
      park.activities.filter((activity) => {
        if (activity.name === filterText) {
          filteredParksArr.push(park);
        }
        return filteredParksArr;
      });
    }
    filtered(filteredParksArr);
  };

  const onChange = (e) => setFilterText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();

    if (filterText === '') {
      setAlert(true);
    } else {
      filterParks(filterText);
    }
  };

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Alert />
      <Typography className={classes.intro}>
        Filter parks by activities
      </Typography>
      <form onSubmit={onSubmit}>
        <TextField
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
        <Button
          // className={classes.searchBtn}
          size='small'
          type='submit'
          onClick={onSubmit}
        >
          Filter
        </Button>
      </form>
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
