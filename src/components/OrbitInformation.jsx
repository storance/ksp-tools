import React from 'react';
import { connect } from 'react-redux';
import { OrbitingBodySelectContainer } from './forms/OrbitingBodySelect';
import ApsisField from './forms/ApsisField';
import OrbitDetails from './OrbitDetails';
import * as actionCreators from '../action_creators';

export class OrbitInformation extends React.PureComponent {
    render() {
        return <div className="container">
            <form className="form-horizontal">
                <OrbitingBodySelectContainer />
                <fieldset>
                    <legend>Orbit Parameters</legend>
                    <ApsisField label="Apoapsis" name="apoapsis" value={this.props.apoapsis}
                        unitsValue={this.props.apoapsisUnits}
                        updateField={newValue => this.props.updateOrbitInformation('apoapsis', newValue)}
                        updateUnits={newValue => this.props.updateOrbitInformation('apoapsisUnits', newValue)} />
                    <ApsisField label="Periapsis" name="periapsis" value={this.props.periapsis}
                        unitsValue={this.props.periapsisUnits}
                        updateField={newValue => this.props.updateOrbitInformation('periapsis', newValue)}
                        updateUnits={newValue => this.props.updateOrbitInformation('periapsisUnits', newValue)} />

                    <div className="col-sm-offset-3">
                        <button type="submit" className="btn btn-default" onClick={e => {this.calculate(e)}}>Calculate</button>
                    </div>
                </fieldset>
                {this.props.orbit ? <OrbitDetails orbit={this.props.orbit} calendar={this.props.planetpack.calendar} /> : null}
            </form>
        </div>;
    }

    calculate(event) {
        event.preventDefault();
        this.props.calculateOrbitInformation(this.props.body);
    }
};

function mapStateToProps(state) {
    return {
        apoapsis: state.getIn(['orbitInformation', 'apoapsis']),
        apoapsisUnits: state.getIn(['orbitInformation', 'apoapsisUnits']),
        periapsis: state.getIn(['orbitInformation', 'periapsis']),
        periapsisUnits: state.getIn(['orbitInformation', 'periapsisUnits']),
        orbit: state.getIn(['orbitInformation', 'orbit']),
        planetpack: state.getIn(['celestialBody', 'selectedPlanetPack']),
        body: state.getIn(['celestialBody', 'selectedBody'])
    }
}

export const OrbitInformationContainer = connect(mapStateToProps, actionCreators)(OrbitInformation);