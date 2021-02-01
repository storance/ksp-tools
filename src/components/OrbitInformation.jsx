import React from 'react';
import { connect } from 'react-redux';

import Form from 'react-bootstrap/Form';

import { OrbitInformationSelector } from '../selectors'
import ApsisField from './forms/ApsisField';
import BodySelect from './forms/BodySelect';
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
        return <>
            <h1>Orbit Information</h1>
            <p>Calculates details about the orbit given the apoapsis and periapsis, apoapsis and period, or the
            periapsis and period.  This will show details such as the semi-major axis, orbital period, eccentricity,
            and velocities at apoapsis and periapsis. </p>
            <Form>
                <h4>Orbit Parameters</h4>
                <BodySelect planetpack={this.props.planetpack} body={this.props.body.name} update={this.props.updateOrbitInformation}/>
                <RadioSelectField label="From"
                    name="mode"
                    value={this.props.mode}
                    update={this.props.updateOrbitInformation}
                    options={MODE_OPTIONS} />

                {this.hasApoapsis() &&
                    <ApsisField label="Apoapsis"
                        name="apoapsis"
                        field={this.props.apoapsis}
                        update={this.props.updateOrbitInformation} />
                }

                {this.hasPeriapsis() &&
                    <ApsisField label="Periapsis"
                        name="periapsis"
                        field={this.props.periapsis}
                        update={this.props.updateOrbitInformation} />
                }

                {this.hasPeriod() &&
                    <TextField label="Period"
                               type="number"
                               name="period"
                               field={this.props.period}
                               update={this.props.updateOrbitInformation}
                               suffix={"s"} />
                }

                <ButtonField label={"Calculate"} onClick={() => this.props.calculateOrbitInformation()} />
                {this.props.orbit &&
                    <OrbitDetails orbit={this.props.orbit} calendar={this.props.planetpack.calendar} />
                }
            </Form>
        </>;
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
        apoapsis: OrbitInformationSelector.getApoapsis(state),
        periapsis: OrbitInformationSelector.getPeriapsis(state),
        period: OrbitInformationSelector.getPeriod(state),
        mode: OrbitInformationSelector.getMode(state),
        orbit: OrbitInformationSelector.getOrbit(state),
        planetpack: OrbitInformationSelector.getPlanetPack(state),
        body: OrbitInformationSelector.getBody(state)
    }
}

export const OrbitInformationContainer = connect(mapStateToProps, actionCreators)(OrbitInformation);