import axios from 'axios';

export const getPost = async (postId) => {

    const apiURL = `/api/posts/${postId}`
    
    return axios.get(apiURL)
};