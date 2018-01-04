import React from 'react';
import { connect } from 'react-redux';
import { OrbitingBodySelectContainer } from './forms/OrbitingBodySelect';
import OrbitDetails from './OrbitDetails';
import BodyDetails from './BodyDetails';

export class BodyInformation extends React.PureComponent {
    render() {
        return <div className="container">
            <form className="form-horizontal">
                <OrbitingBodySelectContainer  />
                <BodyDetails body={this.props.selectedBody} calendar={this.props.selectedPlanetPack.calendar} /> 
                {this.props.selectedBody.orbit ? <OrbitDetails orbit={this.props.selectedBody.orbit} calendar={this.props.selectedPlanetPack.calendar} />  : null}
            </form>
        </div>;
    }
};

function mapStateToProps(state) {
    return {
        selectedPlanetPack: state.getIn(['celestialBody', 'selectedPlanetPack']),
        selectedBody: state.getIn(['celestialBody', 'selectedBody']),
    }
}

export const BodyInformationContainer = connect(mapStateToProps)(BodyInformation);