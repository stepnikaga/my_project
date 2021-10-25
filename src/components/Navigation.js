import React from 'react';
import { makeStyles, AppBar, Toolbar,Typography, Button } from '@material-ui/core';
import {Link} from 'react-router-dom'


const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },

  title: {
    flexGrow: 3,
    display: 'flex',
    flexBasis: '20vw',
    justifyContent: 'flex start',
    alignItems: 'center',
    marginLeft: theme.spacing(2), 
  }, 
}));

function Navigation() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            -: PageCreator :-
          </Typography>

          <Link to="/about"><Button>O mnie</Button></Link>
          <Link to="/stopwatch"><Button>Stoper</Button></Link>
          <Link to="/counter"><Button>Licznik</Button></Link>
          <Link to="/characters"><Button>Lista postaci</Button></Link>
          <Link to="/registration"><Button variant="light" color="secondary">Rejestracja</Button></Link>
          <Link to="/login"><Button variant="light" color="secondary">Logowanie</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
    
  );
}


export default Navigation