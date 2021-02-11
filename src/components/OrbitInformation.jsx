import React from 'react';
import { connect } from 'react-redux';

import Form from 'react-bootstrap/Form';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';

import { OrbitInformationSelector } from '../selectors'
import ApsisField from './forms/ApsisField';
import BodySelect from './forms/BodySelect';
import ButtonField from './forms/ButtonField';
import TextField from './forms/TextField';
import SelectField from './forms/SelectField';
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
            <p>Calculates details about the orbit given two of periapsis, apoapsis, period, semi-major axis and 
            eccentricity.   This will show details such as the semi-major axis, orbital period, eccentricity,
            and velocities at apoapsis and periapsis. </p>
            <p><strong>Note:</strong> Semi-major axis and period can not be the two orbital elements. </p>
            <Form>
                <h3>Orbit Parameters</h3>
                <hr />
                <BodySelect
                    planetpack={this.props.planetpack}
                    body={this.props.body.name}
                    update={this.props.updateOrbitInformation} />

                <SelectField label="First Orbital Element"
                    name="firstElement"
                    value={this.props.firstElement}
                    update={this.props.updateOrbitInformation}
                    options={this.getOrbitalElements(true)} />

                <SelectField label="Second Orbital Element"
                    name="secondElement"
                    value={this.props.secondElement}
                    update={this.props.updateOrbitInformation}
                    options={this.getOrbitalElements(false)} />

                {this.hasSemiMajorAxis() &&
                    <ApsisField label="Semi-Major Axis"
                        name="semiMajorAxis"
                        field={this.props.semiMajorAxis}
                        update={this.props.updateOrbitInformation} />
                }

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

                {this.hasEccentricity() &&
                    <TextField label="Eccentricity"
                               type="number"
                               name="eccentricity"
                               field={this.props.eccentricity}
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

                <ButtonField
                    label={"Calculate"}
                    icon={faCalculator}
                    onClick={() => this.props.calculateOrbitInformation()} />
                {this.props.orbit &&
                    <OrbitDetails orbit={this.props.orbit} calendar={this.props.planetpack.calendar} />
                }
            </Form>
        </>;
    }

    getOrbitalElements(first) {
        const selectedElement = first ?  this.props.firstElement : this.props.secondElement;
        const otherElement = first ? this.props.secondElement : this.props.firstElement;

        return [
             {
                value: 'semimajoraxis',
                label: 'Semi-Major Axis',
                disabled: otherElement === 'semimajoraxis' || otherElement == 'period'
            },
            {
                value: 'apoapsis',
                label: 'Apoapsis',
                disabled: otherElement === 'apoapsis'
            },
            {
                value: 'periapsis',
                label: 'Periapsis',
                disabled: otherElement === 'periapsis'
            },
            {
                value: 'period',
                label: 'Period',
                disabled: otherElement === 'semimajoraxis' || otherElement == 'period'
            },
            {
                value: 'eccentricity',
                label: 'Eccentricity',
                disabled: otherElement === 'eccentricity'
            }
        ].filter(option => !option.disabled);
    }

    hasPeriapsis() {
        return this.props.firstElement === 'periapsis' || this.props.secondElement === 'periapsis';
    }

    hasApoapsis() {
        return this.props.firstElement === 'apoapsis' || this.props.secondElement === 'apoapsis';
    }

    hasPeriod() {
        return this.props.firstElement === 'period' || this.props.secondElement === 'period';
    }

    hasEccentricity() {
        return this.props.firstElement === 'eccentricity' || this.props.secondElement === 'eccentricity';
    }

    hasSemiMajorAxis() {
        return this.props.firstElement === 'semimajoraxis' || this.props.secondElement === 'semimajoraxis';
    }
};

function mapStateToProps(state) {
    return {
        apoapsis: OrbitInformationSelector.getApoapsis(state),
        periapsis: OrbitInformationSelector.getPeriapsis(state),
        period: OrbitInformationSelector.getPeriod(state),
        semiMajorAxis: OrbitInformationSelector.getSemiMajorAxis(state),
        eccentricity: OrbitInformationSelector.getEccentricity(state),
        firstElement: OrbitInformationSelector.getFirstElement(state),
        secondElement: OrbitInformationSelector.getSecondElement(state),
        orbit: OrbitInformationSelector.getOrbit(state),
        planetpack: OrbitInformationSelector.getPlanetPack(state),
        body: OrbitInformationSelector.getBody(state)
    }
}

export const OrbitInformationContainer = connect(mapStateToProps, actionCreators)(OrbitInformation);