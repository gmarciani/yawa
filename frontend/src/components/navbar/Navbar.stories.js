import React from 'react';
import Navbar from "./Navbar";

export default {
    component: Navbar,
    title: 'Navbar',
};

const Template = args => <Navbar {...args}/>;

export const Unauthenticated = Template.bind({});
Unauthenticated.args = {};

export const Authenticated = Template.bind({});
Authenticated.args = {
    user: "mgiacomo"
};
