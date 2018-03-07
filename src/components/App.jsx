import React, {Component} from 'react';
import logo from '../logo.svg';
import MainSector from './MainSector/MainSector';
import './App.css';

import {connect} from 'react-redux';
import {APP_LOAD, REDIRECT} from '../constants/actionTypes';
import {Route, Switch} from 'react-router-dom';

import agent from '../agent';
import {store} from '../store';
import {push} from 'react-router-redux';

const mapStateToProps = state => {
    return {
        // appLoaded: state.common.appLoaded,
        // appName: state.common.appName,
        // currentUser: state.common.currentUser,
        // redirectTo: state.common.redirectTo
    }
};

const mapDispatchToProps = dispatch => ({
    onLoad: (payload, token) =>
        dispatch({type: APP_LOAD, payload, token, skipTracking: true}),
    onRedirect: () =>
        dispatch({type: REDIRECT})
});


class App extends Component {

    componentWillReceiveProps(nextProps) {
        if (nextProps.redirectTo) {
            // this.context.router.replace(nextProps.redirectTo);
            store.dispatch(push(nextProps.redirectTo));
            this.props.onRedirect();
        }
    }

    componentWillMount() {
        const token = window.localStorage.getItem('jwt');
        if (token) {
            agent.setToken(token);
        }

        this.props.onLoad(token ? agent.Auth.current() : null, token);
    }

    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({hasError: true});
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, info);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Blog on React</h1>
                </header>
                <p className="App-intro">
                    Welcome to Blog Maker!
                </p>

                <Switch>
                    <Route exact path="/test" children={<div>345</div>}/>
                    <Route exact path="/" component={MainSector}/>
                    {/*<Route path="/login" component={Login} />*/}
                    {/*<Route path="/register" component={Register} />*/}
                    {/*<Route path="/editor/:slug" component={Editor} />*/}
                    {/*<Route path="/editor" component={Editor} />*/}
                    {/*<Route path="/article/:id" component={Article} />*/}
                    {/*<Route path="/settings" component={Settings} />*/}
                    {/*<Route path="/@:username/favorites" component={ProfileFavorites} />*/}
                    {/*<Route path="/@:username" component={Profile} />*/}
                </Switch>

            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
