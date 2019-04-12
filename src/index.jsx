import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import Login from 'page/login/index.jsx';
import Layout from 'component/layout/index.jsx';
import Home from 'page/home/index.jsx';

class App extends React.Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route
            path="/"
            render={props => (
              <Layout>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/product" component={Home} />
                  <Route path="/product-category" component={Home} />
                  <Route path="/order" component={Home} />
                  <Route path="/user" component={Home} />
                  <Redirect from="*" to="/" />
                </Switch>
              </Layout>
            )}
          />
        </Switch>

      </Router>
    );
  }
}
ReactDOM.render (<App />, document.getElementById ('root'));
