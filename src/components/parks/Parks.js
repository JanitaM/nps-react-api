import React, { useContext, useState, useEfffect } from 'react';
import NPSContext from '../../context/nps/npsContext';
import Loading from '../layout/Loading';
import ParkItem from '../parks/ParkItem';
import { makeStyles } from '@material-ui/core/styles';
import { Pagination, PaginationItem } from '@material-ui/lab';

const Parks = (props) => {
  const npsContext = useContext(NPSContext);
  const { parks, loading } = npsContext;

  const [currentPage, setCurrentPage] = useState(1);
  const [parksPerPage] = useState(6);

  const indexOfLastPark = currentPage * parksPerPage;
  const indexOfFirstPark = indexOfLastPark - parksPerPage;

  const currentSetofParks = parks.slice(indexOfFirstPark, indexOfLastPark);

  const totalNumOfPages = Math.ceil(parks.length / parksPerPage);

  const setPage = (page) => setCurrentPage(page);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          {currentSetofParks &&
            currentSetofParks.map((park) => (
              <ParkItem key={park.id} park={park} />
            ))}
        </div>
        {parks.length > 0 ? (
          <Pagination
            count={totalNumOfPages}
            page={currentPage}
            onChange={(e, page) => setPage(page)}
            defaultPage={1}
            color='primary'
            size='large'
          />
        ) : (
          ''
        )}
      </>
    );
  }
};

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2)
    }
  }
}));

export default Parks;
