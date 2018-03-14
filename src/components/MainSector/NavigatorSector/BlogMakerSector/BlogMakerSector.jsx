import React, {Component} from 'react';
import {connect} from 'react-redux';

import BlogButton from './BlogButton/BlogButton';
import BlogForm from './BlogForm/BlogForm';
// import './BlogMakerSector.css';
import {Route, Router, Switch} from "react-router";
import {history} from '../../../../store';

class BlogMakerSector extends Component {
    render() {
        return (
            <div className="blog-maker-sector">
                <Router history={history}>
                    <Switch>
                        <Route path="/edit" component={BlogForm}/>
                        <Route path="/" component={BlogButton}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default connect()(BlogMakerSector);