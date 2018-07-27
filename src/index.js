import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import '../src/css/bootstrap-extensions.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AddCourse from '../src/components/AddCourse';
import ViewPost from '../src/components/ViewPost';
import CourseList from '../src/components/CourseList';

const title = 'My Minimal React Webpack Babel Setup';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reducers from './reducers';

import App from './components/App';

import configureStore from './store';

import { composeWithDevTools } from 'redux-devtools-extension';

// const store = createStore(reducers,composeWithDevTools(applyMiddleware((promise)(createStore))));

// const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

// <SWitch> is used to solve loose matching of route urls
// <Switch> introduced in v4

ReactDOM.render(
  <Provider store={configureStore()}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/AddCourse" component={AddCourse} />
          <Route path="/ViewPost" component={ViewPost} />
          <Route path="/" component={App} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();
