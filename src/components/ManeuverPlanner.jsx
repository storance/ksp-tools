import React from 'react';
import { connect } from 'react-redux';
import { OrbitingBodySelectContainer } from './forms/OrbitingBodySelect';
import ApsisField from './forms/ApsisField';
import ButtonField from './forms/ButtonField';
import ManeuverPlanDetails from './ManeuverPlanDetails';
import * as actionCreators from '../action_creators';

export class ManeuverPlanner extends React.PureComponent {
    render() {
        return <div className="container">
            <h1>Maneuver Planner</h1>
            <p>Calculates the delta-v required to perform a Hohmann transfer from the current orbit to the desired
            orbit.  This will also break down the delta-v for the individual burns and where they should occur.</p>
            <form className="form-horizontal">
                <OrbitingBodySelectContainer />
                <fieldset>
                    <legend>Current Orbit</legend>
                    <ApsisField label="Apoapsis"
                        name="currentApoapsis"
                        value={this.props.currentApoapsis}
                        unitsValue={this.props.currentApoapsisUnits}
                        error={this.props.errors.currentApoapsis}
                        update={newValue => this.props.updateManeuverPlanner('currentApoapsis', newValue)}
                        updateUnits={newValue => this.props.updateManeuverPlanner('currentApoapsisUnits', newValue)} />
                    <ApsisField label="Periapsis"
                        name="currentPeriapsis"
                        value={this.props.currentPeriapsis}
                        unitsValue={this.props.currentPeriapsisUnits}
                        error={this.props.errors.currentPeriapsis}
                        update={newValue => this.props.updateManeuverPlanner('currentPeriapsis', newValue)}
                        updateUnits={newValue => this.props.updateManeuverPlanner('currentPeriapsisUnits', newValue)} />
                </fieldset>
                <fieldset>
                    <legend>Desired Orbit</legend>
                    <ApsisField label="Apoapsis"
                        name="desiredApoapsis"
                        value={this.props.desiredApoapsis}
                        unitsValue={this.props.desiredApoapsisUnits}
                        error={this.props.errors.desiredApoapsis}
                        update={newValue => this.props.updateManeuverPlanner('desiredApoapsis', newValue)}
                        updateUnits={newValue => this.props.updateManeuverPlanner('desiredApoapsisUnits', newValue)} />
                    <ApsisField label="Periapsis"
                        name="desiredPeriapsis"
                        value={this.props.desiredPeriapsis}
                        unitsValue={this.props.desiredPeriapsisUnits}
                        error={this.props.errors.desiredPeriapsis}
                        update={newValue => this.props.updateManeuverPlanner('desiredPeriapsis', newValue)}
                        updateUnits={newValue => this.props.updateManeuverPlanner('desiredPeriapsisUnits', newValue)} />

                    <ButtonField label={"Calculate"}
                                 onClick={() => this.props.calculateManeuverPlan(this.props.body)} />
                </fieldset>
                {this.props.maneuverPlan && <ManeuverPlanDetails maneuverPlan={this.props.maneuverPlan} />}
            </form>
        </div>;
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
        errors : state.getIn(['maneuverPlanner', 'errors']),
        body: state.getIn(['celestialBody', 'selectedBody'])
    }
}

export const ManeuverPlannerContainer = connect(mapStateToProps, actionCreators)(ManeuverPlanner);