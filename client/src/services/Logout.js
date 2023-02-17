import axios from 'axios';

const apiURL = "/api/auth/logout"

export const logoutUser = async () => {
    return axios.post(apiURL)
};