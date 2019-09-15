import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import HomeContainer from './containers/HomeContainer';
import DetailsContainer from './containers/DetailsContainer';
import RedirectContainer from './containers/RedirectContainer';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  container: {
    height: "100vh"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: 500,
    margin: 'auto',
    maxWidth: 500,
    verticalAlign: "middle"
  },
}));

export default function App() {
  const classes = useStyles();
    return (
        <React.Fragment>
          <div className={classes.root}>
            <Grid container spacing={3} direction="row" alignItems="center" justify="center" className={classes.container}>
              <Grid item xs>
                <Paper className={classes.paper} elevation={10}>
                  <Route exact path="/" component={HomeContainer} />
                  <Route exact path="/details" component={DetailsContainer} />
                  <Route exact path="/ref" component={RedirectContainer} />
                </Paper>
              </Grid>
            </Grid>
          </div>
        </React.Fragment>
    );
}