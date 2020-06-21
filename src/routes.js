import React from 'react';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';

import App from './containers/App'
import Home from './containers/Home'
import Code from './containers/Code'
import Project from './containers/Project'


export default (
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home}/>
        <Route path='/code' component={Code} />        
        <Route path='/project' component={Project} />
      </Route>
    </Router>

);