import React from 'react';
import SelectField from './SelectField';

export default class RescaleSelect extends React.PureComponent {
    render() {
        return <SelectField name={"rescale"}
                            label={"Rescale"}
                            value={this.props.rescale}
                            update={this.props.updateRescale}
                            options={this.getOptions()} />;
    }

    getOptions() {
        return this.props.selectedPlanetPack.rescales.map(rescale => {
            return {
                value: rescale.name,
                label: rescale.name
            };
        });
    }
};