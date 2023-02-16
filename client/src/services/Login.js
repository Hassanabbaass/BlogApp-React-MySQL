import axios from 'axios';

const apiURL = "/api/auth/login"

export const loginUser = async (Inputs) => {
    return axios.post(apiURL, Inputs)
};