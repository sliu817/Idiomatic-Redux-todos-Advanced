import React, {PropTypes} from 'react';
import { Provider } from 'react-redux';
import App from './App';
import {HashRouter as Router, Route} from 'react-router-dom';

const Root = ({store}) => (
  <Provider store={store}>
    <Router>
      <Route path='/' component={App} />
    </Router>
  </Provider>
    
);

Root.propTypes = {
  store: PropTypes.object.isRequired,	
};

export default Root;
