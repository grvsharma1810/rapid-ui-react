import React from 'react';
import "./Button.css"

function Button(props){
    const {variant = "default", kind="solid", children, ...rest} = props;    
    return (
        <button className={`btn ${variant} ${kind}`} {...rest}>            
            {children}
        </button>
    )
}

export default Button;