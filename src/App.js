import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import {Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";
import About from "./components/About";

const App = () => {
    return (
        <>
            <NavBar/>
            <Switch>
                <Route path='/' component={Home} exact/>
                <Route path='/users' component={Users} exact/>
                <Route path='/about' component={About} exact/>

            </Switch>
        </>
    );
};

export default App;