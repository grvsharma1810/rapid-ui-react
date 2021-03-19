import React from 'react';
import "./Grid.css"

// class and event handlers cannot be applied to this component currently
function Grid(props) {
    const {children, restOfTheStyle} = props;
    return(
        <div style={{
            ...restOfTheStyle
        }}
        className="grid"
        >
            {children}
        </div>
    )
}

export default Grid;