import React from 'react';
import { connect } from 'react-redux';
import { OrbitingBodySelectContainer } from './forms/OrbitingBodySelect';
import ApsisField from './forms/ApsisField';
import TextField from './forms/TextField';
import StaticTextField from './forms/StaticTextField';
import ButtonField from './forms/ButtonField';
import DurationFormat from './format/DurationFormat';
import NumberFormat from './format/NumberFormat';
import * as actionCreators from '../action_creators';

export class DeltaVMap extends React.PureComponent {
    render() {
        return <div className="container">
            <h1>Delta-V Map</h1>
            <p>Calculates the amount of delta-v required to get into orbit or land from orbit for an atmosphere-less body.</p>
            <form className="form-horizontal">
                <OrbitingBodySelectContainer />
                <fieldset>
                    <legend>Delta-V Ascent/Descent</legend>
                    <ApsisField label="Altitude"
                        name="altitude"
                        value={this.props.altitude}
                        unitsValue={this.props.altitudeUnits}
                        error={this.props.errors.altitude}
                        update={newValue => this.props.updateDeltavMap('altitude', newValue)}
                        updateUnits={newValue => this.props.updateDeltavMap('altitudeUnits', newValue)} />

                    <ButtonField label={"Calculate"}
                                 onClick={() => this.props.calculateAscentDeltav(this.props.body)} />

                    {this.props.ascentDeltav  &&
                        <StaticTextField label={"Delta-V"}>
                            <NumberFormat value={this.props.ascentDeltav} fractionDigits={1} suffix={'m/s'} />
                        </StaticTextField>
                    }
                </fieldset>
            </form>
        </div>;
    }
}

function mapStateToProps(state) {
    return {
        altitude: state.getIn(['deltavMap', 'altitude']),
        altitudeUnits: state.getIn(['deltavMap', 'altitudeUnits']),
        ascentDeltav: state.getIn(['deltavMap', 'ascentDeltav']),
        errors: state.getIn(['darknessTime', 'errors']),
        planetpack: state.getIn(['celestialBody', 'selectedPlanetPack']),
        body: state.getIn(['celestialBody', 'selectedBody'])
    }
}

export const DeltaVMapContainer = connect(mapStateToProps, actionCreators)(DeltaVMap);