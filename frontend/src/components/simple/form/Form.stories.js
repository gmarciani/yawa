import React from 'react';
import Form from "./Form";

export default {
    component: Form,
    title: 'Form',
};

const Template = args => <Form {...args}/>;

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
