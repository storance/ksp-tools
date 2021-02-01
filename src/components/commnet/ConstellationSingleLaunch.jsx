import React from 'react';
import { connect } from 'react-redux';

import Form from 'react-bootstrap/Form';

import  { ConstellationSingleLaunchSelector } from '../../selectors';

import ApsisField from '../forms/ApsisField';
import BodySelect from '../forms/BodySelect';
import ButtonField from '../forms/ButtonField';
import DefinitionList from '../DefinitionList';
import TextField from '../forms/TextField';
import DurationFormat from '../format/DurationFormat';
import NumberFormat from '../format/NumberFormat';
import * as actionCreators from '../../action_creators';

import { DISTANCE_UNITS } from '../../utils';

export class ConstellationSingleLaunch extends React.PureComponent {
    render() {
        return <>
            <h1>Conestellation: Single Launch</h1>
            <p>Calculates the transfer orbit to use to evenly space out the specified number of satellites 
            in a constellation at the desired orbit. After putting your spacecraft in the transfer orbit, release 
            one satellite per orbit, then have that satellite circularize.</p>
            <Form>
                <h4>Desired Orbit</h4>
                
                <BodySelect
                    planetpack={this.props.planetpack}
                    body={this.props.body.name}
                    update={this.props.updateConstellationSingleLaunch} />

                <ApsisField
                    label="Apoapsis"
                    name="apoapsis"
                    field={this.props.apoapsis}
                    update={this.props.updateConstellationSingleLaunch} />

                <ApsisField
                    label="Periapsis"
                    name="periapsis"
                    field={this.props.periapsis}
                    update={this.props.updateConstellationSingleLaunch} />

                <h4>Satellites</h4>

                <TextField
                    label="# of Satellites"
                    type="number"
                    name="satelliteCount"
                    field={this.props.satelliteCount}
                    update={this.props.updateConstellationSingleLaunch} />

                <ButtonField label="Calculate" onClick={this.props.calculateConstellationSingleLaunch} />
            </Form>
            {this.props.transferOrbits  && 
                    this.props.transferOrbits.map(to => this.renderTransferOrbit(to, this.props.planetpack))}
        </>;
    }

    renderTransferOrbit(transferOrbit, planetpack) {
        if (!transferOrbit.isPossible) {
            return <>
                <h4>Transfer Orbit: {transferOrbit.type}</h4>
                <p>Not Possible</p>
            </>
        }

        return <>
                <h4>Transfer Orbit: {transferOrbit.type}</h4>
                <DefinitionList>
                    <DefinitionList.Item label="Apoapsis">
                        <NumberFormat value={transferOrbit.orbit.apoapsis} fractionDigits={3} units={DISTANCE_UNITS} />
                    </DefinitionList.Item>
                    <DefinitionList.Item label="Periapsis">
                        <NumberFormat value={transferOrbit.orbit.periapsis} fractionDigits={3} units={DISTANCE_UNITS} />
                    </DefinitionList.Item>
                    <DefinitionList.Item label="Orbital Period">
                        <DurationFormat value={transferOrbit.orbit.period} calendar={planetpack.calendar} includeRaw />
                    </DefinitionList.Item>
                    <DefinitionList.Item label="Insertion &Delta;v">
                        <NumberFormat value={transferOrbit.deltaV} fractionDigits={3} suffix=" m/s" />
                    </DefinitionList.Item>
                </DefinitionList>
            </>;
    }
}

function mapStateToProps(state) {
    return {
        apoapsis: ConstellationSingleLaunchSelector.getApoapsis(state),
        periapsis: ConstellationSingleLaunchSelector.getPeriapsis(state),
        satelliteCount: ConstellationSingleLaunchSelector.getSatelliteCount(state),
        transferOrbits: ConstellationSingleLaunchSelector.getTransferOrbits(state),
        planetpack: ConstellationSingleLaunchSelector.getPlanetPack(state),
        body: ConstellationSingleLaunchSelector.getBody(state)
    }
}

export const ConstellationSingleLaunchContainer = connect(mapStateToProps, actionCreators)(ConstellationSingleLaunch);
