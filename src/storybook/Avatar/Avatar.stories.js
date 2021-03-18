import React from 'react';
import Avatar from "../../components/Avatar/Avatar"
import AvatarBadge from "../../components/AvatarBadge/AvatarBadge"

// meta data 
export default {
    title: 'Rapid UI/Avatar', //mandatory
    component:Avatar,
    parameters: {
        actions: {
          handles: [],
        }
    },
    args: {
        //children: <div><FontAwesomeIcon icon={faHome} /> &nbsp; Icon Button</div>,
        src: "http://via.placeholder.com/100",
        name: "Gaurav Sharma",        
    },
}


const Template = args => <Avatar {...args} />

export const Default = Template.bind({})
Default.args = {
    
}

export const AvatarBadgedTop = Template.bind({})
AvatarBadgedTop.args = {
    children : <AvatarBadge pos="top"></AvatarBadge>
}

export const AvatarBadgedBottom = Template.bind({})
AvatarBadgedBottom.args = {
    children : <AvatarBadge pos="bottom"></AvatarBadge>
}

export const AvatarBadgeWithBorder = Template.bind({})
AvatarBadgeWithBorder.args = {
    children : <AvatarBadge pos="bottom" border="2"></AvatarBadge>
}