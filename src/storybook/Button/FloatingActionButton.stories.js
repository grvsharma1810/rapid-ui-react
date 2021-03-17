import React from 'react';
import Button from "../../components/Button/Button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

// meta data 
export default {
    title: 'Rapid UI/Form/Button/Floating Action Button', //mandatory
    component:Button,
    parameters: {
        actions: {
          handles: ['click'],
        }
    },
    args: {
              
    },
    // argsTypes:{
    //     variant: {control: "text"},
    //     kind: {control: "text"},  
    // }
}


const Template = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = {    
    children: <div><FontAwesomeIcon icon={faPlus}/></div>,
    kind: "fab",  
}

// export const Extended = Template.bind({})
// Extended.args = {
//     children: <div><span>+</span> ADD </div>,
//     variant:"fab-extended"
// }
