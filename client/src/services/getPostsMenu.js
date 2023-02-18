import axios from 'axios';

export const getPostsMenu = async (cat) => {

    const apiURL = `/api/posts/?cat=${cat}`
    
    return axios.get(apiURL)
};