import React from 'react';
import { connect } from 'react-redux';
import PlanetPackSelect from './PlanetPackSelect';
import RescaleSelect from './RescaleSelect';
import BodySelect from './BodySelect';
import * as actionCreators from '../../action_creators';

export class OrbitingBodySelect extends React.PureComponent {
    render() {
        return <fieldset>
            <legend>Orbiting Body</legend>
            <PlanetPackSelect {...this.props} />
            <RescaleSelect {...this.props} />
            <BodySelect {...this.props} />
        </fieldset>;
    }
};

function mapStateToProps(state) {
    return {
        planetpack : state.getIn(['celestialBody', 'planetpack']),
        rescale : state.getIn(['celestialBody', 'rescale']),
        body : state.getIn(['celestialBody', 'body']),
        selectedPlanetPack : state.getIn(['celestialBody', 'selectedPlanetPack']),
    }
}

export const OrbitingBodySelectContainer = connect(mapStateToProps, actionCreators)(OrbitingBodySelect);