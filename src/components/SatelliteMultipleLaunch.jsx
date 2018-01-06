import React from 'react';
import { connect } from 'react-redux';
import { OrbitingBodySelectContainer } from './forms/OrbitingBodySelect';
import { DISTANCE_UNITS } from '../consts.js';

import ApsisField from './forms/ApsisField';
import TextField from './forms/TextField';
import StaticTextField from './forms/StaticTextField';
import ButtonField from './forms/ButtonField';
import DurationFormat from './format/DurationFormat';
import NumberFormat from './format/NumberFormat';
import * as actionCreators from '../action_creators';

export class SatelliteMultipleLaunch extends React.PureComponent {
    render() {
        return <div className="container">
            <h1>Satellite Deployment: Mutiple Launch</h1>
            <p>Calculates the separtion between satellites to use to evenly space them out when using separate launches.
            First, launch your first satellite in the desired orbit.  For each subsequent satellite, enter a
            parking orbit and use a maneuver node to place your apoapsis along the previously launched
            satellite's orbit.  Tweak the position of the maneuver node such that the separtion at apoapsis
            between the two satellites is close to the calculated one.</p>

            <p>See the <a href="https://remotetechnologiesgroup.github.io/RemoteTech/tutorials/keo/#method-1-separate-launches">Remote Tech: Creating a Keosynchronous Satellite Network</a> tutorial for more details.</p>
            <form className="form-horizontal">
                <OrbitingBodySelectContainer />
                <fieldset>
                    <legend>Desired Orbit</legend>
                    <ApsisField label="Apoapsis"
                        name="apoapsis"
                        value={this.props.apoapsis}
                        unitsValue={this.props.apoapsisUnits}
                        error={this.props.errors.apoapsis}
                        update={newValue => this.props.updateSatelliteMultipleLaunch('apoapsis', newValue)}
                        updateUnits={newValue => this.props.updateSatelliteMultipleLaunch('apoapsisUnits', newValue)} />

                    <ApsisField label="Periapsis"
                        name="periapsis"
                        value={this.props.periapsis}
                        unitsValue={this.props.periapsisUnits}
                        error={this.props.errors.periapsis}
                        update={newValue => this.props.updateSatelliteMultipleLaunch('periapsis', newValue)}
                        updateUnits={newValue => this.props.updateSatelliteMultipleLaunch('periapsisUnits', newValue)} />

                </fieldset>
                <fieldset>
                    <legend>Satellites</legend>
                    <TextField label={"# of Satellites"}
                               type="number"
                               name={"satelliteCount"}
                               value={this.props.satelliteCount}
                               error={this.props.errors.satelliteCount}
                               update={newValue => this.props.updateSatelliteMultipleLaunch('satelliteCount', newValue)} />

                    <ButtonField label={"Calculate"}
                                 onClick={() => this.props.calculateSatelliteMultipleLaunch(this.props.body)} />
                </fieldset>
                {this.props.separation &&
                    <fieldset>
                        <legend>Satellite Separation</legend>
                            <StaticTextField label={"Separation"}>
                                <NumberFormat value={this.props.separation}
                                              fractionDigits={3}
                                              units={DISTANCE_UNITS} />
                            </StaticTextField>
                    </fieldset>
                }
            </form>
        </div>;
    }
}

function mapStateToProps(state) {
    return {
        apoapsis: state.getIn(['satelliteMultipleLaunch', 'apoapsis']),
        apoapsisUnits: state.getIn(['satelliteMultipleLaunch', 'apoapsisUnits']),
        periapsis: state.getIn(['satelliteMultipleLaunch', 'periapsis']),
        periapsisUnits: state.getIn(['satelliteMultipleLaunch', 'periapsisUnits']),
        satelliteCount: state.getIn(['satelliteMultipleLaunch', 'satelliteCount']),
        separation: state.getIn(['satelliteMultipleLaunch', 'separation']),
        errors: state.getIn(['satelliteMultipleLaunch', 'errors']),
        planetpack: state.getIn(['celestialBody', 'selectedPlanetPack']),
        body: state.getIn(['celestialBody', 'selectedBody'])
    }
}

export const SatelliteMultipleLaunchContainer = connect(mapStateToProps, actionCreators)(SatelliteMultipleLaunch);