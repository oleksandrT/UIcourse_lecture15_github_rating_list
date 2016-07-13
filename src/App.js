import React from 'react';
import {render} from 'react-dom';
import Module from './Module'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import User from './User'

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="col-sm-6 col-sm-push-3">
                    <h1 className="text-center">GitHub Users List</h1>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

//render(<App />, document.getElementById('app'));
render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Module} />
            <Route path="/user/:userId" component={User}/>
        </Route>
    </Router>
), document.getElementById('app'));
