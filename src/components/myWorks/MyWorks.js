import React from "react";
import MyWorksBlock from "./MyWorksBlock";

import portfolio_case_01 from '../../assets/portfolio/portfolio_case_01.png';
import portfolio_case_02 from '../../assets/portfolio/portfolio_case_02.png';
import portfolio_case_03 from '../../assets/portfolio/portfolio_case_03.png';
import portfolio_case_04 from '../../assets/portfolio/portfolio_case_04.png';
import portfolio_case_05 from '../../assets/portfolio/portfolio_case_05.png';
import portfolio_case_06 from '../../assets/portfolio/portfolio_case_06.png';
import bit_bucket_icon from '../../assets/ico/bit_bucket_icon.png';
import external_link_icon from '../../assets/ico/external_link_icon.png';
import circle_1 from '../../assets/circle/koła_1.png';


const portfolioState = {
    block: [
        { caseImg: portfolio_case_01, nameAlt: 'portfolio_case_01' },
        { caseImg: portfolio_case_02, nameAlt: 'portfolio_case_02' },
        { caseImg: portfolio_case_03, nameAlt: 'portfolio_case_03' },
        { caseImg: portfolio_case_04, nameAlt: 'portfolio_case_04' },
        { caseImg: portfolio_case_05, nameAlt: 'portfolio_case_05' },
        { caseImg: portfolio_case_06, nameAlt: 'portfolio_case_06' },

    ]
}

let portfolioCase =
    portfolioState.block.map(p => <MyWorksBlock
        portfolioCase={p.caseImg} nameAlt={p.nameAlt}
        bitIcon={bit_bucket_icon}
        externalIcon={external_link_icon} />);


const MyWorks = (props) => {
    return (
        <div className="my-works" id="page-portfolio">

            <br />
            <br />

            <div>
                <h2 className="general-title general-title--black">&#47;&#47;My works </h2>
                <h3 className="general-title general-title--beige"> Portfolio </h3>

                <br />
                <br />

                <span>
                    My portfolio is full of beautiful and diverse projects.
                    Which can demonstrate my rich experience in creating react applications.
                    It was a text that will be relevant in the future.
                </span>
            </div>

            <br />
            <br />

            <div className="circle_01">
                <img src={circle_1} alt="circle_1" />
            </div>

            <div className="my-works__portfolio">

                {portfolioCase}

                <div className="portfolio-button">
                    <button type="submit"> See more projects </button>
                </div>
            </div>

        </div>
    )
}

export default MyWorks;