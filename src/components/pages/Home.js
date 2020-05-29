import React from 'react';
import Search from '../layout/Search';
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
