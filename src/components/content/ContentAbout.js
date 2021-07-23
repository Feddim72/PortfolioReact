import React from "react";

import circle_03 from '../../assets/circle/koła_03.png';
import circle_3 from '../../assets/circle/koła_3.png';
import easy_code_button from '../../assets/ico/easy_code_button.png';


const ContentAbout = (props) => {
    return (
        <div className="about" id="page-about">
                <div className="about__me">
                    <div>
                        <h2 className="general-title general-title--black"> &#47;&#47;About me</h2>
                        <h3 className="general-title general-title--beige"> All about Techy</h3>
                        <br />
                        <p>Lorem ipsum dolor sit amet,
                            <p>
                                consectetur adipiscing elit,
                                sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi
                                ut aliquip ex ea commodo consequat.
                                <p>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur.
                                </p>
                            </p>
                        </p>
                    </div>

                    <div className="about__interests">
                        <div>
                            <h3 className="general-title general-title--beige"> My interests</h3>
                            <ul>
                                <li> <span> music </span> </li>
                                <li> <span> kitesurfing </span> </li>
                                <li> <span> cycling </span> </li>
                            </ul>
                        </div>

                        <div>
                            <p>Ukończyłem kurs Easy Code</p>

                            <div>
                                <a href="https://easy-code.io">
                                    <img id="easy_code" src={easy_code_button} alt="easy_code_button" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about__skills" id="page-skils">
                    <div>
                        <h2 className="general-title general-title--black">&#47;&#47;Skills</h2>
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit
                            esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>

                    <img src={circle_3} alt="circle_3" />

                    <div className="about__skills-empty">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>

                    <div className="about__skills-name">
                        <div className="php">
                            <span> PHP 20% </span>
                        </div>
                        <div className="js">
                            <span>JS 60% </span>
                        </div>
                        <div className="html">
                            <span>HTML 81% </span>
                        </div>
                        <div className="nodejs">
                            <span>NODEJS 18% </span>
                        </div>
                        <div className="css">
                            <span>CSS 85% </span>
                        </div>
                        <div className="go">
                            <span>GO 25%</span>
                        </div>
                    </div>
                </div>

                <div className="circle_03">
                    <img src={circle_03} alt="circle 03" />
                </div>
            </div>
    )
}

export default ContentAbout;