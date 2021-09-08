import React from 'react';
import Board from "./Board";

export default {
    component: Board,
    title: 'Board',
};

const Template = args => <Board {...args}/>;

export const Unauthenticated = Template.bind({});
Unauthenticated.args = {};

export const Authenticated = Template.bind({});
Authenticated.args = {
    user: "mgiacomo"
};
