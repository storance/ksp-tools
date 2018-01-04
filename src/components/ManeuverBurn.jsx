import React from 'react';
import StaticTextField from './forms/StaticTextField';
import NumberFormat from './format/NumberFormat';
import { PERIAPSIS, PROGRADE } from '../maneuver.js';

export default class ManeuverBurn extends React.PureComponent {
    render() {
        return <StaticTextField label={this.label()}>
                <NumberFormat value={this.props.burn.deltav} fractionDigits={3} suffix={' m/s'} />
            </StaticTextField>
    }

    label() {
        return "Burn" + this.directionLabel() + " at " + this.burnLabel();
    }

    burnLabel() {
        return this.props.burn.location === PERIAPSIS ? 'Periapsis' : 'Apoapsis';
    }

    directionLabel() {
        return this.props.burn.direction === PROGRADE ? 'Prograde' : 'Retrograde';
    }
}