import React from "react";
import ContentAbout from "./ContentAbout";

import circle_1 from '../../assets/circle/koła_1.png';
import circle_02 from '../../assets/circle/koła_02.png';
import circle_03 from '../../assets/circle/koła_03.png';
import circle_333 from '../../assets/circle/koła_333.png';

import bit_bucket_icon from '../../assets/ico/bit_bucket_icon.png';
import dev_icon from '../../assets/ico/dev_icon.png';
import avatarContent from '../../assets/avatar/avatarContent.jpg';

const skroll = () => {
    return (
        window.scrollTo(0, 1000)
    )
}

const Content = (props) => {
    return (
        <div className="content">

            <div className="content__conteiner">

                <div className="circle_01">
                    <img src={circle_1} alt="circle_01" />
                </div>

                <div className="circle_02">
                    <img src={circle_02} alt="circle_02" />
                </div>

                <div className="content__avatar">
                    <img src={circle_03} alt="circle_03" />
                    <img src={avatarContent} alt="avatar_01" />
                </div>

                <div className="info">
                    <div className="info__title">
                        <div className="info__name">

                            <div>
                                <h2 className="general-title general-title--black">&#47;&#47;Hi My name is Dima Fedechkin</h2>
                                <h3 className="general-title general-title--beige">Software Engineer</h3>
                            </div>

                            <p>
                                <span>
                                    I will create a high-quality web application for you, any complexity.
                                    <br />
                                    <span> You can see my work below. </span>
                                </span>
                            </p>
                        </div>

                        <div className="info__link">
                            <div>
                                <div>
                                    <a href="#page-portfolio">See my works</a>
                                </div>
                                <a href=""> <img src={bit_bucket_icon} alt="bit_bucket_icon" /> </a>
                                <a href=""> <img src={dev_icon} alt="dev_icon.png" /> </a>
                            </div>
                        </div>
                    </div>

                    <div className="content__avatar">
                        <img src={circle_333} alt="circle_333" />
                        <img src={avatarContent} alt="avatar_01" />
                    </div>

                    <div className="info__contact">
                        <h2 className="general-title general-title--black">&#47;&#47;I am a freelancer </h2>
                        <p>
                            <span> Contact me if you want to work with me </span>
                        </p>

                        <div className="info__but">
                            <button onclick={skroll}> Hire me </button>
                            <button> Download CV </button>
                        </div>

                    </div>
                </div>
            </div>

            <ContentAbout />

            <br />
            <br />
            <br />
            <br />
        </div>


    )
}

export default Content;