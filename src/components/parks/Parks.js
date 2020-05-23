import React, { useContext } from 'react';
import NPSContext from '../../context/nps/npsContext';
import Loading from '../layout/Loading';
import ParkItem from '../parks/ParkItem';

const Parks = () => {
  const npsContext = useContext(NPSContext);
  const { parks, loading } = npsContext;

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}
      >
        {parks.map((park) => (
          <ParkItem key={park.id} park={park} />
        ))}
      </div>
    );
  }
};

export default Parks;
