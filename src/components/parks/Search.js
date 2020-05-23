import React, { useState, useContext } from 'react';
import NPSContext from '../../context/nps/npsContext';

const Search = () => {
  const npsContext = useContext(NPSContext);
  const { searchParks, clearSearch } = npsContext;

  const [text, setText] = useState('');

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();

    if (text === '') {
      alert('Please enter '); //update with alert function
    } else {
      searchParks(text);
      setText('');
    }
  };

  return (
    <div style={{ margin: '2rem auto' }}>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='text'
          placeholder='State Abbreviation'
          value={text}
          onChange={onChange}
        />
        <input type='submit' value='Search' />
      </form>
      {npsContext.parks.length > 0 && (
        <button onClick={clearSearch}>Clear</button>
      )}
    </div>
  );
};

export default Search;
