import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';
import { HashRouter as Router, Route, NavLink, Switch, Redirect } from 'react-router-dom';
import App from './components/App';
import { OrbitInformationContainer } from './components/OrbitInformation';
import { BodyInformationContainer } from './components/BodyInformation';
import { ManeuverPlannerContainer } from './components/ManeuverPlanner';
import { DarknessTimeContainer } from './components/DarknessTime';
import { SatelliteSingleLaunchContainer } from './components/SatelliteSingleLaunch';
import { SatelliteMultipleLaunchContainer } from './components/SatelliteMultipleLaunch';
import { DeltaVMapContainer } from './components/DeltaVMap';
import { loadState, saveStateMiddleware } from './localStorage.js';

import * as reducers from './reducers';

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import MainCSS from './css/main.css';

const store = createStore(combineReducers(reducers), loadState(), applyMiddleware(saveStateMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <div className="navbar navbar-inverse navbar-static-top" role="navigation">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">KSP Tools</a>
                        </div>
                        <div className="collapse navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li><NavLink activeClassName="active" to="/body/information">Body Information</NavLink></li>
                                <li><NavLink activeClassName="active" to="/orbit/darknesstime">Darkness Time</NavLink></li>
                                <li><NavLink activeClassName="active" to="/orbit/information">Orbit Information</NavLink></li>
                                <li><NavLink activeClassName="active" to="/orbit/maneuver">Maneuver Planner</NavLink></li>
                                <li><NavLink activeClassName="active" to="/satellite/singlelaunch">Satellite: Single Launch</NavLink></li>
                                <li><NavLink activeClassName="active" to="/satellite/multiplelaunch">Satellite: Multiple Launch</NavLink></li>
                                <li><NavLink activeClassName="active" to="/deltavmap">Delta-V Map</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Switch>
                    <Redirect exact from="/" to="/orbit/information" />
                    <Route path="/orbit/darknesstime" component={DarknessTimeContainer} />
                    <Route path="/orbit/information" component={OrbitInformationContainer} />
                    <Route path="/orbit/maneuver" component={ManeuverPlannerContainer} />
                    <Route path="/body/information" component={BodyInformationContainer} />
                    <Route path="/satellite/singlelaunch" component={SatelliteSingleLaunchContainer} />
                    <Route path="/satellite/multiplelaunch" component={SatelliteMultipleLaunchContainer} />
                    <Route path="/deltavmap" component={DeltaVMapContainer} />
                </Switch>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);