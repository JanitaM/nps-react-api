import React, { useContext, useEffect } from 'react';
import NPSContext from '../../context/nps/npsContext';
import Loading from '../layout/Loading';
import { Link } from 'react-router-dom';

const Park = ({ match }) => {
  const npsContext = useContext(NPSContext);
  const { loading, getPark, park } = npsContext;

  useEffect(() => {
    getPark(match.params.parkCode);
  }, []);

  const {
    contacts,
    activities,
    entranceFees,
    url,
    directionsInfo,
    topics,
    description,
    fullName,
    name,
    addresses,
    states,
    images,
    parkCode
  } = park;

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
