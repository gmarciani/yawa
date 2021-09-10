import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';
import './App.sass';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Landing from './components/landing/Landing';
import Board from './components/board/Board';
import Profile from './components/profile/Profile';
import Settings from './components/settings/Settings';
import Navbar from "./components/navbar/Navbar";
import FormField from "./components/simple/form/FormField";

class App extends React.Component {

    render() {
        return (
            <div className="App">
                <Navbar user={this.props.user}/>
                <BrowserRouter>
                    <Switch>
                        <Route path="/">
                            {this.props.user && <Board user={this.props.user}/> || <Landing />}
                        </Route>
                        <Route path="/profile">
                            <Profile user={this.props.user}/>
                        </Route>
                        <Route path="/settings">
                            <Settings user={this.props.user}/>
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/signup">
                            <Signup />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
