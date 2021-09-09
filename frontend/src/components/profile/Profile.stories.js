import React from 'react';
import Profile from "./Profile";

export default {
    component: Profile,
    title: 'Profile',
};

const Template = args => <Profile {...args}/>;

export const Unauthenticated = Template.bind({});
Unauthenticated.args = {};

export const Authenticated = Template.bind({});
Authenticated.args = {
    user: "mgiacomo"
};
