import React from 'react';
import { Map } from 'immutable';

import TextWithUnitsField from './TextWithUnitsField';
import { POWER_UNITS } from '../../utils';

const UNITS = POWER_UNITS.filter(unit => unit.get('scale') > 1).map(unit => unit.get('suffix'));

export default class AntennaPowerField extends React.PureComponent {
    render() {
        return <TextWithUnitsField units={UNITS} {...this.props} />;
    }
};