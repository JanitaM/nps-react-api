import React from 'react';
import loading from './loading.gif';

const Loading = () => {
  return (
    <img
      src={loading}
      alt='loading'
      style={{ width: '100px', margin: '5rem auto' }}
    />
  );
};

export default Loading;
