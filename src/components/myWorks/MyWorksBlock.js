import React from "react";




const MyWorksBlock = (props) => {
    return (
        <div className="portfolio-block">
            <div className="portfolio-block__content">
                <div>
                    <img src={props.portfolioCase} alt={props.nameAlt} />
                </div>

                <div>
                    <a href=""> <img src={props.bitIcon} alt="bit_bucket_icon.png" /> </a>
                    <a href=""> <img src={props.externalIcon} alt="external_link_icon.png" /> </a>
                </div>
            </div>

            <div className="portfolio-effect">
                <div className="portfolio-effect__title">
                    <h2 className="general-title general-title--black"> Office software </h2>
                    <span> &#45; task management </span>
                </div>

                <div className="portfolio-effect__tools">
                    <span> Tools: React &#47; Redux &#47; </span>
                    <span> Program 01 &#47; Flexbox </span>
                </div>

                <div className="portfolio-effect__button">
                    <a href=""> <img src={props.bitIcon} alt="bit_bucket_icon.png" /> </a>
                    <a href=""> <img src={props.externalIcon} alt="external_link_icon.png" /> </a>
                </div>
            </div>
        </div>
    )
}

export default MyWorksBlock;