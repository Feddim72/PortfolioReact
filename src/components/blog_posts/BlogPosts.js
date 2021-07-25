import React from "react";


import circle_01 from '../../assets/circle/koła_01.png';
import circle_03 from '../../assets/circle/koła_03.png';

// import './BlogPosts.css';
// import './BlogPosts.media.css';
import Post from "./Post";




const BlogPosts = (props) => {
    return (
        <div class="blog_posts" id="page-blog">
            <div>
                <h2 class="general-title general-title--black">&#47;&#47;Blog posts</h2>
                <h3 class="general-title general-title--beige"> Hints and tips </h3>
            </div>

            <br />
            <br />

            <img class="blog_posts_circle_01" src={circle_01} alt="circle_01" />

            <img class="blog_posts_circle_03" src={circle_03} alt="circle_03" />

            <Post />

            <br />

            <Post />

            <br />
            <br />
            
        </div>
    )
}

export default BlogPosts;