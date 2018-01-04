import React from 'react';
import SelectField from './SelectField';
import { rescales } from '../../rescale.js';

export default class RescaleSelect extends React.PureComponent {
    render() {
        return <SelectField name={"rescale"}
                            label={"Rescale"}
                            value={this.props.rescale}
                            update={this.props.updateRescale}
                            options={this.getOptions()} />;
    }

    getOptions() {
        return rescales.map(rescale => {
            return {
                value: rescale.name,
                label: rescale.name
            };
        });
    }
};