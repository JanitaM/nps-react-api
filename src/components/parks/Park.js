import React, { useContext } from 'react';
import NPSContext from '../../context/nps/npsContext';
import Loading from '../layout/Loading';
import { Link } from 'react-router-dom';

const Park = () => {
  const npsContext = useContext(NPSContext);
  const { loading, park } = npsContext;
  // all of the parks are accessible here
  // looking for parked we clicked on
  console.log(park);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div>
        <Link to='/'>Back to Parks</Link>
        <h3>{park.fullName}</h3>
      </div>
    );
  }
};

export default Park;
