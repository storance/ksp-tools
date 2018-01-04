import React from 'react';
import SelectField from './SelectField';
import { planetpacks } from '../../planetpack.js';

export default class BodySelect extends React.PureComponent {
    render() {
        return <SelectField name={"body"}
                            label={"Celestial Body"}
                            value={this.props.body}
                            update={this.props.updateBody}
                            options={this.getOptions()} />;
    }

    getOptions() {
        return this.appendOptions([], this.props.selectedPlanetPack.sun);
    }

    appendOptions(options, body, indent=0) {
        options.push({
            value: body.name,
            label: this.buildIndent(indent) + body.name
        });

        body.satellites.forEach(satellite => this.appendOptions(options, satellite, indent + 2));
        return options;
    }

    buildIndent(indent) {
        let indentSpaces = '';
        for (let i = 0; i < indent; i++) {
            indentSpaces = indentSpaces.concat('\u00A0');
        }

        return indentSpaces;
    }
};