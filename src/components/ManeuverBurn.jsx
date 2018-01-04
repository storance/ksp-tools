import React from 'react';
import NumberFormat from './format/NumberFormat';
import { PERIAPSIS, PROGRADE } from '../maneuver.js';

export default class ManeuverBurn extends React.PureComponent {
    render() {
        return <div className="form-group">
            <label className="col-sm-3 control-label">Burn {this.directionLabel()} at {this.burnLabel()}</label>
            <div className="col-sm-3">
                <p className="form-control-static"><NumberFormat value={this.props.burn.deltav} fractionDigits={3} suffix={' m/s'} /></p>
            </div>
        </div>
    }

    burnLabel() {
        return this.props.burn.location === PERIAPSIS ? 'Periapsis' : 'Apoapsis';
    }

    directionLabel() {
        return this.props.burn.direction === PROGRADE ? 'Prograde' : 'Retrograde';
    }
}