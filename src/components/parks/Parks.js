import React, { useContext, useState } from 'react';
import NPSContext from '../../context/nps/npsContext';
import Loading from '../layout/Loading';
import ParkItem from '../parks/ParkItem';
import { makeStyles } from '@material-ui/core/styles';
import { Pagination } from '@material-ui/lab';
import { Grid } from '@material-ui/core';

const Parks = (props) => {
  const npsContext = useContext(NPSContext);
  const { parks, loading } = npsContext;

  const [currentPage, setCurrentPage] = useState(1);
  const parksPerPage = 6;
  const indexOfLastPark = currentPage * parksPerPage;
  const indexOfFirstPark = indexOfLastPark - parksPerPage;
  const currentSetofParks = parks.slice(indexOfFirstPark, indexOfLastPark);
  const totalNumOfPages = Math.ceil(parks.length / parksPerPage);
  const setPage = (page) => setCurrentPage(page);

  const classes = useStyles();

  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
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
