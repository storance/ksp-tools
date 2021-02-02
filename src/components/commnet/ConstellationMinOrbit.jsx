import React from 'react';
import { connect } from 'react-redux';

import Form from 'react-bootstrap/Form';

import  { ConstellationMinOrbitSelector } from '../../selectors';

import BodySelect from '../forms/BodySelect';
import ButtonField from '../forms/ButtonField';
import DefinitionList from '../DefinitionList';
import TextField from '../forms/TextField';
import NumberFormat from '../format/NumberFormat';
import * as actionCreators from '../../action_creators';
import { DISTANCE_UNITS } from '../../utils';

export class ConstellationMinOrbit extends React.PureComponent {
    render() {
        return <>
            <h1>Constellation: Min Orbit</h1>
            <p>Helper to calculate the minimum orbit for a satellite constellation to ensure the satellites can 
            maintain line of sight with it's neighbors.  Under construction...</p>

            <Form>
                <h4>KSP Settings</h4>

                <TextField
                    label="Atmosphere Occlusion"
                    type="number"
                    name="atmOcclusion"
                    field={this.props.atmOcclusion}
                    update={this.props.updateConstellationMinOrbit} />

                <TextField
                    label="Vaccum Occlusion"
                    type="number"
                    name="vacOcclusion"
                    field={this.props.vacOcclusion}
                    update={this.props.updateConstellationMinOrbit} />

                <h4>Satellites</h4>

                <BodySelect
                    planetpack={this.props.planetpack}
                    body={this.props.body.name}
                    update={this.props.updateConstellationMinOrbit} />

                <TextField
                    label="# of Satellites"
                    type="number"
                    name="satelliteCount"
                    field={this.props.satelliteCount}
                    update={this.props.updateConstellationMinOrbit} />

                <ButtonField label="Calculate" onClick={this.props.calculateConstellationMinOrbit} />
            </Form>
            {this.props.minOrbit &&
                <>
                    <h4>Minimum Orbit</h4>
                    <DefinitionList>
                        <DefinitionList.Item label="Altitude">
                            <NumberFormat value={this.props.minOrbit} fractionDigits={3} units={DISTANCE_UNITS} />
                        </DefinitionList.Item>
                    </DefinitionList>
                </>
            }
            </>
    }
}

function mapStateToProps(state) {
    return {
        'atmOcclusion': ConstellationMinOrbitSelector.getAtmOcclusion(state),
        'vacOcclusion': ConstellationMinOrbitSelector.getVacOcclusion(state),
        'satelliteCount': ConstellationMinOrbitSelector.getSatelliteCount(state),
        'minOrbit': ConstellationMinOrbitSelector.getMinOrbit(state),
        'planetpack' : ConstellationMinOrbitSelector.getPlanetPack(state),
        'body' : ConstellationMinOrbitSelector.getBody(state)
    }
}

export const ConstellationMinOrbitContainer = connect(mapStateToProps, actionCreators)(ConstellationMinOrbit);
