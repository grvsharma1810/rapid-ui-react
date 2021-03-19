import React from 'react';
import "./Box.css";

// class and event handlers cannot be applied to this component currently
function Box(props) {
    const {hover = "", children, ...restOfTheStyle} = props;
    return (
        <div 
            style = {{
                ...restOfTheStyle
                // display : props.display,
                // alignItems : props.alignItems,
                // justifyContent : props.justifyContent,
                // flexDirection : props.flexDirection,
                // marginTop : props.marginTop,                
                // marginBottom : props.marginBottom,
                // marginLeft : props.marginLeft,                
                // marginRight : props.marginRight,
                // backgroundColor : props.backgroundColor,
                // paddingTop : props.paddingTop,                
                // paddingBottom : props.paddingBottom,
                // paddingLeft : props.paddingLeft,                
                // paddingRight : props.paddingRight,
                // position : props.position,                
                // width : props.width,
                // height : props.height,
                // border : props.border,
                // borderRadius : props.borderRadius,
                // top : props.top,
                // bottom : props.bottom,
                // left : props.left,
                // right : props.right,     
                // cursor: props.cursor, 
                // boxShadow : props.boxShadow,
                // transition: props.transition,
                // boxSizing: props.boxSizing,
                // fontSize: props.fontSize,
                // fontWeight: props.fontWeight,
                // fontFamily : props.fontFamily,
            }}
            className={`box ${hover}`}
        >
        {children}
        </div>        
    )
}

export default Box;