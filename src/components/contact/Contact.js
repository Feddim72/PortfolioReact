import React from "react";
import circle_03_pool from '../../assets/circle/koła_03_pool.png';
import mail_icon from '../../assets/ico/mail.svg';
import avatarContact from '../../assets/avatar/avatarContact.jpg';

const Contact = (props) => {
    return (
        <div class="contact" id="page-contact">

            <br />
            <br />

            <div>
                <div>
                    <h2 class="general-title general-title--black"> &#47;&#47;Contact me </h2>
                    <br />
                    <span>
                        If you are willing to work with me, contact me. I can join your
                        conference to serve you with my engeneering experience.
                    </span>
                </div>

                <img class="contact__circle_03" src={circle_03_pool} alt="contact_me_circle_03" />

                <form name="contact" method="POST" data-netlify="true">
                    <div>
                        <input class="input" type="email" placeholder="Your e-mail" />
                        <input type="text" placeholder="Your name" />
                        <textarea placeholder="How can I help you?
                        Please, put here your
                        message/request."></textarea>
                    </div>

                    <div>
                        <button type="submit"> Send </button>
                    </div>
                </form>
            </div>

            <div class="contact__autor">
                <div class="contact__name">
                    <div>
                        <img src={avatarContact} alt="avatar_autor" />
                    </div>

                    <div>
                        <span> autor: Dzmitry Fedzechkin </span>
                        <br />
                        <span> username: feddim </span>
                        <br />
                        <span> description: University YouTube &#124; Software Engineer </span>
                        <br />
                        <span> homepage: feddim.netlify.app </span>
                    </div>
                </div>

                <div class="contact__mail">
                    <div>
                        <img src={mail_icon} alt="mail_autor" />
                    </div>

                    <div>
                        <span> feddim72@gmail.com </span>
                        <br />
                        <span> &#43; 48 510 551 873 </span>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Contact;