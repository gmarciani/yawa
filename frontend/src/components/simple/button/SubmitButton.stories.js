import React from 'react';
import SubmitButton from "./SubmitButton";

export default {
    component: SubmitButton,
    title: 'SubmitButton',
    args: {
        submitting: false
    },
    argTypes: {
        submitting: {
            description: 'Toggles the submitting state of the button',
            default: false
        }
    }
};

const Template = args => <SubmitButton {...args}/>;

export const Basic = Template.bind({});
Basic.args = {};

export const Normal = Template.bind({});
Normal.args = {
    submitting: false
};

export const Submitting = Template.bind({});
Submitting.args = {
    submitting: true
};
