import React from 'react';
import Box from "../../components/Box/Box"
import Image from "../../components/Image/Image"

// meta data 
export default {
    title: 'Rapid UI/Card', //mandatory
    component:Box,
    parameters: {
        actions: {
          handles: [],
        }
    },
    args: {

    },
}


const Template = args => <Box {...args} />

export const ImageOnlyCard = Template.bind({})
ImageOnlyCard.args = {
    children : <Image borderRadius={`5%`} src={`https://picsum.photos/id/54/400/300`} alt={`Card Image`}/>,
    width : '30%',
    display : 'flex',
    alignItems : 'center',    
    cursor: 'pointer',    
    hover : 'hover-shade',   
    borderRadius : '5%',
    transition : 'all 0.25s'    
}

export const ImageCardWithText = Template.bind({})
ImageCard.args = {
    children : <Image borderRadius={`50px`} src={`http://via.placeholder.com/100`} alt={`Card Image`}/>,
    width : '30%',
    display : 'flex',
    alignItems : 'center',    
    cursor: 'pointer',
    border : '2px solid black'
}
