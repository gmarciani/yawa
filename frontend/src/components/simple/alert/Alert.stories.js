import React from 'react';
import Alert from "./Alert";

export default {
    component: Alert,
    title: 'Alert',
};

const Template = args => <Alert {...args}/>;

export const Default = Template.bind({});
Default.args = {
    type: "default",
    message: "A default message"
};

export const Success = Template.bind({});
Success.args = {
    type: "success",
    message: "A success message"
};

export const Warning = Template.bind({});
Warning.args = {
    type: "warning",
    message: "A warning message"
};

export const Error = Template.bind({});
Error.args = {
    type: "error",
    message: "An error message"
};
