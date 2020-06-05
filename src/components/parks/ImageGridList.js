import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import NPSContext from '../../context/nps/npsContext';
import Loading from '../layout/Loading';
import { Pagination } from '@material-ui/lab';

const ImageGridList = () => {
  const npsContext = useContext(NPSContext);
  const { park, loading } = npsContext;
  const { images } = park;

  const [currentImage, setCurrentImage] = useState(1);
  const imagesPerFrame = 1;
  const indexOfLastImage = currentImage * imagesPerFrame;
  const indexOfFirstImage = indexOfLastImage - imagesPerFrame;
  const currentSetOfImages =
    images && images.slice(indexOfFirstImage, indexOfLastImage);
  const setFrame = (image) => setCurrentImage(image);
  let totalNumOfFrames = 0;
  if (images) {
    totalNumOfFrames = Math.ceil(images.length / imagesPerFrame);
  }

  console.log(images);

  const classes = useStyles();

  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        {currentSetOfImages &&
          currentSetOfImages.map((image) => (
            <Card>
              <CardMedia
                component='img'
                alt={image.altText}
                height='350rem'
                image={image.url}
                title={image.title}
              />
              <CardContent>
                <Typography variant='h6' component='h6' gutterBottom>
                  {image.title}
                </Typography>
                <Typography variant='body2'>{image.caption}</Typography>
              </CardContent>
            </Card>
          ))}
        <div className={classes.pagination}>
          {images && images.length > 0 ? (
            <Pagination
              count={totalNumOfFrames}
              page={currentImage}
              onChange={(e, image) => setFrame(image)}
              defaultPage={1}
              color='primary'
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

export default ImageGridList;
