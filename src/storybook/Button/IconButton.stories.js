import React from 'react';
import Button from "../../components/Button/Button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHome } from '@fortawesome/free-solid-svg-icons'

// meta data 
export default {
    title: 'Rapid UI/Form/Button/Icon Button', //mandatory
    component:Button,
    parameters: {
        actions: {
          handles: ['click'],
        }
    },
    args: {
        children: <div><FontAwesomeIcon icon={faHome} /> &nbsp; Icon Button</div>,
        kind: "solid",        
    },
    // argsTypes:{
    //     variant: {control: "text"},
    //     kind: {control: "text"},  
    // }
}


const Template = args => <Button {...args} />

// export const Primary = Template.bind({})
// Default.args = {
    
// }

export const Default = Template.bind({})
Default.args = {
    variant: "default",
    // icon : "fab-home"    
}

// export const Secondary = Template.bind({})
// Secondary.args = {
//     variant: "secondary",
// }

// export const Success = Template.bind({})
// Success.args = {
//     variant: "success",
// }

// export const Warning = Template.bind({})
// Warning.args = {
//     variant: "warning",
// }

// export const Danger = Template.bind({})
// Danger.args = {
//     variant: "danger",
// }

// export const Info = Template.bind({})
// Info.args = {
//     variant: "info",
// }

// export const Light = Template.bind({})
// Light.args = {
//     variant: "light",
// }

// export const Dark = Template.bind({})
// Dark.args = {
//     variant: "dark",
// }
