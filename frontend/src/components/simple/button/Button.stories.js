import React from 'react';
import Button from "./Button";

export default {
    component: Button,
    title: 'Button',
};

const Template = args => <Button {...args}/>;

export const Default = Template.bind({});
Default.args = {
    value: "Click Me"
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
    value: "Submit",
    type: "submit"
};

export const Submitting = Template.bind({});
Submitting.args = {
    value: "Submitting",
    type: "submit",
    loading: true
};
