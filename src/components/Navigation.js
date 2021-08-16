import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
     
  },
  
}));

function Navigation() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Router>
      <div className={classes.root}>
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
            -: PageCreator :-
            </Typography>
            <Typography variant="h6" className={classes.title}>
            </Typography>
            <Typography variant="h6" className={classes.title}>
            </Typography>

            <Button onClick={() => history.push("/About")} color="inherit"><Link to="/About"></Link>O mnie</Button>
            <Button onClick={() => history.push("/Stopwatch")}  color="inherit">Stoper</Button>
            <Button onClick={() => history.push("/Counter")} color="inherit">Licznik</Button>
            <Button onClick={() => history.push("/List")}  color="inherit">Lista Postaci</Button>
            <Button onClick={() => history.push("/Registration")}  color="inherit">Rejestracja</Button>
            <Button onClick={() => history.push("/Login")}  color="inherit">Logowanie</Button>
          </Toolbar>
        </AppBar>
    
      </div>
    </Router>  
  );
}


export default Navigation