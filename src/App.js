import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LandingPage } from './landing.page';
import { AppLayout } from './app.layout';
import { ProtectedRoute } from './protected.route';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <ProtectedRoute exact path="/app" component={AppLayout} />
          <Route path="*" component={()=> "404 NOT FOUND"} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
