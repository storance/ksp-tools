import React from 'react';
import { formatNumber } from '../../utils';

export default class NumberFormat extends React.PureComponent {
    render() {
        return <span>{formatNumber(this.props.value, this.props)}</span>
    }
}