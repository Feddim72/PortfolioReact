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
                    <p> I am cheerful young and promising.
                        <p>
                            I've been learning react as a hobby for a year,From youtube and the EasyCode course on the Internet.
                            <p>
                                I am looking for a job where I will be able to realize my potential.
                                And develop as a professional in the field of front-end react developer.
                            </p>
                        </p>
                    </p>
                </div>

                <div className="about__interests">
                    <div>
                        <h3 className="general-title general-title--beige"> My interests</h3>
                        <ul>
                            <li> <span> programming </span> </li>
                            <li> <span> music </span> </li>
                            <li> <span> volleyball </span> </li>
                            <li> <span> electronics </span> </li>
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
                        Skills that I have already learned and plan to learn in career development.
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
                    <div className="js">
                        <span>JS 80% </span>
                    </div>
                    <div className="ts">
                        <span>TypeScript 20% </span>
                    </div>
                    <div className="html">
                        <span>HTML 90% </span>
                    </div>
                    <div className="nodejs">
                        <span>NODEJS 1% </span>
                    </div>
                    <div className="css">
                        <span>CSS 89% </span>
                    </div>
                    <div className="scss">
                        <span> SCSS 83%</span>
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