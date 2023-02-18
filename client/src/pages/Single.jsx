import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Delete from '../assets/delete.png'
import Edit from '../assets/edit.png'
import Menu from '../components/Menu';
import { getPost } from '../services/getPost';
import moment from 'moment';
import { AuthContext } from '../context/authContext';
import userLogo from '../assets/userlogo.png'
import { deletePost } from '../services/deletePost';

const Single = () => {

    const [post, setPost] = useState({});

    const location = useLocation()

    const navigate = useNavigate()

    //splitting the url so that we can get the post id
    const postId = location.pathname.split("/")[2]

    const {currentUser} = useContext(AuthContext);

    useEffect(() => {
        const fetchData = async () => {
            getPost(postId).then((result) => {
                setPost(result.data);
            }).catch((err) => {
                console.log(err)
            })
        };
        fetchData();
    }, [postId]);

    const handleDelete = async () => {
        deletePost(postId).then((result) => {
            navigate("/")
        }).catch((err) => {
            console.log(err)
        })
    }

  return (
    <div className='single'>
        <div className='content'>
            <img src={post?.img} alt=''/>
            <div className="user">
                <img src={post?.userImg ? post.userImg : userLogo} alt=''/>
                <div className="info">
                    <span>{post.username}</span>
                    <p>Posted {moment(post.date).fromNow()}</p>
                </div>

                {/* before using post.username make sure to join the posts table and users table */}
                {
                currentUser?.username === post.username && 
                    <div className="edit">
                        <Link to='/write?edit=2'>
                            <img src={Edit} alt=''/>
                        </Link>
                        <img src={Delete} alt='' onClick={handleDelete}/>
                    </div>
                }
            </div>
            <h1>{post.title}</h1>
            <p>{post.desc}</p>
        </div>
        
        <Menu/>
    </div>
  )
}

export default Single