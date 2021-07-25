import React from "react";
import BlogPosts from "../components/blog_posts/BlogPosts";
import Contact from "../components/contact/Contact";
import Content from "../components/content/Content";
import MyWorks from "../components/myWorks/MyWorks";
import Nav from "../components/nav/Nav";
import Tools from "../components/tools/Tools";
// import './HomePage.css';



const HomePage = (props) => {
    return (
        <div>
            <Nav />
            <Content />
            <Tools />
            <MyWorks />
            <BlogPosts />
            <Contact />
        </div>
    )
}

export default HomePage;