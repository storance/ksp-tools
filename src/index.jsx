import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { HashRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

import { OrbitInformationContainer } from './components/OrbitInformation';
import { BodyInformationContainer } from './components/BodyInformation';
import { DarknessTimeContainer } from './components/DarknessTime';
import { AscentPlannerContainer } from './components/deltav/AscentPlanner';
import { TransferWindowContainer } from './components/deltav/TransferWindow';
import { ManeuverPlannerContainer } from './components/deltav/ManeuverPlanner';

import { AntennaRangeContainer } from './components/commnet/AntennaRange';
import { ConstellationMinOrbitContainer } from './components/commnet/ConstellationMinOrbit';
import { ConstellationSingleLaunchContainer } from './components/commnet/ConstellationSingleLaunch';
import { ConstellationMultipleLaunchContainer } from './components/commnet/ConstellationMultipleLaunch';
import { PlanetPackSelectContainer } from './components/forms/PlanetPackSelect';
import { loadState, saveStateMiddleware } from './localStorage.js';
import rootReducer from './reducers';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, loadState(), composeEnhancers(applyMiddleware(saveStateMiddleware)));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Navbar variant="dark" bg="dark" expand="lg">
                <Navbar.Brand href="#">KSP Tools</Navbar.Brand>
                <Navbar.Toggle aria-controls="ksp-tools-navbar" />
                <Navbar.Collapse id="ksp-tools-navbar">
                    <Nav className="mr-auto">
                        <Nav.Link href="#/body/information">Body Information</Nav.Link>
                        <Nav.Link href="#/orbit/information">Orbit Information</Nav.Link>
                        <Nav.Link href="#/orbit/darknesstime">Darkness Time</Nav.Link>
                        <NavDropdown title="CommNet" id="ksp-tools-commnet-dropdown">
                            <NavDropdown.Item href="#/commnet/antennarange">Antenna Range</NavDropdown.Item>
                            <NavDropdown.Item href="#/commnet/constellation/minorbit">Constellation: Minimum Orbit</NavDropdown.Item>
                            <NavDropdown.Item href="#/commnet/constellation/singlelaunch">Constellation: Single Launch</NavDropdown.Item>
                            <NavDropdown.Item href="#/commnet/constellation/multiplelaunch">Constellation: Multiple Launch</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="&Delta;V" id="ksp-tools-deltav-dropdown">
                            <NavDropdown.Item href="#/deltav/ascent">Ascent/Descent</NavDropdown.Item>
                            <NavDropdown.Item href="#/deltav/transferwindow">Transfer Window</NavDropdown.Item>
                            <NavDropdown.Item href="#/deltav/maneuver">Maneuver Planner</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <PlanetPackSelectContainer />
                </Navbar.Collapse>
            </Navbar>
            <Container fluid="xl">
                <Switch>
                    <Redirect exact from="/" to="/orbit/information" />
                    <Route path="/body/information" component={BodyInformationContainer} />
                    <Route path="/orbit/information" component={OrbitInformationContainer} />
                    <Route path="/orbit/darknesstime" component={DarknessTimeContainer} />

                    <Route path="/commnet/antennarange" component={AntennaRangeContainer} />
                    <Route path="/commnet/constellation/minorbit" component={ConstellationMinOrbitContainer} />
                    <Route path="/commnet/constellation/singlelaunch" component={ConstellationSingleLaunchContainer} />
                    <Route path="/commnet/constellation/multiplelaunch" component={ConstellationMultipleLaunchContainer} />

                    <Route path="/deltav/ascent" component={AscentPlannerContainer} />
                    <Route path="/deltav/transferwindow" component={TransferWindowContainer} />
                    <Route path="/deltav/maneuver" component={ManeuverPlannerContainer} />
                </Switch>
            </Container>
        </Router>
    </Provider>,
    document.getElementById('root')
);
