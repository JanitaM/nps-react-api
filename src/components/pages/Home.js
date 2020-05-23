import React from 'react';
import Search from '../parks/Search';
import Parks from '../parks/Parks';

const Home = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Search />
      <Parks />
    </div>
  );
};

export default Home;
