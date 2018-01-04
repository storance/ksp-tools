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
                <BodyDetails body={this.props.body} calendar={this.props.planetpack.calendar} /> 
                {this.props.body.orbit &&
                    <OrbitDetails orbit={this.props.body.orbit} calendar={this.props.planetpack.calendar} />
                }
            </form>
        </div>;
    }
};

function mapStateToProps(state) {
    return {
        planetpack: state.getIn(['celestialBody', 'selectedPlanetPack']),
        body: state.getIn(['celestialBody', 'selectedBody']),
    }
}

export const BodyInformationContainer = connect(mapStateToProps)(BodyInformation);