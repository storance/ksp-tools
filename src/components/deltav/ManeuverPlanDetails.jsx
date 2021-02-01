import React from 'react';
import ManeuverBurn from './ManeuverBurn';
import DefinitionList from '../DefinitionList';
import NumberFormat from '../format/NumberFormat';

export default class ManeuverPlanDetails extends React.PureComponent {
    render() {
        return <>
        		<h4>Maneuver Plan</h4>
        		<DefinitionList>
                	{this.props.maneuverPlan.burns.map((burn, i) => <ManeuverBurn key={i} burn={burn} index={i+1} />)}
                	<DefinitionList.Item label="Total &Delta;v">
                		<NumberFormat value={this.props.maneuverPlan.totalDeltaV} fractionDigits={3} suffix=" m/s" />
                	</DefinitionList.Item>
                </DefinitionList>
            </>;
    }
}