import React from 'react';
import { Link } from 'react-router-dom';
import Delete from '../assets/delete.png'
import Edit from '../assets/edit.png'

const Single = () => {
  return (
    <div className='single'>
        <div className='content'>
            <img src='https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt=''/>
            <div className="user">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPBuOFja-lS91v0c8miM5VdLwS-at8r4EAqnCJZXxClTrjIFYKSz8FccKhk1C9I5huta4&usqp=CAU' alt=''/>
                <div className="info">
                    <span>Chris</span>
                    <p>Posted 2 days ago</p>
                </div>
                <div className="edit">
                    <Link to='/write?edit=2'>
                        <img src={Edit} alt=''/>
                    </Link>
                    <img src={Delete} alt=''/>
                </div>
            </div>
            <h1>This Is A Title</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem debitis modi odit at nam rerum, dicta, dignissimos magnam eius alias, culpa sed. Fuga blanditiis necessitatibus quis. Quia ad repellendus quidem?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae odio porro laborum quae illo nesciunt sint dolorem tempora odit, incidunt a similique voluptatibus cumque necessitatibus est cupiditate expedita. Dolorem, eligendi!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sunt architecto corporis adipisci dolorum numquam, ratione officiis. Eveniet eius perspiciatis laborum tenetur ipsum est quidem, adipisci omnis, explicabo, accusamus sequi.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, explicabo voluptas labore quod ad sapiente, voluptates adipisci dicta magnam commodi doloribus nostrum voluptatibus. Repellat repellendus voluptatum consectetur unde aperiam at.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi reiciendis voluptatum eligendi accusamus rerum officia adipisci amet temporibus nam quidem? Earum quo, sapiente alias harum accusamus autem ea doloribus ad.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem debitis modi odit at nam rerum, dicta, dignissimos magnam eius alias, culpa sed. Fuga blanditiis necessitatibus quis. Quia ad repellendus quidem?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae odio porro laborum quae illo nesciunt sint dolorem tempora odit, incidunt a similique voluptatibus cumque necessitatibus est cupiditate expedita. Dolorem, eligendi!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sunt architecto corporis adipisci dolorum numquam, ratione officiis. Eveniet eius perspiciatis laborum tenetur ipsum est quidem, adipisci omnis, explicabo, accusamus sequi.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, explicabo voluptas labore quod ad sapiente, voluptates adipisci dicta magnam commodi doloribus nostrum voluptatibus. Repellat repellendus voluptatum consectetur unde aperiam at.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi reiciendis voluptatum eligendi accusamus rerum officia adipisci amet temporibus nam quidem? Earum quo, sapiente alias harum accusamus autem ea doloribus ad.
            </p>
        </div>
        
        <div className='menu'>
            Menu
        </div>
    </div>
  )
}

export default Single