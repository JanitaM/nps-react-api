import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import { Snackbar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import NPSContext from '../../context/nps/npsContext';

function Alert() {
  const npsContext = useContext(NPSContext);
  const { alert, setAlert, clearAlert } = npsContext;

  return (
    <div>
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
          <React.Fragment>
            <IconButton
              size='small'
              aria-label='close'
              color='inherit'
              onClick={clearAlert}
            >
              <CloseIcon fontSize='small' />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}

export default Alert;
