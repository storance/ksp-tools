import React from 'react';
import ManeuverBurn from './ManeuverBurn';
import NumberFormat from './format/NumberFormat';

export default class ManeuverPlanDetails extends React.PureComponent {
    render() {
        return <fieldset>
                <legend>Maneuver Plan</legend>
                    {this.props.maneuverPlan.burns.map((burn, i) => <ManeuverBurn key={i} burn={burn} index={i+1} />)}
                    <div className="form-group">
                        <label className="col-sm-3 control-label">Total DeltaV</label>
                        <div className="col-sm-3">
                            <p className="form-control-static"><NumberFormat value={this.props.maneuverPlan.totalDeltaV} fractionDigits={3} suffix={' m/s'} /></p>
                        </div>
                    </div>
                </fieldset>
    }
}