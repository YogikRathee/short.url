import React, { useEffect, useState } from "react"
import Loader from "./Loader"

const Redirect = (props) => {
    const search = props.location.search;
    const params = new URLSearchParams(search);
    const url = params.get('url');

    useEffect(()=>{
        props.getLongUrl({url})
    }, [])

    return (
        <>
        {
            props.state.loader
            ? <Loader />
            : props.state.redirectUrl == null
                ? ''
                : window.location.replace(props.state.redirectUrl)
        }
        </>
    )
}

export default Redirect