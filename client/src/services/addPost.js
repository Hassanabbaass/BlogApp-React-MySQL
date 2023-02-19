import axios from 'axios';

export const addPost = async (postInfo) => {

    const apiURL = '/api/posts/'
    
    return axios.post(apiURL, postInfo)
};