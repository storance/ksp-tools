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
           	</>
    }
}

function mapStateToProps(state) {
    return {
        
    }
}

export const ConstellationMinOrbitContainer = connect(mapStateToProps, actionCreators)(ConstellationMinOrbit);