import React, { useEffect, useState } from 'react'
import { getPostsMenu } from '../services/getPostsMenu';

const Menu = ({cat}) => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
          getPostsMenu(cat).then((result) => {
              setPosts(result.data);
          }).catch((err) => {
              console.log(err)
          })
      };
      fetchData();
  }, [cat]);

  return (
    <div className='menu'>
            <h1>Other posts you may like</h1>
            {posts.slice(0,3).map((item) => (
                <div className="post" key={item.id}>
                    <img alt='' src={item.img}/>
                    <h2>{item.title}</h2>
                    <button>Read More</button>
                </div>
            ))}
    </div>
  )
}

export default Menu