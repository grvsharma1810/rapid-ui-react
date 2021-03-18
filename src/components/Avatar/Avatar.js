import React from 'react';
import "./Avatar.css"

function Avatar(props){
    const {src, name, children, ...rest} = props;    
    return (        
        <div className="avatar-wrapper" {...rest}>
            <img src={`${src}`} alt={`${name}`} className="avatar"></img>
            {children}
        </div>
    )
}

export default Avatar;