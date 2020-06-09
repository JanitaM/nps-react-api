import React, { useState, useContext } from 'react';
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
import Filter from './Filter';

const Search = () => {
  const npsContext = useContext(NPSContext);
  const { searchParks, clearSearch, setAlert } = npsContext;

  const [text, setText] = useState('');

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();

    if (text === '' || text.length !== 2) {
      setAlert(true);
    } else {
      searchParks(text);
      setText('');
    }
  };

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Alert />
      <Typography className={classes.intro}>
        Search the US National Park Service API. Browse park information,
        activites offered, and much more!
      </Typography>
      <form onSubmit={onSubmit}>
        <TextField
          id='standard-basic'
          placeholder='State Abbreviation'
          type='text'
          name='text'
          value={text}
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
          className={classes.searchBtn}
          size='small'
          type='submit'
          onClick={onSubmit}
        >
          Search
        </Button>

        {npsContext.parks.length > 0 && (
          <>
            <Button
              className={classes.clearBtn}
              size='small'
              type='submit'
              onClick={clearSearch}
            >
              Clear
            </Button>
            <Filter />
          </>
        )}
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
  },
  searchBtn: {
    backgroundColor: '#03A678',
    color: '#fff',
    margin: '0 1rem',
    '&:hover': {
      backgroundColor: '#02735E'
    }
  },
  clearBtn: {
    backgroundColor: '#D9D7D7',
    color: '#000',
    '&:hover': {
      color: '#000'
    }
  }
});

export default Search;
