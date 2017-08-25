import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Board from './Board'
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
              <Route exact path="/" component={Board} />
            </main>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
