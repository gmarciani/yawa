import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import './App.sass';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Landing from './components/landing/Landing';
import Board from './components/board/Board';
import Profile from './components/profile/Profile';
import Settings from './components/settings/Settings';
import Navbar from "./components/navbar/Navbar";
import { getUser } from './common/authentication';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.state || {
            user: null
        };
    }

    render() {
        const user = this.state.user || getUser();
        return (
            <div className="App">
                <Navbar user={user} />
                <div className="AppContentWrapper">
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/">
                                {(user && <Board user={user}/>) || <Landing />}
                            </Route>
                            <Route path="/profile">
                                <Profile user={user}/>
                            </Route>
                            <Route path="/settings">
                                <Settings user={user}/>
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
            </div>
        );
    }
}

export default App;
