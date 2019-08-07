import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import Layout from './hoc/Layout/Layout';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Layout>
          <Switch>
              <Route path="/users" component={Users} />
              <Route path="/courses" component={Courses} />
              <Redirect from="/all-courses" to="/courses" />
              <Redirect from="/" to="/courses" exact />
              <Route render={ () => <h1>404! Not found</h1> } /> 
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
