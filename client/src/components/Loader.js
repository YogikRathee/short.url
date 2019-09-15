import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
    progress: {
      margin: theme.spacing(2), 
      padding: "30%"
    },
  }));

const Loader = () => {
    const classes = useStyles();

    return (
        <CircularProgress className={classes.progress} size={100} thickness={7.2}/>
    )
}

export default Loader