import React, { useState, useContext } from 'react';
import NPSContext from '../../context/nps/npsContext';
import { TextField, InputAdornment, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

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

  return (
    <div style={{ margin: '2rem auto' }}>
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
          variant='outlined'
          color='primary'
          size='small'
          type='submit'
          onClick={onSubmit}
        >
          Search
        </Button>
        {npsContext.parks.length > 0 && (
          <Button
            variant='outlined'
            color='secondary'
            size='small'
            type='submit'
            onClick={clearSearch}
          >
            Clear
          </Button>
        )}
      </form>
    </div>
  );
};

export default Search;
