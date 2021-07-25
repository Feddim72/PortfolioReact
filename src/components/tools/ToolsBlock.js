import React from "react";

const ToolsBlock = (props) => {
    return (
        <div style={{ backgroundImage: `url(${props.background})` }} >
            <span> {props.ToolsName} </span>
        </div>
    )
}

export default ToolsBlock;