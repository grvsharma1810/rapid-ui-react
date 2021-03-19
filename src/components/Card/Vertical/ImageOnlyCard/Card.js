import React from 'react';
import "./Card.css";

function ImageOnlyCard(props) {
    const {src, alt} = props;
    return (
        <div className="card">
            <img src={src} alt={alt} className="card-image"/>
        </div>        
    )
}

export default ImageOnlyCard;