import React, { useContext, useState } from 'react';
import NPSContext from '../../context/nps/npsContext';
import Loading from '../layout/Loading';
import ParkItem from '../parks/ParkItem';
import { makeStyles } from '@material-ui/core/styles';
import { Pagination } from '@material-ui/lab';
import { Grid } from '@material-ui/core';
import Filter from '../layout/Filter';

const Parks = () => {
  const npsContext = useContext(NPSContext);
  const { parks, loading, filteredParks } = npsContext;

  const [currentPage, setCurrentPage] = useState(1);
  const parksPerPage = 6;
  const indexOfLastPark = currentPage * parksPerPage;
  const indexOfFirstPark = indexOfLastPark - parksPerPage;

  let currentSetofParks = [];
  let totalNumOfPages = '';

  const setPage = (page) => setCurrentPage(page);

  if (filteredParks.length > 0) {
    currentSetofParks = filteredParks.slice(indexOfFirstPark, indexOfLastPark);
    totalNumOfPages = Number(Math.ceil(filteredParks.length / parksPerPage));
  } else {
    currentSetofParks = parks.slice(indexOfFirstPark, indexOfLastPark);
    totalNumOfPages = Number(Math.ceil(parks.length / parksPerPage));
  }

  const classes = useStyles();

  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        {parks.length > 0 ? <Filter /> : ''}
        <Grid
          container
          spacing={2}
          direction='row'
          justify='space-around'
          alignItems='stretch'
        >
          <>
            {currentSetofParks &&
              currentSetofParks.map((park) => (
                <ParkItem key={park.id} park={park} />
              ))}
          </>
        </Grid>

        <div className={classes.pagination}>
          {parks.length > 0 ? (
            <Pagination
              count={Number(totalNumOfPages)}
              page={currentPage}
              onChange={(e, page) => setPage(page)}
              defaultPage={1}
              color='primary'
              size='large'
            />
          ) : (
            ''
          )}
        </div>
      </>
    );
  }
};

const useStyles = makeStyles({
  pagination: {
    margin: '2rem 0',
    display: 'flex',
    justifyContent: 'center'
  }
});

export default Parks;
