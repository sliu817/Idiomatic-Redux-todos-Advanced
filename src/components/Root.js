import React, {PropTypes} from 'react';
import { Provider } from 'react-redux';
import App from './App';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const Root = ({store}) => (
  <Provider store={store}>
    <Router>
	  <switch>
        <Route path='/' component={App} />
        <Route path='/(:filter)' component={App} />
      </switch>
    </Router>
   
  </Provider>
    
);

Root.propTypes = {
  store: PropTypes.object.isRequired,	
};

export default Root;
