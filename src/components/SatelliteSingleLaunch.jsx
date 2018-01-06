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

export class SatelliteSingleLaunch extends React.PureComponent {
    render() {
        return <div className="container">
            <h1>Satellite Deployment: Single Launch</h1>
            <p>Calculates the transfer orbit to use to evenly space out the specified number of satellites at the
            desired orbit. After putting your spacecraft in the transfer orbit, release one satellite per revolution
            at apoapsis.</p>
            <form className="form-horizontal">
                <OrbitingBodySelectContainer />
                <fieldset>
                    <legend>Desired Orbit</legend>
                    <ApsisField label="Apoapsis"
                        name="apoapsis"
                        value={this.props.apoapsis}
                        unitsValue={this.props.apoapsisUnits}
                        error={this.props.errors.apoapsis}
                        update={newValue => this.props.updateSatelliteSingleLaunch('apoapsis', newValue)}
                        updateUnits={newValue => this.props.updateSatelliteSingleLaunch('apoapsisUnits', newValue)} />

                    <ApsisField label="Periapsis"
                        name="periapsis"
                        value={this.props.periapsis}
                        unitsValue={this.props.periapsisUnits}
                        error={this.props.errors.periapsis}
                        update={newValue => this.props.updateSatelliteSingleLaunch('periapsis', newValue)}
                        updateUnits={newValue => this.props.updateSatelliteSingleLaunch('periapsisUnits', newValue)} />

                </fieldset>
                <fieldset>
                    <legend>Satellites</legend>
                    <TextField label={"# of Satellites"}
                               type="number"
                               name={"satelliteCount"}
                               value={this.props.satelliteCount}
                               error={this.props.errors.satelliteCount}
                               update={newValue => this.props.updateSatelliteSingleLaunch('satelliteCount', newValue)} />

                    <ButtonField label={"Calculate"}
                                 onClick={() => this.props.calculateSatelliteSingleLaunch(this.props.body)} />
                </fieldset>
                {this.props.transferOrbit  &&
                    <fieldset>
                        <legend>Transfer Orbit</legend>
                            <StaticTextField label={"Apoapsis"}>
                                <NumberFormat value={this.props.transferOrbit.apoapsis}
                                              fractionDigits={3}
                                              units={DISTANCE_UNITS} />
                            </StaticTextField>

                            <StaticTextField label={"Periapsis"}>
                                <NumberFormat value={this.props.transferOrbit.periapsis}
                                              fractionDigits={3}
                                              units={DISTANCE_UNITS} />
                            </StaticTextField>

                            <StaticTextField label={"Orbital Period"}>
                                <DurationFormat value={this.props.transferOrbit.period}
                                                calendar={this.props.planetpack.calendar}
                                                includeRaw={true} />
                            </StaticTextField>
                    </fieldset>
                }
            </form>
        </div>;
    }
}

function mapStateToProps(state) {
    return {
        apoapsis: state.getIn(['satelliteSingleLaunch', 'apoapsis']),
        apoapsisUnits: state.getIn(['satelliteSingleLaunch', 'apoapsisUnits']),
        periapsis: state.getIn(['satelliteSingleLaunch', 'periapsis']),
        periapsisUnits: state.getIn(['satelliteSingleLaunch', 'periapsisUnits']),
        satelliteCount: state.getIn(['satelliteSingleLaunch', 'satelliteCount']),
        transferOrbit: state.getIn(['satelliteSingleLaunch', 'transferOrbit']),
        errors: state.getIn(['satelliteSingleLaunch', 'errors']),
        planetpack: state.getIn(['celestialBody', 'selectedPlanetPack']),
        body: state.getIn(['celestialBody', 'selectedBody'])
    }
}

export const SatelliteSingleLaunchContainer = connect(mapStateToProps, actionCreators)(SatelliteSingleLaunch);