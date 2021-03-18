import React from 'react';
import "./AvatarBadge.css"

function AvatarBadge(props){
    const {pos, border = 0, children, ...rest} = props;    
    return (        
        <span className={`badge ${pos}`} style={{border:`${border}px solid white`, borderRadius: '50%!important'}}>
            {children}
        </span>
    )
}

export default AvatarBadge;