import axios from 'axios';

export const getPosts = async (cat) => {

    const apiURL = `/api/posts/${cat}`
    
    return axios.get(apiURL)
};