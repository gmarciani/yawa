import React from 'react';
import App from "./App";

export default {
    component: App,
    title: 'App',
};

const Template = args => <App {...args}/>;

export const Unauthenticated = Template.bind({});
Unauthenticated.args = {};

export const Authenticated = Template.bind({});
Authenticated.args = {
    user: "mgiacomo"
};
