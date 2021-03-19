import React from 'react';
import Toast from "../../components/Toast/Toast"
import checkIcon from './assets/check.svg';
import errorIcon from './assets/error.svg';
import infoIcon from './assets/info.svg';
import warningIcon from './assets/warning.svg';

// meta data 
export default {
    title: 'Rapid UI/Toast', //mandatory
    component:Toast,
    parameters: {
        actions: {
          handles: ['click'],
        }
    },
    args: {
        
    },    
}


const Template = args => <Toast {...args} />

export const Default = Template.bind({})
Default.args = {
    position : "bottom-right" ,
    toastList : [
        {
          id: 1,
          title: 'Success',
          description: 'This is a success toast component',
          backgroundColor: '#5cb85c',
          icon: checkIcon
        },
        {
          id: 2,
          title: 'Danger',
          description: 'This is an error toast component',
          backgroundColor: '#d9534f',
          icon: errorIcon
        },
    ],
    autoDelete : true,
    dismissTime : 3000,
}


//Anyhow change the props passed to Toast Component and it will re-render automatically.
