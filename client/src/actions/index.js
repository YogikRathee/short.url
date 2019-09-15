export const SEND_SHORT_URL_REQUEST = 'SEND_SHORT_URL_REQUEST';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAILED = 'REQUEST_FAILED';
export const GET_LONG_URL = 'GET_LONG_URL';
export const SET_LONG_URL_SUCCESS = 'SET_LONG_URL_SUCCESS';
export const SET_LONG_URL_FAILED = 'SET_LONG_URL_FAILED';
export const START_LOADER = 'START_LOADER';
export const STOP_LOADER = 'STOP_LOADER'

export const sendUrlRequest = data => {
    return {
        type: SEND_SHORT_URL_REQUEST,
        payload: data
    }
}

export const sendUrlRequestSuccess = () => {
    return {
        type: REQUEST_SUCCESS
    }
}

export const sendUrlRequestError = () => {
    return {
        type: REQUEST_FAILED
    }
}

export const getLongUrl = url => {
    return {
        type: GET_LONG_URL,
        payload: url
    }
}

export const setLongUrlSuccess = () => {
    return {
        type: SET_LONG_URL_SUCCESS,
    }
}

export const setLongUrlError = () => {
    return {
        type: SET_LONG_URL_FAILED,
    }
}

export const startLoader = () => {
    return {
        type: START_LOADER
    }
}

export const stopLoader = () => {
    return {
        type: STOP_LOADER
    }
}