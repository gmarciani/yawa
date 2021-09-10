import React from 'react';
import Landing from "./Landing";

export default {
    component: Landing,
    title: 'Landing',
};

const Template = args => <Landing {...args}/>;

export const Unauthenticated = Template.bind({});
Unauthenticated.args = {};

export const Authenticated = Template.bind({});
Authenticated.args = {
    user: "mgiacomo"
};
