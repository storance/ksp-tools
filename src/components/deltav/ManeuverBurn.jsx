import React from 'react';

import NumberFormat from '../format/NumberFormat';
import DefinitionList from '../DefinitionList';
import { PERIAPSIS, PROGRADE } from '../../utils';

export default class ManeuverBurn extends React.PureComponent {
    render() {
        return <DefinitionList.Item label={this.label()}>
                <NumberFormat value={this.props.burn.deltav} fractionDigits={3} suffix=" m/s" />
            </DefinitionList.Item>
    }

    label() {
        return "Burn " + this.directionLabel() + " at " + this.burnLabel();
    }

    burnLabel() {
        return this.props.burn.location === PERIAPSIS ? 'Periapsis' : 'Apoapsis';
    }

    directionLabel() {
        return this.props.burn.direction === PROGRADE ? 'Prograde' : 'Retrograde';
    }
}