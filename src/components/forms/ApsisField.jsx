import React from 'react';
import { Map } from 'immutable';

import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TextWithUnitsField from './TextWithUnitsField';
import { DISTANCE_UNITS } from '../../utils';

const UNITS = DISTANCE_UNITS.map(unit => unit.get('suffix'));

export default class ApsisField extends React.PureComponent {
    render() {
        return <TextWithUnitsField units={UNITS} {...this.props} />;
    }
};