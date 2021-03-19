import React from 'react';
import "./Flex.css"

// class and event handlers cannot be applied to this component currently
function Flex(props) {
    const {children, restOfTheStyle} = props;
    return(
        <div style={{
            ...restOfTheStyle
        }}
        className="flex"
        >
            {children}
        </div>
    )
}

export default Flex;