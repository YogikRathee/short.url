import React, {useState} from "react"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DetailsForm from "./DetailsForm";
import Loader from "./Loader";

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        display: "block",
        margin: "15px auto"
      },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      minWidth: "400px"
    }
  }));

const ShortURL = (props) => {
    const classes = useStyles();
    const [url, setUrl] = useState("")
    const [showForm, setShowForm] = useState(false)

    const handleChange = (event) => {
        event.preventDefault()
        setUrl(event.target.value)
        console.log(url)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setShowForm(true)
    }

    return (
        <div style={{margin: "20px auto"}}>
            {
              props.state.loader
              ? <Loader />
              : <>
                  <TextField
                      id="filled-email-input"
                      label="Enter the URL"
                      value={url}
                      className={classes.textField}
                      type="text"
                      name="url"
                      margin="normal"
                      variant="filled"
                      onChange={(event)=>handleChange(event)}
                  />
                  {
                      showForm
                      ? <DetailsForm {...props} url={url}/>
                      :   <Button variant="contained" color="primary" disabled={ url.length>0 ? false : true } className={classes.button} onClick={(event)=>handleSubmit(event)}>
                              Generate Short URL
                          </Button>
                  }
                </>
            }
      </div>
    )
} 

export default ShortURL