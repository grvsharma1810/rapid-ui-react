import React from 'react';
import "./Image.css"

function Image(props) {
    const {src, alt, borderRadius, ...rest} = props;
    return(
        <img src={src} alt={alt} className={`img`} style={{borderRadius : borderRadius}} {...rest} />
    )
}

export default Image;