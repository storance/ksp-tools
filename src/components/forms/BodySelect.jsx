import React from 'react';
import { connect } from 'react-redux';
import { planetpacks } from '../../planetpack.js';
import * as actionCreators from '../../action_creators';

export default class CelestialBody extends React.PureComponent {
    render() {
        const bodies = this.flattenPlanetPack(this.props.selectedPlanetPack.sun)

        return <div className="form-group">
                <label htmlFor="rescale" className="control-label col-sm-3">Celestial Body</label>
                <div className="col-sm-3">
                    <select id="rescale" className="form-control" value={this.props.body}
                        onChange={event => this.props.updateBody(event.target.value)}>
                        {bodies.map(body => this.renderOption(body[0], body[1]))}
                    </select>
                </div>
            </div>;
    }

    flattenPlanetPack(body, indent=0, bodies=[]) {
        bodies.push([indent, body.name]);
        body.satellites.forEach(satellite => this.flattenPlanetPack(satellite, indent + 2, bodies));

        return bodies;
    }

    renderOption(indent, body) {
        let indentSpaces = '';
        for (let i = 0; i < indent; i++) {
            indentSpaces = indentSpaces.concat('\u00A0');
        }
        return <option key={body} value={body}>{indentSpaces}{body}</option>
    }
};