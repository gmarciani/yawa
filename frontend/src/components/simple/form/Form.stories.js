import React from 'react';
import Form from "./Form";

export default {
    component: Form,
    title: 'Form',
};

const Template = args => <Form {...args}/>;

export const Default = Template.bind({});
Default.args = {
    submitEnabled: true
};

export const SubmitDisabled = Template.bind({});
SubmitDisabled.args = {
    submitEnabled: false
};

export const Submitting = Template.bind({});
Submitting.args = {
    submitting: true
};
