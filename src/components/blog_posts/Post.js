import React from "react";

const Post = (props) => {
    return (
        <div className="title">
            <div id="title__avatar">
                <img src={'https://pbs.twimg.com/media/DT0KWglWkAAK4se.jpg:large'} alt="blog_img" />
            </div>

            <div>
                <div>
                    <div>
                        <h2 className="general-title general-title--black">&#47;&#47;Title 01 </h2>
                        <h3 className="general-title general-title--beige"> Secondary Title </h3>
                    </div>
                    <div>
                        <span className="title__date" >author, 01.09.2020</span>
                    </div>
                </div>

                <div id="title__avatar-1">
                    <img src={'https://pbs.twimg.com/media/DT0KWglWkAAK4se.jpg:large'} alt="blog_img" />
                </div>

                <br />

                <div>
                    <span> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur.</span>
                </div>

                <div> <a href="#"> Read more &#12297; </a> </div>
            </div>
        </div>
    )
}

export default Post;