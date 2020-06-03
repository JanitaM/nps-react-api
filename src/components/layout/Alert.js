import React, { useContext } from 'react';
import { Snackbar, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import NPSContext from '../../context/nps/npsContext';

function Alert() {
  const npsContext = useContext(NPSContext);
  const { alert, clearAlert } = npsContext;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        open={alert}
        autoHideDuration={100}
        onClick={clearAlert}
        message='Please Enter a Valid US State Abbreviation'
        action={
          <>
            <IconButton
              size='small'
              aria-label='close'
              color='inherit'
              onClick={clearAlert}
            >
              <CloseIcon fontSize='small' />
            </IconButton>
          </>
        }
      />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2)
    }
  }
}));

export default Alert;
