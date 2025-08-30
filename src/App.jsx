import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation";
import Greetings from "./containers/Greetings";
import Skills from "./containers/Skills";
// import Education from "./containers/Education";
import Experience from './containers/Experience';
// import Projects from './containers/Projects';
import GithubProfile from './containers/GithubProfile';
// Teal - #0f766e
const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact render={props => (
                    <>
                        <Navigation />
                        <Greetings />
                        <Experience />
                        <Skills />
                        {/* <Education /> */}
                        {/* <Projects /> */}
                        <GithubProfile />
                    </>
                )} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;