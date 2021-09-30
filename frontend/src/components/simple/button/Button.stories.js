import React from 'react';
import Button from "./Button";

export default {
    component: Button,
    title: 'Button',
    args: {
        type: 'button',
        category: 'outline-primary',
        label: 'Label',
        disabled: false,
        loading: false
    },
    argTypes: {
        type: {
            description: 'Set the type of the &lt;button&gt; element. A submit button is meant to be included in a &lt;form&gt;.',
            control: { type: 'radio' },
            options: ['button', 'submit']
        },
        category: {
            description: 'Set the UI category of the button.',
            control: { type: 'radio' },
            options: ['outline-primary', 'success']
        },
        label: {
            description: 'The button label.',
            default: 'Button'
        },
        disabled: {
            description: 'Toggles the enabled/disabled state of the button',
            default: false
        },
        loading: {
            description: 'Toggles the loading state of the button. A loading button is disabled by default.',
            default: false
        }
    }
};

const Template = args => <Button {...args}/>;

export const Basic = Template.bind({});
Basic.args = {
    label: "Click Me"
};

export const Custom = Template.bind({});
Custom.args = {
    label: "Click Me",
    disabled: false,
    loading: false,
    type: "button",
    category: "outline-primary"
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: "Click Me",
    disabled: true
};

export const Loading = Template.bind({});
Loading.args = {
    label: "Click Me",
    loading: true
};

export const Submit = Template.bind({});
Submit.args = {
    type: "submit",
    label: "Submit",
};

export const Submitting = Template.bind({});
Submitting.args = {
    type: "submit",
    label: "Submitting",
    loading: true
};
