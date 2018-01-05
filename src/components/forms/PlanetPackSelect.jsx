import React from 'react';
import SelectField from './SelectField';
import { planetpacks } from '../../planetpacks';

export default class PlanetPackSelect extends React.PureComponent {
    render() {
        return <SelectField name={"planetpack"}
                            label={"Planet Pack"}
                            value={this.props.planetpack}
                            update={this.props.updatePlanetPack}
                            options={this.getOptions()} />;
    }

    getOptions() {
        return planetpacks.map(planetpack => {
            return {
                value: planetpack.name,
                label: planetpack.name
            };
        });
    }
};