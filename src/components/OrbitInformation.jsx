import React from 'react';
import { connect } from 'react-redux';
import { OrbitingBodySelectContainer } from './forms/OrbitingBodySelect';
import ApsisField from './forms/ApsisField';
import ButtonField from './forms/ButtonField';
import TextField from './forms/TextField';
import RadioSelectField from './forms/RadioSelectField';
import OrbitDetails from './OrbitDetails';
import * as actionCreators from '../action_creators';

const MODE_OPTIONS = [
    {
        value: 'ap+pe',
        label: 'Apoapsis and Periapsis'
    },
    {
        value: 'ap+period',
        label: 'Apoapsis and Period'
    },
    {
        value: 'pe+period',
        label: 'Periapsis and Period'
    }
];

export class OrbitInformation extends React.PureComponent {
    render() {
        return <div className="container">
            <h1>Orbit Information</h1>
            <p>Calculates details about the orbit given the apoapsis and periapsis, apoapsis and period, or the
            periapsis and period.  This will show details such as the semi-major axis, orbital period, eccentricity,
            and velocities at apoapsis and periapsis. </p>
            <form>
                <OrbitingBodySelectContainer />
                <fieldset>
                    <legend>Orbit Parameters</legend>

                    <RadioSelectField label="From"
                        name="mode"
                        value={this.props.mode}
                        update={newValue => this.props.updateOrbitInformation('mode', newValue)}
                        options={MODE_OPTIONS} />

                    {this.hasApoapsis() &&
                        <ApsisField label="Apoapsis"
                            name="apoapsis"
                            value={this.props.apoapsis}
                            unitsValue={this.props.apoapsisUnits}
                            error={this.props.errors.apoapsis}
                            update={newValue => this.props.updateOrbitInformation('apoapsis', newValue)}
                            updateUnits={newValue => this.props.updateOrbitInformation('apoapsisUnits', newValue)} />
                    }

                    {this.hasPeriapsis() &&
                        <ApsisField label="Periapsis"
                            name="periapsis"
                            value={this.props.periapsis}
                            unitsValue={this.props.periapsisUnits}
                            error={this.props.errors.periapsis}
                            update={newValue => this.props.updateOrbitInformation('periapsis', newValue)}
                            updateUnits={newValue => this.props.updateOrbitInformation('periapsisUnits', newValue)} />
                    }

                    {this.hasPeriod() &&
                        <TextField label={"Period"}
                                   type="number"
                                   name="period"
                                   value={this.props.period}
                                   error={this.props.errors.period}
                                   update={newValue => this.props.updateOrbitInformation('period', newValue)}
                                   suffix={"s"} />
                    }

                    <ButtonField label={"Calculate"}
                                 onClick={() => this.props.calculateOrbitInformation(this.props.body)} />
                </fieldset>
                {this.props.orbit &&
                    <OrbitDetails orbit={this.props.orbit} calendar={this.props.planetpack.calendar} />
                }
            </form>
        </div>;
    }

    hasPeriapsis() {
        return this.props.mode === 'ap+pe' || this.props.mode == 'pe+period';
    }

    hasApoapsis() {
        return this.props.mode === 'ap+pe' || this.props.mode == 'ap+period';
    }

    hasPeriod() {
        return this.props.mode === 'ap+period' || this.props.mode == 'pe+period';
    }
};

function mapStateToProps(state) {
    return {
        apoapsis: state.getIn(['orbitInformation', 'apoapsis']),
        apoapsisUnits: state.getIn(['orbitInformation', 'apoapsisUnits']),
        periapsis: state.getIn(['orbitInformation', 'periapsis']),
        periapsisUnits: state.getIn(['orbitInformation', 'periapsisUnits']),
        period: state.getIn(['orbitInformation', 'period']),
        mode: state.getIn(['orbitInformation', 'mode']),
        orbit: state.getIn(['orbitInformation', 'orbit']),
        errors: state.getIn(['orbitInformation', 'errors']),
        planetpack: state.getIn(['celestialBody', 'selectedPlanetPack']),
        body: state.getIn(['celestialBody', 'selectedBody'])
    }
}

export const OrbitInformationContainer = connect(mapStateToProps, actionCreators)(OrbitInformation);