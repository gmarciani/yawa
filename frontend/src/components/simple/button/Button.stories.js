import React from 'react';
import Button from "./Button";

export default {
    component: Button,
    title: 'Button',
    args: {
        type: 'button',
        value: 'Label',
        disabled: false,
        loading: false
    },
    argTypes: {
        type: {
            description: 'Set the type of the &lt;button&gt; element. A submit button is meant to be included in a &lt;form&gt;.',
            control: { type: 'radio' },
            options: ['button', 'submit']
        },
        value: {
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
    value: "Click Me"
};

export const Custom = Template.bind({});
Custom.args = {
    value: "Click Me",
    disabled: false,
    loading: false,
    type: "button"
};

export const Disabled = Template.bind({});
Disabled.args = {
    value: "Click Me",
    disabled: true
};

export const Loading = Template.bind({});
Loading.args = {
    value: "Click Me",
    loading: true
};

export const Submit = Template.bind({});
Submit.args = {
    type: "submit",
    value: "Submit",
};

export const Submitting = Template.bind({});
Submitting.args = {
    type: "submit",
    value: "Submitting",
    loading: true
};
