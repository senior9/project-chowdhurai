import React, { useEffect, useState } from 'react';
import BlogPost from '../BlogPost/BlogPost';

const BlogsItem = () => {
    const [blogs,setBlog]=useState([]);
    // const[bPost,setBpost]=useState({});

    useEffect(()=>{
        fetch('blog.json')
        .then(res=>res.json())
        .then(data=>setBlog(data))
    },[]);
    console.log(blogs)
    return (
        <div>
            <h1 className='text-danger'>This Is Our Blog </h1>
            {
                blogs.map(bPost=><BlogPost
                key={bPost.id}
                bPost={bPost}
                >

                </BlogPost>)
            }
        </div>
    );
};

export default BlogsItem;