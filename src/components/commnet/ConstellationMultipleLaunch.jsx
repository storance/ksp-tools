import React from 'react';
import { connect } from 'react-redux';

import Form from 'react-bootstrap/Form';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';

import  { ConstellationMultipleLaunchSelector } from '../../selectors';

import ApsisField from '../forms/ApsisField';
import BodySelect from '../forms/BodySelect';
import ButtonField from '../forms/ButtonField';
import DefinitionList from '../DefinitionList';
import TextField from '../forms/TextField';
import NumberFormat from '../format/NumberFormat';
import * as actionCreators from '../../action_creators';
import { DISTANCE_UNITS_DISPLAY } from '../../utils';

export class ConstellationMultipleLaunch extends React.PureComponent {
    render() {
        return <>
            <h1>Conestellation: Multiple Launch</h1>
            <p>Calculates the separtion between satellites to use to evenly space them out when using separate launches.
            First, launch your first satellite in the desired orbit.  For each subsequent satellite, enter a
            parking orbit and use a maneuver node to place your apoapsis along the previously launched
            satellite's orbit.  Tweak the position of the maneuver node such that the separtion at apoapsis
            between the two satellites is close to the calculated one.</p>

            <p>See the <a href="https://remotetechnologiesgroup.github.io/RemoteTech/tutorials/keo/#method-1-separate-launches">Remote Tech: Creating a Keosynchronous Satellite Network</a> tutorial for more details.</p>
            <Form>
                <h4>Desired Orbit</h4>
                
                <BodySelect
                    planetpack={this.props.planetpack}
                    body={this.props.body.name}
                    update={this.props.updateConstellationMultipleLaunch} />

                <ApsisField
                    label="Apoapsis"
                    name="apoapsis"
                    field={this.props.apoapsis}
                    update={this.props.updateConstellationMultipleLaunch} />

                <ApsisField
                    label="Periapsis"
                    name="periapsis"
                    field={this.props.periapsis}
                    update={this.props.updateConstellationMultipleLaunch} />

                <h4>Satellites</h4>

                <TextField
                    label="# of Satellites"
                    type="number"
                    name="satelliteCount"
                    field={this.props.satelliteCount}
                    update={this.props.updateConstellationMultipleLaunch} />

                <ButtonField label="Calculate" icon={faCalculator} onClick={this.props.calculateConstellationMultipleLaunch} />
            </Form>
            {this.props.separation &&
                <>
                    <h4>Satellite Separation</h4>
                    <DefinitionList>
                        <DefinitionList.Item label="Separation">
                            <NumberFormat
                                value={this.props.separation}
                                fractionDigits={3}
                                units={DISTANCE_UNITS_DISPLAY} />
                        </DefinitionList.Item>
                    </DefinitionList>
                </>
            }
        </>;
    }
}

function mapStateToProps(state) {
    return {
        apoapsis: ConstellationMultipleLaunchSelector.getApoapsis(state),
        periapsis: ConstellationMultipleLaunchSelector.getPeriapsis(state),
        satelliteCount: ConstellationMultipleLaunchSelector.getSatelliteCount(state),
        separation: ConstellationMultipleLaunchSelector.getSeparation(state),
        planetpack: ConstellationMultipleLaunchSelector.getPlanetPack(state),
        body: ConstellationMultipleLaunchSelector.getBody(state)
    }
}

export const ConstellationMultipleLaunchContainer = connect(mapStateToProps, actionCreators)(ConstellationMultipleLaunch);
