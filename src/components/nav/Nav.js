import React from "react";

import twitter from '../../assets/ico/twitter_icon.png';
import facebook from '../../assets/ico/facebook_icon.png';
import linkedin from '../../assets/ico/linkedin_icon.png';

// import './Nav.css';
// import './Nav.media.css';




const Nav = (props) => {
    return (
        <nav>

            <div className="label">
                <h1>D.F.</h1>

                <div id="label__img" className="nav__img">
                    <div>
                        <a href="https://twitter.com/FedDim1">
                            <img src={twitter} alt="twitter_icon" />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.facebook.com/dima.fedechkin.5">
                            <img src={facebook} alt="facebook_icon" />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/fed-dim-b26744213/">
                            <img src={linkedin} alt="linkedin_icon" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="nav">
                <div>
                    <a href="#page-about">About me</a>
                </div>
                <div>
                    <a href="#page-skils">Skills</a>
                </div>
                <div>
                    <a href="#page-portfolio">Portfolio</a>
                </div>
                <div>
                    <a href="#page-blog">Blog</a>
                </div>
                <div>
                    <a href="#page-contact">Contact me</a>
                </div>
                <div id="hr">
                    <hr />
                </div>

                <div id="nav__img" className="nav__img">
                    <div>
                        <a href="https://twitter.com/FedDim1">
                            <img src={twitter} alt="twitter_icon" />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.facebook.com/dima.fedechkin.5">
                            <img src={facebook} alt="facebook_icon" />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/fed-dim-b26744213/">
                            <img src={linkedin} alt="linkedin_icon" />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;