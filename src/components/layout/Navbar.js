import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='sticky' className={classes.container}>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            National Park Service API App
          </Typography>
          <ul className={classes.ul}>
            <li>
              <Link to='/' className={classes.link}>
                Home
              </Link>
            </li>
            <li>
              <Link to='/about' className={classes.link}>
                About
              </Link>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  container: {
    backgroundColor: '#014040'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  ul: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  link: {
    marginLeft: '20px',
    color: '#fff',
    '&:hover': {
      borderBottom: '2px solid #F28C0F',
      color: '#fff'
    }
  }
}));

export default Navbar;
