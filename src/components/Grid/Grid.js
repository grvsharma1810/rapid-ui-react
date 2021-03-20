import React from 'react';
import Box from '../Box/Box';
import "./Grid.css"

// class and event handlers cannot be applied to this component currently
function Grid(props) {
    const {children, restOfTheStyle} = props;
    return(
        <Box style={{
            display:'grid',
            ...restOfTheStyle
        }}        
        >
            {children}
        </Box>
    )
}

export default Grid;