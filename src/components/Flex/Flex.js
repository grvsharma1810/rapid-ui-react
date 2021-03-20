import React from 'react';
import "./Flex.css"
import Box from '../Box/Box'

// class and event handlers cannot be applied to this component currently
function Flex(props) {
    const {children, restOfTheStyle} = props;
    return(
        <Box style={{
            display:'flex',
            ...restOfTheStyle
        }}        
        >
            {children}
        </Box>
    )
}

export default Flex;