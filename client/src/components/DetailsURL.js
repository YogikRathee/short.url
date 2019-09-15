import React, { useState, useEffect } from "react"
import { makeStyles } from '@material-ui/core/styles';
import ErrorIcon from '@material-ui/icons/Error';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    error: {
        margin: theme.spacing(2),
        padding: "10%",
        color: "red",
        fontSize: "150px"
    },
    success: {
        fontSize: "60px",
        color: "green"
    },
    heading: {
        color: "black"
    },
    listHead: {
        color: "black",
        fontWeight: 700,
        fontSize: "12px",
        textAlign: "left",
        margin: "0px",
        display: "inline-block",
    },
    listSep: {

    },
    listDesc: {
        color: "black",
        fontSize: "12px",
        margin: "0px",
        display: "inline-block",
    }
}));

const DetailsURL = (props) => {
    const classes = useStyles();
    const [details, setDetails] = useState({})

    console.log(props.state)

    useEffect(() => {
        if(props.state.urlDetails.hasOwnProperty(details)){
            let newDetails = JSON.parse(props.state.urlDetails.details)
            setDetails(newDetails)
        }
    }, [])

    return (
        <div style={{ margin: "20px auto" }}>
            {
                props.state.error
                    ? <>
                        <ErrorIcon className={classes.error} />
                        <Typography variant="h6" gutterBottom className={classes.heading}>
                            Something went wrong, please go <Link to="/">back</Link> and try again!
                        </Typography>
                    </>
                    : <>
                        <CheckCircleOutlineIcon className={classes.success} />
                        <Typography variant="h6" gutterBottom className={classes.heading}>
                            Thank you!
                        </Typography>
                        <Typography variant="button" gutterBottom className={classes.heading}>
                            Details
                        </Typography>
                        <Grid container>
                            <Grid item xs={12}>
                                <p className={classes.listHead}>Date Created:</p>
                                <p className={classes.listDesc}>{props.state.urlDetails.date}</p>
                            </Grid>
                            <Grid item xs={12}>
                                <p className={classes.listHead}>Original URL:</p>
                                <p className={classes.listDesc}>{props.state.urlDetails.url}</p>
                            </Grid>
                            <Grid item xs={12}>
                                <p className={classes.listHead}>Short URL:</p>
                                <p className={classes.listDesc}>{props.state.urlDetails.shortUrl}</p>
                            </Grid>
                            <Grid item xs={12}>
                                <p className={classes.listHead}>Complete Short URL:</p>
                                <p className={classes.listDesc}>{props.state.urlDetails.completeShortUrl}</p>
                            </Grid>
                            <Grid item xs={12}>
                                <p className={classes.listHead}>Created By:</p>
                                <p className={classes.listDesc}>{props.state.urlDetails.name}</p>
                            </Grid>
                            <Grid item xs={12}>
                                <p className={classes.listHead}>Creator's Number:</p>
                                <p className={classes.listDesc}>{props.state.urlDetails.phone}</p>
                            </Grid>
                            <Grid item xs={12}>
                                <p className={classes.listHead}>Creator's Email:</p>
                                <p className={classes.listDesc}>{props.state.urlDetails.email}</p>
                            </Grid>
                            <Grid item xs={12}>
                                <p className={classes.listHead}>Browser:</p>
                                <p className={classes.listDesc}>{details.browser}</p>
                            </Grid>
                            <Grid item xs={12}>
                                <p className={classes.listHead}>Browser Verions:</p>
                                <p className={classes.listDesc}>{details.version}</p>
                            </Grid>
                            {
                                details.hasOwnProperty('os')
                                    ?
                                    <Grid item xs={12}>
                                        <p className={classes.listHead}>Operating System:</p>
                                        <p className={classes.listDesc}>{details.os.family}-{details.os.architecture}bit</p>
                                    </Grid>

                                    : null
                            }
                            <Grid item xs={12}>
                                <p className={classes.listHead}>Requested On:</p>
                                <p className={classes.listDesc}>{details.requestedOn}</p>
                            </Grid>
                        </Grid>
                    </>
                }
        </div>
    )
}

export default DetailsURL