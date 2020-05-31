import React, { useContext, useState } from 'react';
import NPSContext from '../../context/nps/npsContext';
import Loading from '../layout/Loading';
import ParkItem from '../parks/ParkItem';
import { makeStyles } from '@material-ui/core/styles';
import { Pagination, PaginationItem } from '@material-ui/lab';

const Parks = (props) => {
  const npsContext = useContext(NPSContext);
  const { parks, loading } = npsContext;
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const indexOfLastPark = currentPage * itemsPerPage;
  const indexOfFirstPark = indexOfLastPark - itemsPerPage;
  const currentParks = parks.slice(indexOfFirstPark, indexOfLastPark);
  const totalNumOfPages = Math.ceil(parks.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
          {parks && parks.map((park) => <ParkItem key={park.id} park={park} />)}
        </div>
        {parks.length > 0 ? (
          <Pagination
            count={totalNumOfPages}
            page={currentPage}
            onChange={paginate}
            // "Callback fired when the page is changed.
            // function(event: object, page: number) => void
            // event: The event source of the callback.
            // page: The page selected."
            renderItem={(items) => <PaginationItem {...items} />}
            // not sure what gets passed here
            // Render the item.
            // function(params: PaginationRenderItemParams) => ReactNode
            // params: The props to spread on a PaginationItem.
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
