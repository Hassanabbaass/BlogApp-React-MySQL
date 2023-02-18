import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { getPosts } from '../services/getPosts';

const Home = () => {

    const [posts, setPosts] = useState([]);

    const cat = useLocation().search

    useEffect(() => {
        const fetchData = async () => {
            getPosts(cat).then((result) => {
                setPosts(result.data);
            }).catch((err) => {
                console.log(err)
            })
        };
        fetchData();
    }, [cat]);


  return (
    <div className='home'>
        <div className='posts'>
            {posts.map((item) => (
                <div className='post' key={item.id}>

                    <div className='img'>
                        <img src={item.img} alt=''/>
                    </div>

                    <div className='content'>
                        <Link className='link' to={`/post/${item.id}`}>
                            <h1>{item.title}</h1>
                        </Link>
                        <p>{item.desc}</p>
                        <button>Read More</button>
                    </div>

                </div>
            ))}
        </div>
    </div>
  )
}

export default Home