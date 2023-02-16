import axios from 'axios';

const apiURL = "/api/auth/register"

export const registerUser = async (Inputs) => {
    return axios.post(apiURL, Inputs)
};