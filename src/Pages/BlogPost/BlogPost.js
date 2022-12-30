import React from 'react';
import { Link } from 'react-router-dom';
import "./BlogPost.css"

const BlogPost = ({ bPost }) => {
    console.log(bPost);
    const { title, body, likes } = bPost;
    return (
        <div className=' container'>
            <div class="content">
                <div class="title">{title}</div>
                <div class="date">May 2020</div>
                <p>{body}
                </p>
                <p>{likes}Comments</p>
            </div>
        </div>
    );
};

export default BlogPost;