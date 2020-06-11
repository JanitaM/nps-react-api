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

const Filter = () => {
  const npsContext = useContext(NPSContext);
  const { parks, filtered } = npsContext;

  const [filterText, setFilterText] = useState('');

  const filterParks = (filterText) => {
    filterText = filterText.charAt(0).toUpperCase() + filterText.slice(1);
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
      return;
    } else {
      filterParks(filterText);
    }
  };

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography className={classes.text}>
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
          className={classes.filterBtn}
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: '3rem auto'
  },
  text: {
    marginRight: '3rem'
  },
  filterBtn: {
    backgroundColor: '#F28C0F',
    color: '#fff',
    margin: '0 1rem',
    '&:hover': {
      backgroundColor: '#D97D0D'
    }
  }
});

export default Filter;
