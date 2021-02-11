import React from 'react';
import SelectField from './SelectField';

export default class BodySelect extends React.PureComponent {
    render() {
        let name = this.props.name || "body";
        
        return <SelectField name={name}
                            label="Body"
                            searchable
                            customFilter={this.customFilter}
                            value={this.props.body}
                            update={this.props.update}
                            options={this.getOptions()} />;
    }

    getOptions() {
        return this.appendOptions([], this.props.planetpack.sun);
    }

    customFilter(candidate, input) {
        const inputNormalized = input.toLowerCase();
        const bodyName = candidate.data.name;
        const parentBodyName = candidate.data.parentBody || '';

        return bodyName.startsWith(inputNormalized) || parentBodyName.startsWith(inputNormalized);
    }

    appendOptions(options, body, indent=0) {
        options.push({
            value: body.name,
            label: this.buildIndent(indent) + body.name,
            name: body.name.toLowerCase(),
            parentBody: body.orbit ? body.orbit.parentBody.name.toLowerCase() : null
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