// import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar';
import News from './components/News';
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div className='conn bg-light-subtle '>
        <Router>
        <NavBar/>
        <Switch>
          <Route exact  path='/'><News key="PAPs"  pageSize={8} country="in" category="General"/></Route>
          {/* <Route exact path='/business '><News key="business" pageSize={8} country="in" category="business"/></Route> */}
          <Route exact path='/entertainment'><News key="entertainment" pageSize={8} country="in" category="Entertainment"/></Route>
          <Route exact path='/health'><News key="health" pageSize={8} country="in" category="Health"/></Route>
          <Route exact path='/science'><News key="science" pageSize={8} country="in" category="Science"/></Route>
          <Route exact path='/sports'><News key="sports" pageSize={8} country="in" category="Sports"/></Route>
          <Route exact path='/technology'><News key="technology" pageSize={8} country="in" category="Technology"/></Route>
        </Switch>
        </Router>
      </div> 
    )
  }
}


