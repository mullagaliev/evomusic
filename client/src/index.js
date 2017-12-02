import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Switch, Redirect, Route, BrowserRouter as Router } from 'react-router-dom';
import PhotoSearchContainer from './containers/PhotoSearch/PhotoSearchContainer';
import GuestListContainer from './containers/GuestList/GuestListContainer';

ReactDOM.render(
    <Router>
      <Switch>
        <Route path='/mobile' component={() => {
          return <div>Hello!</div>
        }
        }/>
        <Route path='/photos/search' component={PhotoSearchContainer}/>
        <Route path='/dashboard' component={GuestListContainer}/>
        <Route path='/' component={App}/>
      </Switch>
    </Router>, document.getElementById('root'));
registerServiceWorker();
