import React from 'react';
import { connect } from 'react-redux';
import { OrbitingBodySelectContainer } from './forms/OrbitingBodySelect';
import ApsisField from './forms/ApsisField';
import ManeuverPlanDetails from './ManeuverPlanDetails';
import * as actionCreators from '../action_creators';

export class ManeuverPlanner extends React.PureComponent {
    render() {
        return <div className="container">
            <form className="form-horizontal">
                <OrbitingBodySelectContainer />
                <fieldset>
                    <legend>Current Orbit</legend>
                    <ApsisField label="Apoapsis" name="currentApoapsis" value={this.props.currentApoapsis}
                        unitsValue={this.props.currentApoapsisUnits}
                        updateField={newValue => this.props.updateManeuverPlanner('currentApoapsis', newValue)}
                        updateUnits={newValue => this.props.updateManeuverPlanner('currentApoapsisUnits', newValue)} />
                    <ApsisField label="Periapsis" name="currentPeriapsis" value={this.props.currentPeriapsis}
                        unitsValue={this.props.currentPeriapsisUnits}
                        updateField={newValue => this.props.updateManeuverPlanner('currentPeriapsis', newValue)}
                        updateUnits={newValue => this.props.updateManeuverPlanner('currentPeriapsisUnits', newValue)} />
                </fieldset>
                <fieldset>
                    <legend>Desired Orbit</legend>
                    <ApsisField label="Apoapsis" name="desiredApoapsis" value={this.props.desiredApoapsis}
                        unitsValue={this.props.desiredApoapsisUnits}
                        updateField={newValue => this.props.updateManeuverPlanner('desiredApoapsis', newValue)}
                        updateUnits={newValue => this.props.updateManeuverPlanner('desiredApoapsisUnits', newValue)} />
                    <ApsisField label="Periapsis" name="desiredPeriapsis" value={this.props.desiredPeriapsis}
                        unitsValue={this.props.desiredPeriapsisUnits}
                        updateField={newValue => this.props.updateManeuverPlanner('desiredPeriapsis', newValue)}
                        updateUnits={newValue => this.props.updateManeuverPlanner('desiredPeriapsisUnits', newValue)} />

                    <div className="col-sm-offset-3">
                        <button type="submit" className="btn btn-default" onClick={e => {this.calculate(e)}}>Calculate</button>
                    </div>
                </fieldset>
                {this.props.maneuverPlan ? <ManeuverPlanDetails maneuverPlan={this.props.maneuverPlan} /> : null}
            </form>
        </div>;
    }

    calculate(event) {
        event.preventDefault();
        this.props.calculateManeuverPlan(this.props.body);
    }
}

function mapStateToProps(state) {
    return {
        currentApoapsis: state.getIn(['maneuverPlanner', 'currentApoapsis']),
        currentApoapsisUnits: state.getIn(['maneuverPlanner', 'currentApoapsisUnits']),
        currentPeriapsis: state.getIn(['maneuverPlanner', 'currentPeriapsis']),
        currentPeriapsisUnits: state.getIn(['maneuverPlanner', 'currentPeriapsisUnits']),
        desiredApoapsis: state.getIn(['maneuverPlanner', 'desiredApoapsis']),
        desiredApoapsisUnits: state.getIn(['maneuverPlanner', 'desiredApoapsisUnits']),
        desiredPeriapsis: state.getIn(['maneuverPlanner', 'desiredPeriapsis']),
        desiredPeriapsisUnits: state.getIn(['maneuverPlanner', 'desiredPeriapsisUnits']),
        maneuverPlan : state.getIn(['maneuverPlanner', 'maneuverPlan']),
        body: state.getIn(['celestialBody', 'selectedBody'])
    }
}

export const ManeuverPlannerContainer = connect(mapStateToProps, actionCreators)(ManeuverPlanner);