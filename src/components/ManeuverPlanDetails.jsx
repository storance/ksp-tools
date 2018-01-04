import React from 'react';
import ManeuverBurn from './ManeuverBurn';
import StaticTextField from './forms/StaticTextField';
import NumberFormat from './format/NumberFormat';

export default class ManeuverPlanDetails extends React.PureComponent {
    render() {
        return <fieldset>
                <legend>Maneuver Plan</legend>
                {this.props.maneuverPlan.burns.map((burn, i) => <ManeuverBurn key={i} burn={burn} index={i+1} />)}
                <StaticTextField label={"Total DeltaV"}>
                    <NumberFormat value={this.props.maneuverPlan.totalDeltaV} fractionDigits={3} suffix={' m/s'} />
                </StaticTextField>
            </fieldset>;
    }
}