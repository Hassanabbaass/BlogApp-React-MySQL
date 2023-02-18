import axios from 'axios';

export const deletePost = async (postId) => {

    const apiURL = `/api/posts/${postId}`
    
    return axios.delete(apiURL)
};