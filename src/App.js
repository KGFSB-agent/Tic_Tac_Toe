import React from 'react';
import {Main} from './pages/main/Main';
import {Game} from './pages/game/Game';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {NavBar} from "./utils/navbar/NavBar";
import './common.scss';


export class App extends React.Component {
  render () {
    return (
        <Router>
            <NavBar/>
            <Route exact path="/" component={Main}/>
            <Route exact path="/game/" component={Game}/>
        </Router>
    );
  }
}