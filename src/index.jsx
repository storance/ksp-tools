import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';
import { HashRouter as Router, Route, Link, Switch, Redirect, useRouteMatch } from 'react-router-dom';
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
                <nav className="navbar navbar-dark bg-dark navbar-expand-lg" role="navigation">
                    <a className="navbar-brand" href="#">KSP Tools</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#kspToolsNavbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="kspToolsNavbar">
                        <ul className="navbar-nav mr-auto">
                            
                            <NavbarItem to="/body/information" label="Body Information" />
                            <NavbarItem to="/orbit/darknesstime" label="Darkness Time" />
                            <NavbarItem to="/orbit/information" label="Orbit Information" />
                            <NavbarItem to="/orbit/maneuver" label="Maneuver Planner" />
                            <NavbarItem to="/satellite/singlelaunch" label="Satellite: Single Launch" />
                            <NavbarItem to="/satellite/multiplelaunch" label="Satellite: Multiple Launch" />
                            <NavbarItem to="/deltavmap" label="Delta-V Map" />
                        </ul>
                    </div>
                </nav>
                <div>
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
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);

function NavbarItem({to, label}) {
    let match = useRouteMatch({
        path: to
    });

    return <li className={match ? "nav-item active" : "nav-item"}>
            <Link to={to} className={"nav-link"}>{label}</Link>
        </li>
}