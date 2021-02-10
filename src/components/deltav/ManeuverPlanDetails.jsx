import React from 'react';
import DefinitionList from '../DefinitionList';
import NumberFormat from '../format/NumberFormat';
import { PERIAPSIS, PROGRADE } from '../../utils';

export default class ManeuverPlanDetails extends React.PureComponent {
    render() {
        return <>
        		<h3>Maneuver Plan</h3>
                <hr />
        		<DefinitionList>
                	{this.props.maneuverPlan.burns.map(this.renderManeuverBurn)}
                	<DefinitionList.Item label="Total &Delta;v">
                		<NumberFormat value={this.props.maneuverPlan.totalDeltaV} fractionDigits={2} suffix=" m/s" />
                	</DefinitionList.Item>
                </DefinitionList>
            </>;
    }

    renderManeuverBurn(burn, index) {
        const directionLabel = burn.direction === PROGRADE ? 'Prograde' : 'Retrograde';
        const locationLabel = burn.location === PERIAPSIS ? 'Periapsis' : 'Apoapsis';
        const label = "Burn " + directionLabel + " at " + locationLabel;

        return <DefinitionList.Item label={label}>
                <NumberFormat value={burn.deltav} fractionDigits={2} suffix=" m/s" />
            </DefinitionList.Item>
    }
}