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

    //since the react quill provides texts with tags like html we need to convert them to normal text
    const getText = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html")
        return doc.body.textContent;
    }


  return (
    <div className='home'>
        <div className='posts'>
            {posts.map((item) => (
                <div className='post' key={item.id}>

                    <div className='img'>
                        <img src={`./upload/${item.img}`} alt=''/>
                    </div>

                    <div className='content'>
                        <Link className='link' to={`/post/${item.id}`}>
                            <h1>{item.title}</h1>
                        </Link>
                        <p>{getText(item.desc)}</p>
                        <button>
                            <Link className='link' to={`/post/${item.id}`}>
                                Read More
                            </Link>
                        </button>
                    </div>

                </div>
            ))}
        </div>
    </div>
  )
}

export default Home