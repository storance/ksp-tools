import React from 'react';
import { connect } from 'react-redux';

import Form from 'react-bootstrap/Form';

import  { TransferWindowSelector } from '../../selectors';

import * as actionCreators from '../../action_creators';

export class TransferWindow extends React.PureComponent {
    render() {
    	return <>
            <h1>TransferWindow</h1>
            <p>Under construction...</p>
           	</>
    }
}

function mapStateToProps(state) {
    return {
        
    }
}

export const TransferWindowContainer = connect(mapStateToProps, actionCreators)(TransferWindow);