import React from 'react';
import { formatDuration } from '../../utils';

export default class DurationFormat extends React.PureComponent {
    render() {
        return <span>{formatDuration(this.props.value, this.props.calendar, this.props.includeRaw)}</span>
    }
}