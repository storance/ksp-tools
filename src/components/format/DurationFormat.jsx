import React from 'react';

export default class DurationFormat extends React.PureComponent {
    render() {
        return <span>{this.formattedValue()}</span>
    }

    formattedValue() {
        const calendar = this.props.calendar;
        const value = this.props.value;

        let formmatedDuration = calendar.formatDuration(value);

        if (this.props.includeRaw) {
            formmatedDuration = formmatedDuration + ' (' + value.toFixed(3) + ' s)';
        }

        return formmatedDuration;
    }
}