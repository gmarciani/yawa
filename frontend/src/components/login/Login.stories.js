import React from 'react';
import Login from "./Login";

export default {
    component: Login,
    title: 'Login',
};

const Template = args => <Login {...args}/>;

export const Default = Template.bind({});
Default.args = {};

export const SubmitDisabled = Template.bind({});
SubmitDisabled.args = {
    submitDisabled: true
};

export const Submitting = Template.bind({});
Submitting.args = {
    submitting: true
};

export const Error = Template.bind({});
Error.args = {
    errorMessage: "An error message related to this form"
};

export const Success = Template.bind({});
Success.args = {
    successMessage: "An success message related to this form"
};
