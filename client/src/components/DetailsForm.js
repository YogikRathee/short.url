import React, { useState } from "react"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import {AccountCircle,Email,Phone} from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import platform from "platform"

const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(2),
    },
    heading: {
        color: "black",
        margin: "10px auto"
    },
    button: {
        margin: theme.spacing(1),
        display: "block",
        margin: "15px auto",
    }
  }));

const DetailsForm = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const classes = useStyles();

    console.log(platform.name)
    const isSubmittable = () => {
        return name.length > 0 && email.length > 0 && phone.length > 0
    }
    const handleSubmit = event => {
        event.preventDefault()
        props.sendUrlRequest({
            data : {
                name: name,
                phone: phone,
                email: email,
                url: props.url,
                details: {
                    browser: platform.name,
                    version: platform.version,
                    os: platform.os,
                    requestedOn: Date()
                }
            },
            history: props.history
        })
    }
    return (
        <>
            <Typography variant="h6" gutterBottom className={classes.heading}>
                Please enter the following field
            </Typography>
            <TextField
                className={classes.margin}
                id="input-with-icon-textfield"
                label="Your Name:"
                value={name}
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <AccountCircle />
                    </InputAdornment>
                )
                }}
                onChange={(e)=>setName(e.target.value)}
            />
            <TextField
                className={classes.margin}
                id="input-with-icon-textfield"
                label="Your E-mail:"
                value={email}
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <Email />
                    </InputAdornment>
                ),
                }}
                onChange={(e)=>setEmail(e.target.value)}
            />
            <TextField
                className={classes.margin}
                id="input-with-icon-textfield"
                label="Your Contact No.:"
                value={phone}
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <Phone />
                    </InputAdornment>
                ),
                }}
                onChange={(e)=>setPhone(e.target.value)}
            />
            <Button variant="contained" color="primary" disabled={ !isSubmittable() } className={classes.button} onClick={(event)=>handleSubmit(event)}>
                Generate Short URL
            </Button>
        </>
    )
}

export default DetailsForm;