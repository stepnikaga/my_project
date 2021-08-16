import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(30),
      height: theme.spacing(30),
    },
  },
}));

function SixCards() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper variant="outlined"> 
        <h4>O mnie</h4> 
      </Paper>
      <Paper variant="outlined">
        <h4>Stoper</h4> 
      </Paper>
      <Paper variant="outlined">
        <h4>Licznik</h4>  
      </Paper>
      <Paper variant="outlined">
        <h4>Lista Postaci</h4> 
      </Paper>
      <Paper variant="outlined">
        <h4>Rejestracja</h4> 
      </Paper>
      <Paper variant="outlined">
        <h4>Logowanie</h4>
      </Paper>
    </div>
  );
}
export default SixCards