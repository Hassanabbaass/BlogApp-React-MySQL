import axios from 'axios';

export const updatePost = async (postId, postInfo) => {

    const apiURL = `/api/posts/${postId}`
    
    return axios.put(apiURL, postInfo)
};