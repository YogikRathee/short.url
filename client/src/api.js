import axios from "axios"
const backendURL = "https://short15url.herokuapp.com/api"

export const createURL = (payload) => {
    return axios.post(backendURL+"/create", payload)
}

export const redirectURL = (payload) => {
    return axios.get(backendURL+"/u/"+payload)
}