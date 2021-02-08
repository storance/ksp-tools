import React from 'react';
import { connect } from 'react-redux';

import Form from 'react-bootstrap/Form';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';

import  { ManeuverPlannerSelector } from '../../selectors';
import ApsisField from '../forms/ApsisField';
import BodySelect from '../forms/BodySelect';
import ButtonField from '../forms/ButtonField';
import ManeuverPlanDetails from './ManeuverPlanDetails';
import * as actionCreators from '../../action_creators';

export class ManeuverPlanner extends React.PureComponent {
    render() {
        return <>
            <h1>Maneuver Planner</h1>
            <p>Calculates the delta-v required to perform a Hohmann transfer from the current orbit to the desired
            orbit.  This will also break down the delta-v for the individual burns and where they should occur.</p>
            <Form>
                <BodySelect
                    planetpack={this.props.planetpack}
                    body={this.props.body.name}
                    update={this.props.updateManeuverDeltaV} />

                <h4>Current Orbit</h4>
                <ApsisField label="Apoapsis"
                    name="currentApoapsis"
                    field={this.props.currentApoapsis}
                    update={this.props.updateManeuverDeltaV} />
                <ApsisField label="Periapsis"
                    name="currentPeriapsis"
                    field={this.props.currentPeriapsis}
                    update={this.props.updateManeuverDeltaV} />

                <h4>Desired Orbit</h4>
                <ApsisField label="Apoapsis"
                    name="desiredApoapsis"
                    field={this.props.desiredApoapsis}
                    update={this.props.updateManeuverDeltaV} />
                <ApsisField label="Periapsis"
                    name="desiredPeriapsis"
                    field={this.props.desiredPeriapsis}
                    update={this.props.updateManeuverDeltaV} />

                <ButtonField label="Calculate" icon={faCalculator} onClick={this.props.calculateManeuverDeltaV} />
                {this.props.maneuverPlan && <ManeuverPlanDetails maneuverPlan={this.props.maneuverPlan} />}
            </Form>
        </>;
    }
}

function mapStateToProps(state) {
    return {
        currentApoapsis: ManeuverPlannerSelector.getCurrentApoapsis(state),
        currentPeriapsis: ManeuverPlannerSelector.getCurrentPeriapsis(state),
        desiredApoapsis: ManeuverPlannerSelector.getDesiredApoapsis(state),
        desiredPeriapsis: ManeuverPlannerSelector.getDesiredPeriapsis(state),
        maneuverPlan : ManeuverPlannerSelector.getManeuverPlan(state),
        planetpack : ManeuverPlannerSelector.getPlanetPack(state),
        body: ManeuverPlannerSelector.getBody(state)
    }
}

export const ManeuverPlannerContainer = connect(mapStateToProps, actionCreators)(ManeuverPlanner);