import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GridList, GridListTile } from '@material-ui/core';
import NPSContext from '../../context/nps/npsContext';

const ImageGridList = () => {
  const npsContext = useContext(NPSContext);
  const { park } = npsContext;
  const { images } = park;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList
        cellHeight='auto'
        className={classes.gridList}
        cols={8}
        spacing={4}
      >
        {images &&
          images.map((image) => (
            <GridListTile cols={2}>
              <img src={image.url} alt={image.altText} />
            </GridListTile>
          ))}
      </GridList>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: '100%',
    height: '100%'
  }
}));

export default ImageGridList;
