import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
// import axios from 'axios'
// import './data/data.json'
import './styles/App.css'

// import HomePage
import HomePage from './components/HomePage'
import Numbers from './components/Numbers'

import Uppercase from './components/Uppercase'
import Lowercase from './components/Lowercase'
import UpperLowercase from './components/UpperLowercase'
import MixNumLetters from './components/MixNumLetters'

// import components with Context
import withContext from './Context'

const NumbersWithContext = withContext(Numbers);



export default class App extends Component {


  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/numbers" component={NumbersWithContext}/>
            <Route path="/uppercase" component={Uppercase}/>
            <Route path="/lowercase" component={Lowercase}/>
            <Route path="/upperLowercase" component={UpperLowercase}/>
            <Route path="/mixNumLetters" component={MixNumLetters}/>

          </Switch>
        </div>
      </Router>
    )
  }
}


