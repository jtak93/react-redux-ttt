import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import Home from './home/HomeContainer'
import About from './about'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <main>
              <Route exact path="/" component={Home} />
            </main>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
