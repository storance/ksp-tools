import React from 'react';
import { connect } from 'react-redux';

import Form from 'react-bootstrap/Form';

import  { BodyInformationSelector } from '../selectors';
import BodySelect from './forms/BodySelect';
import OrbitDetails from './OrbitDetails';
import BodyDetails from './BodyDetails';
import * as actionCreators from '../action_creators';

export class BodyInformation extends React.PureComponent {
    render() {
        return <>
            <h1>Body Information</h1>
            <p>Displays some useful information about a celestial body and it's orbit.</p>
            <Form>
                <h4>Celestial Body</h4>
                <BodySelect
                    planetpack={this.props.planetpack}
                    body={this.props.body.name}
                    update={this.props.updateBodyInformation} />
                
                <BodyDetails body={this.props.body} calendar={this.props.planetpack.calendar} /> 
                {this.props.body.orbit &&
                    <OrbitDetails orbit={this.props.body.orbit} calendar={this.props.planetpack.calendar} />
                }
            </Form>
            </>;
    }
};

function mapStateToProps(state) {
    return {
        planetpack: BodyInformationSelector.getPlanetPack(state),
        body: BodyInformationSelector.getBody(state),
    }
}

export const BodyInformationContainer = connect(mapStateToProps, actionCreators)(BodyInformation);