import React from "react";
import ToolsBlock from "./ToolsBlock";

import reactImg from '../../assets/instuments/_react_icon_s.png';
import webpackImg from '../../assets/instuments/programista_one_page_01-3.png';
import expressImg from '../../assets/instuments/express_icon.png';
import styledImg from '../../assets/instuments/styled_components_icon.png';
import reduxImg from '../../assets/instuments/prog_redux.png';
import flexboxImg from '../../assets/instuments/flexbox_icon_s.png';
import programImg from '../../assets/instuments/tool_program_ikona.png';
import circle_01 from '../../assets/circle/koła_01.png';

import './Tools.css';
import './Tools.media.css';

const ToolsState = {
    tools : [
        {ToolsName: 'React 16.6.3', background: reactImg },
        {ToolsName: 'Webpack 4.19.1', background: webpackImg },
        {ToolsName: 'Express 4.16.4', background: expressImg },
        {ToolsName: 'Styled Components 4.16.4', background: styledImg },
        {ToolsName: 'Redux 4.0.1', background: reduxImg },
        {ToolsName: 'Flexbox 4.0.1', background: flexboxImg },
        {ToolsName: 'Program 5.2.1', background: programImg },
        {ToolsName: 'Program 5.2.2', background: programImg }
    ]
}

let ToolsElement =
    ToolsState.tools.map(p => <ToolsBlock
        ToolsName={p.ToolsName}
        background={p.background} />);

const Tools = (props) => {
    return (
        <div className="tools">

            <h2 className="general-title general-title--black">&#47;&#47;Tools </h2>
            <h3 className="general-title general-title--beige"> My essentials </h3>

            <br />

            <img className="circle_01" src={circle_01} alt="circle_01" />

            <div className="tools__block">
                {ToolsElement}
            </div>

        </div>
    )
}

export default Tools;