import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Events from './Pages/Events/EventPage';
import Tutorial from './Pages/Tutorial/Tutorial';

function Main() {
  return (
    <main style={{ minHeight: '70vh' }}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/tutorial" component={Tutorial} />
        <Route path="/events" component={Events} />
        <Route path="/login" component={Login} />
      </Switch>
    </main>
  );
}

export default Main;
