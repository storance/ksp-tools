import React from 'react';
import { connect } from 'react-redux';

import Form from 'react-bootstrap/Form';

import  { AntennaRangeSelector } from '../../selectors';

import * as actionCreators from '../../action_creators';

export class AntennaRange extends React.PureComponent {
    render() {
    	return <>
            <h1>Antenna Helper</h1>
            <p>Helper to calculate the maximum CommNet range of your vessel.  Under construction...</p>
           	</>
    }
}

function mapStateToProps(state) {
    return {
        
    }
}

export const AntennaRangeContainer = connect(mapStateToProps, actionCreators)(AntennaRange);