import React from 'react';
import Home from './Home';
import About from './About';
import Users from './Users';
import StrictAccess from './StrictAccess'

import { Switch, Route } from 'react-router-dom';

const passport = {
  username: 'joao',
  password: '1234'
}

const Content = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/users/:userId" component={Users} />
    <Route path="/users" render={(props) => (
      <Users {...props} greetingsMessage={'Good Morning!'} />
    )} />
    <Route path="/strict" render={(props) => (
      <StrictAccess {...props} user={passport} />
    )} />
  </Switch>
);

export default Content;